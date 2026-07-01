export type Locale = "en" | "zh";

export interface TranslationDict {
  header: {
    telegram: string;
  };
  hero: {
    title: string;
    subtitle: string;
    chatPreview: {
      user1: string;
      bot1: string;
      user2: string;
    };
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
    nightlife: string;
    nightlifeDesc: string;
    navigation: string;
    navigationDesc: string;
    survival: string;
    survivalDesc: string;
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
    contact: string;
  };
}

const en: TranslationDict = {
  header: {
    telegram: "Chat on Telegram",
  },
  hero: {
    title: "KORA — Your AI Friend Who Actually Lives in China 🇨🇳",
    subtitle:
      "The local you wish you had on speed dial. Skip the tourist traps — I'll send you where locals actually eat, drink, and hang out, with real Chinese addresses + Amap links so any taxi driver gets you there.",
    chatPreview: {
      user1: "I'm in Shanghai for 3 days. What should I not miss?",
      bot1:
        "Great timing! 🎯 Tonight hit Bar No.3 on Yongkang Rd for natural wine and great vibes. Tomorrow morning, go to Lao Yang Sheng Jian for the best pan-fried pork buns in the city — ¥12 for 4, and the queue moves fast. Want me to plan the whole 3 days?",
      user2: "Yes please! Also need a good hotpot spot.",
    },
    cta: "Chat with KORA on Telegram",
    viewScreenshots: "See it in action",
  },
  howItWorks: {
    title: "How It Works",
    subtitle: "Your China friend, just a Telegram away",
    step1: "Open Telegram",
    step1Desc: "On your phone or desktop",
    step2: "Chat with KORA",
    step2Desc: "Say hi — tell me where you are and what you want",
    step3: "Get the Local Scoop",
    step3Desc: "Real addresses, Amap links, and insider tips instantly",
  },
  features: {
    title: "What KORA Can Do for You",
    subtitle:
      "From ¥30 street noodles to hidden speakeasies — I've got all of China covered.",
    food: "🍜 Food & Dining",
    foodDesc: "Street stalls to hidden gems — real addresses, real recs, no tourist traps",
    nightlife: "🍸 Bars & Nightlife",
    nightlifeDesc: "Rooftops, speakeasies, dance floors — wherever the night takes you",
    navigation: "🚕 Getting Around",
    navigationDesc: "Metro, taxi, navigation — with Amap links so any driver gets you there",
    survival: "💳 China Survival",
    survivalDesc: "Alipay/WeChat pay, VPN tips, key phrases — live like a local",
  },
  screenshots: {
    title: "Real Conversations with KORA",
    subtitle: "See how travelers chat with KORA to discover the real China",
  },
  cta: {
    title: "The local you wish you had on speed dial 🎯",
    subtitle: "Open Telegram and say hi — tell me where you are and what you're after",
    button: "Chat with KORA on Telegram",
  },
  footer: {
    tagline: "Your local friend who actually lives in China",
    copyright: "Built for travelers exploring China",
    contact: "Contact us: @KORA AI伴旅",
  },
};

const zh: TranslationDict = {
  header: {
    telegram: "在 Telegram 上聊天",
  },
  hero: {
    title: "KORA — 你在中国的 AI 助手",
    subtitle:
      "你希望通讯录里就有的那个本地人。跳过游客陷阱——我告诉你本地人真正在哪里吃喝玩乐，附中文地址和高德链接，出租车司机一看就懂。",
    chatPreview: {
      user1: "我在上海待3天，有什么不能错过的？",
      bot1:
        "来得正好！🎯 今晚去永康路的 Bar No.3 喝自然酒，氛围超棒。明早去老杨生煎吃上海最好吃的生煎包——4个才¥12，排队很快。要我帮你规划整3天吗？",
      user2: "太好了！再推荐个好的火锅店。",
    },
    cta: "在 Telegram 上跟 KORA 聊天",
    viewScreenshots: "看看实际效果",
  },
  howItWorks: {
    title: "三步开聊",
    subtitle: "你的中国本地朋友，在 Telegram 上等你",
    step1: "打开 Telegram",
    step1Desc: "手机或电脑都行",
    step2: "跟 KORA 打个招呼",
    step2Desc: "告诉我你在哪、想干嘛",
    step3: "获取本地情报",
    step3Desc: "真实地址、高德链接、内行贴士，秒回",
  },
  features: {
    title: "KORA 能帮你什么",
    subtitle: "从 ¥30 的街头面馆到隐藏酒吧——全中国我都熟。",
    food: "🍜 美食探索",
    foodDesc: "街边摊到隐藏好店——真实推荐，没有游客陷阱",
    nightlife: "🍸 酒吧夜生活",
    nightlifeDesc: "天台酒吧、隐藏酒吧、舞池——夜晚由你主宰",
    navigation: "🚕 出行导航",
    navigationDesc: "地铁、打车、导航——附高德链接，司机一看就懂",
    survival: "💳 在华生存指南",
    survivalDesc: "支付宝/微信支付、VPN、常用短语——像当地人一样生活",
  },
  screenshots: {
    title: "与 KORA 的真实对话",
    subtitle: "看看旅行者们如何通过 KORA 发现真实的中国",
  },
  cta: {
    title: "你希望通讯录里就有的那个本地朋友 🎯",
    subtitle: "打开 Telegram 打个招呼——告诉我你在哪、想要什么",
    button: "在 Telegram 上跟 KORA 聊天",
  },
  footer: {
    tagline: "你的中国本地朋友",
    copyright: "为探索中国的旅行者而生",
    contact: "联系我们：@KORA AI伴旅",
  },
};

export const dictionaries: Record<Locale, TranslationDict> = { en, zh };
export const defaultLocale: Locale = "zh";
