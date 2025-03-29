// 社区页组件模块
export class CommunityComponent {
    constructor() {
        this.postList = document.querySelector('.post-list');
    }

    init() {
        if (this.postList) {
            this.setupLikeButtons();
            this.setupFollowButtons();
        }
    }

    // 设置点赞按钮
    setupLikeButtons() {
        // 静态页面，无点赞功能
    }

    // 设置关注按钮
    setupFollowButtons() {
        // 静态页面，无关注功能
    }
}