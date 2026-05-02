// Shared content for Cedric Lim's personal website
window.SITE = {
  name: "Cedric Lim",
  role: "PhD Candidate, Materials Science & Engineering",
  affiliation: "Stanford University",
  location: "Stanford, CA",
  shortBio: "I work at the intersection of materials science, tomographic imaging, and deep learning — using AI to reconstruct 3D structure from limited measurements.",
  longBio: [
    "I'm a PhD candidate in Materials Science & Engineering at Stanford, advised in the area of tomography and machine learning. My research focuses on using deep learning to reconstruct three-dimensional atomic and microstructural information from sparse, noisy, or incomplete measurements.",
    "Before Stanford, I worked on electron microscopy and computational imaging. I'm interested in problems where physics-informed priors meet modern neural networks — and in building tools that make advanced characterization accessible to materials scientists.",
    "Outside the lab, I write about research workflows, run long distances, and tinker with side projects."
  ],
  now: [
    { label: "Research", text: "Finishing a paper on physics-informed neural networks for atom probe tomography reconstruction." },
    { label: "Reading", text: "Deep Learning for the Sciences (Davies et al.)" },
    { label: "Building", text: "An open-source pipeline for sparse-view electron tomography." },
    { label: "Location", text: "Stanford, CA — back from a research stay in Zürich." }
  ],
  projects: [
    {
      id: "ptn",
      year: "2025",
      name: "Physics-informed Tomography Networks",
      blurb: "A neural reconstruction framework that bakes mass-conservation and geometric priors into the loss for sparse-view electron tomography.",
      tag: "Research",
      stack: ["PyTorch", "JAX", "CUDA"],
      preview: "ptn"
    },
    {
      id: "atomvis",
      year: "2024",
      name: "AtomVis",
      blurb: "A WebGL viewer for atom-probe datasets — handles 100M+ ions interactively in the browser with progressive LOD.",
      tag: "Tool",
      stack: ["WebGL", "React", "Rust/WASM"],
      preview: "atomvis"
    },
    {
      id: "diffrec",
      year: "2024",
      name: "DiffRec",
      blurb: "Diffusion priors for ill-posed inverse problems in 4D-STEM. Recovers strain fields from 5× fewer diffraction patterns.",
      tag: "Research",
      stack: ["PyTorch", "Diffusers"],
      preview: "diffrec"
    },
    {
      id: "labnotes",
      year: "2023",
      name: "Labnotes",
      blurb: "A tiny CLI that turns markdown lab notebooks into a searchable static site. Built in a weekend; quietly used by my whole group.",
      tag: "Side project",
      stack: ["Go", "Lit"],
      preview: "labnotes"
    }
  ],
  publications: [
    {
      year: "2025",
      title: "Physics-informed neural networks for sparse-view atom probe tomography reconstruction",
      venue: "Nature Computational Science",
      authors: "C. Lim, et al.",
      status: "Under review"
    },
    {
      year: "2024",
      title: "Diffusion priors for inverse problems in 4D scanning transmission electron microscopy",
      venue: "npj Computational Materials",
      authors: "C. Lim, M. Chen, S. Park",
      status: "Published"
    },
    {
      year: "2024",
      title: "AtomVis: interactive visualization of large-scale atom probe data on the web",
      venue: "Microscopy & Microanalysis",
      authors: "C. Lim, et al.",
      status: "Published"
    },
    {
      year: "2023",
      title: "Self-supervised denoising for low-dose electron tomography",
      venue: "Ultramicroscopy",
      authors: "C. Lim, J. Wang",
      status: "Published"
    }
  ],
  posts: [
    {
      id: "phd-dataflow",
      date: "Mar 2026",
      title: "How I structure a PhD-scale data pipeline",
      excerpt: "Three years in, I've finally settled on a setup that survives both reviewer #2 and a 2 a.m. cluster crash.",
      readTime: "8 min"
    },
    {
      id: "physics-priors",
      date: "Jan 2026",
      title: "Physics priors are a free lunch (when you season them right)",
      excerpt: "Why baking conservation laws into the loss almost always beats post-hoc constraints — and the one case where it doesn't.",
      readTime: "12 min"
    }
  ],
  cv: {
    education: [
      { years: "2022 — present", what: "Ph.D., Materials Science & Engineering", where: "Stanford University" },
      { years: "2018 — 2022", what: "B.S., Materials Science (with honors)", where: "UC Berkeley" }
    ],
    experience: [
      { years: "Summer 2025", what: "Research intern, Tomography group", where: "ETH Zürich" },
      { years: "2021 — 2022", what: "Undergraduate researcher", where: "LBNL Molecular Foundry" },
      { years: "Summer 2020", what: "ML engineer intern", where: "Materials startup (stealth)" }
    ],
    awards: [
      { year: "2024", what: "NSF Graduate Research Fellowship" },
      { year: "2023", what: "Stanford Graduate Fellowship" },
      { year: "2022", what: "Berkeley Materials Science Departmental Citation" }
    ]
  },
  links: {
    email: "cedric@stanford.edu",
    github: "cedriclim1",
    scholar: "cedriclim",
    linkedin: "cedriclim",
    twitter: "cedriclim"
  }
};
