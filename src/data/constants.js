export const STRINGS = {
  zh: {
    title: '性格测试',
    subtitle: '回答 20 道题，生成你的 Mii 设定',
    startBtn: '开始测试 ▶',
    backBtn: '◀ 返回',
    nextBtn: '下一题 ▶',
    resultBtn: '查看结果 ▶',
    retryBtn: '重新测试',
    copyBtn: '复制结果 ✦',
    slidersTitle: '游戏滑块设定',
    copyBoxTitle: '抄录到游戏机',
    resultLabel: '你的 Mii 性格是',
    toastMsg: '已复制到剪贴板！',
    copyHeader: '🎮 Tomodachi Life 性格测试结果\n',
    copyType: '性格类型：',
    copyCat: '分类：',
    copySliders: '🎚 游戏滑块设定：\n',
    cats: {
      considerate: '温和派',
      outgoing: '活力派',
      reserved: '沉稳派',
      ambitious: '利落派'
    },
    dims: {
      movement: '行动',
      speech: '话语',
      expressiveness: '表情',
      attitude: '想法',
      overall: '总体来说'
    },
    sides: {
      movement: ['从容', '利落'],
      speech: ['温和', '严厉'],
      expressiveness: ['淡然', '丰富'],
      attitude: ['慎重', '简单'],
      overall: ['通情达理', '性格张扬']
    }
  },
  en: {
    title: 'Personality Quiz',
    subtitle: 'Answer 20 questions to find your Mii personality',
    startBtn: 'Start Quiz ▶',
    backBtn: '◀ Back',
    nextBtn: 'Next ▶',
    resultBtn: 'See Results ▶',
    retryBtn: 'Retake Quiz',
    copyBtn: 'Copy Result ✦',
    slidersTitle: 'In-Game Slider Settings',
    copyBoxTitle: 'Copy to your Console',
    resultLabel: 'Your Mii Personality',
    toastMsg: 'Copied to clipboard!',
    copyHeader: '🎮 Tomodachi Life Personality Quiz Result\n',
    copyType: 'Personality: ',
    copyCat: 'Faction: ',
    copySliders: '🎚 In-Game Slider Settings:\n',
    cats: {
      considerate: 'Easygoing',
      outgoing: 'Outgoing',
      reserved: 'Reserved',
      ambitious: 'Confident'
    },
    dims: {
      movement: 'Movement',
      speech: 'Speech',
      expressiveness: 'Expression',
      attitude: 'Thinking',
      overall: 'Overall'
    },
    sides: {
      movement: ['Slow', 'Quick'],
      speech: ['Polite', 'Direct'],
      expressiveness: ['Flat', 'Varied'],
      attitude: ['Serious', 'Chill'],
      overall: ['Normal', 'Quirky']
    }
  }
};

