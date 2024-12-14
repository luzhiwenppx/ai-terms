// 在文件开头添加
console.log('Script loaded');

// AI术语数据
const aiTerms = [
    // 基础概念 - 蓝色
    {
        category: "basic",
        title: "人工智能 (AI)",
        description: "就像是给机器装上了一个'大脑'。这个'大脑'能学习、思考和解决问题，比如下棋、写作或画画。现在我们身边的Siri、智能音箱都是AI的应用例子。"
    },
    {
        category: "basic",
        title: "机器学习 (Machine Learning)",
        description: "想象一个小孩学习认识动物的过程：看得越多，认得越准。机器学习就是这样，通过大量练习来提高准确性，比如看过上万张猫的照片后，就能准确认出新看到的猫。"
    },
    {
        category: "basic",
        title: "深度学习 (Deep Learning)",
        description: "就像小孩认识世界的过程 —— 先认识基本的形状和颜色，再慢慢学会分辨更复杂的东西。计算机也是这样，通过层层的学习，最终能够完成复杂的任务。"
    },
    {
        category: "basic",
        title: "监督学习",
        description: "就像老师教学生做题 —— 不仅给题目，还要告诉对错。比如教AI认识水果时，我们要告诉它：'这是苹果，这是香蕉'，它才能慢慢学会分辨。"
    },
    {
        category: "basic",
        title: "无监督学习",
        description: "像是让孩子自己玩积木，没人告诉他怎么分类，但他会自然地按照颜色、形状来整理。AI也一样，能自己发现数据中的规律和联系。"
    },
    {
        category: "model",
        title: "大语言模型 (LLM)",
        description: "就像一个博览群书的学者，读过海量的文章和书籍。你问它问题，它能基于所学的知识，组织语言给出回答。ChatGPT就是这样的'学者'。"
    },
    {
        category: "model",
        title: "扩散模型 (Diffusion Models)",
        description: "想象一个修复古画的过程 —— 先看到模糊的轮廓，然后慢慢恢复细节，最后成为清晰的画作。AI生成图片就是这样，从模糊到清晰的过程。"
    },
    {
        category: "technical",
        title: "神经网络",
        description: "就像人脑中的神经元网络，每个节点接收信息，处理后传递给下一个节点。比如识别猫时，先识别出耳朵、尾巴，再组合判断是不是猫。"
    },
    {
        category: "technical",
        title: "幻觉 (Hallucinations)",
        description: "就像考试时不会答题却自信满满地胡编乱造。AI有时也会这样，编造看似可信但实际并不准确的答案。"
    },
    {
        category: "technical",
        title: "RAG技术",
        description: "想象你在写论文，需要查阅参考资料来支持观点。RAG就是让AI在回答问题时也能查资料，而不是凭记忆胡说。"
    },
    {
        category: "hardware",
        title: "GPU (图形处理器)",
        description: "就像一个超级计算工厂，有成千上万的小工人同时工作。原本是用来处理游戏画面的，现在成了AI运算的得力助手。"
    },
    {
        category: "hardware",
        title: "TPU (张量处理器)",
        description: "这是谷歌专门为AI设计的'超级计算器'，就像一个只做数学题的天才，专门解决AI需要的复杂计算问题。"
    },
    {
        category: "hardware",
        title: "量子计算机",
        description: "传统计算机就像是一步步解题，而量子计算机可以同时尝试很多可能性，就像同时走多条平行宇宙的路径，大大加快解题速度。"
    },
    {
        category: "basic",
        title: "通用人工智能 (AGI)",
        description: "想象一个全能的管家，不仅会做饭打扫，还能辅导功课、写诗作画、解决各种问题。AGI就是这样的'全能型'AI，能像人类一样处理各种任务。"
    },
    {
        category: "basic",
        title: "生成式AI",
        description: "就像一个创意工作室，给它一个想法，它就能'创作'出相应的内容。比如告诉它'画一只戴墨镜的猫'，它就能画出来，或者让它写故事、作曲都可以。"
    },
    {
        category: "basic",
        title: "强化学习",
        description: "像教狗狗做新动作，做对了就给零食奖励。AI也是这样，通过不断尝试和获得反馈来学习，比如玩游戏时，赢了就是正确方向，输了就要调整策略。"
    },
    {
        category: "basic",
        title: "迁移学习",
        description: "就像学会骑自行车的人更容易学会骑电动车，因为很多平衡感和操作技巧是通用的。AI也可以把学习一个任务获得的'经验'用到相关的新任务上。"
    },
    {
        category: "basic",
        title: "计算机视觉 (CV)",
        description: "给计算机装上'眼睛'，让它能看懂图片和视频。就像我们一眼就能认出照片里的人和物一样，训练AI也能做到这一点，比如人脸解锁就是个例子。"
    },
    {
        category: "model",
        title: "基础模型 (Foundation Models)",
        description: "就像一个通才，接受过广泛的基础教育，可以快速适应不同工作。这类AI模型学习了海量知识，能被调教来完成各种不同的任务。"
    },
    {
        category: "model",
        title: "前沿模型 (Frontier Models)",
        description: "想象未来科技的概念车，展示了最新最炫的功能，但可能还不够成熟。前沿模型就是AI界的概念车，展示着AI的未来可能性。"
    },
    {
        category: "technical",
        title: "自然语言处理 (NLP)",
        description: "教会计算机理解和使用人类的语言。就像教外国人学习中文，要懂语法、词义，还要理解语境和文化，这样才能正常交流。"
    },
    {
        category: "technical",
        title: "推理 (Inference)",
        description: "就像解答一道数学题，AI要把学到的知识用来解决具体问题。比如从一张照片认出猫咪，或者根据问题生成合适的回答。"
    },
    {
        category: "technical",
        title: "标记 (Tokens)",
        description: "像拆积木一样把语言拆成小块。比如'我爱人工智能'可能被拆成'我'、'爱'、'人工'、'智能'这几块，AI就是这样一块块地理解语言的。"
    },
    {
        category: "hardware",
        title: "神经网络处理器 (NPU)",
        description: "就像是给手机装上了一个专门处理AI任务的'小脑袋'。这个处理器特别擅长处理AI运算，让手机的AI功能既快又省电。"
    },
    {
        category: "hardware",
        title: "边缘计算设备",
        description: "像是给设备装上了'独立思考'的能力。不用事事都问云端服务器，很多AI任务可以在手机、智能音箱这样的设备上直接完成，更快更私密。"
    },
    {
        category: "hardware",
        title: "神经形态芯片",
        description: "这种芯片的设计灵感来自人脑，就像用电路模拟大脑神经元的工作方式。它特别适合处理AI任务，就像人脑天生善于学习和思考一样。"
    },
    {
        category: "hardware",
        title: "FPGA",
        description: "像是一块'变形金刚'芯片，可以根据需要改变自己的结构。今天可以用来处理图像，明天可以改装成语音处理器，特别灵活。"
    }
];

