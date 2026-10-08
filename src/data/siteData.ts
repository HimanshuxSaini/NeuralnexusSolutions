export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  pillarId: string;
  pillarName: string;
  shortDesc: string;
  oneLinePromise: string;
  whatWeDeliver: {
    title: string;
    description: string;
  }[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  tools: string[];

  engagementModels: {
    type: string;
    typicalDuration: string;
    pricingEstimate: string;
    description: string;
    recommendedFor: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface Pillar {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  typicalClients: string;
  services: string[]; // service slugs
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialization: string;
  bio: string;
  avatar: string;
  skills: string[];
  contributedProjects: string[];

}



export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  summary: string;
  content: string[];
  keyTakeaways: string[];
  relatedServiceSlug: string;
}

export const PILLARS: Pillar[] = [
  {
    id: 'software-engineering',
    slug: 'software-engineering',
    name: 'Software & Product Engineering',
    tagline: 'High-performance web, mobile and custom enterprise applications.',
    description: 'We architect and build fault-tolerant web applications, cross-platform mobile apps, and scalable ERP systems built for high-concurrency business operations.',
    typicalClients: 'Startups, SMEs, and operations-heavy businesses',
    services: ['web-mobile-app-development', 'software-development', 'erp-development']
  },
  {
    id: 'ai-data-automation',
    slug: 'ai-data-automation',
    name: 'AI, Data & Automation',
    tagline: 'Intelligent algorithms, conversational bots and streamlined workflows.',
    description: 'Empowering businesses with custom machine learning models, automated WhatsApp business pipelines, conversational agents, and actionable business intelligence.',
    typicalClients: 'Businesses automating customer support, sales qualification and reporting',
    services: ['ai-machine-learning', 'chatbot-integration', 'whatsapp-automation', 'data-analytics']
  },
  {
    id: 'research-services',
    slug: 'research-services',
    name: 'Research Services',
    tagline: 'Rigorous technical paper reproduction, academic writing and R&D.',
    description: 'Translating cutting-edge computer science and engineering literature into working code, reproducible benchmarks, and publication-ready documentation.',
    typicalClients: 'Scholars, students, academic institutions, and corporate R&D teams',
    services: ['research-documentation', 'research-technical-implementation']
  },
  {
    id: 'growth-marketing',
    slug: 'growth-marketing',
    name: 'Growth & Marketing',
    tagline: 'Data-driven SEO, conversion optimization and multi-channel acquisition.',
    description: 'Technical and on-page SEO, hyper-targeted campaigns, and performance marketing strategies engineered to deliver qualified B2B & B2C inbound leads.',
    typicalClients: 'Brands demanding organic search traffic, measurable ROI and lead acquisition',
    services: ['digital-marketing', 'seo', 'social-media-marketing']
  },
  {
    id: 'design-creative',
    slug: 'design-creative',
    name: 'Design & Creative',
    tagline: 'Intuitive user experiences, brand identities and motion storytelling.',
    description: 'Crafting frictionless digital interfaces, scalable design systems, visual marketing collateral, and high-retention video content that converts.',
    typicalClients: 'Brands, digital creators, founders and fast-moving product teams',
    services: ['ui-ux-design', 'graphic-marketing', 'video-editing']
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-mobile-app-development',
    slug: 'web-mobile-app-development',
    pillarId: 'software-engineering',
    pillarName: 'Software & Product Engineering',
    title: 'Web & Mobile App Development',
    shortDesc: 'Responsive web apps, Android & iOS cross-platform products with clean architecture.',
    oneLinePromise: 'Production-ready web and mobile products engineered for scale, speed, and real users.',
    whatWeDeliver: [
      { title: 'Responsive Web Applications', description: 'Next.js, React, and modern TypeScript frontend apps with sub-second page loads.' },
      { title: 'Cross-Platform Mobile Apps', description: 'Flutter and React Native applications delivering native 60fps performance on iOS & Android.' },
      { title: 'API Integration & Middleware', description: 'Secure REST and GraphQL endpoints connecting payment gateways, CRMs, and third-party tools.' },
      { title: 'Automated CI/CD & Cloud Deploy', description: 'Zero-downtime deployment pipelines with Docker, AWS ECS/Vercel, and automated testing.' },
      { title: 'Ongoing Maintenance & SLA', description: 'Proactive error monitoring, performance tuning, and technical support.' }
    ],
    process: [
      { step: 1, title: 'Architecture & UX Wireframing', description: 'User journeys, database schemas, and component architecture mapping.' },
      { step: 2, title: 'Agile Sprint Development', description: 'Two-week iterative milestones with live staging environments for continuous review.' },
      { step: 3, title: 'Automated Testing & QA', description: 'End-to-end testing, responsive cross-device verification, and security audits.' },
      { step: 4, title: 'Deployment & Knowledge Handover', description: 'Production release, DNS setup, and complete source code repository transfer.' }
    ],
    tools: ['React', 'Next.js', 'Flutter', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'AWS', 'Docker'],

    engagementModels: [
      { type: 'Fixed Scope Project', typicalDuration: '4 - 10 Weeks', pricingEstimate: '₹2,15,000 – ₹6,88,000', description: 'Well-defined product milestones with guaranteed deliverables and delivery dates.', recommendedFor: 'MVPs, product launches, version 2.0 rebuilds' },
      { type: 'Dedicated Sprint Team', typicalDuration: 'Month-to-Month', pricingEstimate: '₹2,75,000 / Month', description: 'Full-stack engineering capacity working seamlessly with your internal product roadmap.', recommendedFor: 'Ongoing feature expansion, funded startups' }
    ],
    faqs: [
      { question: 'Do you deliver complete source code and IP ownership?', answer: 'Yes, 100% of the source code, repositories, and intellectual property belong exclusively to you upon milestone completion.' },
      { question: 'Can you build both iOS and Android apps simultaneously?', answer: 'Yes, using Flutter or React Native, we engineer a unified codebase that compiles to native iOS and Android apps with unified logic.' },
      { question: 'How do you handle post-launch bugs and updates?', answer: 'Every project includes a 30-day post-launch warranty period for bug fixes, followed by optional flexible SLA retainer plans.' }
    ]
  },
  {
    id: 'software-development',
    slug: 'software-development',
    pillarId: 'software-engineering',
    pillarName: 'Software & Product Engineering',
    title: 'Custom Software Development',
    shortDesc: 'Tailored business software, internal dashboards, portals, and workflow engines.',
    oneLinePromise: 'Eliminate operational bottlenecks with bespoke software tailored to your specific workflows.',
    whatWeDeliver: [
      { title: 'Custom Business Dashboards', description: 'Real-time operational dashboards with role-based access control and live telemetry.' },
      { title: 'Client & Partner Portals', description: 'Secure self-service portals with document management and transaction histories.' },
      { title: 'Workflow Automation Engines', description: 'Automating multi-step manual processes into automated background jobs.' },
      { title: 'Legacy Modernization', description: 'Refactoring monolithic legacy software into maintainable modern microservices.' }
    ],
    process: [
      { step: 1, title: 'Workflow Audit', description: 'Deep-dive into team pain points, input/output data, and regulatory constraints.' },
      { step: 2, title: 'System Architecture', description: 'Defining database models, auth layers, and data validation guarantees.' },
      { step: 3, title: 'Module Implementation', description: 'Rapid delivery of core modules with real team pilot testing.' },
      { step: 4, title: 'Training & Rollout', description: 'Team onboarding, documentation, and safe data migration.' }
    ],
    tools: ['Node.js', 'Python', 'PostgreSQL', 'Express', 'React', 'Redis', 'Docker'],

    engagementModels: [
      { type: 'Milestone Contract', typicalDuration: '6 - 12 Weeks', pricingEstimate: '₹3,01,000 – ₹8,60,000', description: 'Phased rollout broken down by department or feature module.', recommendedFor: 'Established businesses upgrading internal tooling' },
      { type: 'Hourly Consulting', typicalDuration: 'Flexible', pricingEstimate: '₹3,870 / Hour', description: 'On-demand architectural guidance, bug fixing, or API integrations.', recommendedFor: 'Technical audits, ad-hoc feature patches' }
    ],
    faqs: [
      { question: 'Can our internal teams easily operate this software?', answer: 'Yes, we design clean intuitive interfaces with zero bloat, complete with interactive onboarding and administrator guides.' },
      { question: 'Is the data hosted in our own cloud environment?', answer: 'Yes, we configure and deploy directly into your private AWS, GCP, or Azure cloud account.' }
    ]
  },
  {
    id: 'erp-development',
    slug: 'erp-development',
    pillarId: 'software-engineering',
    pillarName: 'Software & Product Engineering',
    title: 'ERP Development & Customization',
    shortDesc: 'Comprehensive modules for inventory, HR, finance, accounts, CRM, and role-based permissions.',
    oneLinePromise: 'Unified enterprise resource planning without the exorbitant licensing fees of legacy suites.',
    whatWeDeliver: [
      { title: 'Inventory & Supply Chain', description: 'Real-time stock alerts, batch tracking, barcode scanning, and vendor purchase orders.' },
      { title: 'HR & Payroll Modules', description: 'Employee attendance, leave management, automated payroll slips, and tax reporting.' },
      { title: 'Invoicing & Accounting', description: 'GST/VAT compliant automated invoicing, ledger tracking, and P&L financial reports.' },
      { title: 'Role-Based Permissions (RBAC)', description: 'Granular access controls ensuring employees only access necessary department records.' }
    ],
    process: [
      { step: 1, title: 'Business Process Mapping', description: 'Mapping physical workflows into digital data entities and permission trees.' },
      { step: 2, title: 'Database & Security Schema', description: 'Audit trails, relational integrity, and encrypted database backbones.' },
      { step: 3, title: 'Module Development', description: 'Staged release of Inventory, Accounts, and HR modules.' },
      { step: 4, title: 'Data Migration & Staff Training', description: 'Clean import of historical spreadsheets and live staff training sessions.' }
    ],
    tools: ['PostgreSQL', 'Node.js', 'React', 'Redis', 'Docker', 'REST API', 'Tailwind CSS'],

    engagementModels: [
      { type: 'Modular Implementation', typicalDuration: '8 - 16 Weeks', pricingEstimate: '₹4,30,000 – ₹12,90,000', description: 'End-to-end ERP customized for your exact industry and accounting standards.', recommendedFor: 'Manufacturing, logistics, and multi-branch retail' },
      { type: 'Quarterly Retainer', typicalDuration: 'Ongoing', pricingEstimate: '₹1,55,000 / Month', description: 'Continuous module expansion, data backups, and technical support.', recommendedFor: 'Scaling enterprises' }
    ],
    faqs: [
      { question: 'Can we import our existing Excel sheets?', answer: 'Yes, our automated data ingestion pipeline validates, cleans, and imports existing spreadsheets without data loss.' },
      { question: 'Does your ERP have recurring per-user license fees?', answer: 'No! You own the software and pay zero monthly per-seat licensing fees unlike SAP or Salesforce.' }
    ]
  },
  {
    id: 'ai-machine-learning',
    slug: 'ai-machine-learning',
    pillarId: 'ai-data-automation',
    pillarName: 'AI, Data & Automation',
    title: 'AI & Machine Learning Solutions',
    shortDesc: 'Custom model design, fine-tuning, computer vision, NLP, and production model deployment.',
    oneLinePromise: 'Transform proprietary data into predictive models and intelligent automation pipelines.',
    whatWeDeliver: [
      { title: 'Custom Model Design & Fine-Tuning', description: 'Fine-tuning open weights (LLaMA, Mistral) and proprietary LLMs on your domain corpus.' },
      { title: 'Computer Vision & Document OCR', description: 'Automated invoice parsing, object detection, and visual inspection algorithms.' },
      { title: 'Predictive & Forecasting Analytics', description: 'Customer churn prediction, demand forecasting, and predictive maintenance models.' },
      { title: 'Low-Latency Inference APIs', description: 'Optimized Dockerized model serving with ONNX, TensorRT, or vLLM on cloud GPUs.' }
    ],
    process: [
      { step: 1, title: 'Data Assessment & Feasibility', description: 'Auditing data quality, labeling requirements, and baseline accuracy targets.' },
      { step: 2, title: 'Model Prototyping & Experimentation', description: 'Comparing algorithmic approaches, cross-validation, and hyperparameter tuning.' },
      { step: 3, title: 'API Containerization', description: 'Packaging models with FastAPI/Triton inference server for sub-50ms responses.' },
      { step: 4, title: 'Monitoring & Drift Detection', description: 'Setting up model performance telemetry and automated retraining hooks.' }
    ],
    tools: ['Python', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'Hugging Face', 'FastAPI', 'Docker', 'AWS SageMaker'],

    engagementModels: [
      { type: 'Proof of Concept (PoC)', typicalDuration: '3 - 5 Weeks', pricingEstimate: '₹2,41,000 – ₹5,59,000', description: 'Rapid model validation on your data with measurable accuracy metrics before scale.', recommendedFor: 'Early-stage AI initiatives, feasibility testing' },
      { type: 'Production AI Deployment', typicalDuration: '6 - 12 Weeks', pricingEstimate: '₹5,16,000 – ₹15,48,000', description: 'Full pipeline from data ingestion to production inference API with latency SLAs.', recommendedFor: 'Enterprise automation' }
    ],
    faqs: [
      { question: 'Will our proprietary data be kept completely confidential?', answer: 'Yes, we sign strict non-disclosure agreements (NDAs) and configure private self-hosted or dedicated cloud models so your data is never used to train public models.' },
      { question: 'What if we have limited training data?', answer: 'We leverage transfer learning, synthetic data generation, and few-shot prompt engineering techniques to achieve high accuracy even with smaller datasets.' }
    ]
  },
  {
    id: 'chatbot-integration',
    slug: 'chatbot-integration',
    pillarId: 'ai-data-automation',
    pillarName: 'AI, Data & Automation',
    title: 'Chatbot Integration (Automated)',
    shortDesc: 'Intelligent website, WhatsApp, and in-app conversational agents with lead capture and human handoff.',
    oneLinePromise: '24/7 intelligent conversational agents that qualify leads and resolve customer support queries instantaneously.',
    whatWeDeliver: [
      { title: 'Context-Aware AI Assistants', description: 'RAG-powered conversational bots grounded strictly in your company documentation and product catalogs.' },
      { title: 'Multi-Channel Integration', description: 'Unified deployment across Web widgets, WhatsApp, Telegram, and mobile apps.' },
      { title: 'Lead Capture & CRM Sync', description: 'Extracting names, budgets, requirements, and auto-syncing directly to HubSpot, Zoho, or Google Sheets.' },
      { title: 'Seamless Human Escalation', description: 'Smart sentiment detection that instantly routes complex queries to human support representatives.' }
    ],
    process: [
      { step: 1, title: 'Knowledge Base Curation', description: 'Ingesting FAQs, product manuals, pricing sheets, and policy documentation.' },
      { step: 2, title: 'RAG & Guardrail Setup', description: 'Configuring vector embeddings, hallucinations filters, and strict boundary rules.' },
      { step: 3, title: 'UI Widget & Channel Linking', description: 'Embedding matching branded widgets and connecting official APIs.' },
      { step: 4, title: 'Analytics & Continuous Tuning', description: 'Reviewing conversation drop-offs and tuning prompt responses.' }
    ],
    tools: ['Python', 'OpenAI/Gemini API', 'LangChain', 'Pinecone', 'React', 'Node.js', 'Webhooks'],

    engagementModels: [
      { type: 'Turnkey Chatbot Setup', typicalDuration: '2 - 4 Weeks', pricingEstimate: '₹1,29,000 – ₹3,44,000', description: 'Fully trained chatbot on your business knowledge with CRM routing.', recommendedFor: 'SMEs, service agencies, e-commerce stores' },
      { type: 'Monthly Optimization Retainer', typicalDuration: 'Ongoing', pricingEstimate: '₹52,000 / Month', description: 'Continuous transcript review, new intent training, and uptime monitoring.', recommendedFor: 'High-volume customer support' }
    ],
    faqs: [
      { question: 'Can the chatbot prevent hallucinations and false claims?', answer: 'Yes, we enforce strict retrieval guardrails and system boundaries: if the answer is not present in your approved documentation, it courteously offers a human callback.' },
      { question: 'Does it support multiple languages?', answer: 'Yes, modern LLM agents seamlessly converse in 50+ languages including English, Hindi, Spanish, French, and German.' }
    ]
  },
  {
    id: 'whatsapp-automation',
    slug: 'whatsapp-automation',
    pillarId: 'ai-data-automation',
    pillarName: 'AI, Data & Automation',
    title: 'WhatsApp Automation & Cloud API',
    shortDesc: 'Automated broadcasts, appointment bookings, order tracking, and interactive WhatsApp commerce flows.',
    oneLinePromise: 'Harness the world’s #1 messaging app with 98% open rates for automated sales, bookings, and customer care.',
    whatWeDeliver: [
      { title: 'Official WhatsApp Business API Setup', description: 'Green tick verification assistance, Cloud API onboarding, and compliance templates.' },
      { title: 'Interactive Chatbot & Catalogues', description: 'Interactive button menus, carousel products, and instant checkout flows.' },
      { title: 'CRM & ERP Synchronization', description: 'Sync leads, orders, and support tickets seamlessly with your central database.' },
      { title: 'Segmented Broadcast Engine', description: 'Automated notification campaigns for order confirmations, reminders, and promotional re-engagement.' }
    ],
    process: [
      { step: 1, title: 'API Account & Template Approval', description: 'Configuring Meta Business Manager, phone number verification, and message templates.' },
      { step: 2, title: 'Conversation Flow Architecture', description: 'Designing interactive paths, buttons, quick replies, and fallback handlers.' },
      { step: 3, title: 'Webhook & Backend Integration', description: 'Connecting your database, payments, and calendar scheduling tools.' },
      { step: 4, title: 'Live Testing & Staff Dashboard', description: 'End-to-end testing, team inbox configuration, and operator training.' }
    ],
    tools: ['Meta WhatsApp Cloud API', 'Node.js', 'Python', 'Webhooks', 'PostgreSQL', 'Redis', 'Twilio'],

    engagementModels: [
      { type: 'Full WhatsApp Pipeline Setup', typicalDuration: '2 - 4 Weeks', pricingEstimate: '₹1,55,000 – ₹3,87,000', description: 'Complete Cloud API setup, interactive menus, lead qualification flows, and CRM integration.', recommendedFor: 'Clinics, education institutes, retail, real estate' },
      { type: 'Broadcast & Campaign Engine', typicalDuration: '1 - 2 Weeks', pricingEstimate: '₹77,000 – ₹1,72,000', description: 'Automated scheduled messaging and event-driven trigger system.', recommendedFor: 'Marketing promotions, recurring updates' }
    ],
    faqs: [
      { question: 'Do we need an official Meta Business Manager?', answer: 'Yes, we assist you through the complete official Meta verification and phone registration process.' },
      { question: 'Will our phone number be blocked?', answer: 'No. By using the official WhatsApp Business Cloud API with Meta-approved templates and opt-in standards, your account remains 100% compliant.' }
    ]
  },
  {
    id: 'data-analytics',
    slug: 'data-analytics',
    pillarId: 'ai-data-automation',
    pillarName: 'AI, Data & Automation',
    title: 'Data Analytics & Business Intelligence',
    shortDesc: 'Data pipeline engineering, automated cleaning, executive dashboards, and predictive insights.',
    oneLinePromise: 'Transform disjointed spreadsheets into automated, real-time executive dashboards that guide business decisions.',
    whatWeDeliver: [
      { title: 'Automated ETL Pipelines', description: 'Extract, clean, and consolidate disparate data sources into a central analytical warehouse.' },
      { title: 'Executive BI Dashboards', description: 'Interactive visual dashboards (Power BI, Tableau, or custom web) tracking key performance metrics.' },
      { title: 'Cohort & Funnel Analysis', description: 'Granular tracking of user retention, acquisition costs, lifetime value, and drop-off bottlenecks.' },
      { title: 'Automated Scheduled Reports', description: 'Daily, weekly, or monthly executive summaries delivered straight to email and Slack.' }
    ],
    process: [
      { step: 1, title: 'Data Audit & KPI Definition', description: 'Identifying key revenue drivers, metrics, and data source integrity.' },
      { step: 2, title: 'Data Warehouse Architecture', description: 'Designing clean dimensional models and automated ingestion cron jobs.' },
      { step: 3, title: 'Dashboard Prototyping', description: 'Building visual mockups and iterative chart reviews with stakeholders.' },
      { step: 4, title: 'Deployment & Auto-Refresh', description: 'Setting up automated refresh schedules, alerting thresholds, and documentation.' }
    ],
    tools: ['Python', 'SQL', 'PostgreSQL', 'Power BI', 'Tableau', 'Pandas', 'Metabase', 'BigQuery'],

    engagementModels: [
      { type: 'BI Dashboard Sprint', typicalDuration: '3 - 6 Weeks', pricingEstimate: '₹1,89,000 – ₹4,73,000', description: 'Consolidation of up to 4 data sources into interactive executive dashboards.', recommendedFor: 'SMEs needing transparent sales and operational visibility' },
      { type: 'Fractional Data Analyst', typicalDuration: 'Monthly Retainer', pricingEstimate: '₹1,29,000 / Month', description: 'Ongoing monthly reporting, ad-hoc queries, and predictive modeling.', recommendedFor: 'Growth-stage companies' }
    ],
    faqs: [
      { question: 'Can you work with Google Sheets, SQL databases, and Stripe together?', answer: 'Yes! We build automated connectors that consolidate all your payment, database, and spreadsheet records into one synchronized view.' }
    ]
  },
  {
    id: 'research-documentation',
    slug: 'research-documentation',
    pillarId: 'research-services',
    pillarName: 'Research Services',
    title: 'Research Documentation & Technical Writing',
    shortDesc: 'Rigorous academic papers, literature reviews, thesis technical support, and Mendeley formatting.',
    oneLinePromise: 'Publishable research documentation formulated with mathematical rigor and academic standards.',
    whatWeDeliver: [
      { title: 'Comprehensive Literature Reviews', description: 'Systematic surveys synthesizing state-of-the-art papers, methodologies, and benchmarks.' },
      { title: 'Mendeley & IEEE/ACM Formatting', description: 'Impeccable typesetting adhering strictly to target conference and journal publication guidelines.' },
      { title: 'Technical Methodology Formulation', description: 'Formal mathematical formulation of algorithms, proofs, pseudo-code, and system architectures.' },
      { title: 'Citation & Reference Management', description: 'Clean BibTeX bibliographies, plagiarism screening, and citation integrity checks.' }
    ],
    process: [
      { step: 1, title: 'Topic Brief & Target Venue', description: 'Clarifying the research scope, core hypotheses, and specific journal or conference requirements.' },
      { step: 2, title: 'Literature Synthesis', description: 'Exhaustive exploration and comparative matrix of current state-of-the-art work.' },
      { step: 3, title: 'Drafting & Mathematical Modeling', description: 'Iterative drafting of abstract, methodology, experimental results, and discussion.' },
      { step: 4, title: 'Peer Review & Proofing', description: 'Rigorous technical proofreading, formatting verification, and final submission prep.' }
    ],
    tools: ['Mendeley', 'Overleaf', 'BibTeX', 'Zotero', 'Python', 'Jupyter', 'Grammarly Academic'],

    engagementModels: [
      { type: 'Full Paper Package', typicalDuration: '3 - 6 Weeks', pricingEstimate: '₹1,03,000 – ₹3,01,000', description: 'Comprehensive literature review, methodology drafting, Mendeley formatting, and revisions.', recommendedFor: 'Scholars, postgraduate researchers, corporate R&D' },
      { type: 'Technical Review & Formatting', typicalDuration: '1 - 2 Weeks', pricingEstimate: '₹52,000 – ₹1,03,000', description: 'Camera-ready Mendeley typesetting, bibliography standardization, and clarity polish.', recommendedFor: 'Pre-submission conference papers' }
    ],
    faqs: [
      { question: 'Do you ensure academic integrity and originality?', answer: 'Absolutely. All documentation is developed with 100% genuine research citations, original writing, and zero uncredited duplication.' },
      { question: 'Can you work with complex mathematical notation?', answer: 'Yes, our team specializes in formal computer science, machine learning mathematics, optimization formulas, and discrete proofs.' }
    ]
  },
  {
    id: 'research-technical-implementation',
    slug: 'research-technical-implementation',
    pillarId: 'research-services',
    pillarName: 'Research Services',
    title: 'Research Technical Implementation',
    shortDesc: 'Reproducing published research papers, algorithmic experiments, custom datasets, and benchmark replication.',
    oneLinePromise: 'Turn theoretical research papers into verifiable, runnable code with reproducible benchmarks.',
    whatWeDeliver: [
      { title: 'Paper Code Reproduction', description: 'Rebuilding model architectures and pipelines described in arXiv, NeurIPS, CVPR, and ICML papers.' },
      { title: 'Dataset Preparation & Curation', description: 'Data scraping, cleaning, tokenization, augmentation, and benchmark train/val splits.' },
      { title: 'Empirical Benchmark Replication', description: 'Verifying published metrics against standardized baseline models under controlled seeds.' },
      { title: 'Interactive Demo & Visualization', description: 'Streamlit or Gradio interactive web playgrounds demonstrating model inferences.' }
    ],
    process: [
      { step: 1, title: 'Paper Deconstruction', description: 'Analyzing equations, hyperparameters, loss functions, and architectural nuances.' },
      { step: 2, title: 'Baseline Reproduction', description: 'Implementing code in PyTorch, establishing data pipelines, and running unit verifications.' },
      { step: 3, title: 'GPU Training & Optimization', description: 'Executing full training runs, learning rate schedules, and checkpointing.' },
      { step: 4, title: 'Report & Demo Delivery', description: 'Generating comprehensive comparative metric charts and clean Jupyter notebooks.' }
    ],
    tools: ['PyTorch', 'TensorFlow', 'CUDA', 'Python', 'Jupyter', 'Weights & Biases', 'Hugging Face', 'Gradio'],

    engagementModels: [
      { type: 'Reproduction Sprint', typicalDuration: '3 - 6 Weeks', pricingEstimate: '₹1,72,000 – ₹4,73,000', description: 'Clean reproduction of a published paper’s algorithms and evaluation on target benchmarks.', recommendedFor: 'R&D labs, thesis students, algorithmic trading teams' },
      { type: 'Custom Extension & Innovation', typicalDuration: '6 - 10 Weeks', pricingEstimate: '₹3,44,000 – ₹7,74,000', description: 'Extending a base paper with novel loss functions, custom architectures, or new datasets.', recommendedFor: 'Novel publication submissions' }
    ],
    faqs: [
      { question: 'What if the authors did not release their original code?', answer: 'We specialize in reproducing algorithms directly from mathematical descriptions, pseudocode, and hyperparameter tables provided in the paper text.' }
    ]
  },
  {
    id: 'digital-marketing',
    slug: 'digital-marketing',
    pillarId: 'growth-marketing',
    pillarName: 'Growth & Marketing',
    title: 'Performance Digital Marketing',
    shortDesc: 'Full-funnel digital strategy, paid acquisition campaigns, analytics tracking, and conversion optimization.',
    oneLinePromise: 'Data-driven campaigns engineered to generate measurable customer acquisition and high return on ad spend (ROAS).',
    whatWeDeliver: [
      { title: 'Multi-Channel Paid Ads', description: 'High-intent Google Search, Meta, and LinkedIn ad campaigns optimized for CPA.' },
      { title: 'Conversion Rate Optimization (CRO)', description: 'A/B testing landing page headlines, layout, CTAs, and frictionless forms.' },
      { title: 'Full-Funnel Analytics & Tracking', description: 'Server-side GTM, GA4 events, Meta Pixel, and attribution modeling.' },
      { title: 'Retargeting & Lifecycle Marketing', description: 'Automated email sequences and retargeting ads recovering abandoned leads.' }
    ],
    process: [
      { step: 1, title: 'Funnel & Audience Audit', description: 'Analyzing audience intent, competitor positioning, and historical campaign data.' },
      { step: 2, title: 'Creative & Copy Formulation', description: 'Producing targeted ad creatives, compelling hooks, and high-converting landing pages.' },
      { step: 3, title: 'Launch & Statistical Testing', description: 'Running structured A/B tests to identify winning headlines, creatives, and audiences.' },
      { step: 4, title: 'Scale & ROAS Optimization', description: 'Reallocating budget to highest ROI channels while driving down customer acquisition cost.' }
    ],
    tools: ['Google Ads', 'Meta Ads Manager', 'GA4', 'Google Tag Manager', 'HubSpot', 'Hotjar'],

    engagementModels: [
      { type: 'Monthly Growth Retainer', typicalDuration: 'Ongoing (3 Mo. Min)', pricingEstimate: '₹1,03,000 – ₹2,58,000 / Mo', description: 'Complete campaign management, creative testing, analytics, and weekly reporting.', recommendedFor: 'Scaling businesses looking for steady lead velocity' },
      { type: 'Funnel & Audit Sprint', typicalDuration: '2 Weeks', pricingEstimate: '₹77,000', description: 'Comprehensive teardown of your current ad campaigns, tracking, and conversion leaks.', recommendedFor: 'Brands with underperforming ads' }
    ],
    faqs: [
      { question: 'What ad platforms do you specialize in?', answer: 'We manage Google Search & Display, Meta (Instagram & Facebook), LinkedIn Ads for B2B, and YouTube ads.' }
    ]
  },
  {
    id: 'seo',
    slug: 'seo',
    pillarId: 'growth-marketing',
    pillarName: 'Growth & Marketing',
    title: 'Search Engine Optimization (SEO)',
    shortDesc: 'Technical SEO audits, high-intent keyword mapping, on-page optimization, and authoritative backlink strategies.',
    oneLinePromise: 'Dominate organic search rankings to generate sustainable, high-intent traffic month after month.',
    whatWeDeliver: [
      { title: 'Technical SEO Audit & Fixes', description: 'Resolving Core Web Vitals, indexability, canonicalization, and schema markup.' },
      { title: 'Keyword Mapping & Content Strategy', description: 'Targeting commercial-intent keywords that your ideal buyers are actively searching for.' },
      { title: 'On-Page Content Optimization', description: 'Restructuring headings, meta titles, internal linking, and semantic topical clusters.' },
      { title: 'Local SEO & Google Business Profile', description: 'Dominating local search results across target regional clusters and map packs.' }
    ],
    process: [
      { step: 1, title: 'Technical Crawl & Competitive Gap', description: 'Uncovering crawl errors, toxic links, slow pages, and competitor ranking gaps.' },
      { step: 2, title: 'On-Page Remediation', description: 'Rewriting titles, descriptions, schema tags, and improving page speed scores to 90+.' },
      { step: 3, title: 'Content Cluster Production', description: 'Publishing authoritative pillar guides and long-tail service landing pages.' },
      { step: 4, title: 'Rank Tracking & Reporting', description: 'Bi-weekly ranking reports, organic click telemetry, and continuous algorithm adaptations.' }
    ],
    tools: ['Ahrefs', 'SEMrush', 'Google Search Console', 'Screaming Frog', 'PageSpeed Insights', 'Schema.org'],

    engagementModels: [
      { type: 'Comprehensive Technical Audit', typicalDuration: '1 - 2 Weeks', pricingEstimate: '₹56,000 – ₹1,03,000', description: 'Deep-dive audit with prioritized action items for your developers to implement.', recommendedFor: 'Websites suffering organic traffic drops' },
      { type: 'Full Monthly SEO Growth', typicalDuration: '6 Months Retainer', pricingEstimate: '₹86,000 – ₹2,15,000 / Mo', description: 'End-to-end technical optimization, content production, link acquisition, and rank monitoring.', recommendedFor: 'Long-term organic search dominance' }
    ],
    faqs: [
      { question: 'How quickly can we see ranking improvements?', answer: 'Technical fixes and indexing updates usually show initial ranking shifts within 3 to 6 weeks, with compounding organic traffic growth visible across 3 to 6 months.' }
    ]
  },
  {
    id: 'social-media-marketing',
    slug: 'social-media-marketing',
    pillarId: 'growth-marketing',
    pillarName: 'Growth & Marketing',
    title: 'Social Media Marketing & Management',
    shortDesc: 'Strategic content calendar creation, community engagement, brand voice curation, and viral organic reach.',
    oneLinePromise: 'Build an authoritative social presence that commands attention and drives community loyalty.',
    whatWeDeliver: [
      { title: 'Strategic Content Calendar', description: 'Monthly pre-planned themes, hooks, carousels, text posts, and short-form video concepts.' },
      { title: 'Brand Identity & Visual Posts', description: 'Consistent aesthetic graphics adhering to brand guidelines and typography.' },
      { title: 'Active Community Engagement', description: 'Proactive comment replies, DM management, and industry conversation participation.' },
      { title: 'Performance Analytics', description: 'Monthly breakdown of impressions, engagement rates, profile clicks, and lead referrals.' }
    ],
    process: [
      { step: 1, title: 'Brand Voice & Audience Persona', description: 'Defining your tone of voice, visual pillars, and competitor differentiation.' },
      { step: 2, title: 'Monthly Content Batching', description: 'Designing and copywriting 15-30 strategic posts for pre-approval.' },
      { step: 3, title: 'Scheduling & Active Management', description: 'Publishing at optimal engagement hours and driving discussion.' },
      { step: 4, title: 'Monthly Retrospective', description: 'Reviewing top-performing formats and refining subsequent month strategy.' }
    ],
    tools: ['Figma', 'Buffer', 'Hootsuite', 'Meta Business Suite', 'Canva', 'LinkedIn Creator'],

    engagementModels: [
      { type: 'Monthly Social Management', typicalDuration: 'Monthly Retainer', pricingEstimate: '₹69,000 – ₹1,55,000 / Mo', description: '16 to 24 customized posts per month, copywriting, scheduling, and community engagement.', recommendedFor: 'Brands wanting a consistent, active presence' }
    ],
    faqs: [
      { question: 'Do we review posts before they are published?', answer: 'Yes! We batch deliver the full content calendar 7 days ahead for your team’s review and sign-off.' }
    ]
  },
  {
    id: 'ui-ux-design',
    slug: 'ui-ux-design',
    pillarId: 'design-creative',
    pillarName: 'Design & Creative',
    title: 'UI/UX Design & Design Systems',
    shortDesc: 'User research, wireframing, high-fidelity prototypes, micro-interactions, and scalable design tokens in Figma.',
    oneLinePromise: 'Transform complex user flows into frictionless, beautiful digital interfaces that convert.',
    whatWeDeliver: [
      { title: 'User Research & Journey Mapping', description: 'User personas, heuristic evaluations, and friction-point elimination.' },
      { title: 'Figma High-Fidelity Wireframes', description: 'Pixel-perfect responsive mockups for desktop, tablet, and mobile breakpoints.' },
      { title: 'Interactive Prototypes', description: 'Clickable interactive flows simulating real application logic for stakeholder testing.' },
      { title: 'Comprehensive Design Systems', description: 'Reusable typography tokens, atomic components, color palettes, and dev guidelines.' }
    ],
    process: [
      { step: 1, title: 'Discovery & Heuristic Audit', description: 'Analyzing existing usability roadblocks and benchmark competitor interfaces.' },
      { step: 2, title: 'Low-Fidelity Wireframes', description: 'Mapping information architecture and structural page layouts.' },
      { step: 3, title: 'High-Fidelity Visual Design', description: 'Applying color harmony, typographic hierarchy, and custom component states.' },
      { step: 4, title: 'Developer Handoff', description: 'Annotated Figma files with exact spacing, assets, and responsive auto-layout.' }
    ],
    tools: ['Figma', 'FigJam', 'Tailwind CSS', 'Framer', 'Adobe Creative Suite'],

    engagementModels: [
      { type: 'Full Product Design Sprint', typicalDuration: '3 - 6 Weeks', pricingEstimate: '₹2,06,000 – ₹5,16,000', description: 'Complete end-to-end design for up to 15 core screens including design system.', recommendedFor: 'SaaS products, mobile apps, customer portals' },
      { type: 'Design System Package', typicalDuration: '2 - 3 Weeks', pricingEstimate: '₹1,55,000 – ₹3,01,000', description: 'Atomic component library, design tokens, and documentation for internal dev teams.', recommendedFor: 'Engineering teams scaling their product' }
    ],
    faqs: [
      { question: 'Do you hand off organized Figma files for our developers?', answer: 'Yes! Our Figma files use Auto-Layout, structured variants, design tokens, and clean naming conventions so developers can build quickly without guesswork.' }
    ]
  },
  {
    id: 'graphic-marketing',
    slug: 'graphic-marketing',
    pillarId: 'design-creative',
    pillarName: 'Design & Creative',
    title: 'Graphic Design & Brand Marketing',
    shortDesc: 'Brand identity packages, vector logo systems, marketing collateral, brochures, pitch decks, and ad banners.',
    oneLinePromise: 'Distinctive visual branding that elevates credibility and leaves a lasting impression.',
    whatWeDeliver: [
      { title: 'Complete Brand Identity Kits', description: 'Vector logos, color guidelines, typography rules, and brand voice guidelines.' },
      { title: 'High-Converting Ad Creatives', description: 'Scroll-stopping banner ads in all standard formats for Meta, Google, and LinkedIn.' },
      { title: 'Investor Pitch Decks & Proposals', description: 'Visually compelling slide decks engineered to communicate complex ideas to investors.' },
      { title: 'Print & Digital Collateral', description: 'Brochures, one-pagers, business cards, and trade show roll-ups.' }
    ],
    process: [
      { step: 1, title: 'Creative Brief & Moodboard', description: 'Establishing brand attributes, visual themes, and competitive positioning.' },
      { step: 2, title: 'Concept Exploration', description: 'Presenting distinct creative directions and logo variations.' },
      { step: 3, title: 'Refinement & Asset Generation', description: 'Polishing selected concept across all collateral variations.' },
      { step: 4, title: 'Master Asset Handover', description: 'Delivering SVG, EPS, PNG, PDF, and source design files with usage manual.' }
    ],
    tools: ['Adobe Illustrator', 'Photoshop', 'Figma', 'InDesign'],

    engagementModels: [
      { type: 'Complete Brand Identity Kit', typicalDuration: '2 - 4 Weeks', pricingEstimate: '₹1,03,000 – ₹2,41,000', description: 'Primary & secondary logos, typography system, color palette, social templates, and brand book.', recommendedFor: 'New startups and company rebrands' },
      { type: 'Ad Creative Batch', typicalDuration: '1 Week', pricingEstimate: '₹43,000 – ₹86,000', description: 'Batch of 10-15 high-converting ad variations for digital campaigns.', recommendedFor: 'Marketing campaigns' }
    ],
    faqs: [
      { question: 'Will we receive vector source files?', answer: 'Yes, we provide all source files in vector AI, EPS, SVG, and high-resolution PNG formats.' }
    ]
  },
  {
    id: 'video-editing',
    slug: 'video-editing',
    pillarId: 'design-creative',
    pillarName: 'Design & Creative',
    title: 'Video Editing & Motion Graphics',
    shortDesc: 'Viral short-form reels, high-production product promos, motion explainer videos, and animated subtitles.',
    oneLinePromise: 'Dynamic motion and storytelling that hooks viewers in the first 3 seconds and boosts engagement.',
    whatWeDeliver: [
      { title: 'Short-Form Reels & Shorts', description: 'Paced reels for Instagram, YouTube Shorts, and TikTok with motion graphics and dynamic subtitles.' },
      { title: 'Product Explainer Videos', description: 'Clean 2D motion graphics and UI screencast animations explaining your software features.' },
      { title: 'Corporate Promos & Case Stories', description: 'Polished client testimonials, interview cuts, and high-end brand reels.' },
      { title: 'Sound Design & Color Grading', description: 'Immersive sound effects, voice leveling, and cinematic color correction.' }
    ],
    process: [
      { step: 1, title: 'Footage Ingestion & Script Review', description: 'Organizing raw footage, audio tracks, and storyboard flow.' },
      { step: 2, title: 'Rough Cut & Pacing', description: 'Trimming filler, establishing narrative tempo, and structuring hooks.' },
      { step: 3, title: 'Motion Graphics & Subtitles', description: 'Adding custom typography animations, B-roll, and SFX.' },
      { step: 4, title: 'Final Polish & Multi-Format Render', description: 'Delivering 9:16 vertical and 16:9 widescreen formats ready for platform upload.' }
    ],
    tools: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve', 'CapCut Pro'],

    engagementModels: [
      { type: 'Short-Form Video Pack (8 Reels)', typicalDuration: '2 Weeks', pricingEstimate: '₹60,000 – ₹1,20,000', description: '8 fully edited short-form videos with custom captions, sound effects, and color grading.', recommendedFor: 'Founders, influencers, creators' },
      { type: 'Product Motion Explainer (60s)', typicalDuration: '2 - 3 Weeks', pricingEstimate: '₹1,03,000 – ₹2,15,000', description: 'Custom 2D motion graphics video explaining your software value proposition.', recommendedFor: 'SaaS landing pages and sales pitches' }
    ],
    faqs: [
      { question: 'Can you work with raw recorded phone or zoom footage?', answer: 'Yes! We enhance audio clarity, remove background hiss, apply color correction, and make your footage look studio-grade.' }
    ]
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'piyush-pandey',
    name: 'Piyush Pandey',
    role: 'Lead AI/ML Architect & Research Systems',
    specialization: 'Large Language Models, Deep Learning & Paper Replication',
    bio: 'Piyush leads the AI, Machine Learning, and Research Engineering division at NeuralNexus Solutions. He specializes in deploying production LLMs, reproducing complex arXiv research papers into clean code, and fine-tuning custom domain models.',
    avatar: '/piyush.png',
    skills: ['Python', 'PyTorch', 'TensorFlow', 'LLMs & RAG', 'Computer Vision', 'FastAPI', 'Research Reproducibility', 'CUDA', 'GenAI and Model Deployment on Cloud (AWS, Azure, DevOps)'],
    contributedProjects: ['multimodal-ai-research', 'whatsapp-commerce-bot']
  },
  {
    id: 'pardeep-kumar-singh',
    name: 'Pardeep Kumar Singh',
    role: 'Lead Software & Cloud Architect',
    specialization: 'Scalable Full-Stack Systems, ERP Architecture & DevOps',
    bio: 'Pardeep oversees full-stack software development and cloud operations. He has architected enterprise ERPs, microservices, and database systems that process millions of daily transactions with 99.99% uptime.',
    avatar: '/pardeep.png',
    skills: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Docker', 'AWS Cloud', 'ERP Modules', 'System Security'],
    contributedProjects: ['enterprise-erp', 'telehealth-platform']
  },
  {
    id: 'himanshu-saini',
    name: 'Himanshu Saini',
    role: 'Full-Stack & WhatsApp Automation Specialist',
    specialization: 'WhatsApp Cloud API, Webhooks, CRM Pipelines & Mobile Engineering',
    bio: 'Himanshu architects high-converting conversational flows and automated messaging pipelines. He bridges backend CRM systems with WhatsApp Business APIs to drive instant lead conversions and support automation.',
    avatar: '/himanshu.jpeg',
    skills: ['WhatsApp Cloud API', 'TypeScript', 'React Native', 'Node.js', 'Webhooks', 'Lead Pipelines', 'PostgreSQL', 'Tailwind CSS'],
    contributedProjects: ['whatsapp-commerce-bot', 'telehealth-platform']
  },
  {
    id: 'tannu-antil',
    name: 'Tannu Antil',
    role: 'Business Analyst & ML Enthusiast',
    specialization: 'Analytics, Machine Learning, & Data Storytelling',
    bio: 'Specializes in transforming messy data into actionable insights through analytics, machine learning, and data storytelling. Builds practical solutions that connect data, technology, and real-world business decisions.',
    avatar: '/tannu.png',
    skills: ['Python', 'SQL', 'Machine Learning', 'Power BI', 'Excel', 'EDA', 'Data Storytelling', 'Business Insights'],
    contributedProjects: ['multimodal-ai-research', 'enterprise-erp']
  },
  {
    id: 'pintu-singh',
    name: 'Pintu Singh',
    role: 'Senior Video Editor & Motion Graphics Designer',
    specialization: 'Story-driven editing, motion graphics, color grading, typography',
    bio: 'Creates cinematic, high-impact videos that turn ideas into engaging visual stories. Specializes in story-driven editing, motion graphics, color grading, typography, and platform-optimized content for brands, creators, and digital platforms.',
    avatar: '/pintu.png',
    skills: ['Video Editing', 'Motion Graphics', 'Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Color Grading', 'CapCut', 'Typography'],
    contributedProjects: ['b2b-saas-growth', 'fintech-design-system']
  }
];



export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'whatsapp-automation-guide-2026',
    slug: 'whatsapp-automation-guide-2026',
    title: 'How to Automate Customer Support and Sales with the WhatsApp Cloud API',
    category: 'Automation',
    readTime: '6 min read',
    date: 'March 2026',
    author: 'Himanshu Saini',
    summary: 'A step-by-step technical guide to integrating official WhatsApp Business APIs, configuring webhooks, and syncing leads to your CRM.',
    keyTakeaways: [
      'WhatsApp messages have a 98% open rate compared to 20% for standard marketing emails.',
      'Using the official Cloud API eliminates the risk of number blocking associated with unofficial scraping bots.',
      'RAG-grounded conversational flows handle up to 80% of repetitive customer questions without human intervention.'
    ],
    relatedServiceSlug: 'whatsapp-automation',
    content: [
      'Customer acquisition costs continue to climb across digital ad channels. In contrast, messaging platforms—specifically WhatsApp—present an untapped goldmine for direct customer engagement and conversion.',
      'By transitioning from manual response desks to an automated WhatsApp Business Cloud API pipeline, companies can respond within milliseconds, verify order status, collect lead parameters, and pass high-ticket prospects to human agents seamlessly.',
      'In this technical overview, we explore webhook architecture, template approval strategies, CRM integration via Node.js, and how to maintain compliance with Meta’s messaging policies.'
    ]
  },
  {
    id: 'reproducing-ai-research-papers',
    slug: 'reproducing-ai-research-papers',
    title: 'The Engineering Discipline of Reproducing AI Research Papers into Production Code',
    category: 'AI and ML',
    readTime: '8 min read',
    date: 'February 2026',
    author: 'Piyush Pandey',
    summary: 'Bridging the chasm between theoretical machine learning literature and deterministic, low-latency production microservices.',
    keyTakeaways: [
      'Over 60% of published academic papers omit critical hyperparameter schedules or data preprocessing tricks.',
      'Containerized inference environments and deterministic random seeds are mandatory for verifiable benchmark replication.',
      'Quantization (INT8/FP8) and TensorRT compilation reduce model hosting costs by up to 70%.'
    ],
    relatedServiceSlug: 'research-technical-implementation',
    content: [
      'Every week, hundreds of promising deep learning papers are uploaded to arXiv. Yet, software and product teams frequently struggle to replicate the reported benchmark metrics inside their own production stacks.',
      'Our team deconstructs academic papers into three core engineering layers: mathematical validation, dataset preprocessing parity, and GPU-optimized training loops.',
      'We share practical methodologies for handling missing codebases, debugging gradient vanishing in novel attention mechanisms, and benchmarking with rigorous confidence intervals.'
    ]
  },
  {
    id: 'erp-migration-strategies',
    slug: 'erp-migration-strategies',
    title: 'Why Growing Businesses Are Abandoning Legacy ERPs for Custom Web Solutions',
    category: 'Software and Apps',
    readTime: '7 min read',
    date: 'January 2026',
    author: 'Pardeep Kumar Singh',
    summary: 'Evaluating the true total cost of ownership: high SaaS per-seat licenses vs. bespoke cloud-native enterprise software.',
    keyTakeaways: [
      'Legacy software vendors charge between ₹13,000 to ₹26,000 per user per month in recurrent seat licenses.',
      'A custom modular ERP pays for itself within 12 to 18 months while matching the exact workflow of the business.',
      'Modern web stacks (Next.js, PostgreSQL, Docker) offer enterprise-grade scalability and sub-second query performance.'
    ],
    relatedServiceSlug: 'erp-development',
    content: [
      'Many growing manufacturing and logistics firms find themselves trapped by inflexible commercial ERP packages. Adding new warehouse fields or custom approval chains often takes months of expensive vendor consultants.',
      'By architecting custom modular ERP solutions, companies retain full ownership of their data schema, eliminate recurring licensing penalties, and integrate directly with local hardware such as barcode printers and weighing scales.'
    ]
  },
  {
    id: 'technical-seo-core-web-vitals',
    slug: 'technical-seo-core-web-vitals',
    title: 'The 2026 Technical SEO Checklist: Core Web Vitals, Schema, and Entity Optimization',
    category: 'Marketing and SEO',
    readTime: '5 min read',
    date: 'January 2026',
    author: 'Pintu Singh',
    summary: 'How modern search algorithms evaluate site performance, semantic schema, and topic authority to rank commercial pages.',
    keyTakeaways: [
      'Core Web Vitals scores above 90 directly correlate with lower bounce rates and higher crawl budget allocation.',
      'JSON-LD Schema markup helps search engines parse Organization, Service, and FAQ entities unambiguously.',
      'Long-tail programmatic pages targeting specific problem-solution pairs convert at 3x higher rates than generic landing pages.'
    ],
    relatedServiceSlug: 'seo',
    content: [
      'Search engine algorithms have evolved far beyond basic keyword density. Today, ranking requires immaculate technical foundations: sub-2.5s Largest Contentful Paint (LCP), zero Cumulative Layout Shift (CLS), and deep semantic entity markup.',
      'In this actionable breakdown, we inspect the exact optimizations we deploy across our client web applications to secure #1 rankings for commercial keywords.'
    ]
  }
];

