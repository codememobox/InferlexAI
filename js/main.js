const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navLinksWrapper = document.querySelector("[data-nav-links]");
const navRouteButtons = Array.from(document.querySelectorAll("[data-route]"));
const pagePanels = Array.from(document.querySelectorAll("[data-page]"));
const quickJumpButtons = Array.from(document.querySelectorAll("[data-go-page]"));
const year = document.querySelector("[data-year]");
const languagePicker = document.querySelector("[data-language-picker]");
const languageToggle = document.querySelector("[data-language-toggle]");
const languageMenu = document.querySelector("[data-language-menu]");
const languageOptions = Array.from(document.querySelectorAll("[data-lang-option]"));
const currentLanguageLabel = document.querySelector("[data-current-language]");
const flowImage = document.querySelector("[data-flow-image]");
const i18nNodes = Array.from(document.querySelectorAll("[data-i18n]"));
const flowImageByLang = {
  en: "assets/images/flow-eng.png",
  "zh-CN": "assets/images/flow-chn-simple.png",
  "zh-TW": "assets/images/flow-chn-complex.png"
};

const translations = {
  en: {
    "a11y.skip": "Skip to content",
    "nav.introduction": "Introduction",
    "nav.services": "Services",
    "nav.approach": "Approach",
    "nav.outcomes": "Outcomes",
    "nav.contact": "Contact",
    "common.partner": "Partner with Us",
    "common.explore": "Explore Our Solutions",
    "intro.heroEyebrow": "Enterprise AI consulting for high-stakes operators",
    "intro.heroTitle": "AI systems engineered for measurable enterprise advantage.",
    "intro.heroCopy": "InferlexAI designs agentic workflows, industrial intelligence platforms, and bespoke AI software that move from executive strategy to production-grade deployment.",
    "intro.panelKicker": "Operating model",
    "intro.panelTitle": "Strategy, data, agents, and deployment in one integrated delivery loop.",
    "intro.panelCopy": "From pilot architecture to production governance, every engagement is shaped around adoption, security, and business impact.",
    "intro.profileEyebrow": "Company profile",
    "intro.profileTitle": "Premium AI transformation for complex organizations.",
    "intro.profileCopy": "InferlexAI partners with enterprise teams to build end-to-end AI pipelines, customized LLM copilots, and decision intelligence products. Our work combines product-grade engineering with the boardroom clarity expected from top-tier consulting.",
    "services.eyebrow": "Services",
    "services.title": "Focused practices for AI-powered operating leverage.",
    "services.card1Title": "Industrial AI & Smart Manufacturing",
    "services.card1Copy": "Custom coding agents for machine tools, production line optimization, predictive maintenance, and machine learning systems that strengthen supply chain resilience.",
    "services.card2Title": "Enterprise Intelligence & BI",
    "services.card2Copy": "Executive dashboards, predictive revenue visualization, real-time market analytics, and modernized data infrastructure for faster leadership decisions.",
    "services.card3Title": "Agentic Workflows & Workforce Optimization",
    "services.card3Copy": "AI-driven resource allocation, back-office automation, employee management intelligence, and customized LLM copilots integrated across the enterprise.",
    "services.card4Title": "Custom AI Software Engineering",
    "services.card4Copy": "Secure RAG systems for proprietary corporate data and scalable AI applications delivered from prototype through production deployment.",
    "approach.eyebrow": "Approach",
    "approach.title": "From strategic ambition to deployed AI capability.",
    "approach.step1": "Discover",
    "approach.step1Title": "Map enterprise leverage points",
    "approach.step1Copy": "We identify workflows, data assets, and decision cycles where AI can produce measurable operational or revenue impact.",
    "approach.step2": "Design",
    "approach.step2Title": "Architect secure AI systems",
    "approach.step2Copy": "We define the data architecture, agent behavior, governance controls, and user experience before build work begins.",
    "approach.step3": "Deploy",
    "approach.step3Title": "Ship production-grade software",
    "approach.step3Copy": "We move beyond demos with hardened frontends, scalable pipelines, observability, and change management for adoption.",
    "approach.flowCaption": "Delivery flow linking discover, design, and deploy into one accountable implementation cycle.",
    "outcomes.eyebrow": "Projected Outcomes",
    "outcomes.title": "Program-level impact estimates you can plan against.",
    "outcomes.copy": "Indicative ranges below are based on benchmarked delivery patterns across manufacturing, enterprise operations, and data modernization programs.",
    "outcomes.m1Value": "8-15% OEE uplift",
    "outcomes.m1Label": "Factory throughput gain from AI-assisted machine optimization.",
    "outcomes.m2Value": "18-30% downtime reduction",
    "outcomes.m2Label": "Predictive maintenance programs reducing unplanned stoppages.",
    "outcomes.m3Value": "20-35% faster planning cycles",
    "outcomes.m3Label": "Automated reporting and forecasting for strategy teams.",
    "outcomes.m4Value": "15-25% manual workload reduction",
    "outcomes.m4Label": "Agentic copilots handling repetitive analysis and operations tasks.",
    "outcomes.m5Value": "2-4 month targeted payback",
    "outcomes.m5Label": "Focused AI pilots with clear cost-out or revenue-linked KPIs.",
    "outcomes.m6Value": "5-12% forecast accuracy improvement",
    "outcomes.m6Label": "Unified BI stack for demand, revenue, and supply risk prediction.",
    "contact.eyebrow": "Build with InferlexAI",
    "contact.title": "Ready to turn AI strategy into operational software?",
    "contact.copy": "Partner with a team built for enterprise-grade AI products, from first architecture session to secure deployment on your production stack.",
    "footer.copy": "All rights reserved."
  },
  "zh-CN": {
    "a11y.skip": "跳转到主要内容",
    "nav.introduction": "介绍",
    "nav.services": "服务",
    "nav.approach": "方法",
    "nav.outcomes": "预估产出",
    "nav.contact": "联系",
    "common.partner": "与我们合作",
    "common.explore": "查看解决方案",
    "intro.heroEyebrow": "面向关键业务场景的企业级 AI 咨询",
    "intro.heroTitle": "以可量化结果为目标的 AI 系统工程。",
    "intro.heroCopy": "InferlexAI 从战略到落地，为企业构建 Agentic 工作流、工业智能平台与定制化 AI 软件，确保方案可上线、可治理、可规模化。",
    "intro.panelKicker": "交付模型",
    "intro.panelTitle": "战略、数据、智能体与部署形成一体化闭环。",
    "intro.panelCopy": "从试点架构到生产治理，每个项目都围绕落地采用、系统安全和业务价值进行设计。",
    "intro.profileEyebrow": "公司定位",
    "intro.profileTitle": "面向复杂组织的高端 AI 转型伙伴。",
    "intro.profileCopy": "InferlexAI 与企业团队共建端到端 AI 流水线、定制化 LLM Copilot 和决策智能产品，用工程化交付能力匹配高层管理对业务结果的要求。",
    "services.eyebrow": "服务",
    "services.title": "聚焦可落地、可放大的 AI 业务能力。",
    "services.card1Title": "工业 AI 与智能制造",
    "services.card1Copy": "面向机床的定制编码智能体、产线优化、预测性维护，以及提升供应链韧性的机器学习系统。",
    "services.card2Title": "企业智能与商业分析",
    "services.card2Copy": "高层决策看板、营收预测可视化、实时市场分析以及数据基础设施现代化升级。",
    "services.card3Title": "Agentic 工作流与人效优化",
    "services.card3Copy": "基于 AI 的资源调度、后台自动化、员工管理优化，以及企业级定制 LLM Copilot 集成。",
    "services.card4Title": "定制 AI 软件工程",
    "services.card4Copy": "面向企业私有数据的安全 RAG 系统，以及从原型到生产的可扩展 AI 应用开发。",
    "approach.eyebrow": "方法",
    "approach.title": "从战略构想到生产级 AI 能力落地。",
    "approach.step1": "Discover",
    "approach.step1Title": "识别高杠杆业务场景",
    "approach.step1Copy": "定位最具价值的流程、数据资产与决策环节，明确 AI 应用优先级。",
    "approach.step2": "Design",
    "approach.step2Title": "设计安全可控的 AI 架构",
    "approach.step2Copy": "定义数据架构、智能体行为、治理机制和用户体验后再进入研发。",
    "approach.step3": "Deploy",
    "approach.step3Title": "交付生产级系统",
    "approach.step3Copy": "超越 Demo，构建可观测、可运维、可持续迭代的企业级 AI 软件。",
    "approach.flowCaption": "通过流程图将 Discover、Design、Deploy 串成统一交付链路。",
    "outcomes.eyebrow": "项目预估产出",
    "outcomes.title": "可用于业务规划的项目级影响预估。",
    "outcomes.copy": "以下区间为基于制造业、企业运营与数据平台升级项目的经验基线，实际结果随场景与执行成熟度变化。",
    "outcomes.m1Value": "OEE 提升 8-15%",
    "outcomes.m1Label": "通过机床优化与产线编排提升有效产能。",
    "outcomes.m2Value": "停机时间下降 18-30%",
    "outcomes.m2Label": "预测性维护降低非计划停机与故障成本。",
    "outcomes.m3Value": "计划周期加速 20-35%",
    "outcomes.m3Label": "自动化报表与预测缩短管理层决策时间。",
    "outcomes.m4Value": "人工工作量下降 15-25%",
    "outcomes.m4Label": "Agentic Copilot 接管重复分析与运营任务。",
    "outcomes.m5Value": "重点项目回收周期 2-4 个月",
    "outcomes.m5Label": "聚焦高价值 KPI 的试点更易形成可衡量回报。",
    "outcomes.m6Value": "预测准确率提升 5-12%",
    "outcomes.m6Label": "统一 BI 数据栈增强营收、需求与风险预测质量。",
    "contact.eyebrow": "与 InferlexAI 共建",
    "contact.title": "准备把 AI 战略变成真实生产系统了吗？",
    "contact.copy": "从首轮架构工作坊到生产部署，我们为你提供企业级 AI 产品化交付团队。",
    "footer.copy": "保留所有权利。"
  },
  "zh-TW": {
    "a11y.skip": "跳至主要內容",
    "nav.introduction": "介紹",
    "nav.services": "服務",
    "nav.approach": "方法",
    "nav.outcomes": "預估產出",
    "nav.contact": "聯絡",
    "common.partner": "與我們合作",
    "common.explore": "查看解決方案",
    "intro.heroEyebrow": "面向關鍵營運場景的企業級 AI 顧問",
    "intro.heroTitle": "以可量化成果為目標的 AI 系統工程。",
    "intro.heroCopy": "InferlexAI 從策略到落地，為企業打造 Agentic 工作流程、工業智慧平台與客製化 AI 軟體，確保方案可上線、可治理、可擴展。",
    "intro.panelKicker": "交付模型",
    "intro.panelTitle": "策略、資料、智能體與部署形成整合閉環。",
    "intro.panelCopy": "從試點架構到生產治理，每個專案皆圍繞採用率、安全性與商業價值進行設計。",
    "intro.profileEyebrow": "公司定位",
    "intro.profileTitle": "面向複雜組織的高端 AI 轉型夥伴。",
    "intro.profileCopy": "InferlexAI 與企業團隊共建端到端 AI 管線、客製化 LLM Copilot 與決策智慧產品，以工程化交付能力回應管理層對成果的要求。",
    "services.eyebrow": "服務",
    "services.title": "聚焦可落地、可擴大的 AI 業務能力。",
    "services.card1Title": "工業 AI 與智慧製造",
    "services.card1Copy": "面向機床的客製編碼智能體、產線優化、預測性維護，以及提升供應鏈韌性的機器學習系統。",
    "services.card2Title": "企業智慧與商業分析",
    "services.card2Copy": "高層決策儀表板、營收預測視覺化、即時市場分析與資料基礎設施現代化升級。",
    "services.card3Title": "Agentic 工作流程與人效優化",
    "services.card3Copy": "以 AI 驅動的資源調度、後台自動化、員工管理優化，以及企業級客製 LLM Copilot 整合。",
    "services.card4Title": "客製 AI 軟體工程",
    "services.card4Copy": "面向企業私有資料的安全 RAG 系統，以及從原型到生產的可擴展 AI 應用開發。",
    "approach.eyebrow": "方法",
    "approach.title": "從策略構想到生產級 AI 能力落地。",
    "approach.step1": "Discover",
    "approach.step1Title": "辨識高槓桿商業場景",
    "approach.step1Copy": "鎖定最具價值的流程、資料資產與決策環節，明確 AI 導入優先順序。",
    "approach.step2": "Design",
    "approach.step2Title": "設計安全可控的 AI 架構",
    "approach.step2Copy": "先定義資料架構、智能體行為、治理機制與使用者體驗，再進入開發階段。",
    "approach.step3": "Deploy",
    "approach.step3Title": "交付生產級系統",
    "approach.step3Copy": "超越 Demo，建構可觀測、可維運、可持續迭代的企業級 AI 軟體。",
    "approach.flowCaption": "以流程圖串聯 Discover、Design、Deploy，形成一致可追責的交付鏈路。",
    "outcomes.eyebrow": "專案預估產出",
    "outcomes.title": "可用於營運規劃的專案級影響預估。",
    "outcomes.copy": "以下區間基於製造、企業營運與資料平台升級專案的經驗基線，實際成果依場景與執行成熟度而定。",
    "outcomes.m1Value": "OEE 提升 8-15%",
    "outcomes.m1Label": "透過機台優化與產線編排提升有效產能。",
    "outcomes.m2Value": "停機時間下降 18-30%",
    "outcomes.m2Label": "預測性維護降低非計畫停機與故障成本。",
    "outcomes.m3Value": "規劃週期加速 20-35%",
    "outcomes.m3Label": "自動化報表與預測縮短管理層決策時間。",
    "outcomes.m4Value": "人工工作量下降 15-25%",
    "outcomes.m4Label": "Agentic Copilot 接管重複分析與營運工作。",
    "outcomes.m5Value": "重點專案回收期 2-4 個月",
    "outcomes.m5Label": "聚焦高價值 KPI 的試點更容易形成可衡量回報。",
    "outcomes.m6Value": "預測準確率提升 5-12%",
    "outcomes.m6Label": "統一 BI 資料棧提升營收、需求與風險預測品質。",
    "contact.eyebrow": "與 InferlexAI 共建",
    "contact.title": "準備把 AI 策略轉化為實際生產系統了嗎？",
    "contact.copy": "從第一場架構工作坊到上線部署，我們提供企業級 AI 產品化交付團隊。",
    "footer.copy": "版權所有。"
  }
};

