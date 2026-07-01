export type Locale = "en" | "zh";

export interface TranslationDict {
  header: {
    telegram: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    viewScreenshots: string;
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
    food: string;
    foodDesc: string;
    travel: string;
    travelDesc: string;
    daily: string;
    dailyDesc: string;
    support: string;
    supportDesc: string;
  };
  screenshots: {
    title: string;
    subtitle: string;
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
  footer: {
    tagline: string;
    copyright: string;
  };
}

const en: TranslationDict = {
  header: {
    telegram: "Open Telegram",
  },
  hero: {
    title: "KORA — Your AI Companion in China",
    subtitle:
      "Chat on Telegram to discover the best food, travel spots, and everyday essentials across China. Just ask.",
    cta: "Start Chatting on Telegram",
    viewScreenshots: "See how it works",
  },
  howItWorks: {
    title: "How It Works",
    subtitle: "Three steps to your personal China guide",
    step1: "Open Telegram",
    step1Desc: "On your phone or desktop",
    step2: "Chat with KORA",
    step2Desc: "Find @KORA_bot and start talking",
    step3: "Ask Anything",
    step3Desc: '"Where to eat?" "What to see?" — just ask',
  },
  features: {
    title: "What KORA Can Do for You",
    subtitle:
      "Your all-in-one AI assistant for life in China — from street food to scenic spots.",
    food: "Food & Dining",
    foodDesc: "Find the best restaurants, local hidden gems, and must-try dishes anywhere you go",
    travel: "Travel & Explore",
    travelDesc: "Discover attractions, weekend getaways, and off-the-beaten-path adventures",
    daily: "Daily Life",
    dailyDesc: "Navigation tips, translation help, cultural advice — survive and thrive in China",
    support: "24/7 AI Chat",
    supportDesc: "Always online, always helpful. Ask any question, anytime, in natural language",
  },
  screenshots: {
    title: "See KORA in Action",
    subtitle: "Real conversations between travelers and KORA on Telegram",
  },
  cta: {
    title: "Ready to explore China like a local?",
    subtitle: "Open Telegram and start chatting with KORA now",
    button: "Start Chatting on Telegram",
  },
  footer: {
    tagline: "Your AI companion for exploring China",
    copyright: "Built for travelers, by travelers",
  },
};

const zh: TranslationDict = {
  header: {
    telegram: "打开 Telegram",
  },
  hero: {
    title: "KORA — 你的中国生活 AI 助手",
    subtitle: "在 Telegram 上聊天，发现中国最好吃的美食、好玩的去处和日常生活的一切。直接问就行。",
    cta: "在 Telegram 上开始聊天",
    viewScreenshots: "看看怎么用",
  },
  howItWorks: {
    title: "三步上手",
    subtitle: "三秒打开，即刻畅聊",
    step1: "打开 Telegram",
    step1Desc: "手机或电脑上均可",
    step2: "与 KORA 对话",
    step2Desc: "搜索 @KORA_bot 开始聊天",
    step3: "随便问",
    step3Desc: '"哪里好吃？" "去哪玩？" ——直接问',
  },
  features: {
    title: "KORA 能帮你做什么",
    subtitle: "一站式 AI 助手，覆盖在华生活吃喝玩乐全部场景。",
    food: "美食探索",
    foodDesc: "推荐地道餐厅、隐藏小店和必尝美食，走到哪吃到哪",
    travel: "旅行攻略",
    travelDesc: "发现景点、周末好去处和小众路线，玩遍中国",
    daily: "日常生活",
    dailyDesc: "导航指引、翻译帮助、文化贴士——在中国生活无忧",
    support: "7×24 小时在线",
    supportDesc: "随时在线，随时帮忙。用自然语言问任何问题",
  },
  screenshots: {
    title: "看看 KORA 的实际效果",
    subtitle: "旅行者与 KORA 在 Telegram 上的真实对话",
  },
  cta: {
    title: "准备好像当地人一样探索中国了吗？",
    subtitle: "打开 Telegram，即刻与 KORA 开始对话",
    button: "在 Telegram 上开始聊天",
  },
  footer: {
    tagline: "你的中国探索 AI 伙伴",
    copyright: "为旅行者而生",
  },
};

export const dictionaries: Record<Locale, TranslationDict> = { en, zh };
export const defaultLocale: Locale = "en";
