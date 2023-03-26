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


const tabMenu = document.querySelectorAll('.tabMenu li');
const tabBody = document.querySelectorAll('.tabBody li');
const tabMenua = document.querySelectorAll('.tabMenu li a');
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
    if (this.classList.contains('active')) {
      this.classList.remove('active');
      tabBodybu.classList.remove('active');
      tabBody[num].classList.remove('active');
      gnb.style.backgroundColor = clickedColor;
      gnb.classList.remove('active');

      tabMenua.forEach(function(a) {
        a.style.color = defaultColor;
        a.classList.remove('clicked');
        a.style.opacity = 0.5;
      });
      num = 0;
    } else {
      tabBody[num].classList.remove('active');
      tabMenu[num].classList.remove('active');
      this.classList.add('active');
      tabBodybu.classList.add('active');
      gnb.style.backgroundColor = '#000';
      gnb.classList.add('active');
    //   logoc.src('img/logo-1und1_w.svg');

      tabMenua.forEach(function(a) {
        if (a === e.querySelector('a')) {
          a.style.color = clickedColor;
          a.classList.add('clicked');
        } else {
          a.style.color = defaultColor;
          a.classList.remove('clicked');
        }
        a.style.opacity = 0.5;
      });
      removeOpacity();  // 나머지 탭 메뉴 아이템에 대해 opacity 값을 0.5로 설정
      tabMenua[index].style.opacity = 1;  // 클릭한 탭 메뉴 아이템에 대해 opacity 값을 1로 설정
      num = index;
      tabBody[num].classList.add('active');

      if (num === tabMenu.length) {
        num = 0;
      }
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