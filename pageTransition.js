// 页面切换动画管理
document.addEventListener('DOMContentLoaded', () => {
    // 为所有主要内容容器添加过渡动画类
    const mainContainers = document.querySelectorAll('main, .landing-page, .discover-page, .community-layout, .style-tips');
    
    mainContainers.forEach(container => {
        if (container) {
            container.classList.add('page-transition');
        }
    });

    // 页面离开时的动画处理
    window.addEventListener('beforeunload', () => {
        mainContainers.forEach(container => {
            if (container) {
                container.classList.remove('page-transition');
                container.classList.add('page-leave');
            }
        });
    });

    // 处理内部链接跳转的动画
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (link && link.href && link.href.startsWith(window.location.origin)) {
            e.preventDefault();
            
            // 添加离开动画
            mainContainers.forEach(container => {
                if (container) {
                    container.classList.add('page-leave');
                }
            });

            // 等待动画完成后跳转
            setTimeout(() => {
                window.location.href = link.href;
            }, 400); // 与CSS中的动画时长匹配
        }
    });
});