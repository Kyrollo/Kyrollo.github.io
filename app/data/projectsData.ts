export interface ProjectScreenshot {
  src: string;
  title: string;
  description: string;
}

export interface ArchitectureStage {
  step: string;
  title: string;
  detail: string;
}

export interface ProjectData {
  id: string;
  name: string;
  subtitle: string;
  category: 'RAG & Search' | 'Agentic AI & DevOps' | 'LLMOps & Security' | 'Local Inference & Fine-Tuning' | 'Multimodal & Vision';
  tier: 'Flagship' | 'Core';
  repo: string;
  summary: string;
  problemStatement: string;
  solutionDetails: string;
  architecture: {
    overview: string;
    diagramFlow: string[];
    stages: ArchitectureStage[];
  };
  technologies: {
    frontend: string[];
    backend: string[];
    ai_ml: string[];
    data_storage: string[];
    devops_infra: string[];
  };
  metrics: { [key: string]: string };
  demoVideo: string;
  screenshots: ProjectScreenshot[];
  accentColor: string;
}

export const PROJECTS_DATA: ProjectData[] = [
  {
    id: 'switchyard',
    name: 'Switchyard',
    subtitle: 'Private LLM Gateway & Dynamic Routing Engine',
    category: 'Local Inference & Fine-Tuning',
    tier: 'Flagship',
    repo: 'https://github.com/Kyrollo/switchyard',
    summary: 'High-performance private LLM gateway unifying local Ollama serving on RTX A5000 and cloud providers with virtual keys, token bucket quotas, and audit logging.',
    problemStatement: 'Enterprise teams deploying LLM applications face runaway API costs, vendor lock-in, compliance risks, and lack of quota enforcement when routing between local private GPUs and cloud models.',
    solutionDetails: 'Switchyard acts as an intelligent OpenAI-compatible proxy that dynamically routes queries across local Ollama instances (RTX A5000 GPU) and external providers (OpenAI, Anthropic, Groq). It enforces granular token bucket rate limits, virtual team API keys, and tamper-proof audit trails with zero performance degradation.',
    architecture: {
      overview: 'Client requests hit the FastAPI gateway over HTTP/SSE. The routing engine checks token bucket quotas in Redis, looks up virtual key authorizations in PostgreSQL, routes requests to Ollama or cloud backends, and logs spans asynchronously via Celery and OpenTelemetry.',
      diagramFlow: [
        'Client Application (OpenAI SDK / HTTP SSE)',
        'FastAPI Gateway & Token Bucket Rate Limiter (Redis)',
        'Routing Policy & Model Arbiter (Local RTX A5000 vs Cloud Groq/OpenAI)',
        'Asynchronous Audit Logging & Metric Telemetry (PostgreSQL & OpenTelemetry)',
      ],
      stages: [
        { step: '01', title: 'Ingress & Quota Check', detail: 'Validates virtual API keys, checks sliding-window token quotas in Redis, and enforces organizational spend limits.' },
        { step: '02', title: 'Dynamic Arbiter', detail: 'Selects optimal provider based on token count, privacy tags, and real-time RTX A5000 GPU utilization.' },
        { step: '03', title: 'Streaming Relay', detail: 'Streams tokens directly to client via Server-Sent Events (SSE) with KV-cache optimization.' },
        { step: '04', title: 'Async Audit Flush', detail: 'Flushes tamper-proof prompt/completion metadata to PostgreSQL via background Celery workers.' },
      ],
    },
    technologies: {
      frontend: ['React 19', 'Tailwind CSS', 'Vite', 'Lucide Icons'],
      backend: ['FastAPI', 'Python 3.12', 'Pydantic v2', 'Celery'],
      ai_ml: ['Ollama', 'vLLM', 'OpenAI API', 'Groq API', 'Llama 3.3'],
      data_storage: ['PostgreSQL 16', 'Redis 7 (In-Memory Quotas)'],
      devops_infra: ['Docker Compose', 'OpenTelemetry', 'Langfuse', 'NVIDIA CUDA 13.4'],
    },
    metrics: {
      'Serving Throughput': '384.6 tok/s',
      'Time to First Token': '14.2 ms',
      'KV Cache Savings': '53.4%',
      'Routing Latency': '1.8 ms',
    },
    demoVideo: '/media/switchyard/demo.mp4',
    screenshots: [
      { src: '/media/switchyard/screenshots/01_hero_dashboard.png', title: 'System Overview & Routing Dashboard', description: 'Real-time telemetry showing gateway requests, active Ollama models, and latency curves.' },
      { src: '/media/switchyard/screenshots/02_workbench_studio.png', title: 'Interactive Gateway Workbench', description: 'Live query testbed with dynamic routing selection and token generation metrics.' },
      { src: '/media/switchyard/screenshots/03_analysis_results.png', title: 'Request Diagnostics & Token Breakdown', description: 'Comprehensive token cost analysis and prompt completion inspection.' },
      { src: '/media/switchyard/screenshots/04_telemetry_metrics.png', title: 'Throughput & Latency Telemetry', description: 'Real-time GPU VRAM utilization, TTFT histograms, and error rates.' },
      { src: '/media/switchyard/screenshots/01_tab_routing_policy.png', title: 'Routing Policy Rules Engine', description: 'Configurable rules prioritizing local RTX A5000 vs fallback cloud endpoints.' },
      { src: '/media/switchyard/screenshots/03_tab_gpu_registry.png', title: 'GPU Node Registry', description: 'Active node health, VRAM allocation, and PagedAttention status.' },
      { src: '/media/switchyard/screenshots/04_tab_virtual_keys.png', title: 'Virtual API Keys & Quota Studio', description: 'Manage department keys, tier limits, and monthly token budgets.' },
      { src: '/media/switchyard/screenshots/05_tab_audit_logs.png', title: 'Audit Trail & Compliance Logs', description: 'Searchable audit logs recording user ID, timestamp, and model responses.' },
    ],
    accentColor: '#6366f1',
  },
  {
    id: 'evalgate',
    name: 'EvalGate',
    subtitle: 'Automated CI/CD Quality Gate & Faithfulness Lab',
    category: 'LLMOps & Security',
    tier: 'Flagship',
    repo: 'https://github.com/Kyrollo/evalgate',
    summary: 'CI/CD quality gate platform for LLMs featuring LLM-as-a-judge faithfulness scoring, regression radar charts, assertion labs, and automated pass/fail thresholds.',
    problemStatement: 'Shipping LLM features into production without automated CI regression testing causes silent regressions, hallucinations, and format breaking changes that slip past human spot checks.',
    solutionDetails: 'EvalGate introduces deterministic automated quality gates into GitHub Actions and CI pipelines. It executes golden assertion test suites, runs dual-judge consensus scoring (Llama 3.3 70B + Qwen 2.5 72B), visualizes multidimensional regression radar charts, and blocks PRs that fall below strict faithfulness and answer relevancy thresholds.',
    architecture: {
      overview: 'Triggered by GitHub Action webhooks or manual runs, EvalGate distributes evaluation batches across parallel judge workers. Test cases are scored against Ragas metrics and semantic ground truths, stored in PostgreSQL, and aggregated into CI status badges and interactive radar charts.',
      diagramFlow: [
        'CI Pipeline Webhook / Test Suite Trigger',
        'EvalGate Orchestrator & Assertion Engine (FastAPI)',
        'Dual LLM Judge Consensus (Llama 3.3 70B & Qwen 2.5 72B)',
        'Regression Radar & CI Pass/Fail Threshold Verifier',
      ],
      stages: [
        { step: '01', title: 'Test Ingestion', detail: 'Loads benchmark test datasets (Q&A pairs, context documents, expected facts) from JSONL.' },
        { step: '02', title: 'Multi-Judge Eval', detail: 'Scores candidate answers for faithfulness, answer relevance, context recall, and tone.' },
        { step: '03', title: 'Statistical Consensus', detail: 'Computes inter-judge agreement and statistical confidence intervals across eval runs.' },
        { step: '04', title: 'CI Gate Enforcement', detail: 'Emits pass/fail status to CI/CD pipelines with actionable regression diffs.' },
      ],
    },
    technologies: {
      frontend: ['React 19', 'Tailwind CSS', 'Chart.js / Recharts', 'Lucide Icons'],
      backend: ['FastAPI', 'Python 3.12', 'Pydantic', 'Celery Workers'],
      ai_ml: ['Ragas', 'G-Eval', 'Groq API', 'Llama 3.3 70B', 'Qwen 2.5 72B'],
      data_storage: ['PostgreSQL 16', 'Redis (Batch Queue)'],
      devops_infra: ['GitHub Actions CI', 'Docker Compose', 'Pytest Integration'],
    },
    metrics: {
      'Gate Pass Rate': '100.0%',
      'Faithfulness Score': '98.2%',
      'Consensus Agreement': '96.5%',
      'Eval Latency': '1.2 ms/item',
    },
    demoVideo: '/media/evalgate/demo.mp4',
    screenshots: [
      { src: '/media/evalgate/screenshots/01_hero_dashboard.png', title: 'LLM CI/CD Quality Gate Dashboard', description: 'Global test run history, pass/fail trends, and benchmark scores.' },
      { src: '/media/evalgate/screenshots/02_workbench_studio.png', title: 'Evaluation Workbench & Regression Radar', description: 'Multi-axis radar comparing model checkpoints across 6 core criteria.' },
      { src: '/media/evalgate/screenshots/03_analysis_results.png', title: 'Faithfulness & Relevance Diagnostics', description: 'Itemized error breakdown highlighting hallucinated claims.' },
      { src: '/media/evalgate/screenshots/04_telemetry_metrics.png', title: 'Judge Consensus & Latency Metrics', description: 'Inter-judge agreement matrix and latency distribution curves.' },
      { src: '/media/evalgate/screenshots/01_tab_ci_matrix.png', title: 'Automated Build Matrix', description: 'Branch-level gate results with automated PR commit checks.' },
      { src: '/media/evalgate/screenshots/04_tab_assertion_lab.png', title: 'Assertion Lab & Edge-Case Fuzzer', description: 'Interactive playground to test regex, semantic, and schema assertions.' },
    ],
    accentColor: '#10b981',
  },
  {
    id: 'warden',
    name: 'Warden',
    subtitle: 'Real-Time LLM Safety Firewall & Threat SOC',
    category: 'LLMOps & Security',
    tier: 'Flagship',
    repo: 'https://github.com/Kyrollo/warden',
    summary: 'Real-time security firewall intercepting prompt injections, polymorphic jailbreaks, and data exfiltration with SOC threat streams and custom policy rules.',
    problemStatement: 'LLM endpoints deployed in production are vulnerable to prompt injections, system prompt exfiltration, SSRF attacks, and unauthorized PII leakage that can compromise company secrets.',
    solutionDetails: 'Warden sits inline as a high-speed reverse proxy. It runs an asynchronous 3-stage defense pipeline combining regex canary filters, fine-tuned DeBERTa-v3 injection classifiers, and Qdrant semantic threat vector embeddings. Egress responses are stripped of API keys, credentials, and sensitive PII in under 1ms.',
    architecture: {
      overview: 'Ingress prompts pass through canary check -> DeBERTa classifier -> vector similarity search against known adversarial attack vectors. Blocked attempts trigger real-time alerts on a WebSocket SOC threat feed. Approved prompts pass to the LLM and are scrubbed for PII before reaching the client.',
      diagramFlow: [
        'User Input / External Webhook',
        'Ingress Guardrail: Canary Regex -> DeBERTa-v3 -> Qdrant Threat Embeddings',
        'Policy Studio Rule Engine (Block, Sanitize, or Flag)',
        'Egress Guardrail: PII Scrubber & Secret Redaction',
        'Live SOC Threat Operations Stream (WebSockets)',
      ],
      stages: [
        { step: '01', title: 'Canary & Pattern Filter', detail: 'Instant sub-millisecond regex scanning for common jailbreak delimiters and instruction overrides.' },
        { step: '02', title: 'DeBERTa Neural Classifier', detail: 'Analyzes semantic intent to detect sophisticated multi-turn role-play and polymorphic jailbreaks.' },
        { step: '03', title: 'Vector Distance Scan', detail: 'Measures cosine distance against indexed adversarial prompts in Qdrant vector database.' },
        { step: '04', title: 'Egress Scrubbing', detail: 'Redacts social security numbers, credit cards, emails, and internal system prompts before return.' },
      ],
    },
    technologies: {
      frontend: ['React 19', 'Tailwind CSS', 'WebSockets', 'Lucide Icons'],
      backend: ['FastAPI', 'Python 3.12', 'Presidio Analyzer', 'Starlette'],
      ai_ml: ['DeBERTa-v3 Injection Classifier', 'Sentence-Transformers', 'Qdrant Vector DB'],
      data_storage: ['Qdrant (Threat Vectors)', 'Redis (Rate Limiting & Threat Cache)'],
      devops_infra: ['Docker Compose', 'Caddy TLS', 'Prometheus Security Metrics'],
    },
    metrics: {
      'Attack Block Rate': '98.5%',
      'Defense Precision': '98.5%',
      'Inline Overhead': '0.85 ms',
      'PII Redaction Rate': '99.8%',
    },
    demoVideo: '/media/warden/demo.mp4',
    screenshots: [
      { src: '/media/warden/screenshots/01_hero_dashboard.png', title: 'SOC Live Threat Operations Dashboard', description: 'Real-time WebSocket stream displaying intercepted jailbreaks and injection attempts.' },
      { src: '/media/warden/screenshots/02_workbench_studio.png', title: 'Red Team Lab & Fuzzing Workbench', description: 'Interactive attack studio testing adversarial payloads against active defense policies.' },
      { src: '/media/warden/screenshots/03_analysis_results.png', title: 'Threat Vector Classification Heatmap', description: 'Semantic clustering of detected attack variants and confidence percentiles.' },
      { src: '/media/warden/screenshots/04_telemetry_metrics.png', title: 'Block Rate & Defense Telemetry', description: 'Live metrics tracking blocked requests, false-positive ratios, and latency overhead.' },
      { src: '/media/warden/screenshots/03_tab_policy_studio.png', title: 'Defense Policy Studio & Rule Builder', description: 'Configurable policy editor defining custom keyword blocks, regex rules, and PII masks.' },
    ],
    accentColor: '#ef4444',
  },
  {
    id: 'fixedrag',
    name: 'FixedRAG',
    subtitle: 'Enterprise Hybrid RAG Monolith & Fine-Tune Studio',
    category: 'RAG & Search',
    tier: 'Flagship',
    repo: 'https://github.com/Kyrollo/Chatbot-Fixed-Solutions-Rag-System',
    summary: 'Enterprise hybrid RAG monolith combining dense vector search (Qdrant), BM25 sparse search (PostgreSQL), and knowledge graph traversal (Apache AGE), fused via RRF with Fine-Tune Studio QA generation.',
    problemStatement: 'Pure vector RAG systems fail on technical documents requiring exact keyword matching, cross-entity relationships, or complex tabular queries, while microservice architectures introduce high inter-service latency.',
    solutionDetails: 'FixedRAG consolidates 5 microservices into a unified, high-throughput FastAPI monolith. It features 3-way hybrid retrieval fusing Qdrant vector search, PostgreSQL full-text search, and Apache AGE graph traversal via Reciprocal Rank Fusion (RRF) and BGE Cross-Encoder reranking. Includes an integrated Fine-Tune Studio to generate training QA pairs.',
    architecture: {
      overview: 'Consolidated FastAPI monolith integrating domain, ingestion, retrieval, generation, and fine-tune engines. Async document ingestion uses Celery and Redis with OCR. Retrieval performs 3-way parallel querying fused via RRF and reranked via Cross-Encoder before streaming generation.',
      diagramFlow: [
        'Document Upload (PDF, DOCX, CSV) -> Celery Worker + PaddleOCR',
        'Dual Indexing: Qdrant Dense Vectors + PostgreSQL BM25 + Apache AGE Entities',
        'Hybrid 3-Way Search (Dense + Sparse + Graph Traversal)',
        'Reciprocal Rank Fusion (RRF) + BGE Cross-Encoder Reranking',
        'Streaming Generation with Grounded Citation Anchors (Groq Llama 3.3)',
      ],
      stages: [
        { step: '01', title: 'Async Ingestion', detail: 'Extracts text and tables using PaddleOCR and Surya, applying semantic chunking with overlap.' },
        { step: '02', title: 'Tri-Store Indexing', detail: 'Indexes dense embeddings in Qdrant, tsvector inverted indices in PostgreSQL, and entity relations in Apache AGE.' },
        { step: '03', title: 'Hybrid Fusion', detail: 'Executes parallel searches across all 3 stores, merging ranks via RRF score calculus.' },
        { step: '04', title: 'Cross-Encoder Rerank', detail: 'Re-scores top 30 candidates with BGE-reranker-large to select the top 5 golden contexts.' },
      ],
    },
    technologies: {
      frontend: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite'],
      backend: ['FastAPI Monolith', 'Python 3.12', 'Celery', 'Redis'],
      ai_ml: ['Qdrant Vector DB', 'Apache AGE (Graph)', 'BGE Cross-Encoder', 'Groq API', 'PaddleOCR'],
      data_storage: ['PostgreSQL 16 (Full-Text & Relational)', 'Qdrant (Embeddings)'],
      devops_infra: ['Keycloak (JWT / RBAC)', 'Caddy TLS', 'Prometheus', 'Grafana', 'Docker'],
    },
    metrics: {
      'Retrieval Faithfulness': '94.2%',
      'Answer Relevancy': '91.5%',
      'Retrieval Latency': '48.6 ms',
      'Rerank Precision @ 5': '96.8%',
    },
    demoVideo: '/media/fixedrag/demo.mp4',
    screenshots: [
      { src: '/media/fixedrag/screenshots/01_hero_dashboard.png', title: 'FixedRAG Enterprise Hybrid Monolith', description: 'Central enterprise dashboard displaying active knowledge bases, query loads, and health.' },
      { src: '/media/fixedrag/screenshots/01_tab_fixedrag_chat.png', title: 'Streaming Chat with Citation Anchors', description: 'Interactive chat interface providing clickable line-level source document citations.' },
      { src: '/media/fixedrag/screenshots/02_workbench_studio.png', title: 'Hybrid Retrieval Workbench', description: 'Inspection console showing raw vector distance, BM25 scores, and graph hops.' },
      { src: '/media/fixedrag/screenshots/03_analysis_results.png', title: 'RRF Fusion & Cross-Encoder Results', description: 'Step-by-step score ranking transformation from candidate pools to final prompt.' },
      { src: '/media/fixedrag/screenshots/04_tab_fine_tune_studio.png', title: 'Fine-Tune Studio: QA Pair Extraction', description: 'Automated synthesis of domain-specific Q&A pairs for downstream model fine-tuning.' },
      { src: '/media/fixedrag/screenshots/06_tab_telemetry_infra.png', title: 'Telemetry & Infrastructure Console', description: 'Prometheus metrics, Keycloak security tokens, and Caddy reverse proxy stats.' },
    ],
    accentColor: '#f43f5e',
  },
  {
    id: 'tasktune',
    name: 'TaskTune AI',
    subtitle: 'Enterprise Work Orchestration & 5-Agent Supervisor',
    category: 'Agentic AI & DevOps',
    tier: 'Flagship',
    repo: 'https://github.com/Kyrollo/tasktune-ai',
    summary: 'Enterprise work and task orchestration platform powered by an ASP.NET Core 8 Web API, SQL Server 2025, and 5 Python AI agents orchestrated with LangGraph.',
    problemStatement: 'Enterprise task management systems require extensive manual coordination, milestone estimation, status tracking, and reporting across departments without intelligent automation.',
    solutionDetails: 'TaskTune AI combines a production-grade .NET 8 Web API backend with a high-performance LangGraph multi-agent supervisor. Five specialized AI agents autonomously handle subtask decomposition, project guidance, progress tracking, executive reporting, and email communication.',
    architecture: {
      overview: 'ASP.NET Core 8 Web API implements Clean Architecture and CQRS with SQL Server 2025. Complex reasoning requests route to the Python Agent Service running a LangGraph supervisor that delegates tasks to specialized sub-agents powered by Groq Llama 3.3.',
      diagramFlow: [
        'React 19 Enterprise Client',
        'ASP.NET Core 8 Web API (Clean Architecture, CQRS, JWT Auth)',
        'SQL Server 2025 (Entities, Tasks, Roles, Audit Logs)',
        'Python Agent Microservice (FastAPI + LangGraph Supervisor)',
        '5 Autonomous Specialized Agents (Guidance, Tracking, Reports, Emails, Assistant)',
      ],
      stages: [
        { step: '01', title: 'Task Decomposition', detail: 'Task Guidance Agent breaks down high-level project objectives into executable subtasks with time estimates.' },
        { step: '02', title: 'Progress Tracking', detail: 'Tracking Agent analyzes sprint velocity, detects blockers, and flags overdue milestones.' },
        { step: '03', title: 'Executive Reporting', detail: 'Report Agent compiles automated multi-tier markdown summaries for management.' },
        { step: '04', title: 'Smart Communication', detail: 'Email Agent drafts context-aware update emails and team reminders.' },
      ],
    },
    technologies: {
      frontend: ['React 19', 'Tailwind CSS', 'Vite', 'Lucide Icons'],
      backend: ['ASP.NET Core 8 Web API', 'C#', 'FastAPI', 'Python 3.12'],
      ai_ml: ['LangGraph', 'LangChain', 'Groq API', 'Llama 3.3 70B', 'Qwen 2.5'],
      data_storage: ['SQL Server 2025', 'Entity Framework Core 8'],
      devops_infra: ['Docker Compose', 'JWT Authentication', 'Clean Architecture'],
    },
    metrics: {
      'Agent Response Time': '320 ms',
      'Decomposition Accuracy': '95.0%',
      'SQL Query Precision': '98.0%',
      'Autonomous Tasks Executed': '1,420+',
    },
    demoVideo: '/media/tasktune/demo.mp4',
    screenshots: [
      { src: '/media/tasktune/screenshots/01_hero_dashboard.png', title: 'Executive Operations Dashboard', description: 'Comprehensive enterprise overview of active projects, sprint velocity, and agent metrics.' },
      { src: '/media/tasktune/screenshots/02_workbench_studio.png', title: 'Multi-Agent Task Orchestration Workbench', description: 'Live agent execution graph showing task handoffs between specialized workers.' },
      { src: '/media/tasktune/screenshots/03_analysis_results.png', title: 'Subtask Decomposition Analysis', description: 'Autonomous breakdown of complex engineering initiatives into structured milestones.' },
      { src: '/media/tasktune/screenshots/04b_agent_task_guidance.png', title: 'Task Guidance Agent', description: 'Contextual AI recommendations helping developers unblock technical roadblocks.' },
      { src: '/media/tasktune/screenshots/04c_agent_progress_tracking.png', title: 'Real-Time Progress Tracking Agent', description: 'Automated velocity monitoring and slippage forecasting.' },
      { src: '/media/tasktune/screenshots/08_tab_ai_control_panel.png', title: 'AI Supervisor Control Panel', description: 'Fine-grained configuration of model temperature, tool permissions, and system prompts.' },
      { src: '/media/tasktune/screenshots/13_agent_ai_chatbot.png', title: 'Interactive AI Assistant', description: 'Natural language interface to query system state, generate reports, and manage tasks.' },
    ],
    accentColor: '#8b5cf6',
  },
  {
    id: 'codeatlas',
    name: 'CodeAtlas',
    subtitle: 'AST Symbol Graph Indexer & Grounded Code RAG',
    category: 'RAG & Search',
    tier: 'Core',
    repo: 'https://github.com/Kyrollo/codeatlas',
    summary: 'AST-aware codebase indexing and knowledge graph RAG with cross-file call hierarchy visualization and grounded line-level source citations.',
    problemStatement: 'Standard text-chunking RAG fails on codebases because it splits functions arbitrarily and loses understanding of class hierarchies, method overrides, and cross-file imports.',
    solutionDetails: 'CodeAtlas parses code with Tree-sitter into syntax trees, extracts symbols (functions, classes, callers/callees), builds an Apache AGE property graph, and provides semantic symbol retrieval with grounded line-level citations and Cytoscape.js interactive visualization.',
    architecture: {
      overview: 'Source files are parsed by Tree-sitter. Extracted symbols and edges populate an Apache AGE graph database and Qdrant vector index. Hybrid subgraph retrieval queries both stores, returning grounded source snippets with interactive call graphs.',
      diagramFlow: [
        'Source Code (Python, TypeScript, C++, Go)',
        'Tree-sitter AST Parser & Symbol Extractor',
        'Apache AGE Graph (Callers/Callees) + Qdrant Dense Embeddings',
        'Hybrid Subgraph Retriever + Cytoscape Visualizer',
      ],
      stages: [
        { step: '01', title: 'AST Parsing', detail: 'Constructs concrete syntax trees without regex, preserving scope and type declarations.' },
        { step: '02', title: 'Graph Construction', detail: 'Maps nodes (files, classes, methods) and edges (calls, inherits, imports) in Apache AGE.' },
        { step: '03', title: 'Dual Indexing', detail: 'Embeds docstrings and symbol signatures in Qdrant for semantic search.' },
        { step: '04', title: 'Subgraph Query', detail: 'Traverses N-hop dependencies to formulate context with exact file and line citations.' },
      ],
    },
    technologies: {
      frontend: ['React 19', 'Cytoscape.js', 'Tailwind CSS', 'Vite'],
      backend: ['FastAPI', 'Python 3.12', 'Tree-sitter', 'NetworkX'],
      ai_ml: ['Qdrant Vector DB', 'Apache AGE (Graph)', 'Sentence-Transformers', 'Groq API'],
      data_storage: ['PostgreSQL 16', 'Qdrant'],
      devops_infra: ['Docker Compose', 'Pytest Code Intelligence'],
    },
    metrics: {
      'MRR @ 10': '0.940',
      'Recall @ 5': '100.0%',
      'Index Latency': '1.25 ms',
      'Cross-File Accuracy': '97.4%',
    },
    demoVideo: '/media/codeatlas/demo.mp4',
    screenshots: [
      { src: '/media/codeatlas/screenshots/01_hero_dashboard.png', title: 'Codebase Graph & Symbol Navigator', description: 'Central repository health, indexed symbols, and call graph metrics.' },
      { src: '/media/codeatlas/screenshots/01_tab_interactive_graph.png', title: 'Interactive Call Hierarchy Graph', description: 'Force-directed graph visualizing cross-file dependencies and inheritance.' },
      { src: '/media/codeatlas/screenshots/02_workbench_studio.png', title: 'Graph-RAG Subgraph Retrieval Console', description: 'Live code reasoning console querying complex multi-file logic.' },
      { src: '/media/codeatlas/screenshots/03_analysis_results.png', title: 'Line-Level Citations & Code Explanations', description: 'Accurate citations with exact start and end line coordinates.' },
      { src: '/media/codeatlas/screenshots/04_telemetry_metrics.png', title: 'Index Latency & Symbol Metrics', description: 'Tree-sitter parse throughput and embedding search speed.' },
    ],
    accentColor: '#06b6d4',
  },
  {
    id: 'diffwise',
    name: 'DiffWise',
    subtitle: 'Autonomous Multi-Agent Semantic PR Reviewer',
    category: 'Agentic AI & DevOps',
    tier: 'Core',
    repo: 'https://github.com/Kyrollo/diffwise',
    summary: 'Multi-agent autonomous code review engine performing split-diff vulnerability detection, architectural checks, and 1-click refactoring patches via LangGraph.',
    problemStatement: 'Manual pull request reviews are tedious and frequently overlook subtle concurrency bugs, SQL injection vulnerabilities, and architectural anti-patterns under tight deadlines.',
    solutionDetails: 'DiffWise analyzes Git diffs using a collaborative team of specialized AI agents: Security Specialist, Performance Critic, Style Guardian, and Architecture Verifier. It outputs unified split-diff commentary and generates automated refactoring patches ready for 1-click merge.',
    architecture: {
      overview: 'Webhook triggers diff parsing and AST chunking. LangGraph orchestrates 4 specialized review agents in parallel. An aggregation agent deduplicates findings and compiles an interactive review UI with unified Git patches.',
      diagramFlow: [
        'GitHub Pull Request Webhook / Git Diff',
        'AST Chunking Engine & Context Resolver',
        'LangGraph Multi-Agent Team (Security, Performance, Style, Architecture)',
        'Aggregation Engine & 1-Click Refactoring Patch Generator',
      ],
      stages: [
        { step: '01', title: 'Diff Ingestion', detail: 'Parses unified diffs, extracts modified hunks, and fetches enclosing function definitions.' },
        { step: '02', title: 'Multi-Agent Review', detail: 'Parallel agents inspect memory leaks, SQLi vulnerabilities, and architectural conformance.' },
        { step: '03', title: 'Consensus & Deduplication', detail: 'Filters duplicate remarks and ranks findings by severity (Critical, High, Medium, Low).' },
        { step: '04', title: 'Patch Synthesis', detail: 'Generates unified diff patches that fix identified vulnerabilities automatically.' },
      ],
    },
    technologies: {
      frontend: ['React 19', 'Tailwind CSS', 'Vite', 'Lucide Icons'],
      backend: ['FastAPI', 'Python 3.12', 'LangGraph', 'Tree-sitter'],
      ai_ml: ['LangGraph Agents', 'Groq API', 'Llama 3.3', 'Qwen 2.5 Coder'],
      data_storage: ['PostgreSQL 16', 'Redis'],
      devops_infra: ['GitHub REST API', 'Docker Compose', 'CI Automation'],
    },
    metrics: {
      'Detection Rate': '96.4%',
      'Refactor Pass Rate': '100.0%',
      'Average Review Time': '1.6 s',
      'False Positive Rate': '3.2%',
    },
    demoVideo: '/media/diffwise/demo.mp4',
    screenshots: [
      { src: '/media/diffwise/screenshots/01_hero_dashboard.png', title: 'Multi-Agent PR Review Dashboard', description: 'Review queue, active pull requests, and vulnerability severity breakdown.' },
      { src: '/media/diffwise/screenshots/01_tab_diff_reviewer.png', title: 'Split-Diff Reviewer with Inline Comments', description: 'Side-by-side Git diff with inline security annotations and recommendations.' },
      { src: '/media/diffwise/screenshots/02_workbench_studio.png', title: 'Agent Collaboration Workbench', description: 'Trace of intermediate debate between Security and Performance critics.' },
      { src: '/media/diffwise/screenshots/03_analysis_results.png', title: '1-Click Refactoring Patch Studio', description: 'Review generated code fix patches with unified diff preview.' },
    ],
    accentColor: '#10b981',
  },
  {
    id: 'dossier',
    name: 'Dossier',
    subtitle: 'Autonomous Due Diligence & Cap Table Extraction Engine',
    category: 'Multimodal & Vision',
    tier: 'Core',
    repo: 'https://github.com/Kyrollo/dossier',
    summary: 'Autonomous corporate due diligence research engine extracting corporate hierarchy, risk radars, and cap tables into comprehensive executive briefings.',
    problemStatement: 'Venture capital and M&A analysts spend hundreds of hours manually combing through dense SEC 10-K filings, pitchdecks, and PDF financials to verify cap tables and corporate risk.',
    solutionDetails: 'Dossier ingests unstructured filings, pitchdecks, and balance sheets. Using LayoutLM and PaddleOCR, it extracts complex nested cap tables and ownership hierarchies, runs corporate risk analysis, and synthesizes structured executive briefings.',
    architecture: {
      overview: 'Document ingestion pipelines process multi-page PDFs using OCR. Layout models extract tabular data and financial statements. Entity resolution constructs ownership graphs, and synthesis agents generate risk radar charts and downloadable executive reports.',
      diagramFlow: [
        'Corporate Filings & Pitchdecks (PDF, Scans, SEC 10-K)',
        'LayoutLM & PaddleOCR Document Structure Analyzer',
        'Cap Table & Entity Extraction Worker',
        'Risk Radar Synthesis Agent & Executive Briefing Compiler',
      ],
      stages: [
        { step: '01', title: 'Document Parsing', detail: 'Scans pages with OCR, detecting table bounding boxes and structural hierarchies.' },
        { step: '02', title: 'Cap Table Extraction', detail: 'Reconciles share classes, options pools, warrants, and convertible debt.' },
        { step: '03', title: 'Entity Disambiguation', detail: 'Links subsidiaries, holding companies, and ultimate beneficial owners.' },
        { step: '04', title: 'Executive Briefing', detail: 'Compiles financial ratios, debt obligations, and litigation risks into concise briefs.' },
      ],
    },
    technologies: {
      frontend: ['React 19', 'Tailwind CSS', 'Recharts', 'Vite'],
      backend: ['FastAPI', 'Python 3.12', 'PaddleOCR', 'LayoutLM'],
      ai_ml: ['LangChain', 'Groq API', 'Sentence-Transformers', 'Pandas'],
      data_storage: ['PostgreSQL 16', 'Qdrant Vector DB'],
      devops_infra: ['Docker Compose', 'PDF Generation Pipeline'],
    },
    metrics: {
      'Entity Accuracy': '95.0%',
      'Risk Coverage': '96.0%',
      'Extraction Latency': '4.2 ms',
      'Table Reconstruction': '98.1%',
    },
    demoVideo: '/media/dossier/demo.mp4',
    screenshots: [
      { src: '/media/dossier/screenshots/01_hero_dashboard.png', title: 'Due Diligence Research Hub', description: 'Company profile overview, key financial indicators, and risk score.' },
      { src: '/media/dossier/screenshots/01_tab_due_diligence_dossier.png', title: 'Automated Executive Briefing', description: 'Structured due diligence memo covering market position and legal liabilities.' },
      { src: '/media/dossier/screenshots/02_workbench_studio.png', title: 'Cap Table Extraction & Entity Studio', description: 'Interactive ownership tree and convertible note reconciliation.' },
      { src: '/media/dossier/screenshots/02_tab_risk_radar.png', title: 'Corporate Risk Radar & Ownership Map', description: 'Multidimensional radar visualizing regulatory, financial, and market exposure.' },
    ],
    accentColor: '#f97316',
  },
  {
    id: 'regulens',
    name: 'ReguLens',
    subtitle: 'AI Regulatory Compliance Radar & Remediation Studio',
    category: 'LLMOps & Security',
    tier: 'Core',
    repo: 'https://github.com/Kyrollo/regulens',
    summary: 'AI regulatory compliance radar mapping technical data flows against HIPAA, GDPR, SOC 2, and EU AI Act with step-by-step remediation roadmaps.',
    problemStatement: 'Engineers building AI products struggle to verify whether their data pipelines comply with rapidly evolving international regulations like GDPR, HIPAA, and the EU AI Act.',
    solutionDetails: 'ReguLens indexes regulatory frameworks into a semantic compliance graph. It audits system architectures, API schemas, and data pipelines against specific legal requirements, outputting gap analysis matrices and prioritized remediation patches.',
    architecture: {
      overview: 'System architecture specifications and dataflow diagrams are parsed and cross-referenced against indexed regulatory legal clauses. An AI auditor identifies compliance gaps and generates actionable engineering code fixes.',
      diagramFlow: [
        'System Architecture Spec & OpenAPI Schemas',
        'Regulatory Knowledge Graph (HIPAA, GDPR, SOC 2, EU AI Act)',
        'Semantic Gap Analysis & Risk Scoring Engine',
        'Prioritized Remediation Roadmap & Patch Generator',
      ],
      stages: [
        { step: '01', title: 'Schema Ingestion', detail: 'Parses database schemas, OpenAPI routes, and logging configs to discover data flows.' },
        { step: '02', title: 'Clause Cross-Reference', detail: 'Maps discovered data flows to legal articles and required security controls.' },
        { step: '03', title: 'Gap Detection', detail: 'Flags unencrypted storage, lack of user consent endpoints, and model transparency issues.' },
        { step: '04', title: 'Remediation Synthesis', detail: 'Produces step-by-step remediation roadmaps with exact configuration and code diffs.' },
      ],
    },
    technologies: {
      frontend: ['React 19', 'Tailwind CSS', 'Vite', 'Lucide Icons'],
      backend: ['FastAPI', 'Python 3.12', 'Pydantic v2'],
      ai_ml: ['LangChain', 'Groq API', 'Qdrant Vector DB', 'Llama 3.3'],
      data_storage: ['PostgreSQL 16', 'Qdrant'],
      devops_infra: ['Docker Compose', 'Compliance CI Checks'],
    },
    metrics: {
      'Compliance Precision': '98.5%',
      'Remediation Pass Rate': '100.0%',
      'Audit Cycle Time': '1.7 s',
      'Regulations Supported': '4 Frameworks',
    },
    demoVideo: '/media/regulens/demo.mp4',
    screenshots: [
      { src: '/media/regulens/screenshots/01_hero_dashboard.png', title: 'Regulatory Matrix & Compliance Radar', description: 'Compliance posture across HIPAA, GDPR, SOC 2, and EU AI Act.' },
      { src: '/media/regulens/screenshots/02_workbench_studio.png', title: 'Audit Findings Workbench', description: 'Itemized regulatory violations ranked by legal exposure and severity.' },
      { src: '/media/regulens/screenshots/03_analysis_results.png', title: 'Automated Remediation Roadmap', description: 'Prioritized engineering task checklist with code snippets to resolve gaps.' },
      { src: '/media/regulens/screenshots/03_tab_system_audit_lab.png', title: 'Policy Studio & Architecture Verifier', description: 'Interactive policy auditor testing compliance of new technical components.' },
    ],
    accentColor: '#3b82f6',
  },
  {
    id: 'runwise',
    name: 'RunWise',
    subtitle: 'OpenTelemetry LLM APM & Causal RCA Profiler',
    category: 'Agentic AI & DevOps',
    tier: 'Core',
    repo: 'https://github.com/Kyrollo/runwise',
    summary: 'OpenTelemetry APM profiler visualizing LLM span waterfalls, token cost breakdowns, slowest bottleneck detection, and causal root-cause diagnostics.',
    problemStatement: 'Debugging latency spikes, token expenditure surges, and failures in multi-agent or multi-step RAG pipelines without distributed tracing is nearly impossible.',
    solutionDetails: 'RunWise ingests standard OpenTelemetry OTLP traces. It constructs interactive Gantt waterfalls, calculates token cost breakdowns per agent, and uses a causal root-cause analysis (RCA) agent to pinpoint exact bottlenecks and model hang points in seconds.',
    architecture: {
      overview: 'OpenTelemetry instrumentation sends traces to RunWise via OTLP. The trace engine processes spans into call trees, calculates latency variances, computes cost attribution per prompt, and runs automated RCA heuristics.',
      diagramFlow: [
        'LLM Service Instrumentation (OpenTelemetry OTLP)',
        'RunWise Trace Collector & Span Tree Processor',
        'Interactive Gantt Waterfall & Token Cost Attribution',
        'Causal RCA Root-Cause Analysis Agent',
      ],
      stages: [
        { step: '01', title: 'OTLP Ingestion', detail: 'Collects distributed traces with zero sampling loss via async collector endpoints.' },
        { step: '02', title: 'Span Tree Assembly', detail: 'Reconstructs hierarchical execution waterfalls linking parent agent calls to child tool invocations.' },
        { step: '03', title: 'Cost Allocation', detail: 'Matches prompt and completion token counts against provider pricing to track spend.' },
        { step: '04', title: 'Automated RCA', detail: 'Diagnoses whether latency spikes stem from vector DB retrieval, token generation, or network jitter.' },
      ],
    },
    technologies: {
      frontend: ['React 19', 'Tailwind CSS', 'D3.js / Recharts', 'Vite'],
      backend: ['FastAPI', 'Python 3.12', 'OpenTelemetry SDK'],
      ai_ml: ['Heuristic & LLM Causal RCA', 'Groq API', 'NumPy'],
      data_storage: ['ClickHouse / TimescaleDB', 'PostgreSQL 16'],
      devops_infra: ['OpenTelemetry Collector', 'Prometheus', 'Grafana', 'Docker'],
    },
    metrics: {
      'RCA Diagnostic Accuracy': '100.0%',
      'Mean Time to Detect (MTTD)': '1.4 s',
      'Mean Time to Resolve (MTTR)': '8.5 s',
      'Trace Ingestion Overhead': '< 0.5 ms',
    },
    demoVideo: '/media/runwise/demo.mp4',
    screenshots: [
      { src: '/media/runwise/screenshots/01_hero_dashboard.png', title: 'OpenTelemetry LLM APM Profiler', description: 'System health, p99 latency curves, and token expenditure overview.' },
      { src: '/media/runwise/screenshots/01_tab_distributed_traces.png', title: 'Gantt Span Waterfall & Token Tracing', description: 'Granular timeline breakdown of parallel tool executions and LLM generations.' },
      { src: '/media/runwise/screenshots/02_workbench_studio.png', title: 'Bottleneck & Latency Workbench', description: 'Interactive deep-dive into slowest spans and cache misses.' },
      { src: '/media/runwise/screenshots/03_analysis_results.png', title: 'Causal Root-Cause Diagnostics', description: 'Automated explanations identifying the exact culprit behind latency degradation.' },
    ],
    accentColor: '#fbbf24',
  },
  {
    id: 'ledgerline',
    name: 'LedgerLine',
    subtitle: 'Automated Accounts Payable 3-Way Match Intelligence',
    category: 'Multimodal & Vision',
    tier: 'Core',
    repo: 'https://github.com/Kyrollo/ledgerline',
    summary: 'Automated 3-way matching intelligence reconciling invoices, purchase orders (POs), and receipts with price variance detection and audit approval.',
    problemStatement: 'Finance departments lose millions annually to invoice discrepancies, duplicate billings, and unauthorized price variances due to manual paper-based 3-way matching.',
    solutionDetails: 'LedgerLine automates accounts payable reconciliation. It extracts line items from invoices, POs, and receiving receipts using Surya and PaddleOCR, aligns items using fuzzy matching, flags price/quantity variances, and routes clean records for automated clearing.',
    architecture: {
      overview: 'Multi-document ingestion passes invoices, purchase orders, and receiving tickets through OCR. The reconciliation matrix matches line items using string similarity and tolerance thresholds, triggering approval state machines.',
      diagramFlow: [
        'Multi-Document Upload (Invoices, Purchase Orders, Receipts)',
        'Surya & PaddleOCR Line-Item Bounding Box Extractor',
        'Fuzzy String & Price Variance Alignment Matrix',
        'Discrepancy Resolver & Automated Audit Approval Workflow',
      ],
      stages: [
        { step: '01', title: 'OCR Extraction', detail: 'Extracts line items, quantities, unit prices, taxes, and vendor tax IDs.' },
        { step: '02', title: 'Entity Alignment', detail: 'Matches invoice line items against PO line items using RapidFuzz Levenshtein scoring.' },
        { step: '03', title: 'Tolerance Check', detail: 'Verifies price variances within company threshold policies (e.g. +/- 1.5%).' },
        { step: '04', title: 'Audit Trail', detail: 'Generates immutable reconciliation records and routes exceptions to human approval.' },
      ],
    },
    technologies: {
      frontend: ['React 19', 'Tailwind CSS', 'Vite', 'Lucide Icons'],
      backend: ['FastAPI', 'Python 3.12', 'PaddleOCR', 'Surya OCR'],
      ai_ml: ['RapidFuzz', 'LangChain', 'Groq API'],
      data_storage: ['PostgreSQL 16', 'Redis'],
      devops_infra: ['Docker Compose', 'PDF Pipeline'],
    },
    metrics: {
      'Match Precision': '99.2%',
      'Variance Recall': '100.0%',
      'Auto-Clear Rate': '88.5%',
      'Processing Latency': '3.1 s/doc',
    },
    demoVideo: '/media/ledgerline/demo.mp4',
    screenshots: [
      { src: '/media/ledgerline/screenshots/01_hero_dashboard.png', title: 'AP 3-Way Match Matching Console', description: 'Reconciliation status, auto-cleared batches, and pending variance alerts.' },
      { src: '/media/ledgerline/screenshots/02_workbench_studio.png', title: 'Invoice, PO & Receipt Studio', description: 'Side-by-side visual document alignment with highlighted bounding boxes.' },
      { src: '/media/ledgerline/screenshots/02_tab_variance_analytics.png', title: 'Price & Quantity Variance Analytics', description: 'Statistical distribution of vendor price deviations and overbilling.' },
      { src: '/media/ledgerline/screenshots/03_analysis_results.png', title: 'Audit Approval & Discrepancy Log', description: 'One-click discrepancy resolution and audit approval logging.' },
    ],
    accentColor: '#38bdf8',
  },
  {
    id: 'sawt',
    name: 'Sawt',
    subtitle: 'Multimodal Arabic Voice Intelligence & Dialect QA Studio',
    category: 'Multimodal & Vision',
    tier: 'Core',
    repo: 'https://github.com/Kyrollo/sawt',
    summary: 'Multimodal Arabic voice intelligence studio with waveform player, 4-way dialect classification (EGY, GLF, LEV, MSA), and morphological root analysis.',
    problemStatement: 'Arabic speech recognition in real-world call centers fails due to complex morphology, absence of diacritics, and drastic phonological variance between regional spoken dialects.',
    solutionDetails: 'Sawt provides an end-to-end Arabic voice intelligence pipeline. It pairs fine-tuned OpenAI Whisper with a 4-way dialect classifier (Egyptian, Gulf, Levantine, Modern Standard Arabic), extracts morphological trilateral roots via Farasa/Camel Tools, and performs grounded speech QA with a synchronized waveform player.',
    architecture: {
      overview: 'Audio streams are normalized with FFmpeg/librosa and transcribed with Whisper. Concurrently, an acoustic dialect classifier predicts regional dialect. Arabic NLP tools extract roots, and an Arabic-specialized LLM answers queries with exact audio timestamps.',
      diagramFlow: [
        'Audio Stream / WAV Upload -> FFmpeg Audio Normalizer',
        'Fine-Tuned Whisper ASR + 4-Way Dialect Classifier (EGY, GLF, LEV, MSA)',
        'Morphological Root Extractor (Farasa & Camel Tools)',
        'Grounded Arabic QA Engine + Synchronized Waveform UI',
      ],
      stages: [
        { step: '01', title: 'Audio Normalization', detail: 'Resamples audio to 16kHz mono, applies noise gate filters, and segments speech utterances.' },
        { step: '02', title: 'ASR & Diarization', detail: 'Generates Arabic transcript with word-level timestamps and speaker labels.' },
        { step: '03', title: 'Dialect & Root Analysis', detail: 'Classifies regional dialect and maps colloquial vocabulary to standard morphological roots.' },
        { step: '04', title: 'Conversational QA', detail: 'Executes semantic queries over Arabic call recordings with clickable timestamp jumps.' },
      ],
    },
    technologies: {
      frontend: ['React 19', 'Web Audio API', 'Wavesurfer.js', 'Tailwind CSS'],
      backend: ['FastAPI', 'Python 3.12', 'Librosa', 'FFmpeg'],
      ai_ml: ['OpenAI Whisper', 'Camel Tools', 'Farasa', 'PyTorch', 'Groq API'],
      data_storage: ['PostgreSQL 16', 'Qdrant'],
      devops_infra: ['NVIDIA CUDA Acceleration', 'Docker Compose'],
    },
    metrics: {
      'Dialect Accuracy': '96.8%',
      'Morphological Root F1': '94.5%',
      'Word Error Rate (WER)': '4.2%',
      'Inference Speed': '0.35x Real-Time',
    },
    demoVideo: '/media/sawt/demo.mp4',
    screenshots: [
      { src: '/media/sawt/screenshots/01_hero_dashboard.png', title: 'Arabic Voice Intelligence Studio', description: 'Audio library, dialect distribution, and speech transcription overview.' },
      { src: '/media/sawt/screenshots/01_tab_call_diarization.png', title: 'Waveform Player & Diarization Timeline', description: 'Interactive waveform audio playback with synchronized bilingual transcripts.' },
      { src: '/media/sawt/screenshots/02_workbench_studio.png', title: '4-Way Dialect Classification Console', description: 'Probabilistic breakdown across Egyptian, Gulf, Levantine, and MSA dialects.' },
      { src: '/media/sawt/screenshots/03_analysis_results.png', title: 'Morphological Root & Grounded Arabic QA', description: 'Trilateral root analysis and question answering with precise audio timecodes.' },
    ],
    accentColor: '#14b8a6',
  },
  {
    id: 'tuneforge',
    name: 'TuneForge',
    subtitle: 'QLoRA Parameter-Efficient Fine-Tuning Studio',
    category: 'Local Inference & Fine-Tuning',
    tier: 'Core',
    repo: 'https://github.com/Kyrollo/tuneforge',
    summary: 'LoRA/QLoRA parameter-efficient fine-tuning studio with real-time SVG loss curves, VRAM calculus, JSONL dataset validators, and adapter registry.',
    problemStatement: 'Fine-tuning modern open-weights LLMs on local GPUs frequently results in Out-Of-Memory (OOM) crashes, corrupted datasets, and lack of visual progress monitoring.',
    solutionDetails: 'TuneForge provides an interactive studio for QLoRA fine-tuning on consumer/workstation GPUs (NVIDIA RTX A5000). It features automated VRAM memory calculus, strict JSONL dataset validation, live SVG training loss telemetry, and 1-click adapter merging and GGUF export.',
    architecture: {
      overview: 'Dataset validation parses training files before training launches. The VRAM calculus engine computes optimal batch size and gradient accumulation. Hugging Face TRL SFTTrainer executes QLoRA training while streaming loss curves in real-time.',
      diagramFlow: [
        'JSONL Dataset Ingestion & Validation',
        'VRAM Estimation Calculus (4-Bit NF4, LoRA Rank & Alpha)',
        'Hugging Face PEFT + TRL SFTTrainer on RTX A5000',
        'Real-Time SVG Loss Telemetry & Adapter Weights Export',
      ],
      stages: [
        { step: '01', title: 'Dataset Linting', detail: 'Checks prompt/response formatting, token length distributions, and tokenization errors.' },
        { step: '02', title: 'Memory Planning', detail: 'Calculates exact VRAM overhead for model weights, optimizer states, and KV-cache.' },
        { step: '03', title: 'PEFT Training', detail: 'Injects low-rank adapter matrices and runs 4-bit quantized backpropagation.' },
        { step: '04', title: 'Adapter Export', detail: 'Merges LoRA weights or exports GGUF/safetensors for local deployment in Ollama.' },
      ],
    },
    technologies: {
      frontend: ['React 19', 'Tailwind CSS', 'SVG Charts', 'Vite'],
      backend: ['FastAPI', 'Python 3.12', 'PyTorch', 'BitsAndBytes'],
      ai_ml: ['Hugging Face PEFT', 'TRL (SFTTrainer)', 'Transformers', 'CUDA 13.4'],
      data_storage: ['Local Model Registry', 'PostgreSQL 16'],
      devops_infra: ['NVIDIA RTX A5000 16GB GPU', 'Docker'],
    },
    metrics: {
      'Perplexity Reduction': '-86.0%',
      'Model Eval Accuracy': '92.8%',
      'VRAM Savings': '89.0%',
      'Training Speedup': '3.4x vs Full FT',
    },
    demoVideo: '/media/tuneforge/demo.mp4',
    screenshots: [
      { src: '/media/tuneforge/screenshots/01_hero_dashboard.png', title: 'QLoRA Fine-Tuning Studio', description: 'Active training jobs, GPU VRAM allocation, and fine-tuned checkpoints.' },
      { src: '/media/tuneforge/screenshots/01_tab_experiment_tracker.png', title: 'Real-Time SVG Loss Curves', description: 'Interactive training telemetry displaying loss convergence and perplexity.' },
      { src: '/media/tuneforge/screenshots/02_workbench_studio.png', title: 'VRAM Calculus & Hyperparameter Tuning', description: 'Memory estimator planning rank, alpha, batch size, and learning rate.' },
      { src: '/media/tuneforge/screenshots/02_tab_model_registry.png', title: 'Adapter Registry & GGUF Quantization Hub', description: 'Manage trained adapter checkpoints and export to Ollama-compatible formats.' },
    ],
    accentColor: '#f97316',
  },
];
