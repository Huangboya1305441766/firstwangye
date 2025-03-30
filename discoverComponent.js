// 发现页组件模块
class DiscoverComponent {
    constructor() {
        console.log('DiscoverComponent构造函数被调用');
        this.discoverGrid = document.getElementById('discoverGrid');
        console.log('discoverGrid元素获取状态:', this.discoverGrid ? '成功' : '失败');
        this.outfits = [
            {
                id: 1,
                image: 'images/2.jpeg',
                title: '秋日河畔休闲穿搭',
                description: '低饱和度的秋季穿搭，适合周末漫步或约会。搭配简约大方，展现气质与优雅。',
                tags: ['#秋冬穿搭', '#约会穿搭', '#气质穿搭']
            },
            {
                id: 2,
                image: 'images/15.jpeg',
                title: '都市通勤灰色系',
                description: '灰色针织长开衫搭配牛仔裤，简约大方的都市通勤风格，适合日常工作与休闲场合。',
                tags: ['#通勤ootd', '#日系简约', '#针织开衫']
            },
            {
                id: 3,
                image: 'images/14.jpeg',
                title: '质感毛衣艺术风',
                description: '高质感毛衣搭配，展现艺术气息与时尚感，适合文艺场合与日常穿着，突显个人气质。',
                tags: ['#毛衣穿搭', '#文艺风格', '#气质穿搭']
            },
            {
                id: 4,
                image: 'images/3.jpeg',
                title: '秋日森林白毛衣',
                description: '白色毛衣搭配精美围巾，长波浪卷发增添浪漫气息，适合秋季户外活动与写真拍摄。',
                tags: ['#秋冬穿搭', '#毛衣穿搭', '#森系风格']
            },
            {
                id: 5,
                image: 'images/1.jpeg',
                title: '春日花海绿毛衣',
                description: '绿色毛衣搭配白色纱裙，清新自然的春季穿搭，适合户外踏青与赏花活动。',
                tags: ['#春季搭配', '#绿色系', '#田园风']
            },

            {
                id: 7,
                image: 'images/4.jpeg',
                title: '都市夜晚冷色调',
                description: '胶片摄影风格的都市夜晚穿搭，冷色调展现清冷感与都市氛围。',
                tags: ['#胶片风', '#都市穿搭', '#冷色调']
            },
            {
                id: 8,
                image: 'images/6.jpeg',
                title: '甜美橘色毛衣',
                description: '橘色宽松毛衣搭配小白半裙，甜美可爱的日常穿搭风格。',
                tags: ['#甜美风', '#橘色系', '#日常穿搭']
            },
            {
                id: 9,
                image: 'images/gentle-cream.jpeg',
                title: '温柔奶油色开衫',
                description: '奶油色针织开衫搭配高腰牛仔裤，温柔气质显高穿搭。',
                tags: ['#温柔风', '#显高搭配', '#奶油色系']
            },
            {
                id: 10,
                image: 'images/12.jpeg',
                title: '废土战损风格',
                description: '粗布麻衣叠穿的战损风格穿搭，设计师款展现高级感与个性。',
                tags: ['#战损风', '#设计师款', '#个性穿搭']
            },
            {
                id: 11,
                image: 'images/7.jpeg',
                title: '破碎文艺感穿搭',
                description: '盛夏时尚穿搭与慢门摄影结合，展现破碎文艺感的城市风格。',
                tags: ['#文艺风', '#城市穿搭', '#慢门摄影']
            },
            {
                id: 12,
                image: 'images/autumn-skirt-series.jpeg',
                title: '秋季短裙穿搭',
                description: '适合秋季出游的短裙系列穿搭，展现青春活力与时尚感。',
                tags: ['#秋季穿搭', '#短裙系列', '#出游穿搭']
            },
            {
                id: 13,
                image: 'images/9.jpeg',
                title: '枫叶黄毛衣',
                description: '枫叶黄宽松毛衣搭配阔腿裤，慵懒舒适的秋季街拍风格。',
                tags: ['#秋季穿搭', '#宽松风格', '#街拍风']
            },
            {
                id: 14,
                image: 'images/8.jpeg',
                title: '淡蓝衬衫裙',
                description: '淡蓝色衬衫裙搭配樱花粉马甲，甜美复古的秋季街拍穿搭。',
                tags: ['#秋季穿搭', '#甜美风', '#复古风']
            },
            {
                id: 15,
                image: 'images/10.jpeg',
                title: '韩版渐变连衣裙',
                description: '米色与粉色渐变的高腰连衣裙，搭配浅绿开衫，展现韩系公主风。',
                tags: ['#韩系风', '#公主风', '#渐变设计']
            },
            {
                id: 16,
                image: 'images/5.jpeg',
                title: '深灰西装门店风',
                description: '深灰色西装搭配门店背景，展现高端大气的商务穿搭风格。',
                tags: ['#商务风', '#西装穿搭', '#门店实拍']
            }
        ];
    }

    init() {
        console.log('DiscoverComponent.init()方法被调用');
        if (this.discoverGrid) {
            console.log('discoverGrid元素存在，开始初始化组件');
            this.setupTags();
            this.renderOutfits();
        } else {
            console.error('discoverGrid元素不存在，无法初始化组件');
            console.log('DOM元素状态:', document.getElementById('discoverGrid'));
        }
    }

