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
  image: string;
  skills: string[];
  description: string;
}

export interface CourseItem {
  title: string;
  platform: string;
  issuer: string;
  date: string;
  badgeImage?: string;
  skills: string[];
  description: string;
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
  skillsCount: number;
  tagline: string;
  skills: string[];
}

export interface ProfileData {
  name: string;
  monogram: string;
  avatar: string;
  heroPhoto: string;
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
  courses: CourseItem[];
  experience: ExperienceItem[];
  skillCategories: SkillCategory[];
}

export const PROFILE: ProfileData = {
  name: 'Kerollos Mansour',
  monogram: 'KM.',
  avatar: '/kero.jpeg',
  heroPhoto: '/kero_hero_v2.png',
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
      description: 'Comprehensive 4-year curriculum in Artificial Intelligence and Computer Science, establishing deep algorithmic, mathematical, and machine learning software foundations.',
      highlights: [
        'Advanced coursework in Machine Learning, Deep Neural Architectures, Computer Vision, and Natural Language Processing.',
        'Strong algorithmic and mathematical foundations in data structures, algorithms, object-oriented software engineering, linear algebra, and probability theory.',
        'Hands-on experience with PyTorch, TensorFlow, Keras, scikit-learn, Pandas, NumPy, and modern high-concurrency backends.',
        'Applied modern software engineering practices: containerization with Docker, automated CI/CD pipelines, and Agile development methodologies.',
      ],
    },
  ],
  certifications: [
    {
      title: 'Agentic AI Systems Engineering Trainee',
      issuer: 'National Telecommunication Institute (NTI)',
      date: 'Apr 2026',
      image: '/certificates/Agentic_AI_Program_at_NTI_Certificate_.png',
      skills: ['LangGraph Multi-Agent', 'Autonomous Tool Calling', 'Self-RAG', 'Supervisor Orchestration', 'FastAPI', 'Evaluation Loops'],
      description: 'Rigorous 288-hour technical program focused on production-grade agentic AI systems, multi-agent supervisors, dynamic state machines, and grounded RAG pipelines, where I engineered and shipped TaskTune AI.',
    },
    {
      title: 'AI Engineer Internship Certificate of Completion',
      issuer: 'Fixed Solutions',
      date: 'Jul 2026',
      image: '/certificates/Certificate_of_completion_Fixed_Solution_Intern.png',
      skills: ['Enterprise Hybrid RAG', 'Qdrant Vector DB', 'PostgreSQL BM25', 'Apache AGE Graph', 'FastAPI Monolith', 'Celery OCR'],
      description: 'Recognized for architecting and deploying FixedRAG, an enterprise multi-user hybrid RAG platform combining dense vector search, lexical BM25 search, and knowledge graph traversal.',
    },
    {
      title: 'Huawei Certified ICT Associate - Artificial Intelligence (HCIA-AI)',
      issuer: 'Huawei Technologies',
      date: 'Jul 2024',
      image: '/certificates/Huawei_HCIA-AI_Certificate.png',
      skills: ['Deep Learning Frameworks', 'TensorFlow Basics', 'Computer Vision', 'NLP Pipelines', 'AI Model Deployment'],
      description: 'Industry certification validating mastery of artificial intelligence fundamentals, machine learning algorithms, deep learning neural network training, and Huawei Ascend AI computing platforms.',
    },
  ],
  courses: [
    {
      title: 'Machine Learning Specialization (3-Course Series)',
      platform: 'Coursera & DeepLearning.AI',
      issuer: 'Andrew Ng (Stanford Online & DeepLearning.AI)',
      date: 'Jan – Feb 2026',
      badgeImage: '/certificates/cisco_data-science-essentials-with-python.png',
      skills: ['Supervised Learning', 'Advanced Learning Algorithms', 'Neural Networks', 'XGBoost', 'Unsupervised Learning', 'Recommender Systems', 'Reinforcement Learning'],
      description: 'Comprehensive specialization covering linear regression, logistic regression, neural network architectures, decision trees, random forests, clustering, PCA, anomaly detection, and deep Q-learning.',
    },
    {
      title: 'Artificial Intelligence Fundamentals & Deep Learning',
      platform: 'IBM SkillsBuild',
      issuer: 'IBM Cloud Education',
      date: '2024 – 2025',
      badgeImage: '/certificates/ibm_Artificial_Intelligence_Fundamentals_-_IBM.png',
      skills: ['AI Fundamentals', 'Deep Learning Architecture', 'Prompt Engineering', 'Everyday AI Ethics', 'IBM Cloud'],
      description: 'Credentials covering foundational AI architectures, neural network training, practical prompting strategies, and enterprise ethics for trustworthy, unbiased AI deployment.',
    },
    {
      title: 'Python Essentials 1 & 2, Data Science & Analytics',
      platform: 'Cisco Networking Academy / Credly',
      issuer: 'OpenEDG Python Institute & Cisco',
      date: '2024',
      badgeImage: '/certificates/cisco_python-essentials-2.png',
      skills: ['Python 3 Advanced', 'Object-Oriented Programming', 'Data Science Essentials', 'Data Analytics', 'NumPy & Pandas'],
      description: 'Dual certifications from the OpenEDG Python Institute and Cisco verifying mastery of Python data structures, OOP paradigms, modules, algorithmic optimization, and data analytics pipelines.',
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
      skillsCount: 12,
      tagline: 'Multi-agent orchestration, hybrid vector/graph retrieval, and fine-tuning pipelines',
      skills: ['LangGraph Multi-Agent', 'LangChain', 'LlamaIndex', 'Hybrid RAG (Vector + BM25 + Graph)', 'GraphRAG & Knowledge Graphs', 'Self-RAG', 'Ragas & LLM Evaluation', 'Hugging Face PEFT / LoRA / QLoRA', 'PyTorch', 'Whisper Speech ASR', 'vLLM / Ollama', 'Groq API'],
    },
    {
      category: 'Cloud & MLOps',
      icon: 'Cloud',
      skillsCount: 10,
      tagline: 'Google Cloud Platform, Vertex AI, containerization, and monitoring',
      skills: ['Google Cloud Platform (GCP)', 'Vertex AI', 'Cloud Run', 'BigQuery', 'Cloud Storage (GCS)', 'Docker & Docker Compose', 'CI/CD Pipelines', 'MLflow', 'OpenTelemetry', 'Prometheus & Grafana'],
    },
    {
      category: 'Backend & Systems',
      icon: 'Server',
      skillsCount: 10,
      tagline: 'High-throughput APIs, asynchronous task workers, and identity security',
      skills: ['FastAPI', 'Python 3.12', 'ASP.NET Core 8 Web API', 'C#', 'Microservices & Monoliths', 'Celery Async Workers', 'Redis Caching & Queues', 'RESTful APIs', 'WebSockets & SSE', 'Keycloak (JWT / RBAC)'],
    },
    {
      category: 'Databases & Vector Stores',
      icon: 'Database',
      skillsCount: 7,
      tagline: 'Dense vector indexing, relational databases, and knowledge graph stores',
      skills: ['PostgreSQL 16', 'Qdrant Vector DB', 'Apache AGE (Graph)', 'SQL Server 2025', 'MySQL', 'BigQuery', 'Redis In-Memory'],
    },
    {
      category: 'Frontend & Tooling',
      icon: 'Layout',
      skillsCount: 6,
      tagline: 'Interactive web user interfaces, graph visualization, and developer tooling',
      skills: ['React 19', 'Next.js 14 App Router', 'TypeScript', 'Tailwind CSS', 'Cytoscape.js Graph Viz', 'HTML5 Web Audio / Video'],
    },
  ],
};
