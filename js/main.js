  // const tabMenu = document.querySelectorAll('.tabMenu li');
        // const tabBody = document.querySelectorAll('.tabBody li');
        // const tabBodybu = document.querySelector('.tabBody');

        // let num = 0;

        // tabMenu.forEach(function(e,index){
        //     e.addEventListener('click',function(){
        //         tabBody[num].classList.remove('active');
        //         tabMenu[num].classList.remove('active');
        //         this.classList.add('active');
        //         tabBodybu.classList.add('active')
        //         // this.parentNode.add('active')   

        //         num=index;
        //         tabBody[num].classList.add('active');

 

        //     });
        // });

        
        // const tabMenu = document.querySelectorAll('.tabMenu li');
        // const tabBody = document.querySelectorAll('.tabBody li');
        // const tabBodybu = document.querySelector('.tabBody');

        // let num = 0;

        // tabMenu.forEach(function (e, index) {
        // e.addEventListener('click', function () {
        //         if (this.classList.contains('active')) {
        //             this.classList.remove('active');
        //             tabBodybu.classList.remove('active');
        //             tabBody[num].classList.remove('active');
        //             num = 0;
        //             } else {
        //             tabBody[num].classList.remove('active');
        //             tabMenu[num].classList.remove('active');
        //             this.classList.add('active');
        //             tabBodybu.classList.add('active');
        //             num = index;
        //             tabBody[num].classList.add('active');

        //             if (num === tabMenu.length) {
        //                 num = 0;
        //             }
        //         }
        //     });
        // });


        // const tabMenu = document.querySelectorAll('.tabMenu li');
        // const tabBody = document.querySelectorAll('.tabBody li');
        // const tabBodybu = document.querySelector('.tabBody');
        // const gnb = document.querySelector('.gnb');

        // let num = 0;

        // tabMenu.forEach(function (e, index) {
        // e.addEventListener('click', function () {
        //     if (this.classList.contains('active')) {
        //     this.classList.remove('active');
        //     tabBodybu.classList.remove('active');
        //     tabBody[num].classList.remove('active');
        //     gnb.style.backgroundColor = '#ffd900';
        //     num = 0;
        //     } else {
        //     tabBody[num].classList.remove('active');
        //     tabMenu[num].classList.remove('active');
        //     this.classList.add('active');
        //     tabBodybu.classList.add('active');
        //     gnb.style.backgroundColor = '#000';
        //     num = index;
        //     tabBody[num].classList.add('active');
        //     }
        // });
        // });


// const tabMenu = document.querySelectorAll('.tabMenu li');
// const tabBody = document.querySelectorAll('.tabBody li');
// const tabBodya = document.querySelectorAll('.tabBody li a');
// const tabBodybu = document.querySelector('.tabBody');
// const gnb = document.querySelector('.gnb');

// let num = 0;

// tabMenu.forEach(function (e, index) {
//   e.addEventListener('click', function () {
//     if (this.classList.contains('active')) {
//       this.classList.remove('active');
//       tabBodybu.classList.remove('active');
//       tabBody[num].classList.remove('active');
//       gnb.style.backgroundColor = '#ffd900';
//       num = 0;
//     } else {
//       tabBody[num].classList.remove('active');
//       tabMenu[num].classList.remove('active');
//       this.classList.add('active');
//       tabBodybu.classList.add('active');
//       gnb.style.backgroundColor = '#fff';
//       num = index;
//       tabBody[num].classList.add('active');

//       if (num === tabMenu.length) {
//         num = 0;
//       }
//     }
//   });
// });


// const tabMenu = document.querySelectorAll('.tabMenu li');
// const tabBody = document.querySelectorAll('.tabBody li');
// const tabMenua = document.querySelectorAll('.tabMenu li a');
// const tabBodybu = document.querySelector('.tabBody');
// const gnb = document.querySelector('.gnb');

// let num = 0;
// const defaultColor = '#000'; // 원래 폰트 색상
// const clickedColor = '#ffd900'; // 클릭 시 폰트 색상

// tabMenu.forEach(function (e, index) {
//   e.addEventListener('click', function () {
//     if (this.classList.contains('active')) {
//       this.classList.remove('active');
//       tabBodybu.classList.remove('active');
//       tabBody[num].classList.remove('active');
//       gnb.style.backgroundColor = clickedColor;
//       tabMenua.forEach(function(a) {
//         a.style.color = defaultColor;
//       });
//       num = 0;
//     } else {
//       tabBody[num].classList.remove('active');
//       tabMenu[num].classList.remove('active');
//       this.classList.add('active');
//       tabBodybu.classList.add('active');
//       gnb.style.backgroundColor = '#000';
//       tabMenua.forEach(function(a) {
//         a.style.color = clickedColor;
//       });
//       num = index;
//       tabBody[num].classList.add('active');

