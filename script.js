// 添加全局图片错误处理函数
window.handleImageError = function(img, originalSrc) {
    if (!img.dataset.retryCount) {
        img.dataset.retryCount = '0';
    }
    
    const retryCount = parseInt(img.dataset.retryCount);
    img.dataset.retryCount = (retryCount + 1).toString();
    
    // 获取当前网站的基础URL
    const baseUrl = window.location.origin;
    const pathName = window.location.pathname;
    console.log('图片加载失败，尝试修复。当前URL:', baseUrl, '路径:', pathName);
    
    // 尝试不同的路径格式
    if (retryCount === 0) {
        // 尝试添加根路径
        img.src = '/' + originalSrc.replace(/^\//, '');
        console.log('图片重试1:', img.src);
    } else if (retryCount === 1) {
        // 尝试使用完整URL
        img.src = baseUrl + '/' + originalSrc.replace(/^\//, '');
        console.log('图片重试2:', img.src);
    } else if (retryCount === 2) {
        // 尝试使用相对路径
        const pathParts = pathName.split('/');
        if (pathParts.length > 1 && pathParts[1] !== '') {
            img.src = '/' + pathParts[1] + '/' + originalSrc.replace(/^\//, '');
            console.log('图片重试3:', img.src);
        } else {
            // 尝试其他可能的路径
            img.src = './' + originalSrc.replace(/^\//, '');
            console.log('图片重试3 (备选):', img.src);
        }
    } else {
        // 所有尝试都失败，使用占位图
        img.src = 'https://via.placeholder.com/300x400?text=图片加载失败';
        img.onerror = null; // 防止无限循环
        console.error('图片加载失败:', originalSrc);
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // 初始化发现页组件
    console.log('DOM加载完成，检查页面类型');
    // 不在这里初始化DiscoverComponent，统一在下方根据页面路径初始化
    
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
    // 获取当前页面路径
    const currentPath = window.location.pathname;
    console.log('当前页面路径:', currentPath);
    
    // 检查是否是首页
    if (currentPath.includes('index.html') || currentPath === '/' || currentPath.endsWith('/') || currentPath === '') {
        console.log('检测到首页');
        if (typeof HomeComponent !== 'undefined') {
            const homeComponent = new HomeComponent();
            homeComponent.init();
        }
    }

    // 检查是否是发现页面 - 增强路径检测逻辑
    if (currentPath.includes('discover') || currentPath.endsWith('discover') || currentPath.includes('discover.html')) {
        console.log('检测到发现页面，路径:', currentPath);
        if (typeof DiscoverComponent !== 'undefined') {
            console.log('DiscoverComponent已定义，准备初始化');
            const discoverComponent = new DiscoverComponent();
            console.log('DiscoverComponent实例已创建，调用init方法');
            discoverComponent.init();
        } else {
            console.error('DiscoverComponent未定义，请检查discoverComponent.js是否正确加载');
            // 尝试动态加载discoverComponent.js
            const script = document.createElement('script');
            script.src = 'discoverComponent.js';
            script.onload = function() {
                console.log('动态加载discoverComponent.js成功');
                if (typeof DiscoverComponent !== 'undefined') {
                    const discoverComponent = new DiscoverComponent();
                    discoverComponent.init();
                }
            };
            script.onerror = function() {
                console.error('动态加载discoverComponent.js失败');
            };
            document.head.appendChild(script);
        }
    }

    // 检查是否是挑战页面
    if (currentPath.includes('challenge') || currentPath.endsWith('challenge') || currentPath.includes('challenge.html')) {
        console.log('检测到挑战页面');
        if (typeof ChallengeComponent !== 'undefined') {
            const challengeComponent = new ChallengeComponent();
            challengeComponent.init();
        }
    }

    // 检查是否是社区页面
    if (currentPath.includes('community') || currentPath.endsWith('community') || currentPath.includes('community.html')) {
        console.log('检测到社区页面');
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