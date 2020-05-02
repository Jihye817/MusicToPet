/*
FrontEnd 개발 및 JAVA 웹개발자 과정 박지혜
wlgul817@gmail.com
2019.12.29 final update

PC SIZE VER
*/

/* 페이지 refresh 할 시 페이지 맨 위로 이동하기 위한 jQuery */
$(document).ready(function(){
    $(this).scrollTop(0);
});

/* 신청하기 버튼 클릭 시 alert표시 위한 javascript */
function apply(){
    alert("해당 서비스는 현재 준비중입니다.")
}

/* 슬라이드쇼를 위한 javascript*/
var slideIndex = 1;

slideShow(slideIndex);

function slidePlus(n) {
    slideShow(slideIndex += n);
}

function slideShow(n) { //슬라이드쇼를 위한 함수
    var i;
    var slide = document.getElementsByClassName("sliders");
    if(n > slide.length){ //n이 슬라이드 개수보다 클 경우 처음 슬라이드로 돌아가게 한다.
        slideIndex = 1;
    }
    if(n < 1){ //n이 1보다 작은 경우 n-1은 -1이므로 마지막 슬라이드로 돌아가게 한다.
        slideIndex = slide.length
    }
    for(i=0; i<slide.length; i++){
        slide[i].style.display = "none"; //넘어간 슬라이드는 표시하지않는다.
    }
    slide[slideIndex-1].style.display = "block"; //슬라이드를표시
}


/* FNQ를 위한 javascript */
var accordion = document.getElementsByClassName("fnqlist");
var fnqs = document.getElementsByClassName("fnqans");
var i;

for (i = 0; i < accordion.length; i++) {
    accordion[i].onclick = function() {
        var setClasses = !this.classList.contains('active'); //클릭한 element(this)의 class 중 active라는 이름의 클래스가 있으면 0, 없으면 1로 저장.
        hideAll(); //전부 숨김. 이미 클릭한 것을 다시 클릭했을 때 숨겨주는 역할도 한다.

        if(setClasses) {
            this.classList.toggle("active"); //클릭한것만 toggle되도록 active를 붙임
            this.nextElementSibling.classList.toggle("show"); //클릭한것만 toggle되도록 show 붙임
        }
        
    }
}

function hideAll() { //전부 숨김. 이미 클릭한 것을 다시 클릭했을 때 숨겨주는 역할도 한다.
    for (i = 0; i < accordion.length; i++) {
        accordion[i].classList.toggle("active", false); //toggle을 false로 설정하여 보이지 않게 함
        accordion[i].nextElementSibling.classList.toggle("show", false);
    }
}

/*smallmenu toggle을 위한 javascript*/
var menu_t = document.getElementById("menu_t")
function getmenu() {
    if(menu_t.style.display=="block"){
        menu_t.style.display = "none";
    }
    else{
        menu_t.style.display="block"
    }
}

/* 슬라이드쇼_small을 위한 javascript*/
var slideIndex_t = 1;

slideShow_t(slideIndex_t);

function slidePlus_t(n) {
    slideShow_t(slideIndex_t += n);
}

function slideShow_t(n) { //슬라이드쇼를 위한 함수
    var i;
    var slide = document.getElementsByClassName("sliders_t");
    if(n > slide.length){ //n이 슬라이드 개수보다 클 경우 처음 슬라이드로 돌아가게 한다.
        slideIndex_t = 1;
    }
    if(n < 1){ //n이 1보다 작은 경우 n-1은 -1이므로 마지막 슬라이드로 돌아가게 한다.
        slideIndex_t = slide.length
    }
    for(i=0; i<slide.length; i++){
        slide[i].style.display = "none"; //넘어간 슬라이드는 표시하지않는다.
    }
    slide[slideIndex_t-1].style.display = "block"; //슬라이드를표시
}