export const PROCESS_STEPS = [
  {
    number: '01',
    name: 'Idea',
    tagline: 'Brainstorming & Concept Validation',
    description: 'We explore your vision, validate the market fit, and brainstorm technical approaches to turn your idea into a viable product.',
    deliverables: ['Concept validation report', 'High-level technical approach', 'Initial budget estimate']
  },
  {
    number: '02',
    name: 'Requirement Understand',
    tagline: 'Deep dive into objectives & constraints',
    description: 'We analyze your workflows, technical roadblocks, target audiences, and measurable business KPIs through an intensive discovery session.',
    deliverables: ['Requirements specification', 'Technical feasibility study', 'Risk analysis']
  },
  {
    number: '03',
    name: 'Design',
    tagline: 'Architecture, UX & milestone roadmap',
    description: 'We construct database schemas, wireframes, technical architecture diagrams, and a transparent sprint-by-sprint timeline with clear milestones.',
    deliverables: ['Figma wireframes & UX flows', 'Database & API schema', 'Fixed milestone plan']
  },
  {
    number: '04',
    name: 'Build',
    tagline: 'Agile sprints with live preview staging',
    description: 'Our senior engineers write clean, tested, and documented code in 2-week agile sprints, providing continuous staging links for your review.',
    deliverables: ['Weekly sprint releases', 'Live staging demo links', 'Code repository commits']
  },
  {
    number: '05',
    name: 'Intelligence',
    tagline: 'AI Integration & Smart Automation',
    description: 'We embed intelligent capabilities like custom LLMs, RAG pipelines, or automated workflows to give your product a massive competitive edge.',
    deliverables: ['Custom AI model integration', 'Data pipeline optimization', 'Intelligent workflows']
  },
  {
    number: '06',
    name: 'Launch',
    tagline: 'Production deployment with zero downtime',
    description: 'We manage domain configuration, cloud hosting provisioning, SSL security, database migration, and live production rollout.',
    deliverables: ['Cloud infrastructure setup', 'Production DNS & SSL configuration', 'Automated backup scripts']
  },
  {
    number: '07',
    name: 'Grow',
    tagline: 'Post-launch warranty & continuous scaling',
    description: 'We provide an included 30-day warranty for any technical fixes, complete documentation handover, and ongoing growth retainers to scale.',
    deliverables: ['Full source code & IP handover', 'Admin & staff training documentation', 'Ongoing SLA support']
  }
];

