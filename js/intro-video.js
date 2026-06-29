<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script>/**
 * 入场视频动画脚本
 * 功能：
 * 1. 全屏播放视频入场动画
 * 2. 带声音播放
 * 3. 播完自动消失
 * 4. 点击/按键可跳过
 * 5. 5分钟内不重复显示
 */

(function() {
    // 检查是否需要显示入场动画（5分钟内不重复显示）
    var lastShow = localStorage.getItem('intro_last_show');
    var now = Date.now();
    var cooldown = 5 * 60 * 1000; // 5分钟冷却期
    
    if (lastShow && (now - parseInt(lastShow)) < cooldown) {
        // 在冷却期内，不显示
        var overlay = document.getElementById('intro-overlay');
        if (overlay) {
            overlay.style.display = 'none';
        }
        return;
    }
    
    // 等待 DOM 加载完成
    document.addEventListener('DOMContentLoaded', function() {
        var overlay = document.getElementById('intro-overlay');
        var video = document.getElementById('intro-video');
        var skipHint = document.getElementById('skip-hint');
        
        if (!overlay || !video) return;
        
        // 3秒后显示跳过提示
        setTimeout(function() {
            if (skipHint) {
                skipHint.style.opacity = '1';
            }
        }, 3000);
        
        // 取消静音，启用声音
        video.muted = false;
        video.volume = 0.5;
        video.play().catch(function(e) {
            console.log('Auto-play blocked, waiting for user interaction');
        });
        
        // 隐藏动画函数
        function hideIntro() {
            overlay.classList.add('fade-out');
            // 记录显示时间
            localStorage.setItem('intro_last_show', now.toString());
            // 动画结束后移除元素
            setTimeout(function() {
                overlay.style.display = 'none';
            }, 800);
        }
        
        // 视频播放结束
        video.addEventListener('ended', hideIntro);
        
        // 点击遮罩层跳过
        overlay.addEventListener('click', hideIntro);
        
        // 键盘任意键跳过
        document.addEventListener('keydown', function(e) {
            if (overlay.style.display !== 'none') {
                hideIntro();
            }
        });
        
        // ESC 键跳过
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && overlay.style.display !== 'none') {
                hideIntro();
            }
        });
    });
})();