    // 搜索功能已移除

    // 设置标签点击事件
    setupTags() {
        document.querySelectorAll('.tag').forEach(tag => {
            tag.addEventListener('click', () => {
                const tagText = tag.textContent;
                this.searchContent(tagText);
            });
        });
    }

    // 标签筛选功能
    searchContent(query) {
        if (!query || typeof query !== 'string') {
            console.warn('搜索内容无效，显示所有穿搭');
            this.renderOutfits();
            return;
        }

        console.log(`筛选: ${query}`);
        try {
            // 过滤穿搭内容
            const lowerQuery = query.toLowerCase().trim();
            const filteredOutfits = this.outfits.filter(outfit => {
                return outfit.title.toLowerCase().includes(lowerQuery) || 
                       outfit.description.toLowerCase().includes(lowerQuery) ||
                       outfit.tags.some(tag => tag.toLowerCase().includes(lowerQuery));
            });
            
            this.renderOutfits(filteredOutfits);
        } catch (error) {
            console.error('搜索过程中发生错误:', error);
            this.renderOutfits();
        }
    }
    
    // 渲染穿搭案例
    renderOutfits(outfitsToRender = this.outfits) {
        console.log('renderOutfits方法被调用，准备渲染穿搭内容');
        if (!this.discoverGrid) {
            console.error('renderOutfits: discoverGrid元素不存在，无法渲染内容');
            // 尝试重新获取元素
            this.discoverGrid = document.getElementById('discoverGrid');
            console.log('尝试重新获取discoverGrid元素:', this.discoverGrid ? '成功' : '失败');
            if (!this.discoverGrid) {
                console.error('即使重试也无法获取discoverGrid元素，DOM可能尚未加载完成');
                // 如果DOM中确实没有这个元素，尝试创建一个
                const mainContent = document.querySelector('.discover-page') || document.querySelector('.main-content') || document.querySelector('main');
                if (mainContent) {
                    console.log('找到main-content元素，尝试创建discoverGrid');
                    const discoverSection = document.querySelector('.discover-grid') || document.createElement('section');
                    if (!document.querySelector('.discover-grid')) {
                        discoverSection.className = 'discover-grid';
                        mainContent.appendChild(discoverSection);
                    }
                    
                    this.discoverGrid = document.createElement('div');
                    this.discoverGrid.id = 'discoverGrid';
                    this.discoverGrid.className = 'discover-content';
                    discoverSection.appendChild(this.discoverGrid);
                } else {
                    console.error('无法找到main-content元素，无法创建discoverGrid');
                    return;
                }
            }
        }
        
        console.log(`准备渲染${outfitsToRender.length}个穿搭项目`);
        this.discoverGrid.innerHTML = '';
        
        if (outfitsToRender.length === 0) {
            console.log('没有找到匹配的穿搭案例');
            this.discoverGrid.innerHTML = '<div class="no-results">没有找到匹配的穿搭案例</div>';
            return;
        }
        
        // 创建穿搭网格布局
        const outfitGrid = document.createElement('div');
        outfitGrid.className = 'outfit-grid';
        
        // 记录当前网站的基础URL和路径，用于处理图片路径
        const baseUrl = window.location.origin;
        const pathName = window.location.pathname;
        console.log('当前网站基础URL:', baseUrl, '路径:', pathName);
        
        // 确定图片路径前缀
        let imgPathPrefix = '';
        // 检查是否在Netlify或GitHub Pages环境
        if (baseUrl.includes('netlify.app') || baseUrl.includes('github.io')) {
            // 获取仓库名称作为路径前缀（针对GitHub Pages）
            const pathParts = pathName.split('/');
            if (pathParts.length > 1 && pathParts[1] !== '') {
                imgPathPrefix = '/' + pathParts[1];
                console.log('检测到GitHub Pages环境，使用路径前缀:', imgPathPrefix);
            }
        }
        
        outfitsToRender.forEach(outfit => {
            const outfitCard = document.createElement('div');
            outfitCard.className = 'outfit-card';
            
            // 处理图片路径，确保在不同环境下都能正确加载
            let imagePath = outfit.image;
            
            // 检查是否是相对路径，如果是，则根据当前环境调整
            if (imagePath.startsWith('images/')) {
                // 尝试多种可能的路径格式
                const possiblePaths = [
                    imagePath,                    // 原始路径: images/1.jpeg
                    '/' + imagePath,             // 根路径: /images/1.jpeg
                    imgPathPrefix + '/' + imagePath // 带前缀路径: /repo-name/images/1.jpeg
                ];
                
                console.log('图片可能的路径:', possiblePaths);
                
                // 默认使用第一个路径
                imagePath = possiblePaths[0];
            }
            
            outfitCard.innerHTML = `
                <div class="card-image">
                    <img src="${imagePath}" alt="${outfit.title}" loading="lazy" 
                         onerror="handleImageError(this, '${imagePath}')">
                </div>
                <div class="card-info">
                    <h3 class="card-title">${outfit.title}</h3>
                    <p class="card-description">${outfit.description}</p>
                    <div class="card-tags">
                        ${outfit.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            `;
            
            outfitGrid.appendChild(outfitCard);
        });
        
        this.discoverGrid.appendChild(outfitGrid);
        console.log('穿搭内容渲染完成');
    }
}