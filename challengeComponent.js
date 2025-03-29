// 挑战页组件模块
export class ChallengeComponent {
    constructor() {
        this.challengeGrid = document.getElementById('challengeGrid');
        this.filterButtons = document.querySelectorAll('.filter-btn');
    }

    init() {
        if (this.challengeGrid) {
            this.setupFilters();
            this.loadChallenges();
        }
    }

    // 设置筛选按钮
    setupFilters() {
        this.filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                this.filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.filterChallenges(btn.textContent);
            });
        });
    }

    // 加载挑战数据
    loadChallenges() {
        // 这里可以添加实际的数据加载逻辑
        // 暂时使用模拟数据
        const mockData = [
            { title: '春日复古风穿搭', author: '时尚达人', votes: 1245 },
            { title: '职场通勤穿搭', author: 'OL小姐姐', votes: 892 },
            { title: '小个子显高技巧', author: '矮星人', votes: 1567 }
        ];
        
        this.renderChallenges(mockData);
    }

    // 渲染挑战卡片
    renderChallenges(data) {
        this.challengeGrid.innerHTML = data.map(item => 
            `<div class="challenge-card">
                <h3>${item.title}</h3>
                <p>发布者: ${item.author}</p>
                <div class="challenge-stats">
                    <button class="vote-btn"><i class="far fa-heart"></i> ${item.votes}</button>
                </div>
            </div>`
        ).join('');
    }

    // 筛选挑战
    filterChallenges(filterType) {
        // 这里可以添加实际的筛选逻辑
        console.log(`筛选类型: ${filterType}`);
    }
}