export const QUESTIONS_DATA = [
  // --- Dimension 1: Movement (行动) ---
  { id: 1, dimension: "movement", 
    questionZh: "你在超市或便利店，突然发现忘带购物袋了，你的第一反应是：", 
    questionEn: "You're at a grocery store and suddenly realize you forgot your bags. Your first reaction is:",
    options: [
      { textZh: "先站在那想一下，要不要去买一个，或者要不要少买点", textEn: "Pause and think about buying one or carrying fewer items", score: 0 },
      { textZh: "稍微犹豫了一下，然后决定去服务台买一个", textEn: "Hesitate for a moment, then decide to buy one at the counter", score: 1 },
      { textZh: "立刻转身去拿，没什么好想的", textEn: "Turn around and grab one immediately without thinking", score: 2 },
      { textZh: "这种事根本不需要「反应」，已经走过去了", textEn: "No reaction needed; you're already at the bag station", score: 3 }
    ]
  },
  { id: 2, dimension: "movement", 
    questionZh: "面对一项有明确截止日期的任务，你的执行节奏是：", 
    questionEn: "When facing a task with a clear deadline, your pace is:",
    options: [
      { textZh: "动作较慢，需要较长的缓冲和准备时间", textEn: "A bit slow, needing time to warm up", score: 0 },
      { textZh: "按部就班，按照常规节奏推进", textEn: "Methodical, proceeding at a steady pace", score: 1 },
      { textZh: "动作麻利，倾向于尽早处理", textEn: "Quick and efficient, handling it early", score: 2 },
      { textZh: "极度高效，拿到任务立刻着手，迅速完工", textEn: "Extremely efficient, diving in right away", score: 3 }
    ]
  },
  { id: 3, dimension: "movement", 
    questionZh: "在决定就餐地点或购买日常用品时，你的决策速度：", 
    questionEn: "When deciding on a meal or buying daily items, your decision speed is:",
    options: [
      { textZh: "需要较长时间反复对比和衡量", textEn: "Takes time to compare and weigh options", score: 0 },
      { textZh: "稍作思考，权衡利弊后决定", textEn: "Thinks a bit and decides after weighing pros/cons", score: 1 },
      { textZh: "较快做出决定，不愿在选择上耗时", textEn: "Fast decision, doesn't want to waste time", score: 2 },
      { textZh: "极其果断利落，几乎不假思索", textEn: "Decisive and quick, almost instantaneous", score: 3 }
    ]
  },
  { id: 4, dimension: "movement", 
    questionZh: "朋友突然说「我们现在出发吧」，你的状态通常是：", 
    questionEn: "A friend suddenly says, 'Let's head out now!' Your usual state is:",
    options: [
      { textZh: "还没准备好，需要再给我一点时间缓一缓", textEn: "Not ready yet; I need a few more minutes to prep", score: 0 },
      { textZh: "基本可以，但还要收拾几分钟", textEn: "Mostly ready, but still need a couple of minutes to pack", score: 1 },
      { textZh: "差不多随时可以走", textEn: "Almost ready to leave at any moment", score: 2 },
      { textZh: "已经站起来了", textEn: "Already standing up and ready to move", score: 3 }
    ]
  },

  // --- Dimension 2: Speech (话语) ---
  { id: 5, dimension: "speech", 
    questionZh: "评价他人的工作成果或作品时，你倾向于：", 
    questionEn: "When critiquing someone's work or creations, you tend to:",
    options: [
      { textZh: "极其委婉，哪怕不好也会先找优点夸奖", textEn: "Very tactful, always finding pros even if it's bad", score: 0 },
      { textZh: "以温和且顾及对方感受的方式提出建议", textEn: "Gentle suggestions while considering their feelings", score: 1 },
      { textZh: "客观直接地指出优缺点", textEn: "Objective and direct about strengths and weaknesses", score: 2 },
      { textZh: "严厉且直白地指出缺陷，不留情面", textEn: "Blunt and harsh about flaws, no holding back", score: 3 }
    ]
  },
  { id: 6, dimension: "speech", 
    questionZh: "当你在团队沟通中遇到与他人意见不合时：", 
    questionEn: "When you disagree with others in a team setting:",
    options: [
      { textZh: "倾向于妥协或保持沉默，以避免冲突", textEn: "Tend to compromise or stay silent to avoid conflict", score: 0 },
      { textZh: "尝试用委婉的措辞表达自己的不同看法", textEn: "Try to use tactful wording for different views", score: 1 },
      { textZh: "清晰明确地陈述自己的立场进行探讨", textEn: "Clearly and firmly state your position for discussion", score: 2 },
      { textZh: "语气强硬地反驳，坚持自己的观点", textEn: "Forcefully rebut and stick to your guns", score: 3 }
    ]
  },
  { id: 7, dimension: "speech", 
    questionZh: "同事把一项本不属于你的工作推给你，你通常怎么做：", 
    questionEn: "A colleague pushes a task onto you that isn't your responsibility. What do you do?",
    options: [
      { textZh: "接下来，想着以后再说，不太好意思当场拒绝", textEn: "Take it for now and worry later; I'm too shy to say no on the spot", score: 0 },
      { textZh: "委婉表示自己也挺忙的，但没有明确拒绝", textEn: "Tactfully mention I'm busy, but don't give a clear 'no'", score: 1 },
      { textZh: "直接说现在手头有事，这个帮不了", textEn: "Say directly that I'm busy and can't help with this", score: 2 },
      { textZh: "当场说清楚这不在你职责范围内，不接", textEn: "State clearly that it's outside my scope and firmly decline", score: 3 }
    ]
  },
  { id: 8, dimension: "speech", 
    questionZh: "你在群里发了个提议，有人回复说「感觉不太行」但没说原因，你会：", 
    questionEn: "You post a suggestion in a group chat, and someone replies 'I don't think this works' without explaining. You:",
    options: [
      { textZh: "觉得也许是自己没想周全，先不表态，等等看大家反应", textEn: "Assume I might have missed something, stay silent, and wait for others' reactions", score: 0 },
      { textZh: "回一句「哈哈有什么顾虑可以说说」，语气比较轻松", textEn: "Reply with 'Haha, any specific concerns?' in a lighthearted tone", score: 1 },
      { textZh: "直接问「哪里不行？」想把问题说清楚", textEn: "Ask directly 'What's the issue?' to get clear feedback", score: 2 },
      { textZh: "回复「你说说具体哪里有问题，没有理由的话这个方向还是会推进」", textEn: "Reply 'Tell me the specific problem; otherwise, we'll proceed as planned'", score: 3 }
    ]
  },

  // --- Dimension 3: Expression (表情) ---
  { id: 9, dimension: "expressiveness", 
    questionZh: "听到令人意外的消息时，你的面部表情通常：", 
    questionEn: "When receiving surprising news, your facial expression is usually:",
    options: [
      { textZh: "几乎没有变化，面部保持平静", textEn: "Virtually no change, face stays calm", score: 0 },
      { textZh: "仅有轻微的眼神变化或挑眉", textEn: "Only a slight eye change or raised eyebrow", score: 1 },
      { textZh: "能明显看出惊讶的神态", textEn: "Visibly surprised expression", score: 2 },
      { textZh: "表情极其丰富，有大幅度的神态变化", textEn: "Extremely expressive with large facial shifts", score: 3 }
    ]
  },
  { id: 10, dimension: "expressiveness", 
    questionZh: "在观看情绪起伏较大的电影或节目时：", 
    questionEn: "While watching emotionally intense movies or shows:",
    options: [
      { textZh: "无论剧情如何，面部始终淡然", textEn: "Stays expressionless regardless of the plot", score: 0 },
      { textZh: "偶尔露出轻微的微笑或皱眉", textEn: "Occasionally show a slight smile or frown", score: 1 },
      { textZh: "随着剧情表现出明显的喜怒哀乐", textEn: "Visibly show joy, anger, or sadness with the plot", score: 2 },
      { textZh: "情绪完全写在脸上，大笑或落泪", textEn: "Emotions are fully displayed; laughing or crying", score: 3 }
    ]
  },
  { id: 11, dimension: "expressiveness", 
    questionZh: "你在讲一件让你觉得很好笑的事，听的人没什么反应，你会：", 
    questionEn: "You're telling a story you find hilarious, but the listener doesn't react. You:",
    options: [
      { textZh: "没什么感觉，本来也没期待对方笑", textEn: "Feel nothing; I didn't necessarily expect them to laugh anyway", score: 0 },
      { textZh: "稍微有点尴尬，但很快就过去了", textEn: "Feel slightly awkward, but the feeling passes quickly", score: 1 },
      { textZh: "忍不住自己先笑起来，觉得这事确实好笑", textEn: "Can't help laughing myself because I still think it's funny", score: 2 },
      { textZh: "表情和语气已经把整个故事演了一遍，反应不反应无所谓了", textEn: "I've already acted out the whole story; their reaction doesn't matter", score: 3 }
    ]
  },
  { id: 12, dimension: "expressiveness", 
    questionZh: "被他人开玩笑或轻微调侃时：", 
    questionEn: "When being joked with or lightheartedly teased:",
    options: [
      { textZh: "不动声色，很难看出情绪起伏", textEn: "Stonily calm, hard to tell what you feel", score: 0 },
      { textZh: "礼貌性地微微一笑", textEn: "Only a polite, slight smile", score: 1 },
      { textZh: "自然地笑出声，表情生动", textEn: "Laugh naturally with vivid expressions", score: 2 },
      { textZh: "反应剧烈，表情极其夸张地回应", textEn: "React strongly with exaggerated expressions", score: 3 }
    ]
  },

  // --- Dimension 4: Attitude/Thinking (想法) ---
  { id: 13, dimension: "attitude", 
    questionZh: "你要去一个从没去过的城市旅行，出发前你会：", 
    questionEn: "You're traveling to a city you've never been to. Before leaving, you:",
    options: [
      { textZh: "把可能遇到的问题列一遍，每个都想好应对方案", textEn: "List every potential problem and prepare a solution for each", score: 0 },
      { textZh: "查好主要的交通和住宿，大致知道每天怎么走", textEn: "Check the main transport and hotels to have a rough sense of the route", score: 1 },
      { textZh: "订好酒店和来回票，其他到了再说", textEn: "Book the hotel and tickets, then figure out the rest when I arrive", score: 2 },
      { textZh: "买好票就出发，地图自己会带路的", textEn: "Just buy the ticket and go; the map will guide me when I get there", score: 3 }
    ]
  },
  { id: 14, dimension: "attitude", 
    questionZh: "发微信发错对象了，内容还挺尴尬，你的处理方式是：", 
    questionEn: "You sent an embarrassing message to the wrong person on WeChat. Your reaction is:",
    options: [
      { textZh: "立刻撤回，然后琢磨要怎么解释，想了好一会儿", textEn: "Recall it immediately and spend a long time worrying about how to explain", score: 0 },
      { textZh: "撤回，发条「手滑发错了」，然后担心了一阵", textEn: "Recall it, send 'Wrong person!', and stay worried for a while", score: 1 },
      { textZh: "撤回或者不撤，发个表情包带过去", textEn: "Recall it or not, then just send a sticker to move on", score: 2 },
      { textZh: "让它就那么在那，过一会儿对方也就忘了", textEn: "Just leave it there; they'll probably forget about it soon anyway", score: 3 }
    ]
  },
  { id: 15, dimension: "attitude", 
    questionZh: "朋友问你「这周末有空吗」，你通常怎么回答：", 
    questionEn: "A friend asks, 'Are you free this weekend?' You usually respond by:",
    options: [
      { textZh: "先看一下日历，确认没有冲突，再想想自己状态，然后回复", textEn: "Check my calendar for conflicts and my personal energy before replying", score: 0 },
      { textZh: "大概扫一眼有没有已经定好的事，然后回「应该有」", textEn: "Quickly scan for existing plans and reply 'I think so'", score: 1 },
      { textZh: "直接说「有啊，干嘛」，细节之后再说", textEn: "Say 'Yes, why?' and figure out the details later", score: 2 },
      { textZh: "回「有」，完全没想其他", textEn: "Just say 'Yes' without thinking about anything else", score: 3 }
    ]
  },
  { id: 16, dimension: "attitude", 
    questionZh: "在制定出行、旅游等计划时，你倾向于：", 
    questionEn: "When planning trips or travels, you tend to:",
    options: [
      { textZh: "极度严谨，精确到小时并制定备用方案", textEn: "Ultra-rigorous, hourly schedule with backups", score: 0 },
      { textZh: "确定核心行程，按计划有条不紊推进", textEn: "Set core itinerary and follow it steadily", score: 1 },
      { textZh: "只有一个粗略框架，保留很大弹性", textEn: "Have a rough framework with high flexibility", score: 2 },
      { textZh: "完全没有计划，觉得怎样都行顺其自然", textEn: "No plan at all, just go with the flow", score: 3 }
    ]
  },

  // --- Dimension 5: Overall (总体来说) ---
  { id: 17, dimension: "overall", 
    questionZh: "在群体合作中，你的行事风格更倾向于：", 
    questionEn: "In group collaborations, your style is more like:",
    options: [
      { textZh: "顾全大局，高度配合常理和团队规矩", textEn: "Look at the big picture, highly cooperative with norms", score: 0 },
      { textZh: "主要遵循常规，偶尔保留个人意见", textEn: "Mostly follow conventions, occasionally have own views", score: 1 },
      { textZh: "在完成任务的前提下，体现一定个人特色", textEn: "Do the job while showing some personal flair", score: 2 },
      { textZh: "特立独行，喜欢用自己与众不同的方式解决", textEn: "Maverick, preferring unique ways to solve things", score: 3 }
    ]
  },
  { id: 18, dimension: "overall", 
    questionZh: "面对大众流行的趋势和主流审美，你：", 
    questionEn: "Faced with popular trends and mainstream tastes, you:",
    options: [
      { textZh: "很容易接受并融入大众偏好", textEn: "Easily accept and blend into crowd preferences", score: 0 },
      { textZh: "觉得挺好，会选择性地跟风", textEn: "Think it's fine, selectively following along", score: 1 },
      { textZh: "不太感冒，有自己一套独立的标准", textEn: "Not really into it, having independent standards", score: 2 },
      { textZh: "追求绝对的个性，拒绝一切雷同和常规", textEn: "Pursue absolute individuality, reject all replicas", score: 3 }
    ]
  },
  { id: 19, dimension: "overall", 
    questionZh: "你的个人爱好和关注领域通常：", 
    questionEn: "Your hobbies and interests usually are:",
    options: [
      { textZh: "非常贴近大众日常，和多数人都能聊得来", textEn: "Close to daily life, can chat with anyone", score: 0 },
      { textZh: "相对普通，偶有一些小众爱好", textEn: "Relatively common, some niche hobbies", score: 1 },
      { textZh: "比较独特，和主流兴趣有一定偏差", textEn: "Quite unique, deviating from mainstream interests", score: 2 },
      { textZh: "极其冷门或古怪，极少有人能产生共鸣", textEn: "Extremely obscure or odd, rarely shared by others", score: 3 }
    ]
  },
  { id: 20, dimension: "overall", 
    questionZh: "别人通常对你的评价更接近于：", 
    questionEn: "People's evaluations of you are closer to:",
    options: [
      { textZh: "靠谱、通情达理、接地气", textEn: "Reliable, reasonable, and down-to-earth", score: 0 },
      { textZh: "比较好相处，随和", textEn: "Easy to get along with, agreeable", score: 1 },
      { textZh: "有自己的想法 and 个性", textEn: "Have own ideas and personality", score: 2 },
      { textZh: "极度个性鲜明，甚至有些不按常理出牌", textEn: "Strongly distinct personality, doing the unexpected", score: 3 }
    ]
  }
];

