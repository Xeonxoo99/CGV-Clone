//! 드롭다운 메뉴
document.querySelectorAll('.nav_menu > li h2').forEach((h2) => {
    // hover 시작 시
    h2.addEventListener('mouseenter', () => {
        document.querySelectorAll('.nav_overMenu').forEach((dl) => {
            dl.style.display = 'block'; // 모든 dl 요소를 표시
            // document.getElementsByClassName.style.height = "450px"
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
    const scrollTopButton = document.querySelector('.scroll_top');
    const ticketingButton = document.querySelector('.scroll_top .ticketing');
    const scrollPosition = window.scrollY;

    // nav 요소가 화면 상단을 넘었을 때
    if (scrollPosition > nav.offsetTop) {
        nav.classList.add('sticky');
        scrollTopButton.classList.add('show'); // 버튼 보이기
    } else {
        nav.classList.remove('sticky');
        scrollTopButton.classList.remove('show'); // 버튼 숨기기
    }

    // btn_gototop과 ticketing 버튼 위치 변경
    if (scrollPosition > 100) {  // 스크롤 위치가 100px 이상일 때
        ticketingButton.style.right = '55px';  // ticketing 왼쪽으로 이동
        document.querySelector('.scroll_top .btn_gototop').style.right = '0'; // btn_gototop 오른쪽 끝으로
    } else {
        ticketingButton.style.right = '0';  // 기본 위치
    }
});

//! 무바차트 버튼
function switch1() {
    document.querySelector('#movie_chart_list').style.display = 'block'
    document.querySelector('#movie_chart_list_reser').style.display = 'none'

    document.querySelector('#btn_movie a').style.color = '#000'
    document.querySelector('#btn_movie a').style.fontWeight = '700'

    document.querySelector('#btn_reser_movie a').style = 'none'
}

function switch2() {
    document.querySelector('#movie_chart_list').style.display = 'none'
    document.querySelector('#movie_chart_list_reser').style.display = 'block'

    document.querySelector('#btn_reser_movie a').style.color = '#000'
    document.querySelector('#btn_reser_movie a').style.fontWeight = '700'

    document.querySelector('#btn_movie a').style = 'none'
}

//? 슬라이드 만드는 법 모르겠음
//? display:none이 되어 있는 '상영예정작' 차트는 적용되지 않음

const swiperWrap = document.querySelector('.swiper_wrap'); // 슬라이드 전체를 감싸는 요소
const slides = document.querySelectorAll('.swiper_slide_movie'); // 슬라이드 개별 요소
const prevButton = document.querySelector('.swiper_btn_prev'); // 이전 버튼
const nextButton = document.querySelector('.swiper_btn_next'); // 다음 버튼

let currentIndex = 0; // 현재 슬라이드 인덱스
const slideWidth = slides[0].offsetWidth + 32; // 슬라이드 폭 + 간격
const containerWidth = document.querySelector('.movie_chart_wrap .contents').offsetWidth; // 보여지는 컨테이너 폭
const maxVisibleSlides = Math.floor(containerWidth / slideWidth); // 한 번에 보여지는 슬라이드 수
const maxIndex = slides.length - maxVisibleSlides; // 마지막 슬라이드의 최대 인덱스

function moveSlide(index) {
    swiperWrap.style.transform = `translateX(-${index * slideWidth}px)`;
    updateButtonVisibility(); // 버튼 표시 상태 업데이트
}

function updateButtonVisibility() {
    // 첫 번째 슬라이드일 때 prev 버튼 숨김
    if (currentIndex === 0) {
        prevButton.style.visibility = 'hidden';
    } else {
        prevButton.style.visibility = 'visible';
    }

    // 마지막 슬라이드일 때 next 버튼 숨김
    if (currentIndex >= 5) {
        nextButton.style.visibility = 'hidden';
    } else {
        nextButton.style.visibility = 'visible';
    }
}

// 이전 버튼 클릭 이벤트
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        moveSlide(currentIndex);
    }
});

// 다음 버튼 클릭 이벤트
nextButton.addEventListener('click', () => {
    if (currentIndex < maxIndex) {
        currentIndex++;
        moveSlide(currentIndex);
    }
});

// 초기 상태에서 버튼 표시 업데이트
updateButtonVisibility();

