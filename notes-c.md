---
title: Notes on C
date: April 2026
tag: Programming
read: living document
---

A working set of notes on C — the bits I keep forgetting and have to look up.
This page is a single markdown file (`notes-c.md`) rendered via the docs view.
Drop another `.md` into `site/` and link to it as `notes.html?doc=your-file.md`.

## Basics of C

C is a small language with sharp edges. The whole standard fits in a pocketbook,
but the things you can do wrong with it would fill several volumes.

### Pointers

A pointer is a variable that stores an address. Declaring one:

```c
int x = 42;
int *p = &x;     // p holds the address of x
printf("%d\n", *p);  // dereference: prints 42
```

Three operations matter:

| Operation | Meaning                                         |
|-----------|-------------------------------------------------|
| `&x`      | take the address of `x`                         |
| `*p`      | dereference `p` (read the value it points to)   |
| `p++`     | move to the next element of the same type       |

The pointer's *type* determines how far `p++` advances — for `int *p`, it
advances by `sizeof(int)` bytes, not 1.

> Rule of thumb: every `malloc` should have a matching `free`, and every pointer
> should have a clear *owner*. If you can't say who frees it, you have a bug.

### Strings

A C "string" is just a `char *` to a sequence of bytes terminated by `\0`.
This means a lot of things are *not* strings until they are:

```c
char buf[16];
strncpy(buf, "hello", sizeof(buf) - 1);
buf[sizeof(buf) - 1] = '\0';   // be paranoid; strncpy doesn't always terminate
```

### Memory layout

A typical process has:

- **text** — the program code (read-only)
- **data / bss** — globals
- **heap** — `malloc`'d, grows up
- **stack** — local variables, grows down

Knowing this layout makes segfaults much less mysterious.

## Iterators

C doesn't have iterators in the C++/Rust sense, but the *pattern* is everywhere:
a pointer that walks through a region.

### Walking arrays

```c
int xs[] = {1, 2, 3, 4, 5};
size_t n = sizeof(xs) / sizeof(xs[0]);
for (int *p = xs; p < xs + n; p++) {
    printf("%d\n", *p);
}
```

### Walking linked lists

```c
typedef struct Node {
    int value;
    struct Node *next;
} Node;

for (Node *n = head; n != NULL; n = n->next) {
    printf("%d\n", n->value);
}
```

The pattern is the same: a cursor, a termination condition, and an advance
step. C just makes you write it out by hand each time.

## A little math

The complexity of `qsort` on average is

$$
T(n) = O(n \log n).
$$

In the worst case (already-sorted input with a naive pivot), it degrades to
$T(n) = O(n^2)$. The standard library implementation uses introsort to avoid
this.

The relationship between the heap and stack pointers, in pseudocode, is just

$$
\text{free space} = \text{sp} - \text{brk}.
$$

## Common gotchas

### Undefined behavior

The standard says a *lot* of things are undefined. The compiler is allowed to
assume undefined behavior never happens, which means it can delete code that
"obviously" runs.

- Signed integer overflow
- Reading uninitialized memory
- Dereferencing `NULL`
- Modifying a string literal

### `sizeof` on arrays vs. pointers

```c
int a[10];
int *p = a;
sizeof(a);   // 40 (assuming 4-byte int)
sizeof(p);   // 8 (on 64-bit) — the size of a pointer
```

Inside a function, an array parameter decays to a pointer. You cannot get the
length back from inside the function — pass it explicitly.

## Further reading

- *The C Programming Language* — K&R, still the best
- *Modern C* by Jens Gustedt — free PDF online
- The C99 / C11 / C23 standards (cppreference.com is a friendlier mirror)

---

*Last updated April 2026. PRs welcome — this file lives at `site/notes-c.md` in
the repo.*
