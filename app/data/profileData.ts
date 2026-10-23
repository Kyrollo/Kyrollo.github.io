export interface EducationItem {
  degree: string;
  institution: string;
  logo?: string;
  period: string;
  specialization: string;
  description: string;
  highlights: string[];
}

export interface CredentialItem {
  id: string;
  title: string;
  issuer: string;
  category: 'featured' | 'coursera' | 'cisco' | 'ibm';
  type: 'certification' | 'specialization' | 'badge' | 'course';
  date: string;
  image: string;
  badgeImage?: string;
  pdfUrl?: string;
  skills: string[];
  description: string;
  featured?: boolean;
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
  logo?: string;
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
    toolsCount: string;
    agentSystems: string;
  };
  methodology: {
    title: string;
    description: string;
    pillars: { title: string; description: string; tag: string }[];
  };
  education: EducationItem[];
  certifications: CertificationItem[];
  courses: CourseItem[];
  credentials: CredentialItem[];
  experience: ExperienceItem[];
  skillCategories: SkillCategory[];
}

export const PROFILE: ProfileData = {
  name: 'Kerollos Mansour',
  monogram: 'KM.',
  avatar: '/kero.jpeg',
  heroPhoto: '/kero_photo_cutout.png',
  title: 'Software AI Engineer · Agentic AI Engineer',
  tagline: 'Engineering agentic AI systems that ship to production',
  bio: 'I engineer production AI systems — from multi-agent orchestration and hybrid RAG pipelines to fine-tuned LLMs and autonomous agent workflows. Passionate about turning cutting-edge AI research into reliable, production-tested software.',
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
    toolsCount: '40+ Tools',
    agentSystems: '5 Agent systems',
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
        description: 'Deploying scalable services across GCP (Vertex AI, Cloud Run) and distributed cloud environments with Docker, Redis caching, async Celery workers, and automated CI/CD workflows.',
        tag: 'GCP & Containerization',
      },
    ],
  },
  education: [
    {
      degree: 'Bachelor of Computer Science and Artificial Intelligence',
      institution: 'Cairo University',
      logo: '/logos/cu.png',
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
  credentials: [
    {
      id: 'nti-agentic-ai',
      title: 'Agentic AI Systems Engineering (288 Hours)',
      issuer: 'National Telecommunication Institute (NTI)',
      category: 'featured',
      type: 'certification',
      date: 'Apr 2026',
      image: '/certificates/previews/nti_agentic_ai_program.png',
      skills: ['LangGraph Multi-Agent', 'Autonomous Tool Calling', 'Self-RAG', 'Supervisor Orchestration', 'FastAPI', 'Evaluation Loops'],
      description: 'Rigorous 288-hour technical program focused on production-grade agentic AI systems, multi-agent supervisors, dynamic state machines, and grounded RAG pipelines, where I engineered and shipped TaskTune AI.',
      featured: true,
    },
    {
      id: 'fixed-solutions-intern',
      title: 'AI Engineer Internship Certificate of Completion',
      issuer: 'Fixed Solutions',
      category: 'featured',
      type: 'certification',
      date: 'Jul 2026',
      image: '/certificates/previews/fixed_solutions_internship.png',
      skills: ['Enterprise Hybrid RAG', 'Qdrant Vector DB', 'PostgreSQL BM25', 'Apache AGE Graph', 'FastAPI Monolith', 'Celery OCR'],
      description: 'Recognized for architecting and deploying FixedRAG, an enterprise multi-user hybrid RAG platform combining dense vector search, lexical BM25 search, and knowledge graph traversal.',
      featured: true,
    },
    {
      id: 'huawei-hcia-ai',
      title: 'Huawei Certified ICT Associate - Artificial Intelligence (HCIA-AI)',
      issuer: 'Huawei Technologies',
      category: 'featured',
      type: 'certification',
      date: 'Jul 2024',
      image: '/certificates/previews/huawei_hcia_ai_certificate.png',
      skills: ['Deep Learning', 'Computer Vision', 'NLP Pipelines', 'Huawei Ascend AI', 'Model Training'],
      description: 'Industry certification validating mastery of artificial intelligence fundamentals, machine learning algorithms, deep learning neural network training, and Huawei Ascend AI computing platforms.',
      featured: true,
    },
    {
      id: 'coursera-ml-specialization',
      title: 'Machine Learning Specialization',
      issuer: 'Andrew Ng (Stanford Online & DeepLearning.AI)',
      category: 'coursera',
      type: 'specialization',
      date: 'Feb 2026',
      image: '/certificates/previews/coursera_machine_learning.png',
      pdfUrl: '/certificates/pdf/coursera_machine_learning.pdf',
      skills: ['Supervised Learning', 'Advanced Learning Algorithms', 'Neural Networks', 'Decision Trees', 'Unsupervised Learning', 'Recommender Systems', 'Reinforcement Learning'],
      description: 'Comprehensive 3-course specialization instructed by Andrew Ng covering linear & logistic regression, multi-layer neural networks, decision trees, random forests, clustering, PCA, anomaly detection, and deep Q-learning.',
      featured: true,
    },
    {
      id: 'coursera-supervised-ml',
      title: 'Supervised Machine Learning: Regression and Classification',
      issuer: 'DeepLearning.AI & Stanford Online',
      category: 'coursera',
      type: 'course',
      date: 'Feb 2026',
      image: '/certificates/previews/coursera_supervised_machine_learning_regression_and_classification.png',
      pdfUrl: '/certificates/pdf/coursera_supervised_machine_learning_regression_and_classification.pdf',
      skills: ['Linear Regression', 'Logistic Regression', 'Gradient Descent', 'Regularization', 'Cost Functions'],
      description: 'Constructed linear and logistic regression models in Python with NumPy and scikit-learn, implementing gradient descent, cost minimization, and regularization.',
    },
    {
      id: 'coursera-advanced-learning-algorithms',
      title: 'Advanced Learning Algorithms',
      issuer: 'DeepLearning.AI & Stanford Online',
      category: 'coursera',
      type: 'course',
      date: 'Feb 2026',
      image: '/certificates/previews/coursera_advanced_learning_algorithms.png',
      pdfUrl: '/certificates/pdf/coursera_advanced_learning_algorithms.pdf',
      skills: ['Multi-Layer Neural Networks', 'TensorFlow', 'XGBoost', 'Random Forests', 'Model Diagnostics'],
      description: 'Built multi-layer neural networks using TensorFlow and Keras, applied ensemble trees and XGBoost for structured datasets, and diagnosed bias/variance issues.',
    },
    {
      id: 'coursera-unsupervised-learning',
      title: 'Unsupervised Learning, Recommenders, Reinforcement Learning',
      issuer: 'DeepLearning.AI & Stanford Online',
      category: 'coursera',
      type: 'course',
      date: 'Feb 2026',
      image: '/certificates/previews/coursera_unsupervised_learning_recommenders_reinforcement_learning.png',
      pdfUrl: '/certificates/pdf/coursera_unsupervised_learning_recommenders_reinforcement_learning.pdf',
      skills: ['K-Means Clustering', 'Anomaly Detection', 'PCA', 'Collaborative Filtering', 'Content-Based Filtering', 'Deep Q-Learning'],
      description: 'Engineered recommendation systems using collaborative and content-based filtering, PCA for dimensionality reduction, Gaussian anomaly detection, and deep Q-learning.',
    },
    {
      id: 'cisco-python-essentials-1',
      title: 'Python Essentials 1',
      issuer: 'OpenEDG Python Institute & Cisco',
      category: 'cisco',
      type: 'certification',
      date: '2024',
      image: '/certificates/previews/cisco_python_essentials_1.png',
      badgeImage: '/certificates/badges/cisco_python_essentials_11.png',
      pdfUrl: '/certificates/pdf/cisco_python_essentials_1.pdf',
      skills: ['Python Fundamentals', 'Data Types & Collections', 'Control Structures', 'Functions & Scope'],
      description: 'Foundational certification from OpenEDG Python Institute validating core programming proficiency, conditional branching, loops, functions, and standard data structures.',
    },
    {
      id: 'cisco-python-essentials-2',
      title: 'Python Essentials 2',
      issuer: 'OpenEDG Python Institute & Cisco',
      category: 'cisco',
      type: 'certification',
      date: '2024',
      image: '/certificates/previews/cisco_python_essentials_2.png',
      badgeImage: '/certificates/badges/cisco_python_essentials_2.png',
      pdfUrl: '/certificates/pdf/cisco_python_essentials_2.pdf',
      skills: ['OOP (Object-Oriented Programming)', 'Modules & Packages', 'Exceptions Handling', 'Generators & Iterators', 'File Processing'],
      description: 'Advanced Python credential verifying object-oriented design, class hierarchies, custom module and package management, generators, closures, and file operations.',
      featured: true,
    },
    {
      id: 'cisco-data-science-essentials',
      title: 'Data Science Essentials with Python',
      issuer: 'Cisco Networking Academy',
      category: 'cisco',
      type: 'certification',
      date: '2024',
      image: '/certificates/previews/cisco_data_science_essentials_with_python.png',
      badgeImage: '/certificates/badges/cisco_data_science_essentials_with_python.png',
      pdfUrl: '/certificates/pdf/cisco_data_science_essentials_with_python.pdf',
      skills: ['NumPy', 'Pandas', 'Matplotlib', 'Exploratory Data Analysis', 'Statistical Inference'],
      description: 'Mastery of foundational data science toolkits: manipulating matrices with NumPy, processing tabular datasets with Pandas, and visualizing distributions with Matplotlib.',
      featured: true,
    },
    {
      id: 'cisco-intro-data-science',
      title: 'Introduction to Data Science',
      issuer: 'Cisco Networking Academy',
      category: 'cisco',
      type: 'course',
      date: '2024',
      image: '/certificates/previews/cisco_intro_to_data_science.png',
      badgeImage: '/certificates/badges/cisco_introduction_to_data_science.png',
      pdfUrl: '/certificates/pdf/cisco_intro_to_data_science.pdf',
      skills: ['Data Science Lifecycle', 'Data Engineering Concepts', 'Analytical Modeling', 'Data Ethics'],
      description: 'Core principles of data science methodologies, predictive analytics lifecycles, and data-driven decision making across industry environments.',
    },
    {
      id: 'cisco-data-analytics-essentials',
      title: 'Data Analytics Essentials',
      issuer: 'Cisco Networking Academy',
      category: 'cisco',
      type: 'certification',
      date: '2024',
      image: '/certificates/previews/cisco_data_analytics_essentials.png',
      badgeImage: '/certificates/badges/cisco_data_analytics_essentials.png',
      pdfUrl: '/certificates/pdf/cisco_data_analytics_essentials.pdf',
      skills: ['Data Wrangling', 'SQL Queries', 'Business Analytics', 'Data Visualizations'],
      description: 'Comprehensive training in exploratory data analysis, relational queries, structured data pipelines, and transforming raw metrics into strategic business insights.',
    },
    {
      id: 'cisco-intro-modern-ai',
      title: 'Introduction to Modern AI',
      issuer: 'Cisco Networking Academy',
      category: 'cisco',
      type: 'course',
      date: '2024',
      image: '/certificates/previews/cisco_introduction_to_modern_ai.png',
      badgeImage: '/certificates/badges/cisco_introduction_to_modern_ai.png',
      pdfUrl: '/certificates/pdf/cisco_introduction_to_modern_ai.pdf',
      skills: ['Modern AI Models', 'Generative AI', 'Deep Learning Paradigms', 'Enterprise Applications'],
      description: 'Survey of contemporary AI architectures, transformer backbones, foundational model integration, and enterprise deployment strategies.',
    },
    {
      id: 'cisco-ai-fundamentals-ibm',
      title: 'AI Fundamentals with IBM SkillsBuild',
      issuer: 'Cisco & IBM SkillsBuild',
      category: 'cisco',
      type: 'course',
      date: '2024',
      image: '/certificates/previews/cisco_ai_fundamentals_with_ibm_skills_build.png',
      badgeImage: '/certificates/badges/cisco_ai_fundamentals_with_ibm_skillsbuild.png',
      pdfUrl: '/certificates/pdf/cisco_ai_fundamentals_with_ibm_skills_build.pdf',
      skills: ['Cognitive Computing', 'IBM Cloud AI', 'Machine Learning Concepts', 'Trustworthy AI'],
      description: 'Cross-platform program delivered by Cisco and IBM covering cognitive automation, enterprise cloud AI services, and reliable AI system design.',
    },
    {
      id: 'cisco-apply-ai-customer-reviews',
      title: 'Apply AI: Analyze Customer Reviews',
      issuer: 'Cisco Networking Academy',
      category: 'cisco',
      type: 'course',
      date: '2024',
      image: '/certificates/previews/cisco_apply_ai_analyze_customer_review.png',
      badgeImage: '/certificates/badges/cisco_apply_ai_analyze_customer_reviews.png',
      pdfUrl: '/certificates/pdf/cisco_apply_ai_analyze_customer_review.pdf',
      skills: ['NLP Sentiment Analysis', 'Text Preprocessing', 'Feature Extraction', 'Automated Insights'],
      description: 'Hands-on natural language processing pipeline analyzing sentiment polarity, keyword extraction, and classifying user feedback at scale.',
    },
    {
      id: 'ibm-ai-fundamentals',
      title: 'Artificial Intelligence Fundamentals',
      issuer: 'IBM SkillsBuild / IBM Cloud',
      category: 'ibm',
      type: 'certification',
      date: '2024',
      image: '/certificates/previews/ibm_artificial_intelligence_fundamentals.png',
      badgeImage: '/certificates/badges/ibm_artificial_intelligence_fundamentals_ibm.png',
      pdfUrl: '/certificates/pdf/ibm_artificial_intelligence_fundamentals.pdf',
      skills: ['AI Taxonomy', 'Neural Network Architectures', 'Natural Language Processing', 'Computer Vision'],
      description: 'Verified credential validating foundational proficiency across artificial intelligence paradigms, cognitive modeling, and computer vision systems.',
      featured: true,
    },
    {
      id: 'ibm-deep-learning',
      title: 'Deep Learning',
      issuer: 'IBM Cloud Education',
      category: 'ibm',
      type: 'course',
      date: '2024',
      image: '/certificates/previews/ibm_deep_learning_cloud_education.png',
      pdfUrl: '/certificates/pdf/ibm_deep_learning_cloud_education.pdf',
      skills: ['Deep Neural Networks', 'Backpropagation', 'Activation Functions', 'CNNs', 'Optimization Algorithms'],
      description: 'Comprehensive coverage of deep neural architectures, gradient descent optimizers, convolution layers, and training deep representations.',
      featured: true,
    },
    {
      id: 'ibm-mastering-prompting',
      title: 'Mastering the Art of Prompting',
      issuer: 'IBM SkillsBuild',
      category: 'ibm',
      type: 'course',
      date: '2024',
      image: '/certificates/previews/ibm_mastering_the_art_of_prompting.png',
      pdfUrl: '/certificates/pdf/ibm_mastering_the_art_of_prompting.pdf',
      skills: ['Prompt Engineering', 'Few-Shot Learning', 'Chain-of-Thought', 'System Prompt Design', 'LLM Output Formatting'],
      description: 'Mastery of modern prompt engineering workflows: guiding LLMs with zero-shot, few-shot, and chain-of-thought patterns for deterministic structured outputs.',
      featured: true,
    },
    {
      id: 'ibm-everyday-ethics',
      title: 'Everyday Ethics for Artificial Intelligence',
      issuer: 'IBM SkillsBuild',
      category: 'ibm',
      type: 'course',
      date: '2024',
      image: '/certificates/previews/ibm_everyday_ethics_for_artificial_intelligence.png',
      pdfUrl: '/certificates/pdf/ibm_everyday_ethics_for_artificial_intelligence.pdf',
      skills: ['AI Ethics & Governance', 'Fairness & Bias Mitigation', 'Model Explainability', 'Accountability Frameworks'],
      description: 'Critical frameworks for engineering ethical AI: mitigating dataset bias, establishing transparency in automated decisions, and preserving user data privacy.',
    },
    {
      id: 'ibm-ai-in-practice',
      title: 'Artificial Intelligence in Practice',
      issuer: 'IBM SkillsBuild',
      category: 'ibm',
      type: 'course',
      date: '2024',
      image: '/certificates/previews/ibm_artificial_intelligence_in_practice.png',
      pdfUrl: '/certificates/pdf/ibm_artificial_intelligence_in_practice.pdf',
      skills: ['Enterprise AI Architecture', 'Domain Solutions', 'AI System Lifecycle', 'Scalability'],
      description: 'Real-world case studies and architecture blueprints for deploying operational AI into enterprise systems across varied industries.',
    },
    {
      id: 'ibm-get-started-ai',
      title: 'Get Started with Artificial Intelligence',
      issuer: 'IBM Developer',
      category: 'ibm',
      type: 'course',
      date: '2024',
      image: '/certificates/previews/ibm_get_started_with_artificial_intelligence_developer.png',
      pdfUrl: '/certificates/pdf/ibm_get_started_with_artificial_intelligence_developer.pdf',
      skills: ['IBM Watson APIs', 'Cloud Microservices', 'AI Prototyping', 'REST Endpoints'],
      description: 'Developer-oriented path exploring cloud-based AI services, REST APIs for cognitive endpoints, and rapid prototyping workflows.',
    },
    {
      id: 'ibm-elements-of-ai',
      title: 'Elements of AI',
      issuer: 'University of Helsinki & Finnish Government',
      category: 'ibm',
      type: 'course',
      date: '2024',
      image: '/certificates/previews/ibm_elements_of_ai_finnish_government.png',
      pdfUrl: '/certificates/pdf/ibm_elements_of_ai_finnish_government.pdf',
      skills: ['Search Algorithms', 'Bayesian Probability', 'Neural Computation', 'Societal AI Impact'],
      description: 'Rigorous exploration of mathematical and computational fundamentals of artificial intelligence, search algorithms, probability, and neural mechanisms.',
    },
    {
      id: 'ibm-what-is-ai',
      title: 'What is Artificial Intelligence',
      issuer: 'IBM SkillsBuild',
      category: 'ibm',
      type: 'course',
      date: '2024',
      image: '/certificates/previews/ibm_what_is_artificial_intelligence.png',
      pdfUrl: '/certificates/pdf/ibm_what_is_artificial_intelligence.pdf',
      skills: ['AI Foundations', 'Machine Learning Overview', 'Cognitive Computing'],
      description: 'Foundations of artificial intelligence, distinguishing symbolic logic, machine learning, and artificial neural networks.',
    },
    {
      id: 'ibm-crash-course-ai',
      title: 'What Is Artificial Intelligence - Crash Course AI',
      issuer: 'Crash Course & IBM SkillsBuild',
      category: 'ibm',
      type: 'course',
      date: '2024',
      image: '/certificates/previews/ibm_what_is_artificial_intelligence_crash_course_ai.png',
      pdfUrl: '/certificates/pdf/ibm_what_is_artificial_intelligence_crash_course_ai.pdf',
      skills: ['Computer Science Concepts', 'AI History', 'Algorithmic Decision Making'],
      description: 'Historical evolution and core mechanics of intelligent software, automated reasoning, and pattern recognition.',
    },
    {
      id: 'ibm-simplilearn-fullcourse',
      title: 'AI and Machine Learning Full Course',
      issuer: 'Simplilearn & IBM SkillsBuild',
      category: 'ibm',
      type: 'course',
      date: '2024',
      image: '/certificates/previews/ibm_ai_and_machine_learning_full_course_simplelearn.png',
      pdfUrl: '/certificates/pdf/ibm_ai_and_machine_learning_full_course_simplelearn.pdf',
      skills: ['End-to-End ML Pipelines', 'Feature Engineering', 'Supervised & Unsupervised Learning', 'Model Evaluation'],
      description: 'Full curriculum spanning data preparation, feature engineering, classification, regression, clustering, and performance validation.',
    },
    {
      id: 'ibm-simplilearn-tutorial',
      title: 'Artificial Intelligence Tutorial',
      issuer: 'Simplilearn & IBM SkillsBuild',
      category: 'ibm',
      type: 'course',
      date: '2024',
      image: '/certificates/previews/ibm_artificial_intelligence_tutorial_simplelearn.png',
      pdfUrl: '/certificates/pdf/ibm_artificial_intelligence_tutorial_simplelearn.pdf',
      skills: ['Applied Machine Learning', 'Code Implementations', 'Model Testing'],
      description: 'Practical coding tutorials on implementing foundational machine learning algorithms and evaluating predictive metrics.',
    },
    {
      id: 'ibm-beginners-guide',
      title: "Beginner's Guide to Artificial Intelligence",
      issuer: 'IBM Developer',
      category: 'ibm',
      type: 'course',
      date: '2024',
      image: '/certificates/previews/ibm_beginner_s_guide_to_artificial_intelligence_ibm_developer.png',
      pdfUrl: '/certificates/pdf/ibm_beginner_s_guide_to_artificial_intelligence_ibm_developer.pdf',
      skills: ['Developer Quickstart', 'AI Toolchains', 'Python AI Libraries'],
      description: 'Practical onboarding guide for software engineers integrating artificial intelligence capabilities into modern software stacks.',
    },
    {
      id: 'ibm-career-in-ai',
      title: 'Learn About a Career in AI',
      issuer: 'IBM SkillsBuild',
      category: 'ibm',
      type: 'course',
      date: '2024',
      image: '/certificates/previews/ibm_learn_about_a_career_in_ai.png',
      pdfUrl: '/certificates/pdf/ibm_learn_about_a_career_in_ai.pdf',
      skills: ['AI Engineering Ecosystem', 'Technical Competencies', 'MLOps Overview'],
      description: 'Overview of roles and competencies across AI engineering, MLOps, deep learning research, and enterprise data analytics.',
    },
    {
      id: 'ibm-openclassrooms-objectif-ia',
      title: 'Objectif IA: Initiez-vous à l’intelligence artificielle',
      issuer: 'Institut Montaigne & OpenClassrooms / IBM',
      category: 'ibm',
      type: 'course',
      date: '2024',
      image: '/certificates/previews/ibm_objectif_ia_openclassrooms.png',
      pdfUrl: '/certificates/pdf/ibm_objectif_ia_openclassrooms.pdf',
      skills: ['Fondements de l’IA', 'Machine Learning', 'Transformation Numérique'],
      description: 'Certification dispensée par l’Institut Montaigne et OpenClassrooms traitant des fondements de l’IA et de ses applications sociétales et industrielles.',
    },
    {
      id: 'ibm-openclassrooms-le-ml',
      title: 'Le Machine Learning',
      issuer: 'OpenClassrooms & IBM SkillsBuild',
      category: 'ibm',
      type: 'course',
      date: '2024',
      image: '/certificates/previews/ibm_le_machine_learning_openclassrooms.png',
      pdfUrl: '/certificates/pdf/ibm_le_machine_learning_openclassrooms.pdf',
      skills: ['Apprentissage Supervisé', 'Optimisation d’Hyperparamètres', 'Validation Croisée'],
      description: 'Formation pratique sur les algorithmes d’apprentissage supervisé, le surapprentissage, et l’évaluation rigoureuse de modèles prédictifs.',
    },
    {
      id: 'ibm-die-power-von-ki',
      title: 'Die Power von KI',
      issuer: 'IBM SkillsBuild',
      category: 'ibm',
      type: 'course',
      date: '2024',
      image: '/certificates/previews/ibm_die_power_von_ki.png',
      pdfUrl: '/certificates/pdf/ibm_die_power_von_ki.pdf',
      skills: ['Potenziale der KI', 'Kognitive Systeme', 'Prozessautomatisierung'],
      description: 'Zertifizierung über die transformative Kraft künstlicher Intelligenz in modernen Geschäftsprozessen und Softwarearchitekturen.',
    },
  ],
  experience: [
    {
      role: 'Software AI Engineer',
      company: 'IBEX Solutions',
      logo: '/logos/ibex.png',
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
      logo: '/logos/fixed.png',
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
      logo: '/logos/nti.png',
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
