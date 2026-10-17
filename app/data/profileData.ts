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
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  projectCreated?: {
    name: string;
    path: string;
    repo: string;
  };
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
  monogram: string;
  avatar: string;
  cutoutAvatar: string;
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
  stats: {
    projectsCount: number;
    experienceYears: string;
  };
  methodology: {
    title: string;
    description: string;
    pillars: { title: string; description: string; tag: string }[];
  };
  education: EducationItem[];
  certifications: CertificationItem[];
  experience: ExperienceItem[];
  skillCategories: SkillCategory[];
}

export const PROFILE: ProfileData = {
  name: 'Kerollos Mansour',
  monogram: 'KM.',
  avatar: '/kero.jpeg',
  cutoutAvatar: '/kero_cutout.png',
  title: 'ML & AI Engineer',
  tagline: 'Building production-ready machine learning and LLM systems',
  bio: 'AI Engineer building production-ready machine learning and LLM systems, with hands-on experience in model training and evaluation, dataset preprocessing, RAG pipelines with vector databases, secure API integrations, and scalable FastAPI backends. I focus on improving model performance and turning AI workflows into reliable deployed services.',
  email: 'kirolsmansour@gmail.com',
  phone: '+20 128 435 5306',
  location: 'Cairo, Egypt',
  relocation: 'Available for Remote Worldwide & Global Relocation',
  github: 'https://github.com/Kyrollo',
  linkedin: 'https://www.linkedin.com/in/kerollos-mansour-bb22b321a/',
  cvPath: '/cv/Kerollos_Mansour_CV.pdf',
  stats: {
    projectsCount: 13,
    experienceYears: '2+ Years',
  },
  methodology: {
    title: 'Engineering Methodology & Approach',
    description: 'How I design, build, and deploy production machine learning and AI software systems from end-to-end.',
    pillars: [
      {
        title: 'End-to-End System Ownership',
        description: 'Owning the full product lifecycle: requirements gathering, model selection, prompt engineering, backend architecture, testing, containerization, and production deployment.',
        tag: 'Architecture to Prod',
      },
      {
        title: 'Hybrid & Graph-Augmented RAG',
        description: 'Going beyond basic vector search by fusing dense embeddings with sparse lexical indexing (BM25) and knowledge graph traversal (Apache AGE) with reciprocal rank fusion and cross-encoder reranking.',
        tag: 'Grounded Retrieval',
      },
      {
        title: 'Autonomous Multi-Agent Design',
        description: 'Architecting coordinated teams of specialized AI agents using LangGraph with state machines, tool calling, validation loops, and human-in-the-loop controls for complex enterprise workflows.',
        tag: 'Agentic Workflows',
      },
      {
        title: 'Cloud & Modern MLOps Excellence',
        description: 'Deploying scalable services across GCP (Vertex AI, Cloud Run) and local GPU clusters with Docker, Redis caching, async Celery workers, and automated CI/CD workflows.',
        tag: 'GCP & Containerization',
      },
    ],
  },
  education: [
    {
      degree: 'Bachelor of Computer Science and Artificial Intelligence',
      institution: 'Cairo University',
      period: 'Sep 2021 – Jul 2025',
      specialization: 'Artificial Intelligence',
      description: 'Focused on Artificial Intelligence, machine learning algorithms, deep neural network architectures, and high-performance software engineering.',
      highlights: [
        'Strong algorithmic and mathematical foundations in data structures, algorithms, and object-oriented design.',
        'Explored machine learning, deep learning, computer vision, and natural language processing disciplines.',
        'Hands-on experience with PyTorch, TensorFlow, Keras, scikit-learn, Pandas, and NumPy.',
        'Applied modern software engineering practices, CI/CD, and agile development methodologies.',
      ],
    },
  ],
  certifications: [
    {
      title: 'Supervised Machine Learning: Regression and Classification',
      issuer: 'DeepLearning.AI & Stanford Online / Coursera',
      date: 'Jan 2026',
      skills: ['Linear Regression', 'Logistic Regression', 'Gradient Descent', 'Cost Functions', 'Regularization'],
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
      role: 'AI Engineer',
      company: 'Fixed Solutions',
      period: 'Jun 2026 – Jul 2026',
      location: 'Cairo, Egypt',
      description: 'Designed and engineered FixedRAG, an enterprise multi-user hybrid RAG platform combining dense vector search, lexical BM25 search, and knowledge graph traversal.',
      projectCreated: {
        name: 'FixedRAG (Enterprise Hybrid RAG Monolith)',
        path: 'projects/chatbot-fixed-solutions',
        repo: 'https://github.com/Kyrollo/Chatbot-Fixed-Solutions-Rag-System',
      },
      achievements: [
        'Created FixedRAG: engineered a multi-user, multi-domain RAG system combining dense vector search (Qdrant), BM25 sparse search (PostgreSQL), and graph traversal (Apache AGE), fused via Reciprocal Rank Fusion (RRF) and BGE Cross-Encoder reranking.',
        'Architected a unified FastAPI monolith consolidating 5 backend services into a single deployable process, eliminating inter-service network serialization latency.',
        'Built an asynchronous document ingestion pipeline using Celery and Redis with OCR (PaddleOCR, Surya) and semantic chunking for PDF, DOCX, and CSV files.',
        'Secured the platform end-to-end with Keycloak JWT authentication, role-based access control (RBAC), and TLS-terminated Caddy reverse proxies across all service endpoints.',
        'Extracted entities and relations (GLiNER + LLMs) to construct a knowledge graph layer (Apache AGE), enabling complex relational queries beyond standard vector search.',
      ],
      techStack: ['FastAPI Monolith', 'Qdrant Vector DB', 'PostgreSQL', 'Apache AGE (Graph)', 'Celery', 'Redis', 'Keycloak', 'PaddleOCR', 'Caddy'],
    },
    {
      role: 'Agentic AI Engineer Trainee',
      company: 'National Telecommunication Institute (NTI)',
      period: 'Jan 2025 – Apr 2026',
      location: 'Cairo, Egypt',
      description: 'Completed an intensive 288-hour technical program on production-grade agentic AI systems, where I engineered and shipped TaskTune AI.',
      projectCreated: {
        name: 'TaskTune AI (Enterprise Work Orchestration Platform)',
        path: 'projects/tasktune ai',
        repo: 'https://github.com/Kyrollo/tasktune-ai',
      },
      achievements: [
        'Created TaskTune AI: an enterprise work orchestration platform powered by an ASP.NET Core 8 Web API, SQL Server 2025, and 5 Python AI agents orchestrated with LangGraph (Chatbot, Guidance, Tracking, Report, Email).',
        'Built autonomous and collaborative multi-agent architectures using LangChain and LangGraph to execute complex business workflows with state machines.',
        'Implemented advanced Self-RAG architectures with dynamic query routing, hallucination verification gates, and grounded citation anchors.',
      ],
      techStack: ['LangGraph Multi-Agent', 'ASP.NET Core 8 Web API', 'Python 3.12', 'SQL Server 2025', 'FastAPI', 'Groq Llama 3.3'],
    },
  ],
  skillCategories: [
    {
      category: 'AI, LLMs & Retrieval',
      icon: 'Bot',
      skills: ['LangGraph Multi-Agent', 'LangChain', 'LlamaIndex', 'Hybrid RAG (Vector + BM25 + Graph)', 'GraphRAG & Knowledge Graphs', 'Self-RAG', 'Ragas & LLM Evaluation', 'Hugging Face PEFT / LoRA / QLoRA', 'PyTorch', 'Whisper Speech ASR', 'vLLM / Ollama', 'Groq API'],
    },
    {
      category: 'Cloud & MLOps',
      icon: 'Cloud',
      skills: ['Google Cloud Platform (GCP)', 'Vertex AI', 'Cloud Run', 'BigQuery', 'Cloud Storage (GCS)', 'Docker & Docker Compose', 'CI/CD Pipelines', 'MLflow', 'OpenTelemetry', 'Prometheus & Grafana'],
    },
    {
      category: 'Backend & System Architecture',
      icon: 'Server',
      skills: ['FastAPI', 'Python 3.12', 'ASP.NET Core 8 Web API', 'C#', 'Microservices & Monoliths', 'Celery Async Workers', 'Redis Caching & Queues', 'RESTful APIs', 'WebSockets & SSE', 'Keycloak (JWT / RBAC)'],
    },
    {
      category: 'Databases & Vector Stores',
      icon: 'Database',
      skills: ['PostgreSQL 16', 'Qdrant Vector DB', 'Apache AGE (Graph)', 'SQL Server 2025', 'MySQL', 'BigQuery', 'Redis In-Memory'],
    },
    {
      category: 'Frontend & UI',
      icon: 'Layout',
      skills: ['React 19', 'Next.js 14 App Router', 'TypeScript', 'Tailwind CSS', 'Cytoscape.js Graph Viz', 'HTML5 Web Audio / Video'],
    },
  ],
};