export const GLOBAL_FAQS = [
  {
    question: 'What makes NeuralNexus Solutions different from typical freelance agencies?',
    answer: 'We lead with deep technical depth in AI/ML, automation, and research implementation, complemented by seasoned full-stack software engineers, growth marketers, and UI/UX specialists. We do not use inflated claims or junior subcontracting: you collaborate directly with the five senior experts responsible for engineering your project.'
  },
  {
    question: 'Do we own 100% of the intellectual property and source code?',
    answer: 'Yes. Upon milestone completion and final payment, 100% of the custom source code, databases, design assets, and intellectual property belong exclusively to your company. We provide complete repository access and deployment documentation.'
  },
  {
    question: 'How do you handle project pricing and contracts?',
    answer: 'We offer transparent, predictable engagement models: Fixed-Scope Milestones (ideal for MVPs and defined projects), Monthly Retainers (for ongoing feature engineering or growth marketing), and Hourly Consulting. We do not believe in hidden fees or surprise invoices.'
  },
  {
    question: 'Can you work with our existing codebase or cloud infrastructure?',
    answer: 'Yes. We routinely audit, refactor, and extend existing web applications, databases, and microservices across AWS, Google Cloud, Azure, and private cloud servers.'
  },
  {
    question: 'How quickly can our project kick off?',
    answer: 'Following our initial discovery consultation and mutual agreement on the project scope, we can initiate sprint Phase 1 typically within 3 to 5 business days.'
  },
  {
    question: 'Do you sign non-disclosure agreements (NDAs)?',
    answer: 'Yes, we are pleased to execute mutual NDAs prior to reviewing proprietary company data, research hypotheses, or system architectures.'
  },
  {
    question: 'What communication channels do you use during project execution?',
    answer: 'We adapt to your preferred workflow: dedicated Slack/Discord channels, WhatsApp groups for urgent updates, weekly Google Meet sprint reviews, and shared Jira/Notion boards.'
  },
  {
    question: 'What post-launch support and guarantees do you provide?',
    answer: 'Every project includes a complimentary 30-day bug-fix warranty. For long-term peace of mind, we provide flexible monthly maintenance SLAs covering server monitoring, security patches, and feature upgrades.'
  }
];

