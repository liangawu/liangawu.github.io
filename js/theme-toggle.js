/**
 * 主题切换功能
 * 在当前主题和改进主题之间切换
 * 包含毛玻璃效果、渐变背景、现代化设计
 */

(function() {
    'use strict';

    // 主题键名
    const THEME_KEY = 'blog_theme';
    const UPGRADED_THEME = 'upgraded';
    const ORIGINAL_THEME = 'original';

    // 改进主题的CSS文件 - 使用相对路径让Hexo处理
    const UPGRADED_CSS = '/css/_data/upgraded-theme.styl';

    // 主题切换按钮模板
    const toggleButtonHTML = `
        <div class="theme-toggle-wrapper" style="margin: 15px 0;">
            <div class="theme-toggle" id="theme-toggle" title="点击切换主题风格">
                <span class="theme-icon" id="theme-icon">
                    <i class="fa fa-palette"></i>
                </span>
                <span class="theme-text" id="theme-text">换主题</span>
            </div>
        </div>
    `;

    // CSS链接元素
    let upgradedCSSLink = null;

    /**
     * 初始化主题
     */
    function initTheme() {
        // 创建或获取CSS链接
        createUpgradedCSSLink();
        
        // 获取保存的主题
        const savedTheme = localStorage.getItem(THEME_KEY);
        
        if (savedTheme === UPGRADED_THEME) {
            applyUpgradedTheme();
        } else {
            applyOriginalTheme();
        }
        
        // 延迟添加切换按钮，等待侧边栏渲染
        setTimeout(addToggleButton, 500);
        
        // 绑定切换事件
        setTimeout(bindToggleEvent, 600);
    }

    /**
     * 创建改进主题的CSS链接
     */
    function createUpgradedCSSLink() {
        // 检查是否已存在
        upgradedCSSLink = document.getElementById('upgraded-theme-css');
        
        if (!upgradedCSSLink) {
            upgradedCSSLink = document.createElement('link');
            upgradedCSSLink.rel = 'stylesheet';
            upgradedCSSLink.href = UPGRADED_CSS;
            upgradedCSSLink.id = 'upgraded-theme-css';
            upgradedCSSLink.disabled = true; // 默认禁用
            document.head.appendChild(upgradedCSSLink);
        }
    }

    /**
     * 添加切换按钮到侧边栏
     */
    function addToggleButton() {
        // 移除已存在的按钮（防止重复添加）
        const existingBtn = document.querySelector('.theme-toggle-wrapper');
        if (existingBtn) {
            existingBtn.remove();
        }

        // 尝试多个可能的选择器找到侧边栏容器
        const selectors = [
            '.sidebar .site-overview',
            '.sidebar-inner',
            '.site-overview',
            '.sidebar .widget',
            '.sidebar'
        ];

        let container = null;
        for (const selector of selectors) {
            container = document.querySelector(selector);
            if (container) {
                console.log('Theme toggle: Found container:', selector);
                break;
            }
        }

        if (!container) {
            console.log('Theme toggle: Container not found, using fixed position');
            // 如果找不到容器，使用固定定位
            const wrapper = document.createElement('div');
            wrapper.className = 'theme-toggle-wrapper';
            wrapper.innerHTML = toggleButtonHTML;
            wrapper.style.cssText = 'position:fixed;bottom:30px;right:30px;z-index:9999;';
            document.body.appendChild(wrapper);
            return;
        }

        // 创建主题切换按钮容器
        const toggleWrapper = document.createElement('div');
        toggleWrapper.className = 'theme-toggle-wrapper';
        toggleWrapper.innerHTML = toggleButtonHTML;
        
        // 插入到侧边栏的开头（在博主信息后面）
        const firstWidget = container.querySelector('.site-author');
        if (firstWidget && firstWidget.nextSibling) {
            container.insertBefore(toggleWrapper, firstWidget.nextSibling);
        } else {
            container.insertBefore(toggleWrapper, container.firstChild);
        }
    }

    /**
     * 绑定切换事件
     */
    function bindToggleEvent() {
        const toggleBtn = document.getElementById('theme-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', toggleTheme);
        }
    }

    /**
     * 切换主题
     */
    function toggleTheme() {
        const currentTheme = localStorage.getItem(THEME_KEY);
        
        if (currentTheme === UPGRADED_THEME) {
            applyOriginalTheme();
        } else {
            applyUpgradedTheme();
        }
        
        // 添加切换动画
        playToggleAnimation();
    }

    /**
     * 应用改进主题
     */
    function applyUpgradedTheme() {
        // 添加主题class
        document.body.classList.add('theme-upgraded');
        
        // 启用CSS
        if (upgradedCSSLink) {
            upgradedCSSLink.disabled = false;
        }
        
        // 保存到localStorage
        localStorage.setItem(THEME_KEY, UPGRADED_THEME);
        
        // 更新按钮状态
        updateToggleButton(UPGRADED_THEME);
        
        // 显示提示
        showToast('✨ 已切换到【升级主题】- 毛玻璃+科技风');
    }

    /**
     * 应用原主题
     */
    function applyOriginalTheme() {
        // 移除主题class
        document.body.classList.remove('theme-upgraded');
        
        // 禁用CSS
        if (upgradedCSSLink) {
            upgradedCSSLink.disabled = true;
        }
        
        // 保存到localStorage
        localStorage.setItem(THEME_KEY, ORIGINAL_THEME);
        
        // 更新按钮状态
        updateToggleButton(ORIGINAL_THEME);
        
        // 显示提示
        showToast('🌙 已切换到【原始主题】');
    }

    /**
     * 更新切换按钮状态
     */
    function updateToggleButton(theme) {
        const themeIcon = document.getElementById('theme-icon');
        const themeText = document.getElementById('theme-text');
        
        if (theme === UPGRADED_THEME) {
            if (themeIcon) {
                themeIcon.innerHTML = '<i class="fa fa-rocket"></i>';
            }
            if (themeText) {
                themeText.textContent = '升级版';
            }
        } else {
            if (themeIcon) {
                themeIcon.innerHTML = '<i class="fa fa-palette"></i>';
            }
            if (themeText) {
                themeText.textContent = '换主题';
            }
        }
    }

    /**
     * 切换动画效果
     */
    function playToggleAnimation() {
        const toggleBtn = document.getElementById('theme-toggle');
        if (toggleBtn) {
            toggleBtn.style.transform = 'scale(1.2) rotate(180deg)';
            toggleBtn.classList.add('rotating');
            
            setTimeout(function() {
                toggleBtn.style.transform = 'scale(1) rotate(360deg)';
            }, 200);
            
            setTimeout(function() {
                toggleBtn.style.transform = '';
                toggleBtn.classList.remove('rotating');
            }, 500);
        }
    }

    /**
     * 显示提示消息
     */
    function showToast(message) {
        // 移除已存在的toast
        const existingToast = document.querySelector('.theme-toast');
        if (existingToast) {
            existingToast.remove();
        }

        const toast = document.createElement('div');
        toast.className = 'theme-toast';
        toast.textContent = message;
        toast.style.cssText = [
            'position: fixed',
            'top: 20px',
            'right: 20px',
            'background: linear-gradient(135deg, #667eea, #764ba2)',
            'color: white',
            'padding: 14px 24px',
            'border-radius: 8px',
            'box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3)',
            'z-index: 10000',
            'font-size: 14px',
            'font-weight: 500',
            'letter-spacing: 0.5px',
            'animation: toastSlideIn 0.3s ease forwards'
        ].join(';');

        // 添加动画样式（如果不存在）
        if (!document.getElementById('theme-toast-styles')) {
            const style = document.createElement('style');
            style.id = 'theme-toast-styles';
            style.textContent = [
                '@keyframes toastSlideIn {',
                '  from { transform: translateX(100%); opacity: 0; }',
                '  to { transform: translateX(0); opacity: 1; }',
                '}',
                '@keyframes toastSlideOut {',
                '  from { transform: translateX(0); opacity: 1; }',
                '  to { transform: translateX(100%); opacity: 0; }',
                '}'
            ].join('');
            document.head.appendChild(style);
        }

        document.body.appendChild(toast);

        // 3秒后自动消失
        setTimeout(function() {
            toast.style.animation = 'toastSlideOut 0.3s ease forwards';
            setTimeout(function() {
                if (toast.parentNode) {
                    toast.remove();
                }
            }, 300);
        }, 3000);
    }

    /**
     * 页面加载完成后初始化
     */
    function onDOMReady() {
        initTheme();
        
        // 如果页面使用了PJAX，监听页面切换
        if (typeof Pjax !== 'undefined') {
            document.addEventListener('pjax:complete', function() {
                setTimeout(initTheme, 100);
            });
        }
        
        // 监听hash变化（某些SPA实现）
        window.addEventListener('hashchange', function() {
            setTimeout(initTheme, 100);
        });
    }

    // DOM加载完成后初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', onDOMReady);
    } else {
        onDOMReady();
    }

})();
