// 首页组件模块
export class HomeComponent {
    constructor() {
        this.outfitGrid = document.getElementById('outfitGrid');
    }

    init() {
        if (this.outfitGrid) {
            this.renderOutfits();
        }
    }

    // 渲染穿搭卡片
    renderOutfits() {
        const outfits = [
            { id: 1, image: 'images/outfit1.svg', likes: 1200, comments: 45 },
            { id: 2, image: 'images/outfit2.svg', likes: 890, comments: 32 },
            { id: 3, image: 'images/outfit3.svg', likes: 756, comments: 28 },
            { id: 4, image: 'images/outfit4.svg', likes: 950, comments: 38 }
        ];

        outfits.forEach(outfit => {
            const card = this.createOutfitCard(outfit);
            this.outfitGrid.appendChild(card);
        });
    }

    // 创建穿搭卡片
    createOutfitCard(outfit) {
        const card = document.createElement('div');
        card.className = 'outfit-card';
        card.innerHTML = `
            <div class="card-image">
                <img src="${outfit.image}" alt="穿搭展示">
            </div>
            <div class="card-info">

                <div class="card-actions">
                    <button class="like-btn" data-likes="${outfit.likes}">
                        <i class="far fa-heart" aria-hidden="true"></i> <span>${outfit.likes}</span>
                    </button>
                    <button class="comment-btn">
                        <i class="far fa-comment" aria-hidden="true"></i> <span>${outfit.comments}</span>
                    </button>
                </div>
            </div>
        `;
        return card;
    }
}