const currentYear = new Date().getFullYear();
if (year) {
  year.textContent = String(currentYear);
}

const closeMobileMenu = () => {
  if (!navToggle || !navLinksWrapper) return;
  navToggle.setAttribute("aria-expanded", "false");
  navLinksWrapper.classList.remove("is-open");
  document.body.classList.remove("nav-open");
};

const syncHeader = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

const revealInPanel = (panel) => {
  panel.querySelectorAll(".reveal").forEach((node) => {
    node.classList.add("is-visible");
  });
};

const setActivePage = (route, updateHash = true) => {
  const target = pagePanels.find((panel) => panel.dataset.page === route) || pagePanels[0];
  pagePanels.forEach((panel) => panel.classList.toggle("is-active", panel === target));
  navRouteButtons.forEach((button) => {
    const active = button.dataset.route === target.dataset.page;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-current", active ? "page" : "false");
  });
  revealInPanel(target);
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (updateHash) {
    window.location.hash = target.dataset.page;
  }
  closeMobileMenu();
};

const applyLanguage = (lang) => {
  const chosen = translations[lang] ? lang : "en";
  const dictionary = translations[chosen];
  i18nNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (!key) return;
    const text = dictionary[key];
    if (typeof text !== "string") return;
    node.textContent = text;
  });
  if (flowImage) {
    flowImage.src = flowImageByLang[chosen];
    flowImage.alt = dictionary["approach.flowCaption"];
  }
  if (currentLanguageLabel) {
    currentLanguageLabel.textContent = chosen === "en" ? "EN" : chosen === "zh-CN" ? "简体" : "繁體";
  }
  document.documentElement.lang = chosen;
  localStorage.setItem("inferlexai_lang", chosen);
};

const closeLanguageMenu = () => {
  if (!languagePicker || !languageToggle) return;
  languagePicker.classList.remove("is-open");
  languageToggle.setAttribute("aria-expanded", "false");
};

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

if (navToggle && navLinksWrapper) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navLinksWrapper.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("nav-open", !isOpen);
  });
}

navRouteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const route = button.dataset.route;
    if (!route) return;
    setActivePage(route);
  });
});

quickJumpButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const route = button.dataset.goPage;
    if (!route) return;
    setActivePage(route);
  });
});

if (languageToggle && languagePicker) {
  languageToggle.addEventListener("click", () => {
    const isOpen = languagePicker.classList.toggle("is-open");
    languageToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

languageOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const lang = option.dataset.langOption;
    if (!lang) return;
    applyLanguage(lang);
    closeLanguageMenu();
  });
});

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  if (languagePicker && !languagePicker.contains(target)) {
    closeLanguageMenu();
  }
});

const initialLanguage = localStorage.getItem("inferlexai_lang") || "en";
applyLanguage(initialLanguage);

const hashPage = window.location.hash.replace("#", "");
setActivePage(hashPage || "introduction", false);
