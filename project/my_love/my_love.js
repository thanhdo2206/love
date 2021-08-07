var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);



// slider background
var badges = $$('.badge');
var sliders = $$('.slider');
var iconRight = $('.right');
var iconLeft = $('.left');


var slidersLength = sliders.length; //3


badges.forEach((badge, index) => {
    const slider = sliders[index];
    badge.onclick = function () {
        var badgeActive = $('.badge.active')
        var sliderActive = $('.slider.active')
        sliderActive.classList.remove('active');
        slider.classList.add('active');
        badgeActive.classList.remove('active');
        badge.classList.add('active');
    }
})

var autoSlider =function () {
    for (var i = 0; i < slidersLength; i++) {
        var check = sliders[i].classList.contains('active');
        if (check) {
            sliders[i].classList.remove('active');
            badges[i].classList.remove('active');
            if(i===slidersLength-1){
                sliders[0].classList.add('active');
                sliders[slidersLength-1].classList.remove('active');
                badges[0].classList.add('active');
                badges[badges.length-1].classList.remove('active');
            }else{
                sliders[i+1].classList.add('active');
                badges[i+1].classList.add('active');
            }break;
        }
    }


}

setInterval(autoSlider,2000);


// ----------
var myIndex = 0;
carousel();

function carousel() {
    
    var x = document.getElementsByClassName("inf_people");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}
