//! 드롭다운 메뉴
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

//! 네비게이션 바 스크롤 시 상단 고정
window.addEventListener('scroll', function () {
    const nav = document.querySelector('.nav');
    const scrollPosition = window.scrollY;

    if (scrollPosition > nav.offsetTop) {  // nav 요소의 상단이 화면 상단을 넘을 때
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});