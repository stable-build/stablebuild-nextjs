export const navigation = [
  { label: "Proof", href: "#proof" },
  { label: "Systems", href: "#systems" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Security", href: "#security" },
];

export const heroStats = [
  {
    value: "20+",
    label: "Protocols, products, and client systems shipped or audited",
  },
  {
    value: "4",
    label: "India, Singapore, UK, and US production exposure",
  },
  {
    value: "3",
    label: "AI systems, protocol engineering, and product delivery in one team",
  },
  {
    value: "1",
    label: "Team that scopes, builds, secures, and ships end to end",
  },
];

export const trustSignals = [
  "10K+ tweets/day pipeline live at airaa.xyz",
  "EIP-7540 async vault live on Arbitrum mainnet",
  "Coinbase CDP Base widget shipped with E2E coverage",
  "CI/CD template adopted by Liquity and Consensys",
  "GMX x Allora trading agent validated on a Tenderly fork",
  "45+ High/Medium findings across 20+ protocol engagements",
];

export const proofCards = [
  {
    eyebrow: "AI systems",
    title: "Production multi-agent systems that do more than prompt.",
    body: "From airdrop intelligence pipelines processing 10K+ tweets a day to RAG systems that are architecturally forbidden from hallucinating.",
    points: ["LangChain", "LangGraph", "PGVector", "FastAPI"],
  },
  {
    eyebrow: "Protocol engineering",
    title: "DeFi and wallet infrastructure built for real execution paths.",
    body: "Vaults, widgets, browser extensions, calldata generation, and cross-protocol integrations shaped around live constraints instead of idealized demos.",
    points: ["EIP-7540", "GMX V2", "Coinbase CDP", "MetaMask Delegation"],
  },
  {
    eyebrow: "Security-first",
    title: "Auditor-grade review thinking baked into delivery.",
    body: "45 high and medium findings across private and public engagements means we think like attackers before your users ever meet the system.",
    points: ["Nethermind", "Code4rena", "Cantina", "5 ecosystems"],
  },
  {
    eyebrow: "Full-stack ownership",
    title: "One integrated execution surface across product, protocol, and AI.",
    body: "Frontend, backend, infra, contracts, AI pipelines, dashboards, extensions, mobile, observability, and CI are treated as one system instead of separate vendor lanes.",
    points: ["Next.js", "React Native", "NestJS", "Docker"],
  },
];

export const tickerItems = [
  "Next.js",
  "React",
  "TypeScript",
  "Solidity",
  "LangGraph",
  "LangChain",
  "FastAPI",
  "NestJS",
  "React Native",
  "PostgreSQL",
  "pgvector",
  "Foundry",
  "Tenderly",
  "Docker",
  "Kubernetes",
  "Prometheus",
  "Grafana",
  "Viem",
];

export const systems = [
  {
    id: "airaa",
    badge: "Live",
    title: "Airdrop intelligence pipeline",
    summary:
      "A self-improving multi-agent pipeline for airaa.xyz that turns noisy social data into scored market intelligence.",
    impact:
      "Processes 10K+ tweets daily, applies semantic search with PGVector, and feeds investment-facing dashboards without manual curation.",
    stack: [
      "Python",
      "LangChain",
      "RabbitMQ",
      "NestJS",
      "PostgreSQL",
      "Prometheus",
    ],
    link: "https://airaa.xyz",
    linkLabel: "View live product",
  },
  {
    id: "vault",
    badge: "Live",
    title: "Protocol-agnostic async vault",
    summary:
      "EIP-7540 vault infrastructure designed so future integrations can evolve through delegation caveats instead of contract rewrites.",
    impact:
      "Reduced future audit surface and gave the client a cleaner path to human and AI-operated execution on Arbitrum mainnet.",
    stack: ["Solidity", "EIP-7540", "Arbitrum", "MetaMask Delegation Toolkit"],
    link: "https://arbiscan.io/address/0x9E832AB95765d730FCFA1e646aaae875f2532D25",
    linkLabel: "Inspect mainnet contract",
  },
  {
    id: "sentinel",
    badge: "Security tooling",
    title: "SentinelAI auditor",
    summary:
      "Local-first audit tooling built by an actual auditor, trained on hundreds of audit reports and designed to narrow attack surface before LLM reasoning kicks in.",
    impact:
      "Matched 6 of 8 paid audit findings and surfaced 8 additional valid vulnerabilities in benchmark testing, fully offline.",
    stack: ["TypeScript", "Ollama", "HNSWlib", "RAG", "LangChain"],
  },
  {
    id: "coinbase",
    badge: "Client delivery",
    title: "Coinbase CDP swap and onramp widget",
    summary:
      "A production-ready Base widget for swaps, fiat onramp, precise token approvals, and on-chain confirmation with full E2E coverage.",
    impact:
      "Shipped as client-facing infrastructure, not a concept piece, with modular architecture ready to be dropped into a live product.",
    stack: [
      "Next.js 15",
      "TypeScript",
      "Coinbase CDP SDK",
      "Tailwind",
      "Playwright",
    ],
    link: "https://github.com/suhel-kap/coinbase-swap-widget",
    linkLabel: "View code",
  },
  {
    id: "cicd",
    badge: "Adopted by teams",
    title: "BuildBear CI/CD template",
    summary:
      "Reference GitHub Actions infrastructure for Web3 repositories using fork-based and fuzz testing against live contract state.",
    impact:
      "Adopted into production workflows by Liquity and Consensys, turning internal solutions engineering into repeatable ecosystem infrastructure.",
    stack: ["GitHub Actions", "Foundry", "BuildBear", "Uniswap V4"],
    link: "https://github.com/JustUzair/bb-ci-cd-v4-core",
    linkLabel: "View repository",
  },
  {
    id: "gmx",
    badge: "NDA client",
    title: "GMX x Allora trading agent",
    summary:
      "A custom trading agent and calldata generation workflow built to bypass unreliable internal tooling and execute on real protocol semantics.",
    impact:
      "Validated on a Tenderly mainnet fork with zero reverts and delivered in a two-week window, including framework ramp-up time.",
    stack: ["TypeScript", "LangGraph", "GMX V2", "Allora", "Tenderly"],
  },
];

export const capabilities = [
  {
    id: "build",
    label: "Build and ship product surfaces",
    title: "Full-stack delivery without orchestration drag.",
    body: "Marketing sites, product dashboards, web apps, mobile apps, browser extensions, APIs, infra, and observability all live inside one execution loop.",
    bullets: [
      "React/Next, React Native, Node.js, FastAPI, Rust, Golang, Kubernetes, PostgreSQL, Docker, Plasmo, Grafana, Prometheus",
      "Design, implementation, CI/CD, QA, deployment",
      "Built for founders who need execution velocity without managing multiple vendors",
    ],
    metric: "One execution loop",
    accent: "from-amber-200 via-orange-100 to-white",
  },
  {
    id: "ai",
    label: "Engineer AI systems properly",
    title: "Constraint-aware AI, not demo-ware.",
    body: "We build systems where data flow, observability, retrieval, and failure modes are designed upfront, so the model sits inside a real product system instead of pretending to be one.",
    bullets: [
      "Multi-agent orchestration, RAG, semantic search, offline-first inference",
      "Architectural anti-hallucination constraints where they matter",
      "Pipelines that improve from signals instead of manual babysitting",
    ],
    metric: "10K+ daily signals",
    accent: "from-zinc-900 via-zinc-800 to-orange-700",
  },
  {
    id: "protocol",
    label: "Handle protocol-grade complexity",
    title: "From wallet UX to protocol logic to execution tooling.",
    body: "The same team that builds polished frontend interfaces can also develop smart contracts, reason about calldata generation, delegation models, and protocol integration surfaces.",
    bullets: [
      "Vaults, DeFi Widgets, Extensions, Smart Contracts",
      "Cross-chain and multi-ecosystem coverage",
      "Execution paths validated against real & forked environments",
    ],
    metric: "Live on Arbitrum",
    accent: "from-orange-200 via-amber-100 to-stone-50",
  },
  {
    id: "security",
    label: "Bake security into delivery",
    title: "Auditor-grade review thinking before the external audit.",
    body: "Security is part of product architecture, code review, and delivery sequencing. That means fewer avoidable rewrites, cleaner audits, and safer first releases.",
    bullets: [
      "45+ H/M findings across six audit firms and five ecosystems",
      "Threat modeling and attack-surface awareness at implementation time",
      "Lower downstream audit friction because the fundamentals are handled early",
    ],
    metric: "45+ H/M findings",
    accent: "from-emerald-100 via-stone-50 to-white",
  },
];

export const founderBlurbs = [
  {
    name: "Suhel Kapadia",
    role: "Full-stack and protocol engineer",
    summary:
      "Ships across frontend, backend, mobile, browser extensions, Web3 integrations, and AI pipelines. Known for taking products from 0 to live with minimal ceremony.",
    focus: [
      "Production AI",
      "DeFi delivery",
      "Mobile + extensions",
      "Observability",
    ],
    href: "https://linkedin.com/in/suhel-kapadia",
  },
  {
    name: "Uzair Saiyed",
    role: "Security-first product and protocol engineer",
    summary:
      "Combines full-stack product shipping with serious smart contract security depth, including Nethermind audit experience and 45+ H/M findings across multiple ecosystems.",
    focus: [
      "Audit methodology",
      "Arbitrum vaults",
      "AI security tooling",
      "Protocol architecture",
    ],
    href: "https://linkedin.com/in/0xJustUzair",
  },
];

export const collectiveStrengths = [
  {
    title: "Product speed with security judgment",
    body: "The same planning loop considers UX, data flow, protocol risk, observability, and release sequencing before implementation starts.",
    proof:
      "Security thinking is present during architecture, not saved for a late audit pass.",
  },
  {
    title: "Breadth without vendor sprawl",
    body: "StableBuild can ship the frontend, backend, AI pipeline, smart contract path, and deployment surface without splitting ownership across disconnected teams.",
    proof:
      "Fewer translation layers means faster decisions and cleaner accountability.",
  },
  {
    title: "Real systems, not polished demos",
    body: "The work shown here includes production AI pipelines, mainnet vault infrastructure, adopted CI templates, and audit tooling benchmarked against paid findings.",
    proof:
      "Clients can judge shipped behavior instead of only evaluating process claims.",
  },
];

export const recognitionItems = [
  "Nethermind",
  "LI.FI",
  "Liquity",
  "Consensys",
  "Coinbase CDP",
  "GMX",
  "Allora",
  "BuildBear",
  "Arbitrum",
  "Code4rena",
  "Cantina",
  "Tenderly",
];

export const faqs = [
  {
    question: "What kind of projects is StableBuild best suited for?",
    answer:
      "We are strongest when the product needs more than a polished frontend. If a project mixes product UX, backend systems, AI behavior, protocol logic, or security-sensitive architecture, that is our best-fit zone.",
  },
  {
    question: "Do you only work on Web3?",
    answer:
      "No. Web3 is one of our deep specializations, but the studio is deliberately broader: full-stack product delivery, AI systems, internal tooling, dashboards, data-heavy apps, and security-conscious infrastructure all fit.",
  },
  {
    question: "How do you approach security on client work?",
    answer:
      "Security is handled during architecture and implementation, not just at the end. We review attack surfaces early, keep privileges tight, design for auditability, and build with the same instincts that come from real smart contract audit work.",
  },
  {
    question: "Can you work on NDA-sensitive protocol or AI projects?",
    answer:
      "Yes. We can speak about the shape of the work, the constraints, and the kinds of systems shipped without disclosing protected client details. That is already how some of the work featured here is framed.",
  },
  {
    question: "Who will actually do the work?",
    answer:
      "The same senior team you talk to owns the work. Strategy, product judgment, engineering, and security review stay connected from scope through release.",
  },
];