export const PERSONALITY_MATRIX = [
  // Row 0 (Bottom)
  [
    { typeZh: "谨慎寡言型", typeEn: "Introvert", factionZh: "沉稳派", factionEn: "Reserved", color: "bg-emerald-500" },
    { typeZh: "认真勤勉型", typeEn: "Thinker", factionZh: "沉稳派", factionEn: "Reserved", color: "bg-emerald-500" },
    { typeZh: "独立率直型", typeEn: "Individualist", factionZh: "利落派", factionEn: "Confident", color: "bg-blue-500" },
    { typeZh: "自信果断型", typeEn: "Busy Bee", factionZh: "利落派", factionEn: "Confident", color: "bg-blue-500" }
  ],
  // Row 1
  [
    { typeZh: "坚忍不拔型", typeEn: "Patient", factionZh: "沉稳派", factionEn: "Reserved", color: "bg-emerald-500" },
    { typeZh: "踏实内敛型", typeEn: "Perfectionist", factionZh: "沉稳派", factionEn: "Reserved", color: "bg-emerald-500" },
    { typeZh: "雷厉风行型", typeEn: "Achiever", factionZh: "利落派", factionEn: "Confident", color: "bg-blue-500" },
    { typeZh: "严肃领袖型", typeEn: "Leader", factionZh: "利落派", factionEn: "Confident", color: "bg-blue-500" }
  ],
  // Row 2
  [
    { typeZh: "温柔体贴型", typeEn: "Buddy", factionZh: "温和派", factionEn: "Easygoing", color: "bg-yellow-400" },
    { typeZh: "悠悠哉哉型", typeEn: "Softie", factionZh: "温和派", factionEn: "Easygoing", color: "bg-yellow-400" },
    { typeZh: "欢乐快活型", typeEn: "Bubbly", factionZh: "活力派", factionEn: "Outgoing", color: "bg-red-500" },
    { typeZh: "热血沸腾型", typeEn: "Hot-Blooded", factionZh: "活力派", factionEn: "Outgoing", color: "bg-red-500" }
  ],
  // Row 3 (Top)
  [
    { typeZh: "天真无邪型", typeEn: "Dreamer", factionZh: "温和派", factionEn: "Easygoing", color: "bg-yellow-400" },
    { typeZh: "笑口常开型", typeEn: "Optimist", factionZh: "温和派", factionEn: "Easygoing", color: "bg-yellow-400" },
    { typeZh: "众人焦点型", typeEn: "Charmer", factionZh: "活力派", factionEn: "Outgoing", color: "bg-red-500" },
    { typeZh: "勇往直前型", typeEn: "Adventurer", factionZh: "活力派", factionEn: "Outgoing", color: "bg-red-500" }
  ]
];
