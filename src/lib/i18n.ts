export type Locale = "zh" | "en";

export interface TranslationDict {
  header: { install: string };
  hero: {
    title: string;
    subtitle: string;
    install: string;
    copied: string;
    viewScreenshots: string;
    viewGithub: string;
  };
  howItWorks: {
    title: string;
    subtitle: string;
    step1: string;
    step1Desc: string;
    step2: string;
    step2Desc: string;
    step3: string;
    step3Desc: string;
  };
  features: {
    title: string;
    subtitle: string;
    taste: string;
    tasteDesc: string;
    privacy: string;
    privacyDesc: string;
    models: string;
    modelsDesc: string;
    mcp: string;
    mcpDesc: string;
  };
  screenshots: {
    title: string;
    subtitle: string;
    prev: string;
    next: string;
    close: string;
  };
  install: {
    title: string;
    subtitle: string;
    copied: string;
  };
  usage: {
    title: string;
    subtitle: string;
    example: string;
    exampleDesc: string;
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
  footer: {
    madeBy: string;
    desc: string;
    copyright: string;
  };
}

const zh: TranslationDict = {
  header: {
    install: "安装",
  },
  hero: {
    title: "KORA — 真正懂你品味的 AI 编程助手",
    subtitle: "首个会学习你编程品味的 AI 终端代理。安装即用，智能协作。",
    install: "npm i -g command-code",
    copied: "已复制",
    viewScreenshots: "查看截图",
    viewGithub: "GitHub",
  },
  howItWorks: {
    title: "终端即起点",
    subtitle: "三步开启 AI 编程之旅",
    step1: "全局安装",
    step1Desc: "npm i -g command-code",
    step2: "启动 KORA",
    step2Desc: "终端输入 cmdc",
    step3: "智能协作",
    step3Desc: "KORA 自动学习你的代码品味",
  },
  features: {
    title: "首个学习你品味的编码代理",
    subtitle:
      "基于 Meta Neuro-Symbolic AI (Taste-1)，通过持续强化学习理解你的编码风格。",
    taste: "品味系统",
    tasteDesc: "Taste-1 模型持续学习你的编码偏好，越用越懂你",
    privacy: "隐私优先",
    privacyDesc: "代码仅在本地处理，不会用于模型训练",
    models: "多模型支持",
    modelsDesc: "灵活切换多种 AI 模型，适配不同任务",
    mcp: "MCP & 技能",
    mcpDesc: "通过 MCP 服务器和技能系统扩展无限可能",
  },
  screenshots: {
    title: "真实使用场景",
    subtitle: "看看 KORA 在终端中的实际表现",
    prev: "上一张",
    next: "下一张",
    close: "关闭",
  },
  install: {
    title: "一分钟上手",
    subtitle: "全局安装，终端中随时调用",
    copied: "已复制",
  },
  usage: {
    title: "从终端开始",
    subtitle: "安装后输入 cmdc，一切从简",
    example: 'cmdc "帮我修复这个 bug"',
    exampleDesc: "# KORA 将分析你的代码库并应用更改",
  },
  cta: {
    title: "准备好让 AI 理解你的代码品味了吗？",
    subtitle: "免费安装 · 隐私安全 · 持续进化",
    button: "立即安装",
  },
  footer: {
    madeBy: "KORA (Command Code)",
    desc: "首个会学习你编程品味的 AI 终端代理",
    copyright: "MIT License",
  },
};

const en: TranslationDict = {
  header: {
    install: "Install",
  },
  hero: {
    title: "KORA — The AI Coding Agent That Learns Your Taste",
    subtitle:
      "The first terminal-based AI agent that learns your coding style. Install once, collaborate instantly.",
    install: "npm i -g command-code",
    copied: "Copied",
    viewScreenshots: "Screenshots",
    viewGithub: "GitHub",
  },
  howItWorks: {
    title: "Start in Your Terminal",
    subtitle: "Get started in three simple steps",
    step1: "Install Globally",
    step1Desc: "npm i -g command-code",
    step2: "Launch KORA",
    step2Desc: "Run cmdc in your terminal",
    step3: "Collaborate",
    step3Desc: "KORA learns your taste automatically",
  },
  features: {
    title: "The First Agent That Learns Your Taste",
    subtitle:
      "Powered by Meta Neuro-Symbolic AI (Taste-1) with continuous reinforcement learning.",
    taste: "Taste System",
    tasteDesc: "Taste-1 learns your coding preferences and adapts over time",
    privacy: "Privacy First",
    privacyDesc: "Code stays local — never used for training",
    models: "Multi-Model",
    modelsDesc: "Switch between AI models for different tasks",
    mcp: "MCP & Skills",
    mcpDesc: "Extend capabilities with MCP servers and skills",
  },
  screenshots: {
    title: "See It in Action",
    subtitle: "Real KORA usage in the terminal",
    prev: "Previous",
    next: "Next",
    close: "Close",
  },
  install: {
    title: "Get Started in One Minute",
    subtitle: "Install globally, use anywhere in your terminal",
    copied: "Copied",
  },
  usage: {
    title: "From Your Terminal",
    subtitle: "After installing, just type cmdc",
    example: 'cmdc "fix this bug"',
    exampleDesc: "# KORA analyzes your codebase and applies changes",
  },
  cta: {
    title: "Ready to Let AI Understand Your Code Taste?",
    subtitle: "Free to install · Privacy safe · Continuously evolving",
    button: "Install Now",
  },
  footer: {
    madeBy: "KORA (Command Code)",
    desc: "The first terminal AI agent that learns your taste",
    copyright: "MIT License",
  },
};

export const dictionaries: Record<Locale, TranslationDict> = { zh, en };
export const defaultLocale: Locale = "zh";
