/**
 * 主题切换功能
 * 在当前主题和改进主题之间切换
 */

(function() {
    'use strict';

    var THEME_KEY = 'blog_theme';
    var UPGRADED_THEME = 'upgraded';
    var ORIGINAL_THEME = 'original';

    function initTheme() {
        var savedTheme = localStorage.getItem(THEME_KEY);
        
        if (savedTheme === UPGRADED_THEME) {
            applyUpgradedTheme();
        } else {
            applyOriginalTheme();
        }
        
        bindToggleEvent();
    }

    function bindToggleEvent() {
        var toggleBtn = document.getElementById('theme-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', toggleTheme);
        }
    }

    function toggleTheme() {
        var currentTheme = localStorage.getItem(THEME_KEY);
        
        if (currentTheme === UPGRADED_THEME) {
            applyOriginalTheme();
        } else {
            applyUpgradedTheme();
        }
        
        playToggleAnimation();
    }

    function applyUpgradedTheme() {
        document.body.classList.add('theme-upgraded');
        localStorage.setItem(THEME_KEY, UPGRADED_THEME);
        updateToggleButton(UPGRADED_THEME);
        showToast('✨ 已切换到【升级主题】- 毛玻璃+科技风');
    }

    function applyOriginalTheme() {
        document.body.classList.remove('theme-upgraded');
        localStorage.setItem(THEME_KEY, ORIGINAL_THEME);
        updateToggleButton(ORIGINAL_THEME);
        showToast('🌙 已切换到【原始主题】');
    }

    function updateToggleButton(theme) {
        var themeIcon = document.getElementById('theme-icon');
        var themeText = document.getElementById('theme-text');
        
        if (theme === UPGRADED_THEME) {
            if (themeIcon) themeIcon.innerHTML = '<i class="fa fa-rocket"></i>';
            if (themeText) themeText.textContent = '升级版';
        } else {
            if (themeIcon) themeIcon.innerHTML = '<i class="fa fa-palette"></i>';
            if (themeText) themeText.textContent = '换主题';
        }
    }

    function playToggleAnimation() {
        var toggleBtn = document.getElementById('theme-toggle');
        if (toggleBtn) {
            toggleBtn.style.transform = 'scale(1.2) rotate(180deg)';
            setTimeout(function() {
                toggleBtn.style.transform = 'scale(1) rotate(360deg)';
            }, 200);
            setTimeout(function() {
                toggleBtn.style.transform = '';
            }, 500);
        }
    }

    function showToast(message) {
        var existingToast = document.querySelector('.theme-toast');
        if (existingToast) existingToast.remove();

        var toast = document.createElement('div');
        toast.className = 'theme-toast';
        toast.textContent = message;
        toast.style.cssText = 'position:fixed;top:20px;right:20px;background:linear-gradient(135deg,#667eea,#764ba2);color:white;padding:14px 24px;border-radius:8px;box-shadow:0 4px 20px rgba(0,0,0,0.3);z-index:10000;font-size:14px;font-weight:500;letter-spacing:0.5px;animation:toastSlideIn 0.3s ease forwards;';

        if (!document.getElementById('theme-toast-styles')) {
            var style = document.createElement('style');
            style.id = 'theme-toast-styles';
            style.textContent = '@keyframes toastSlideIn{from{transform:translateX(100%);opacity:0}to{transform:translateX(0);opacity:1}}@keyframes toastSlideOut{from{transform:translateX(0);opacity:1}to{transform:translateX(100%);opacity:0}}';
            document.head.appendChild(style);
        }

        document.body.appendChild(toast);

        setTimeout(function() {
            toast.style.animation = 'toastSlideOut 0.3s ease forwards';
            setTimeout(function() { if (toast.parentNode) toast.remove(); }, 300);
        }, 3000);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTheme);
    } else {
        initTheme();
    }

    document.addEventListener('pjax:complete', initTheme);

})();
