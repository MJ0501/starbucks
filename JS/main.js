const badgeEl=document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if(window.scrollY>500){
    //화면상 하단으로 내려가게 되면, badge 숨김.
    //gsab.to(요소,지속시간,옵션);
    gsap.to(badgeEl,.6,{
      opacity: 0, /* 0.6초 동안 점점 투명해진다. */
      display: 'none' /* 해당 영역 속성도 없어져야함.*/
    });
    //상단이동버튼 보이게 함
    gsap.to(toTopEl,.2,{
      x:0 /* 원래의 위치 */
    });
    
  }else{
    //화면상 상단에 위치하면 badge 보임.
    gsap.to(badgeEl,.6,{
      opacity:1,
      display:'block' /* css랑 다르므로 문자데이터로 써야함. */
    })
    //상단이동버튼 hide
    gsap.to(toTopEl,.2,{ /* toTopEL 대신, '#to-top' 가능. -요소의 아이디사용가능 */
      x: 100 /* 안보이게 하기위해 100만큼 오른쪽으로 이동시킴(화면밖으로) */
    });
  }
},300));
/* _.throttle(함수,시간) 
> 설치한 lohdash Library method
> 스크롤할 때 설정된 시간(milisecond)마다 부하를 줘서 실행되는 함수를 제한함. */

//상단이동하게 하는 변수
toTopEl.addEventListener('click',function(){
  gsap.to(window,.7,{
    scrollTo:0 /* 화면의 지점을 scrollTo 0위치로 이동시켜줌 */
  });
});


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl,index){
  gsap.to(fadeEl,1, {
    delay: (index + 1)*.7,  //0.7 - 1.4 - 2.1 - 2.7
    opacity: 1
  });
});

/* SWIPER 사용법   new Swiper(선택자,옵션) */
new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});
new Swiper('.promotion .swiper',{
  /* 이미 Swiper 생성자에서direction은 수평이 기본값이라서 굳이 지정X */
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  slideBetween: 10, // 슬라이드 사이 여백
  centerdSlides: true, // 첫번째 슬라이드가 가운데 보이기
  loop: true,
/*   autoplay: {
    delay: 5000
    /* delay - 5000miliseconds.= 5 s  
  }, */
  pagination:{
    el:'.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true  // 사용자의 페이지 번호 요소 제어-클릭이 가능한지!!
  },
  navigation:{
    prevEl:'.promotion .swiper-prev',
    nextEl:'.promotion .swiper-next'
  }
});
    /* 다중 요소 슬라이드 - awards 파트 */
new Swiper('.awards .swiper',{
/*   direction: 'horizontal', 기본값이므로 생략가능 */  
  autoplay:true,
  loop: true,
  spaceBetween:30,
  slidesPerView: 5,
  navigation:{
    prevEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next'
  }
});
/* 그냥 prev, next만 쓰면 안됨!! */


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;  //기본값 - 보이고 있다!
promotionToggleBtn.addEventListener('click',function(){
  isHidePromotion = !isHidePromotion
  if(isHidePromotion){
    //숨김처리-true라면.
    promotionEl.classList.add('hide');
  }else{
    //보이게 처리-false라면.
    promotionEl.classList.remove('hide');
  }
});

function random(min,max){
  return parseFloat((Math.random() * (max-min) + min).toFixed(2))
}
function floatingObject(selector,delay,size){
/*   gsap.to(요소,시간,옵션); */
  gsap.to(
    selector,        // 선택자
    random(1.5,2.5), // animation 동작 시간
    {                // 옵션
      y: size,
      ease: Power1.easeInOut, //grap easing -> 첫번째.
      repeat: -1, //-1이면 무한반복임
      yoyo : true ,//아래에서 위로 다시 올라가는 구조
      delay : random(0,delay) // 몇 초 뒤에 animation을 실행할 것인지 정하는 것.
    }
  );
}
floatingObject('.floating1',1,15);
floatingObject('.floating2',.5,15);
floatingObject('.floating3',1.5,20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
/* .Scne...등등은methode */
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,     //보여짐의 여부를 감시할 요소(triggerElement)를 지정함.
      triggerHook: .8  //(범위는 0부터 1까지 인데, 그 사이 0.8)만약 0.8 지점에 이르면 
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});