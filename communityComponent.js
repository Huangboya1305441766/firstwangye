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
}