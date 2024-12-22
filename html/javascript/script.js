// 這裡可以加入一些互動功能，例如點擊圖片時顯示更多資訊
document.querySelectorAll('.column img').forEach(img => {
    img.addEventListener('click', function(event) {
        event.stopPropagation(); // 防止點擊圖片時觸發父元素的點擊事件
        alert('你點擊了圖片：' + this.alt);
    });
});
document.querySelector('.custom-dropdown').addEventListener('change', function() {
    const selected = this.value;
    const columns = document.querySelectorAll('.column');
    
    columns.forEach(column => {
        if (selected === 'all') {
            column.style.display = 'block';
        } else {
            if (column.classList.contains(selected)) {
                column.style.display = 'block';
            } else {
                column.style.display = 'none';
            }
        }
    });
});
let timeoutId;
const screensaverDelay = 60000; // 60秒後啟動螢幕保護程式

function resetTimer() {
    clearTimeout(timeoutId);
    const screensaver = document.getElementById('screensaver');
    screensaver.classList.remove('active');
    timeoutId = setTimeout(showScreensaver, screensaverDelay);
}

function showScreensaver() {
    const screensaver = document.getElementById('screensaver');
    screensaver.classList.add('active');
}

// 監聽用戶活動
document.addEventListener('mousemove', resetTimer);
document.addEventListener('keypress', resetTimer);
document.addEventListener('click', resetTimer);
document.addEventListener('scroll', resetTimer);

// 點擊螢幕保護程式時關閉它
document.getElementById('screensaver').addEventListener('click', resetTimer);

// 初始化計時器
resetTimer();