// 类别配置
const categories = {
    basic: {
        title: "基础概念",
        color: "#4299e1"
    },
    model: {
        title: "AI模型类型",
        color: "#48bb78"
    },
    technical: {
        title: "技术术语",
        color: "#9f7aea"
    },
    hardware: {
        title: "硬件相关",
        color: "#ed8936"
    }
};

// 创建卡片元素
function createCard(term) {
    const card = document.createElement('div');
    card.className = `card ${term.category}`;
    card.innerHTML = `
        <h2>${term.title}</h2>
        <p>${term.description}</p>
    `;
    return card;
}

// 渲染函数
function renderCards(terms) {
    const container = document.getElementById('cardsContainer');
    if (!container) {
        console.error('Container not found!');
        return;
    }
    
    container.innerHTML = '';
    
    // 按类别分组
    const groupedTerms = {};
    terms.forEach(term => {
        if (!groupedTerms[term.category]) {
            groupedTerms[term.category] = [];
        }
        groupedTerms[term.category].push(term);
    });
    
    // 按类别渲染
    Object.keys(categories).forEach(category => {
        if (groupedTerms[category] && groupedTerms[category].length > 0) {
            // 添加类别标题
            const categoryTitle = document.createElement('div');
            categoryTitle.className = 'category-title';
            categoryTitle.style.color = categories[category].color;
            categoryTitle.textContent = categories[category].title;
            container.appendChild(categoryTitle);
            
            // 添加该类别的所有卡片
            groupedTerms[category].forEach(term => {
                container.appendChild(createCard(term));
            });
        }
    });
}

// 搜索功能
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) {
        console.error('Search input not found!');
        return;
    }
    
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        if (searchTerm === '') {
            renderCards(aiTerms);
        } else {
            const filteredTerms = aiTerms.filter(term => 
                term.title.toLowerCase().includes(searchTerm) || 
                term.description.toLowerCase().includes(searchTerm)
            );
            renderCards(filteredTerms);
        }
    });
}

// 初始化
window.addEventListener('load', () => {
    console.log('Page loaded');
    renderCards(aiTerms);
    setupSearch();
});

// 以防万一，也监听 DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded');
    renderCards(aiTerms);
    setupSearch();
}); 