export const INDUSTRIES_SERVED = [
  {
    name: 'Startups & SMEs',
    description: 'Fast-track your MVP from concept to market with scalable architecture and rapid validation.',
    features: ['Rapid prototype in 4-6 weeks', 'Investor pitch demos', 'Cost-effective cloud scaling']
  },
  {
    name: 'Education & Academics',
    description: 'Publishable research paper reproduction, university portals, and automated student enquiry pipelines.',
    features: ['Rigorous Mendeley formatting', 'Empirical benchmark replication', 'WhatsApp admissions chatbot']
  },
  {
    name: 'Healthcare & Clinics',
    description: 'HIPAA-compliant telemedicine, automated appointment booking on WhatsApp, and patient records.',
    features: ['Encrypted patient workflows', 'Automated reminders & billing', 'Instant prescription delivery']
  },
  {
    name: 'Retail & E-Commerce',
    description: 'Omnichannel inventory ERP, automated cart abandonment recovery, and WhatsApp commerce.',
    features: ['Real-time stock across branches', 'Conversational catalog ordering', '98% open-rate broadcasts']
  },
  {
    name: 'Corporate R&D Labs',
    description: 'Translating complex algorithms and theoretical computer science papers into runnable, tested code.',
    features: ['PyTorch/CUDA reproduction', 'Custom model fine-tuning', 'Patent & paper documentation']
  }
];
