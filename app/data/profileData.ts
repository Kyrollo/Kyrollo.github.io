export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  specialization: string;
  description: string;
  highlights: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  badge?: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  techStack: string[];
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

export interface ProfileData {
  name: string;
  avatar: string;
  title: string;
  tagline: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  relocation: string;
  github: string;
  linkedin: string;
  cvPath: string;
  hardware: string;
  stats: {
    projectsCount: number;
    flagshipCount: number;
    testsPassing: string;
    experienceYears: string;
  };
  education: EducationItem[];
  certifications: CertificationItem[];
  experience: ExperienceItem[];
  skillCategories: SkillCategory[];
}

export const PROFILE: ProfileData = {
  name: 'Kerollos Mansour',
  avatar: '/kero.jpeg',
  title: 'Senior Software AI Engineer | LLMOps & Agent Architect',
  tagline: 'Architecting Autonomous AI Platforms & Production LLM Infrastructure',
  bio: 'Software AI Engineer with a degree in Computer Science and Artificial Intelligence from Cairo University. Proven track record of designing, building, and shipping production-grade software systems end-to-end — from high-throughput backend architecture and microservices to multi-agent reasoning graphs, hybrid RAG monoliths, and enterprise LLM firewalls. Zero mock answers, 100% pytest pass rates, and verified real-world benchmarks.',
  email: 'kirolsmansour@gmail.com',
  phone: '+20 128 435 5306',
  location: 'Cairo, Egypt',
  relocation: 'Available for Remote Worldwide & Global Relocation',
  github: 'https://github.com/Kyrollo',
  linkedin: 'https://www.linkedin.com/in/kerollos-mansour-bb22b321a/',
  cvPath: '/cv/Kerollos_Mansour_CV.pdf',
  hardware: 'NVIDIA RTX A5000 GPU (16GB GDDR6 VRAM • CUDA 13.4)',
  stats: {
    projectsCount: 13,
    flagshipCount: 5,
    testsPassing: '100%',
    experienceYears: '2+ Years',
  },
  education: [
    {
      degree: 'Bachelor of Computer Science and Artificial Intelligence',
      institution: 'Cairo University',
      period: 'Sep 2021 – Jul 2025',
      specialization: 'Artificial Intelligence',
      description: 'Specialized in Artificial Intelligence, machine learning algorithms, deep neural network architectures, and high-performance computing.',
      highlights: [
        'Built solid mathematical and algorithmic foundations in data structures, algorithms, and OOP.',
        'Explored machine learning, deep learning, computer vision, and natural language processing disciplines.',
        'Developed production-oriented AI systems using PyTorch, TensorFlow, Keras, Pandas, and NumPy.',
        'Applied distributed software engineering patterns, CI/CD automation, and agile methodologies.',
      ],
    },
  ],
  certifications: [
    {
      title: 'Supervised Machine Learning: Regression and Classification',
      issuer: 'DeepLearning.AI & Stanford Online / Coursera',
      date: 'Jan 2026',
      skills: ['Linear Regression', 'Logistic Regression', 'Gradient Descent', 'Model Evaluation', 'Overfitting Prevention'],
    },
    {
      title: 'Advanced Learning Algorithms',
      issuer: 'DeepLearning.AI & Stanford Online / Coursera',
      date: 'Jan 2026',
      skills: ['Neural Networks', 'Decision Trees', 'Random Forests', 'XGBoost', 'Multiclass Classification'],
    },
    {
      title: 'Unsupervised Learning, Recommenders, Reinforcement Learning',
      issuer: 'DeepLearning.AI & Stanford Online / Coursera',
      date: 'Feb 2026',
      skills: ['K-Means Clustering', 'PCA', 'Anomaly Detection', 'Collaborative Filtering', 'Deep Q-Learning'],
    },
    {
      title: 'Huawei HCIA-AI Learning Course',
      issuer: 'Huawei',
      date: 'Jul 2024',
      skills: ['AI Overview', 'Python Programming', 'TensorFlow Basics', 'Deep Learning Frameworks', 'AI Deployment'],
    },
  ],
  experience: [
    {
      role: 'Software AI Engineer',
      company: 'IBEX Solutions',
      period: 'Sep 2024 – Present',
      location: 'Cairo, Egypt',
      description: 'Architecting and deploying IBEXA, an enterprise AI-powered customer service platform integrating large language models into robust backend services end-to-end.',
      achievements: [
        'Designed, built, and shipped IBEXA end-to-end (requirements, architecture, development, testing, deployment) into high-scale production.',
        'Engineered resilient REST API endpoints and third-party integrations, reducing integration defects by 25% and elevating release stability.',
        'Optimized database queries and data models behind retrieval and response pipelines, cutting average API response times by 30% and boosting peak throughput by 20%.',
        'Automated comprehensive unit and integration test suites, raising coverage to 70% and slashing production incidents by 35%.',
        'Delivered 15+ high-priority features and fixes per quarter with a 90% on-time sprint completion rate in an Agile cross-functional team.',
      ],
      techStack: ['Python', 'FastAPI', 'LangChain', 'Docker', 'PostgreSQL', 'Redis', 'Prometheus', 'Grafana'],
    },
    {
      role: 'Intern Software Engineer',
      company: 'Fixed Solutions',
      period: 'Jun 2026 – Jul 2026',
      location: 'Cairo, Egypt',
      description: 'Engineered a multi-user, multi-domain hybrid enterprise RAG system combining dense vector search, lexical BM25 search, and knowledge graph traversal.',
      achievements: [
        'Architected a unified FastAPI monolith consolidating 5 disparate microservices (domain, ingestion, retrieval, generation, evaluation), cutting network serialization overhead.',
        'Constructed a 3-way hybrid retrieval engine fusing Qdrant dense vector search, PostgreSQL BM25, and Apache AGE graph traversal with Reciprocal Rank Fusion (RRF) and BGE Cross-Encoder reranking.',
        'Built an asynchronous document ingestion pipeline using Celery and Redis with OCR (PaddleOCR, Surya fallback) and semantic chunking for PDF, DOCX, and CSV files.',
        'Secured endpoints with Keycloak JWT authentication, role-based access control (RBAC), and TLS-terminated Caddy reverse proxies.',
        'Instrumented full observability with Prometheus and Grafana dashboards and conducted rigorous Locust load testing to eliminate concurrency bottlenecks.',
      ],
      techStack: ['FastAPI', 'Qdrant', 'PostgreSQL', 'Apache AGE', 'Celery', 'Redis', 'Keycloak', 'PaddleOCR', 'Caddy'],
    },
    {
      role: 'Agentic AI Trainee',
      company: 'National Telecommunication Institute (NTI)',
      period: 'Jan 2025 – Apr 2026',
      location: 'Cairo, Egypt',
      description: 'Completed an intensive 288-hour advanced technical program engineering and deploying production-grade agentic AI systems powered by modern LLMs.',
      achievements: [
        'Built autonomous and collaborative multi-agent architectures using LangChain and LangGraph to execute multi-step business logic.',
        'Implemented advanced Self-RAG systems with query rewriting, dynamic routing, and hallucination evaluation gates.',
        'Developed grounded conversational systems with persistent state machines and external tool integration.',
      ],
      techStack: ['LangGraph', 'LangChain', 'Python', 'Vector DBs', 'Autonomous Agents', 'RAG'],
    },
  ],
  skillCategories: [
    {
      category: 'AI & Agentic Systems',
      icon: 'Bot',
      skills: ['LangGraph Multi-Agent', 'LangChain', 'Hybrid RAG (Vector + BM25 + Graph)', 'Self-RAG', 'Ragas & LLM-as-a-Judge', 'Ollama Local Inference', 'Groq Llama 3.3 / Qwen', 'OpenAI Whisper', 'QLoRA PEFT Fine-Tuning'],
    },
    {
      category: 'Backend & Architecture',
      icon: 'Server',
      skills: ['FastAPI', 'ASP.NET Core 8 Web API', 'C#', 'Python 3.12', 'Clean Architecture & CQRS', 'Microservices & Monoliths', 'Celery Asynchronous Tasks', 'Redis Caching & Queues', 'WebSockets & SSE'],
    },
    {
      category: 'Databases & Vector Engines',
      icon: 'Database',
      skills: ['PostgreSQL 16', 'Qdrant Vector DB', 'Apache AGE (Graph DB)', 'SQL Server 2025', 'MySQL', 'Redis In-Memory'],
    },
    {
      category: 'MLOps, DevOps & Security',
      icon: 'Shield',
      skills: ['Docker & Docker Compose', 'Keycloak (JWT / RBAC)', 'Caddy TLS Reverse Proxy', 'OpenTelemetry Tracing', 'Prometheus & Grafana', 'Locust Load Testing', 'Pytest Suites', 'Git & GitHub Actions'],
    },
    {
      category: 'Frontend Engineering',
      icon: 'Layout',
      skills: ['React 19', 'Next.js 14 App Router', 'TypeScript', 'Tailwind CSS', 'Cytoscape.js Graph Viz', 'HTML5 Web Audio / Video API'],
    },
  ],
};
