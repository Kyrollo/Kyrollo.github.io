import React from 'react';
import * as si from 'simple-icons';
import { 
  Database, 
  Search, 
  GitMerge, 
  Globe, 
  Radio, 
  Workflow, 
  Cpu, 
  Layers, 
  Sparkles, 
  Code2, 
  Network,
  ShieldCheck,
  FileText,
  Activity
} from 'lucide-react';

interface TechLogoProps {
  name: string;
  size?: number;
  className?: string;
}

export default function TechLogo({ name, size = 22, className = '' }: TechLogoProps) {
  const norm = name.toLowerCase().trim();

  // Helper for rendering simple-icons
  const renderSI = (iconObj: { hex: string; path: string; title: string }, overrideColor?: string) => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill={overrideColor || `#${iconObj.hex}`}
      aria-label={iconObj.title}
    >
      <path d={iconObj.path} />
    </svg>
  );

  // 1. Core AI / ML / LLMs
  if (norm.includes('python')) return renderSI(si.siPython);
  if (norm.includes('pytorch')) return renderSI(si.siPytorch);
  if (norm.includes('langgraph') || norm.includes('langchain')) return renderSI(si.siLangchain, '#10B981');
  if (norm.includes('hugging')) return renderSI(si.siHuggingface);
  if (norm.includes('openai')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
        <path d="M22.28 9.87a5.98 5.98 0 00-.52-4.93 6.07 6.07 0 00-6.47-2.9 6.03 6.03 0 00-4.75-2.04 6.1 6.1 0 00-5.8 4.22 6.03 6.03 0 00-3.9 2.83 6.07 6.07 0 00.74 7.02 5.98 5.98 0 00.51 4.93 6.07 6.07 0 006.47 2.9 6.03 6.03 0 004.75 2.04 6.1 6.1 0 005.8-4.22 6.03 6.03 0 003.9-2.83 6.07 6.07 0 00-.73-7.02zm-8.86 10.95a4.7 4.7 0 01-3.08-1.15l.15-.09 5.12-2.96a.7.7 0 00.35-.61v-7.22l2.16 1.25a.07.07 0 01.04.05v5.9a4.72 4.72 0 01-4.74 4.83zm-7.66-3.83a4.7 4.7 0 01-.6-3.23l.15.09 5.12 2.96c.22.12.35.36.35.61v7.22l-2.16-1.25a.07.07 0 01-.04-.05v-5.9a4.7 4.7 0 01-2.82-.45zm-1.8-8.24a4.7 4.7 0 012.48-2.08v.17l5.12 2.96c.22.13.35.36.35.61v7.22l-2.16-1.25a.07.07 0 01-.04-.05V10.5a4.7 4.7 0 01-5.75-1.75zm12.38 2.08l-5.12-2.96a.7.7 0 00-.7 0l-5.12 2.96-2.16-1.25a.07.07 0 01-.04-.06 4.72 4.72 0 018.66-3.15l-.15.09 5.12 2.96a.7.7 0 00.35.61v6.2l-2.16-1.25a.07.07 0 01-.04-.06v-7.09zm2.4 4.31a4.7 4.7 0 01.6 3.23l-.15-.09-5.12-2.96a.7.7 0 00-.35-.61V7.27l2.16 1.25a.07.07 0 01.04.05v5.9a4.7 4.7 0 012.82.45zm-3.66 4.54v-7.22c0-.25-.13-.48-.35-.61l-5.12-2.96 2.16-1.25a.07.07 0 01.04-.05v5.9a4.72 4.72 0 014.74 4.83l-.15.09-1.32.77v.5z" fill="#10A37F"/>
      </svg>
    );
  }
  if (norm.includes('anthropic') || norm.includes('claude')) return renderSI(si.siAnthropic, '#D97706');
  if (norm.includes('ollama')) return renderSI(si.siOllama, '#E8ECF3');
  if (norm.includes('nvidia') || norm.includes('cuda')) return renderSI(si.siNvidia);

  // Groq LPU (Official Groq Orange badge)
  if (norm.includes('groq')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
        <rect width="24" height="24" rx="6" fill="#F05A28" />
        <path d="M15.5 8.5C14.5 7.5 13.2 7 11.8 7C9.1 7 7 9.2 7 12C7 14.8 9.1 17 11.8 17C14.1 17 15.9 15.4 16.4 13.3H11.8V11.2H18.5C18.6 11.6 18.6 12 18.6 12.5C18.6 16.3 15.8 19 11.8 19C7.8 19 4.8 15.9 4.8 12C4.8 8.1 7.8 5 11.8 5C13.8 5 15.5 5.8 16.9 7.1L15.5 8.5Z" fill="#FFFFFF"/>
      </svg>
    );
  }

  // vLLM
  if (norm.includes('vllm')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
        <rect width="24" height="24" rx="5" fill="#18181B" stroke="#5EEAD4" strokeWidth="1.5" />
        <path d="M7 8L12 16L17 8" stroke="#5EEAD4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }

  // LlamaIndex
  if (norm.includes('llamaindex') || norm.includes('llama index')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
        <rect width="24" height="24" rx="5" fill="#2563EB" />
        <path d="M7 6H10V18H7V6ZM14 6H17V18H14V6Z" fill="#FFFFFF" opacity="0.9" />
        <path d="M10 10H14V14H10V10Z" fill="#60A5FA" />
      </svg>
    );
  }

  // 2. Retrieval, Vector & Graph DBs
  if (norm.includes('qdrant')) return renderSI(si.siQdrant);
  if (norm.includes('postgres') || norm.includes('pgvector')) return renderSI(si.siPostgresql);
  if (norm.includes('apache') || norm.includes('age')) return renderSI(si.siApache);
  if (norm.includes('redis')) return renderSI(si.siRedis);
  if (norm.includes('sqlite')) return renderSI(si.siSqlite);
  if (norm.includes('mongodb')) return renderSI(si.siMongodb);

  if (norm.includes('chroma')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
        <circle cx="8" cy="8" r="4" fill="#F43F5E" />
        <circle cx="16" cy="8" r="4" fill="#FBBF24" />
        <circle cx="12" cy="16" r="4" fill="#3B82F6" />
      </svg>
    );
  }

  if (norm.includes('faiss')) {
    return (
      <div className={`flex items-center justify-center font-bold text-sky-400 bg-sky-950/60 rounded px-1 text-[10px] ${className}`} style={{ width: size, height: size }}>
        FAI
      </div>
    );
  }

  // Retrieval Algorithms & Concepts
  if (norm.includes('bm25') || norm.includes('lexical') || norm.includes('sparse')) {
    return <Search size={size} className={`text-teal-400 ${className}`} />;
  }
  if (norm.includes('rrf') || norm.includes('hybrid search') || norm.includes('reciprocal')) {
    return <GitMerge size={size} className={`text-indigo-400 ${className}`} />;
  }
  if (norm.includes('cross-encoder') || norm.includes('rerank')) {
    return <Layers size={size} className={`text-fuchsia-400 ${className}`} />;
  }
  if (norm.includes('graph')) {
    return <Network size={size} className={`text-amber-400 ${className}`} />;
  }

  // 3. Cloud, DevOps & MLOps
  if (norm.includes('gcp') || norm.includes('google cloud') || norm.includes('vertex')) {
    return renderSI(si.siGooglecloud);
  }
  if (norm.includes('docker')) return renderSI(si.siDocker);
  if (norm.includes('kubernetes') || norm.includes('k8s')) return renderSI(si.siKubernetes);
  if (norm.includes('github') || norm.includes('git')) return renderSI(si.siGithubactions);
  if (norm.includes('mlflow')) return renderSI(si.siMlflow);
  if (norm.includes('opentelemetry')) return renderSI(si.siOpentelemetry);
  if (norm.includes('prometheus')) return renderSI(si.siPrometheus);
  if (norm.includes('grafana')) return renderSI(si.siGrafana);

  // 4. Backend & APIs
  if (norm.includes('fastapi')) return renderSI(si.siFastapi);
  if (norm.includes('celery')) return renderSI(si.siCelery);
  if (norm.includes('keycloak')) return renderSI(si.siKeycloak);
  if (norm.includes('caddy')) return renderSI(si.siCaddy);
  if (norm.includes('.net') || norm.includes('asp.net') || norm.includes('c#') || norm.includes('csharp')) {
    return renderSI(si.siDotnet);
  }
  if (norm.includes('websocket')) {
    return <Radio size={size} className={`text-emerald-400 ${className}`} />;
  }
  if (norm.includes('rest') || norm.includes('api')) {
    return <Globe size={size} className={`text-cyan-400 ${className}`} />;
  }
  if (norm.includes('guardrail') || norm.includes('presidio') || norm.includes('firewall') || norm.includes('security')) {
    return <ShieldCheck size={size} className={`text-rose-400 ${className}`} />;
  }
  if (norm.includes('ocr') || norm.includes('paddle') || norm.includes('surya') || norm.includes('pdf')) {
    return <FileText size={size} className={`text-amber-400 ${className}`} />;
  }

  // 5. Frontend & Languages
  if (norm.includes('react')) return renderSI(si.siReact);
  if (norm.includes('next')) return renderSI(si.siNextdotjs, '#E8ECF3');
  if (norm.includes('typescript') || norm === 'ts') return renderSI(si.siTypescript);
  if (norm.includes('javascript') || norm === 'js') return renderSI(si.siJavascript);
  if (norm.includes('tailwind')) return renderSI(si.siTailwindcss);
  if (norm.includes('vite')) return renderSI(si.siVite);
  if (norm.includes('c++') || norm.includes('cpp')) return renderSI(si.siCplusplus);
  if (norm.includes('go') || norm.includes('golang')) return renderSI(si.siGo);
  if (norm.includes('rust')) return renderSI(si.siRust, '#F74C00');
  if (norm.includes('linux')) return renderSI(si.siLinux);

  // Clean, modern fallback
  return <Sparkles size={size} className={`text-mint-400 text-teal-300 ${className}`} />;
}
