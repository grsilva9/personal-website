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