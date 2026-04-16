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
    // --- Dimension 1: Movement (行动: 0从容 → 3利落) ---
    {
        id: 1, dimension: "movement",
        questionZh: "你在超市或便利店，突然发现忘带购物袋了，你的第一反应是：",
        questionEn: "You're at a supermarket and realize you forgot your bag. Your first reaction:",
        options: [
            { textZh: "停在原地想一下，要不要去买一个，或者少买点", textEn: "Stop and think — should I buy one, or just buy less?", score: 0 },
            { textZh: "稍微犹豫了一下，然后决定去服务台买一个", textEn: "Hesitate briefly, then decide to grab one from the counter", score: 1 },
            { textZh: "立刻转身去拿，没什么好纠结的", textEn: "Turn around and get one immediately, no deliberation needed", score: 2 },
            { textZh: "身体比脑子快，已经大步走过去拿袋子了", textEn: "Already walking over before the thought even fully forms", score: 3 }
        ]
    },
    {
        id: 2, dimension: "movement",
        questionZh: "面对一项有明确截止日期的任务，你的执行节奏是：",
        questionEn: "Given a task with a clear deadline, your working pace is:",
        options: [
            { textZh: "通常需要留出一定的心理建设和准备时间才会开始", textEn: "Usually need to set aside some time for mental prep before starting", score: 0 },
            { textZh: "按部就班，按照常规节奏推进", textEn: "Work steadily at a normal pace", score: 1 },
            { textZh: "动作麻利，倾向于尽早处理完", textEn: "Move efficiently and prefer to get it done early", score: 2 },
            { textZh: "拿到任务的瞬间就开始推进，不留任何拖延空间", textEn: "Start the moment I receive it — no buffer, no delay", score: 3 }
        ]
    },
    {
        id: 3, dimension: "movement",
        questionZh: "在决定就餐地点时，你的决策速度通常：",
        questionEn: "When deciding where to eat, your decision speed is usually:",
        options: [
            { textZh: "习惯仔细对比各项评价和特色，倾向于做出最稳妥和满意的选择", textEn: "Carefully compare reviews and features, preferring the most reliable and satisfying choice", score: 0 },
            { textZh: "稍作思考，权衡几个备选项后决定", textEn: "Think briefly, weigh a few options, then decide", score: 1 },
            { textZh: "较快做出决定，觉得没必要在这上面浪费时间", textEn: "Decide quickly — not worth spending time on", score: 2 },
            { textZh: "极其果断，看中哪个秒做决定", textEn: "Instant decision, no second-guessing", score: 3 }
        ]
    },
    {
        id: 4, dimension: "movement",
        questionZh: "朋友突然发消息说「我们现在出发吧」，你的状态通常是：",
        questionEn: "A friend texts 'let's head out now' — your usual state is:",
        options: [
            { textZh: "还没准备好，回复「再给我十分钟缓一缓」", textEn: "Not ready — reply 'give me ten more minutes'", score: 0 },
            { textZh: "基本可以了，但还要收拾一下包换双鞋", textEn: "Almost ready, just need to grab my bag and change shoes", score: 1 },
            { textZh: "差不多随时可以推门走人", textEn: "Pretty much ready to walk out the door anytime", score: 2 },
            { textZh: "已经穿好鞋站在门口等了", textEn: "Already shoes on, standing at the door waiting", score: 3 }
        ]
    },

    // --- Dimension 2: Speech (话语: 0温和 → 3严厉) ---
    {
        id: 5, dimension: "speech",
        questionZh: "当同事交给你一份质量不达标的内容让你反馈时：",
        questionEn: "A colleague hands you substandard work and asks for feedback:",
        options: [
            { textZh: "先极力肯定对方的辛苦，再非常委婉地暗示哪里可以修改", textEn: "First affirm their effort enthusiastically, then very gently hint at improvements", score: 0 },
            { textZh: "用温和商量的口吻提出建议：「这几个地方我们调整一下会不会更好？」", textEn: "Suggest warmly: 'Would it be better if we tweaked these parts?'", score: 1 },
            { textZh: "直接挑明问题所在：「这几处逻辑不对，需要改。」", textEn: "Point it out directly: 'The logic here is off. These need to be fixed.'", score: 2 },
            { textZh: "只给结论，不做铺垫：「有几处根本性的问题，我直接说，你听一下。」", textEn: "Skip the preamble: 'There are some fundamental issues. Let me just tell you straight.'", score: 3 }
        ]
    },
    {
        id: 6, dimension: "speech",
        questionZh: "在团队讨论中，你的提议被别人质疑了，你的回应方式是：",
        questionEn: "Your proposal gets challenged in a team discussion. You respond by:",
        options: [
            { textZh: "倾向于退让或软化态度，不想引发激烈的当面争论", textEn: "Incline to step back or soften your stance to avoid heated arguments", score: 0 },
            { textZh: "耐心解释自己的出发点，试图柔和地达成共识", textEn: "Patiently explain your reasoning and try to reach consensus gently", score: 1 },
            { textZh: "逻辑清晰地逐条反驳，就事论事地辩论", textEn: "Rebut point by point with clear logic, keeping it factual", score: 2 },
            { textZh: "语气笃定且强势，用不容置疑的事实迅速结束争议", textEn: "Respond with firm certainty and hard facts, closing the argument quickly", score: 3 }
        ]
    },
    {
        id: 7, dimension: "speech",
        questionZh: "当你需要别人帮忙做一件小事时，你通常怎么开口：",
        questionEn: "When you need someone to help with a small thing, you typically say:",
        options: [
            { textZh: "铺垫很久：「在吗？不好意思打扰了，想请问一下你现在方便吗……」", textEn: "Long preamble: 'Hey, sorry to bother you, is this a good time…'", score: 0 },
            { textZh: "带上友好的语气词：「能麻烦你帮我递一下那个东西吗？谢谢啦~」", textEn: "Friendly softener: 'Could you pass me that? Thanks so much~'", score: 1 },
            { textZh: "正常陈述需求：「帮我把那个拿过来一下，谢谢。」", textEn: "Plain request: 'Pass me that, thanks.'", score: 2 },
            { textZh: "指令型短句：「把那个给我。」", textEn: "Direct command: 'Give me that.'", score: 3 }
        ]
    },
    {
        id: 8, dimension: "speech",
        questionZh: "在工作中遇到跨部门推诿、踢皮球的情况时：",
        questionEn: "When you encounter cross-department buck-passing at work:",
        options: [
            { textZh: "不想引发更多纠纷，可能会选择自己默默多做一点把事情解决", textEn: "Prefer to quietly take on the work yourself to get it done and avoid disputes", score: 0 },
            { textZh: "私下找对方好声好气地沟通，试图用人情推进", textEn: "Reach out privately and try to push things along with goodwill", score: 1 },
            { textZh: "在群里把权责边界划清楚，要求对方按流程办", textEn: "Lay out responsibilities clearly in the group chat and ask them to follow process", score: 2 },
            { textZh: "直接抛出规则和底线，语气强硬，不接受任何借口", textEn: "State the rules and your bottom line directly, firmly, no excuses accepted", score: 3 }
        ]
    },

    // --- Dimension 3: Expressiveness (表情: 0淡然 → 3丰富) ---
    {
        id: 9, dimension: "expressiveness",
        questionZh: "听到令人惊讶的八卦或消息时，你的面部反应：",
        questionEn: "When you hear surprising gossip or news, your facial reaction is:",
        options: [
            { textZh: "表情几乎没有波澜，十分平静地听完", textEn: "Barely any change — maintain a calm expression", score: 0 },
            { textZh: "眼神有微小变化，或轻微挑一下眉", textEn: "Slight eye shift or a barely-there eyebrow raise", score: 1 },
            { textZh: "眼睛明显瞪大，能直观看出惊讶", textEn: "Eyes visibly widen — the surprise is obvious", score: 2 },
            { textZh: "五官全部放大，表情夸张戏剧化", textEn: "Full-face reaction, extremely exaggerated and dramatic", score: 3 }
        ]
    },
    {
        id: 10, dimension: "expressiveness",
        questionZh: "不小心吃到一口极其酸的东西，你脸上的反应是：",
        questionEn: "You accidentally bite into something extremely sour. Your face:",
        options: [
            { textZh: "面不改色咽下去", textEn: "No expression at all — just swallow it", score: 0 },
            { textZh: "微皱一下眉头或眯一下眼", textEn: "A slight brow furrow or squint", score: 1 },
            { textZh: "明显酸倒牙的表情，甚至倒吸一口凉气", textEn: "Obvious wince, maybe a sharp intake of breath", score: 2 },
            { textZh: "五官立刻缩成一团，可能有很强烈的肢体动作", textEn: "Face instantly scrunches up, combined with strong physical reactions", score: 3 }
        ]
    },
    {
        id: 11, dimension: "expressiveness",
        questionZh: "你正在专心看手机上的搞笑视频，旁边的人看你的脸：",
        questionEn: "You're watching a funny video on your phone. Someone watching your face would see:",
        options: [
            { textZh: "完全看不出你在看什么，表情像在审阅文件", textEn: "Nothing at all — you look like you're reviewing spreadsheets", score: 0 },
            { textZh: "嘴角偶尔有一丝非常隐秘的上扬", textEn: "An occasional barely-visible twitch at the corner of your mouth", score: 1 },
            { textZh: "有明显的笑容，眼角也会跟着弯起来", textEn: "A clear smile, eyes crinkling at the corners", score: 2 },
            { textZh: "毫无保留地大笑，完全沉浸在快乐中", textEn: "Laughing out loud visibly, fully immersed in the joy", score: 3 }
        ]
    },
    {
        id: 12, dimension: "expressiveness",
        questionZh: "别人在向你描述一个复杂的场景时，你听的过程中：",
        questionEn: "While someone describes a complex situation to you, your face:",
        options: [
            { textZh: "表情始终保持平静，不会有太多明显的情绪起伏", textEn: "Stays mostly neutral — minimal outward reaction", score: 0 },
            { textZh: "只有到了关键点才会点点头或给个微笑", textEn: "A nod or small smile only at the key moments", score: 1 },
            { textZh: "表情会随着对方的故事自然起伏，给足反应", textEn: "Naturally follows along with the story, giving clear reactions", score: 2 },
            { textZh: "眉飞色舞，表情比讲故事的人还要丰富生动", textEn: "More expressive than the person talking — living every moment with them", score: 3 }
        ]
    },

    // --- Dimension 4: Attitude (想法: 0慎重 → 3简单) ---
    {
        id: 13, dimension: "attitude",
        questionZh: "当一个平时不怎么联系的人突然夸赞你时，你的脑回路是：",
        questionEn: "Someone you rarely talk to suddenly gives you a compliment. Your first thought:",
        options: [
            { textZh: "会多想一层，揣测对方是不是有别的动机或潜台词", textEn: "Think a bit deeper about whether they might have an underlying motive", score: 0 },
            { textZh: "会琢磨一下对方怎么突然说这个，但不至于太防备", textEn: "Wonder briefly why they're saying this now, but not overly suspicious", score: 1 },
            { textZh: "觉得有点意外，但就当成普通的夸奖收下了", textEn: "A little surprised, but take it as a normal compliment", score: 2 },
            { textZh: "完全按照字面意思理解，单纯觉得开心", textEn: "Take it at pure face value and just feel good about it", score: 3 }
        ]
    },
    {
        id: 14, dimension: "attitude",
        questionZh: "电脑突然黑屏了一下，然后自己恢复正常了，你会：",
        questionEn: "Your computer screen goes black for a second, then recovers. You:",
        options: [
            { textZh: "立刻联想到各种坏结果，搜索原因并着手排查隐患", textEn: "Immediately think of all the things that could be wrong, start googling and diagnosing", score: 0 },
            { textZh: "心里留个心眼，打算有空备份一下数据", textEn: "Make a mental note to back up your data when you get a chance", score: 1 },
            { textZh: "只要现在还能用，就先不管它", textEn: "If it works now, it can wait", score: 2 },
            { textZh: "一秒钟后就忘了这事", textEn: "Forgotten about it one second later", score: 3 }
        ]
    },
    {
        id: 15, dimension: "attitude",
        questionZh: "进入一个全是陌生人的新环境时，你的大脑后台在运行什么：",
        questionEn: "You enter a room full of strangers. What's running in the background of your mind:",
        options: [
            { textZh: "高速运转，默默观察每个人的微表情和关系网，谨言慎行", textEn: "Running at full speed — quietly mapping expressions, dynamics, and relationships", score: 0 },
            { textZh: "保持谨慎，先看别人怎么做，自己再跟着做", textEn: "Staying cautious — watching what others do before acting", score: 1 },
            { textZh: "没想太多，顺其自然地打招呼交流", textEn: "Not overthinking it — just say hi and go with the flow", score: 2 },
            { textZh: "单线程运行，觉得大家都是普通人，该吃吃该喝喝，极度松弛", textEn: "Single-thread mode — everyone's just people, eat, drink, relax", score: 3 }
        ]
    },
    {
        id: 16, dimension: "attitude",
        questionZh: "朋友向你倒苦水吐槽某件事时，你通常如何看待这件事：",
        questionEn: "A friend vents to you about a situation. How do you tend to process what they're saying:",
        options: [
            { textZh: "会习惯性地设想反转、深层原因以及另一个视角的可能性", textEn: "Automatically consider possible twists, underlying causes, and the other side's perspective", score: 0 },
            { textZh: "觉得事情可能没那么简单，但当下会顺着朋友说", textEn: "Sense there might be more to it, but go along with your friend for now", score: 1 },
            { textZh: "基本相信朋友的描述，顺理成章地给出建议", textEn: "Take their account at face value and offer advice accordingly", score: 2 },
            { textZh: "站在朋友这边，朋友觉得别人有问题那就是别人的问题", textEn: "Take your friend's side unconditionally — if they say someone's at fault, they are", score: 3 }
        ]
    },

    // --- Dimension 5: Overall (总体来说: 0通情达理 → 3性格张扬) ---
    {
        id: 17, dimension: "overall",
        questionZh: "当你的个人喜好与团队的决定产生冲突时：",
        questionEn: "When your personal preference conflicts with a group decision:",
        options: [
            { textZh: "倾向于顾全大局，配合集体的决定，避免产生不必要的摩擦", textEn: "Prioritize the big picture, cooperate with the group to avoid unnecessary friction", score: 0 },
            { textZh: "内心有小保留，但在行动上会配合大家的决定", textEn: "Privately disagree a little, but go along with the group in practice", score: 1 },
            { textZh: "会去争取一下自己的空间，试图在集体中保持自己的特色", textEn: "Push for your own space — try to keep your distinct touch within the group", score: 2 },
            { textZh: "讨厌被同化，即便显得不合群，也要坚持自己的调性", textEn: "Strongly resist being assimilated — stick to your own style even if it looks odd", score: 3 }
        ]
    },
    {
        id: 18, dimension: "overall",
        questionZh: "关于个人的日常穿着和打扮，你的底层逻辑是：",
        questionEn: "When it comes to your everyday appearance, your core logic is:",
        options: [
            { textZh: "得体最重要，绝不能穿错衣服让别人觉得突兀", textEn: "Looking appropriate is everything — never stand out in the wrong way", score: 0 },
            { textZh: "主要跟随大众流行，加一点点属于自己的小元素", textEn: "Mostly follow trends, with a small personal touch added", score: 1 },
            { textZh: "衣服是我个性的延伸，不太在意现在流行什么", textEn: "Clothes are an extension of who I am — trends are largely irrelevant to me", score: 2 },
            { textZh: "希望能展现极具个人特色的风格，越独特、越小众越好", textEn: "Aim to showcase a highly personal style — the more unique and niche, the better", score: 3 }
        ]
    },
    {
        id: 19, dimension: "overall",
        questionZh: "你如何看待社会上的各种「约定俗成」和「潜规则」：",
        questionEn: "How do you feel about social conventions and unwritten rules:",
        options: [
            { textZh: "存在即合理，严格遵守能带来安全感", textEn: "If they exist, there's a reason — following them strictly feels safe and right", score: 0 },
            { textZh: "觉得有些规矩比较繁琐，但为了省事通常会默认遵守", textEn: "Some are tedious, but it's easier to just follow them to avoid hassle", score: 1 },
            { textZh: "只遵守那些有逻辑的，对无意义的规矩会选择无视", textEn: "Follow the ones that make sense, quietly ignore the ones that don't", score: 2 },
            { textZh: "规矩对我来说只是参考，感觉没意义的就不遵守，哪怕特立独行", textEn: "Rules are suggestions at best — if one seems pointless, I don't follow it, even if I stand out", score: 3 }
        ]
    },
    {
        id: 20, dimension: "overall",
        questionZh: "你发了一条和大家观点截然不同的朋友圈，有人评论「你这想法好奇怪」，你的反应是：",
        questionEn: "You post something with a view that differs from most people's, and someone comments 'that's a weird take'. You:",
        options: [
            { textZh: "有点在意，悄悄删掉或者改了措辞再发", textEn: "Feel bothered — quietly delete it or reword it before posting", score: 0 },
            { textZh: "在评论里解释了一下自己的想法，希望对方能理解", textEn: "Reply explaining your reasoning, hoping they'll get it", score: 1 },
            { textZh: "无所谓，回了个表情就过去了", textEn: "Unbothered — drop an emoji reply and move on", score: 2 },
            { textZh: "心里反而有点满意，就喜欢和别人不一样", textEn: "Actually a little pleased — standing out from the crowd is kind of the point", score: 3 }
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
