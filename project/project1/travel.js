var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

// -----------------header-------------------
// on and off form register and login

var account = $('.account');
var overLay = $('#over_lay');
var logIn = $('#login');
var register = $('#register');

//turn on
account.addEventListener('click', () => {
    overLay.style.display = "block";
    logIn.style.display = "block";
})



// chuyển đổi register và login
var modals = $$('.modal__header-link');

modals.forEach((modal) => {
    if (modal.classList.contains('click_choose')) {
        modal.addEventListener('click', (event) => {
            if (modal.innerText === 'REGISTER') {
                logIn.style.display = "none";
                register.style.display = "block";
            } else {
                logIn.style.display = "block";
                register.style.display = "none";
            }
        })
    }
})

// chọn trong form login
var point = $('.point_check');
var clickRemember = $('.click__remember');

clickRemember.addEventListener('click', () => {
    point.classList.toggle('choose__point');
})

//search
var searchBox = $('.search__box');
var search = $('.ti-search');
var closeSearch = $('.close__search');

search.addEventListener('click', () => {
    searchBox.style.display = "block";
    overLay.style.display = "block";
})

closeSearch.addEventListener('click', () => {
    searchBox.style.display = "none";
    overLay.style.display = "none";
})

//navbar
var iconMenu = $('.ti-menu');
var navBar = $('#nav__bar');
var closeNavbar = $('.icon__close-bar');

iconMenu.addEventListener('click', () => {
    navBar.style.display = "block";
    overLay.style.display = "block";
})

closeNavbar.addEventListener('click', () => {
    navBar.style.display = "none";
    overLay.style.display = "none";
})

//turn off
overLay.addEventListener('click', () => {
    overLay.style.display = "none";
    logIn.style.display = "none";
    register.style.display = "none";
    searchBox.style.display = "none";
    navBar.style.display = "none";
})
// -------------------------------------

//choose box
var months = $$('.month__item');
var travels = $$('.travel__item');
var monthValue = $('.months__container');
var travelValue = $('.travels__container');
var chooseBox = $$('.choose__box');
var selectInput = $$('.select__input');

//dropdown box choose
selectInput.forEach((item, index) => {
    item.addEventListener('click', () => {
        chooseBox[index - 1].classList.toggle('active__choose');
    })
})

//click choose value
months.forEach((month, index) => {
    month.addEventListener('click', () => {
        monthValue.value = month.innerText;
        chooseBox[0].classList.toggle('active__choose');
    })
});

travels.forEach((travel, index) => {
    travel.addEventListener('click', () => {
        travelValue.value = travel.innerText;
        chooseBox[1].classList.toggle('active__choose');

    })
});

//filter money

var formSearch = $('#input_filter');
var prices = $$('.price');
var imgHolidays = $$ ('.img__holiday-box');
var imgHolidayIntro = $$('.img__holiday-intro');
var noData = $('.no_data');



var moneyFrom = $('.money_from');
var moneyTo = $('.money_to');

formSearch.addEventListener('keyup', (event) => {

    var rangeA = parseInt(moneyFrom.value);
    var rangeB = parseInt(moneyTo.value);
    imgHolidayIntro.forEach((item)=>{
        item.style.display = "none";
    })

    imgHolidays.forEach((holidayItem, index) => {

        var cost = prices[index].innerText.slice(1);
        var costInt = parseInt(cost);
        if (rangeA < costInt && costInt < rangeB) {
            holidayItem.style.display = "block";
            
        }else{
            holidayItem.style.display = "none";
            
            
        }

        if(costInt < rangeA && costInt > rangeB) {
            noData.innerText = "No Data ";
        }else{
            noData.innerText = " ";
        }


    })


})






// trun on and off video
var myVideo = $("#video-autoplay");
var buttonOnvideo = $('.video-button-play-image');

overLay.addEventListener('click', () => {
    if (myVideo.play) {
        myVideo.pause();
        overLay.style.display = "none";
        myVideo.style.display = "none";
    }
});



buttonOnvideo.addEventListener('click', () => {
    if (myVideo.paused) {
        myVideo.play();
        overLay.style.display = "block";
        myVideo.style.display = "block";
    }
});

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = $$(".inf_people");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

