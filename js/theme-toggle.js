/**
 * 主题切换功能 - 简约专业
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
    }

    function applyUpgradedTheme() {
        document.body.classList.add('theme-upgraded');
        localStorage.setItem(THEME_KEY, UPGRADED_THEME);
        updateToggleButton(UPGRADED_THEME);
        showToast('已切换到新主题');
    }

    function applyOriginalTheme() {
        document.body.classList.remove('theme-upgraded');
        localStorage.setItem(THEME_KEY, ORIGINAL_THEME);
        updateToggleButton(ORIGINAL_THEME);
        showToast('已切换到原始主题');
    }

    function updateToggleButton(theme) {
        var themeIcon = document.getElementById('theme-icon');
        var themeText = document.getElementById('theme-text');
        
        if (theme === UPGRADED_THEME) {
            if (themeIcon) themeIcon.innerHTML = '<i class="fa fa-sun"></i>';
            if (themeText) themeText.textContent = '亮色';
        } else {
            if (themeIcon) themeIcon.innerHTML = '<i class="fa fa-adjust"></i>';
            if (themeText) themeText.textContent = '切换主题';
        }
    }

    function showToast(message) {
        var existingToast = document.querySelector('.theme-toast');
        if (existingToast) existingToast.remove();

        var toast = document.createElement('div');
        toast.className = 'theme-toast';
        toast.textContent = message;
        toast.style.cssText = 'position:fixed;top:20px;right:20px;background:#24292f;color:#fff;padding:10px 18px;border-radius:6px;z-index:10000;font-size:13px;';

        document.body.appendChild(toast);

        setTimeout(function() {
            if (toast.parentNode) toast.remove();
        }, 2500);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTheme);
    } else {
        initTheme();
    }

    document.addEventListener('pjax:complete', initTheme);

})();
