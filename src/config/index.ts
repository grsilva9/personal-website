import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Guilherme Silva — Probabilistic AI & Applied Machine Learning",
  author: "Guilherme Silva",
  description:
    "Machine Learning researcher focused on probabilistic modeling, applied machine learning, statistics and scientific software engineering.",
  lang: "en",
  siteLogo: "",
  navLinks: [
    { text: "About", href: "#about" },
    { text: "Projects", href: "#projects" },
  ],
  socialLinks: [
    { text: "GitHub", href: "https://github.com/grsilva9" },
    { text: "LinkedIn", href: "https://linkedin.com/in/guilherme-ribeiro-da-silva-mldsor" },
  ],
  socialImage: "",
  canonicalURL: "https://your-vercel-site.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Guilherme Silva",
    specialty: "Probabilistic AI · Applied Machine Learning · Statistics",
    summary: "",
    email: "your.email@domain.com",
  },

  experience: [],

  projects: [
     {
      name: "Agentic Science — DDPM Pipeline Orchestrator",
      summary:
        "An agentic ML system that orchestrates a full generative-modeling pipeline from a natural-language prompt. A PydanticAI agent dispatches typed tool calls across seven stages — data loading, DDPM training (ShuffleNet-v2 UNet), reverse-diffusion sampling, patch-based MMD permutation testing, narrative report writing, and PDF assembly — over MedMNIST datasets. Pluggable LLM backend (Llama, Groq, Gemini, Anthropic).",
      linkPreview: "https://colab.research.google.com/drive/1z301NilcbovtcbwzLjrUE1FQUwK3aoss?usp=sharing",
      linkSource: "https://github.com/grsilva9/agentic-science",
      image: "/agentic-science.png",
    },
    {
      name: "Atelier — Research Tracker",
      summary:
        "A local-first tool for managing parallel research manuscripts. Tracks tasks across stages and ranks them via a Multi-Criteria Decision Making utility model.",
      linkPreview: "https://research-atelier.vercel.app/",
      linkSource: "https://github.com/grsilva9/research-atelier",
      image: "/atelier.png",
    },
    {
    name: "World Trade Shock Simulator",
    summary:
      "A macroeconomic simulation that models global trade shock propagation across 227 countries. Leverages over 500+ socio-economic indicators from the World Bank and OECD.",
    linkPreview: "https://world-trade-simulator.vercel.app/",
    linkSource: "https://github.com/grsilva9/world-trade-simulator",
    image: "/world-map.png",
    },
    {
      name: "Hawkes LOB Simulator",
      summary:
        "A research-grade Limit Order Book simulator driven by multivariate Hawkes processes. Includes C++ core engine, Python bindings, backtesting framework, and interactive web interface.",
      linkPreview: "https://hawkes-lob-simulator.vercel.app/",
      linkSource: "https://github.com/grsilva9/hawkes-lob-simulator",
      image: "/lob-simulator.png",
    },
  ],

  about: {
  description: `I'm a Machine Learning researcher and Data Scientist with a strong interest in probabilistic modeling, generative methods, and statistical approaches to complex real-world systems.

I’ve worked across diverse domains — from wind energy and central banking to particle accelerator research — building models and tools that balance rigor with practical impact.

I care deeply about uncertainty, robustness, and building systems that actually work beyond notebooks.

Outside of research, I enjoy cooking, mathematics (at the moment algebraic geometry!), and listening to podcasts about science, ancient history, and big ideas.

Feel free to reach out on <a href="https://linkedin.com/in/guilherme-ribeiro-da-silva-mldsor" target="_blank">LinkedIn</a> if you'd like to connect!`,
    image: "",
  },
  
};