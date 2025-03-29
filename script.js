document.addEventListener('DOMContentLoaded', function() {
    // 页面加载动画
    document.body.classList.add('page-enter');
    
    // 为所有带有page-transition类的元素添加进入动画
    const pageTransitionElements = document.querySelectorAll('.page-transition');
    pageTransitionElements.forEach(element => {
        element.classList.add('page-enter');
    });
    
    // 导航菜单切换功能
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // 移除折叠面板功能，使所有面板始终展开
    const collapsibleItems = document.querySelectorAll('.collapsible-item');
    const collapsibleContents = document.querySelectorAll('.collapsible-content');
    
    // 默认展开所有面板
    collapsibleItems.forEach(item => {
        item.classList.add('active');
    });
    
    collapsibleContents.forEach(content => {
        content.classList.add('active');
    });
    
    // 添加页面间的过渡效果
    const pageLinks = document.querySelectorAll('a[href]:not([target="_blank"])');
    
    pageLinks.forEach(link => {
        // 排除外部链接
        if (link.hostname === window.location.hostname) {
            link.addEventListener('click', function(e) {
                // 排除导航菜单切换和锚点链接
                if (!link.classList.contains('nav-toggle') && !link.getAttribute('href').startsWith('#')) {
                    e.preventDefault();
                    const target = link.getAttribute('href');
                    
                    // 添加退出动画
                    document.body.classList.add('page-exit');
                    pageTransitionElements.forEach(element => {
                        element.classList.remove('page-enter');
                        element.classList.add('page-exit');
                    });
                    
                    // 动画结束后跳转
                    setTimeout(function() {
                        window.location.href = target;
                    }, 800); // 增加动画时间以确保动画完成
                }
            });
        }
    });
    
    // 初始化各页面组件
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/')) {
        if (typeof HomeComponent !== 'undefined') {
            const homeComponent = new HomeComponent();
            homeComponent.init();
        }
    }

    if (window.location.pathname.includes('discover.html')) {
        if (typeof DiscoverComponent !== 'undefined') {
            const discoverComponent = new DiscoverComponent();
            discoverComponent.init();
        }
    }

    if (window.location.pathname.includes('challenge.html')) {
        if (typeof ChallengeComponent !== 'undefined') {
            const challengeComponent = new ChallengeComponent();
            challengeComponent.init();
        }
    }

    if (window.location.pathname.includes('community.html')) {
        if (typeof CommunityComponent !== 'undefined') {
            const communityComponent = new CommunityComponent();
            communityComponent.init();
        }
    }
    
    // 检测页面是否从其他页面跳转而来，如果是，则添加进入动画
    if (document.referrer.includes(window.location.hostname)) {
        document.body.classList.add('page-enter');
    }
});