//       if (num === tabMenu.length) {
//         num = 0;
//       }
//     }
//   });
// });


const tabMenu = document.querySelectorAll('.tabMenu > li');
const tabBody = document.querySelectorAll('.tabBody > li');
const tabMenua = document.querySelectorAll('.tabMenu > li a');
const tabBodybu = document.querySelector('.tabBody');
const gnb = document.querySelector('.gnb');

let num = 0;
const defaultColor = '#000';
const clickedColor = '#ffd900';

// 모든 탭 메뉴 아이템에 대해 opacity 값을 0.5로 설정하는 함수
function removeOpacity() {
  tabMenua.forEach(function(a) {
    if (!a.classList.contains('clicked')) {
      a.style.opacity = 0.5;
    }
  });
}

tabMenu.forEach(function (e, index) {
  e.addEventListener('click', function () {
    if (index === 1 || index === 2) { // check if clicked tab is 1 or 2
      //window.location.href = e.querySelector('a').getAttribute('href'); // redirect to the link
      this.classList.remove('active');
      return; // exit the function to prevent showing tab content
    }
    if (this.classList.contains('active')) { // 현재 탭이 이미 활성화된 경우
      this.classList.remove('active'); // 탭 메뉴에서 활성화 클래스 제거
      tabBodybu.classList.remove('active'); // 탭 내용에서 활성화 클래스 제거
      tabBody[num].classList.remove('active'); // 현재 활성화된 탭 내용에서 활성화 클래스 제거
      gnb.style.backgroundColor = clickedColor; // gnb 배경색 변경
      gnb.classList.remove('active'); // gnb에 활성화 클래스 제거

      tabMenua.forEach(function(a) {
        a.style.color = defaultColor; // 모든 탭 메뉴 항목의 글자색을 기본색상으로 설정
        a.classList.remove('clicked'); // 모든 탭 메뉴 항목에서 clicked 클래스 제거
        a.style.opacity = 0.5; // 모든 탭 메뉴 항목의 불투명도 값을 0.5로 설정
      });
      //num = 0;
    } else { // 현재 탭이 활성화되어 있지 않은 경우
      tabBody[num].classList.remove('active'); // 현재 활성화된 탭 내용에서 활성화 클래스 제거
      tabMenu[num].classList.remove('active'); // 현재 활성화된 탭 메뉴에서 활성화 클래스 제거
      this.classList.add('active'); // 클릭한 탭 메뉴에서 활성화 클래스 추가
      tabBodybu.classList.add('active'); // "All" 탭 내용에서 활성화 클래스 추가
      gnb.style.backgroundColor = '#000'; // gnb 배경색 변경
      gnb.classList.add('active'); // gnb에 활성화 클래스 추가
      //   logoc.src('img/logo-1und1_w.svg');

      // tabMenua.forEach(function(a) {
      //   if (a === e.querySelector('a')) { // 현재 클릭한 탭 메뉴 항목과 같은 항목인 경우
      //     a.style.color = clickedColor; // 글자색을 클릭된 상태의 색상으로 변경
      //     a.classList.add('clicked'); // clicked 클래스 추가
      //   } else { // 다른 탭 메뉴 항목인 경우
      //     a.style.color = defaultColor; // 글자색을 기본색상으로 설정
      //     a.classList.remove('clicked'); // clicked 클래스 제거
      //   }
      //   a.style.opacity = 0.5; // 불투명도 값을 0.5로 설정
      // });
      removeOpacity(); // 나머지 탭 메뉴 항목의 불투명도 값을 0.5로 설정하는 함수 호출
      tabMenua[index].style.opacity = 1; // 클릭한 탭 메뉴 항목의 불투명도 값을 1로 설정
      num = index; // 활성화된 탭 인덱스 값을 저장
      tabBody[num].classList.add('active'); // 클릭한 탭 내용에서 활성화 클래스 추가


      // if (num === tabMenu.length) {
      //   num = 0;
      // }
    }
  });

  e.addEventListener('mouseover', function () {
    if (!this.classList.contains('active')) {
      removeOpacity();  // 모든 탭 메뉴 아이템에 대해 opacity 값을 0.5로 설정
      tabMenua[index].style.opacity = 1;  // 호버한 탭 메뉴 아이템에 대해 opacity 값을 1로 설정
    }
  });

  e.addEventListener('mouseout', function () {
    if (!this.classList.contains('active')) {
      tabMenua.forEach(function(a) {
        a.style.opacity = 1;  // 모든 탭 메뉴 아이템에 대해 opacity 값을 0.5로 설정
      });
    }
  });
});

