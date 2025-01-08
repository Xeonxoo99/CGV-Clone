// 모든 h2 요소에 hover 이벤트 추가
document.querySelectorAll('.nav_menu > li h2').forEach((h2) => {
    // hover 시작 시
    h2.addEventListener('mouseenter', () => {
        document.querySelectorAll('.nav_overMenu').forEach((dl) => {
            dl.style.display = 'block'; // 모든 dl 요소를 표시
        });
    });

    // hover 종료 시
    h2.addEventListener('mouseleave', () => {
        document.querySelectorAll('.nav_overMenu').forEach((dl) => {
            dl.style.display = 'none'; // 모든 dl 요소를 숨김
        });
    });
});