tabMenu.forEach(function (e, index) {
  // ...

  e.addEventListener('click', function () {
    if (this.classList.contains('active')) {
      // ...
      console.log('닫힐때 이미지변경')
      document.querySelector('#logoc').src = 'img/logo-1und1_w.svg'; // 탭이 닫힐 때 이미지 변경
    } else {
      // ...
      document.querySelector('#logoc').src = 'img/logo-1und1_s.svg'; // 탭이 열릴 때 이미지 변경
    }
  });

  // ...
});



tabMenua[0].addEventListener('mouseover', function () {
  // this.innerHTML="<a href>뉴스</a>"
  this.innerText="  뉴 스  "
});
tabMenua[0].addEventListener('mouseout', function () {
  this.innerText="NEWS"
});
tabMenua[1].addEventListener('mouseover', function () {
  // this.innerHTML="<a href>뉴스</a>"
  this.innerText="돌문 TV"
});
tabMenua[1].addEventListener('mouseout', function () {
  this.innerText="BVB-TV"
});
tabMenua[2].addEventListener('mouseover', function () {
  // this.innerHTML="<a href>뉴스</a>"
  this.innerText="쇼 핑"
});
tabMenua[2].addEventListener('mouseout', function () {
  this.innerText="SHOP"
});
tabMenua[3].addEventListener('mouseover', function () {
  // this.innerHTML="<a href>뉴스</a>"
  this.innerText=" 티 켓 팅 "
});
tabMenua[3].addEventListener('mouseout', function () {
  this.innerText="TICKETS"
});
tabMenua[4].addEventListener('mouseover', function () {
  // this.innerHTML="<a href>뉴스</a>"
  this.innerText=" 스케줄 "
});
tabMenua[4].addEventListener('mouseout', function () {
  this.innerText="SPIELE"
});

tabMenua[5].addEventListener('mouseover', function () {
  // this.innerHTML="<a href>뉴스</a>"
  this.innerText=" 선수단 정보 "
});
tabMenua[5].addEventListener('mouseout', function () {
  this.innerText="MANNSCHAFTEN"
});
tabMenua[6].addEventListener('mouseover', function () {
  // this.innerHTML="<a href>뉴스</a>"
  this.innerText=" 팬 클럽 "
});
tabMenua[6].addEventListener('mouseout', function () {
  this.innerText="FANS"
});
tabMenua[7].addEventListener('mouseover', function () {
  // this.innerHTML="<a href>뉴스</a>"
  this.innerText="BVB 역사 "
});
tabMenua[7].addEventListener('mouseout', function () {
  this.innerText="DER BVB"
});
tabMenua[8].addEventListener('mouseover', function () {
  // this.innerHTML="<a href>뉴스</a>"
  this.innerText="파트너들 / 환영 "
});
tabMenua[8].addEventListener('mouseout', function () {
  this.innerText="PARTNER / HOSPITALITY"
});









let headerTop = document.querySelector('.header_top');
let headerTopBtn = document.querySelector('.header_top button');
let bngBtn = document.querySelector('.bng_btn,.bng_btn span');
let tabMenuOn = document.querySelector('.tabMenu');




//모바일에서 헤더 on off

headerTopBtn.addEventListener('click', function () {
    if (headerTop.classList.contains('on')) {
      headerTop.classList.remove('on')
    } else {
      headerTop.classList.add('on')
    
    }
  });

  bngBtn.addEventListener('click', function () {
    if (this.classList.contains('on') ) {
      this.classList.remove('on')
      tabMenuOn.classList.remove('on')
      gnb.style.backgroundColor = clickedColor; // gnb 배경색 변경
      document.querySelector('#logoc').src = 'img/logo-1und1_s.svg'; // 탭이 닫힐 때 이미지 변경
      tabBodybu.classList.remove('active'); // 탭 내용에서 활성화 클래스 제거


    } else {
      this.classList.add('on')
      tabMenuOn.classList.add('on')
      gnb.style.backgroundColor = defaultColor; // gnb 배경색 변경
      document.querySelector('#logoc').src = 'img/logo-1und1_w.svg'; // 탭이 닫힐 때 이미지 변경


    
    }
  });


//모바일 gnb서브 뒤로가기

let backBtn = document.querySelectorAll('.backBtn');
// backBtn.addEventListener('click', function (e) {
//   tabBody[num].classList.remove('active'); // 현재 활성화된 탭 내용에서 활성화 클래스 제거
//   tabBodybu.classList.remove('active'); // 탭 내용에서 활성화 클래스 제거
  
//   });

  backBtn.forEach(function (e, index) {
  
    e.addEventListener('click', function () {

      tabBody[index].classList.remove('active'); // 현재 활성화된 탭 내용에서 활성화 클래스 제거
      tabBodybu.classList.remove('active'); // 탭 내용에서 활성화 클래스 제거
      tabMenu[index].classList.remove('active'); // 현재 활성화된 탭 메뉴에서 활성화 클래스 제거
      console.log(tabMenu[index]);
    });
  
  });


//플레이어들

var players = new Swiper({
  el: '.swiper-container.players',
  slidesPerView : 8,
  initialSlide: 0,
  spaceBetween: 0,// 슬라이드간 간격/
  //slidesPerGroup:5,// 그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음
  //slidesPerView: 2,
  centeredSlides: false,
  slideToClickedSlide: true,
  grabCursor: true,
  scrollbar: {
      el: '.swiper-scrollbar',
  },
  mousewheel: {
      enabled: true,
  },
  
  keyboard: {
      enabled: true,
  },
  // pagination: {
  //     el: '.swiper-pagination',
  // },
  navigation: {
      nextEl: '.swiper-button-next.players',
      prevEl: '.swiper-button-prev.players',
  },

  breakpoints: {
    // 화면의 넓이가 1500px 이상일 때
    1500: {
      slidesPerView: 6,
      spaceBetween: 0
    },
    1000: {
      slidesPerView: 4,
      spaceBetween: 0
    },
    850: {
      slidesPerView: 3,
      spaceBetween: 0
    },    
    700: {
      slidesPerView: 2,
      spaceBetween: 0
    },
    500: {
      slidesPerView: 1,
      spaceBetween: 0
    },
  }

});




//랭킹

var swiper = new Swiper({
  el: '.swiper-container.ranking_list',
  slidesPerView : 8,
  initialSlide: 0,
  spaceBetween: 0,// 슬라이드간 간격/
  //slidesPerGroup:5,// 그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음
  //slidesPerView: 2,
  centeredSlides: false,
  slideToClickedSlide: true,
  grabCursor: true,
  scrollbar: {
      el: '.swiper-scrollbar',
  },
  mousewheel: {
      enabled: true,
  },
  keyboard: {
      enabled: true,
  },
  // pagination: {
  //     el: '.swiper-pagination',
  // },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // 화면의 넓이가 1500px 이상일 때
    1500: {
      slidesPerView: 6,
      spaceBetween: 0
    },
    1000: {
      slidesPerView: 5,
      spaceBetween: 0
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 0
    },    
    700: {
      slidesPerView: 3,
      spaceBetween: 0
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 0
    },
  }
});


//메인비주얼
var visu = new Swiper({
  el: '.visual',
  
  speed : 300,
  slidesPerView : 1,
//  touchRatio: 0,//드래그 금지
//   autoplay: {
//     delay: 3000,
//     disableOnInteraction: true,
// },
  // initialSlide: 0,
  spaceBetween: 0,// 슬라이드간 간격/
  //slidesPerGroup:5,// 그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음
  //slidesPerView: 2,
  loop : true,   // 슬라이드 반복 여부
  // centeredSlides: false,
  // slideToClickedSlide: false,
  // grabCursor: false,
  // scrollbar: {
  //     el: '.swiper-scrollbar',
  // },
  mousewheel: {
      enabled: false,//스크롤링
  },
  // keyboard: {
  //     enabled: true,
  // },

  navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
  },
  pagination: { // 호출(pager) 여부
    el: ".swiper-pagination", //버튼을 담을 태그 설정
    clickable: true, // 버튼 클릭 여부
    renderBullet: function (index, className) {
      return `<li class="${className}"><img src="img/baner0${[index+1]}.jpg" alt=""></li>`
    },
  },

});







