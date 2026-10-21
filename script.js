var imgList = Array.from(document.querySelectorAll('.item img'));
var ligtBoxContainer = document.querySelector('#boxContainer');
var ligtboxInner = document.querySelector('#boxInner');
var currentSlid = 0;

var nextBtn = document.querySelector('.fa-arrow-right');
var prevBtn = document.querySelector('.fa-arrow-left');

for (var i = 0; i < imgList.length; i++) {
    imgList[i].addEventListener('click', function (e) {
        ligtBoxContainer.classList.replace('d-none', 'd-flex');
        var imgSrc = e.target.getAttribute('src');
        currentSlid = imgList.indexOf(e.target);
        ligtboxInner.style.backgroundImage = `url('${imgSrc}')`;
    });
}

function nextSlid() {
    currentSlid++;
    if (currentSlid === imgList.length) {
        currentSlid = 0; 
    }
    var imgSrc = imgList[currentSlid].getAttribute('src');
    ligtboxInner.style.backgroundImage = `url('${imgSrc}')`;
}

function prevSlid() {
    currentSlid--;
    if (currentSlid < 0) {
        currentSlid = imgList.length - 1; 
    }
    var imgSrc = imgList[currentSlid].getAttribute('src');
    ligtboxInner.style.backgroundImage = `url('${imgSrc}')`;
}

nextBtn.addEventListener('click', nextSlid);
prevBtn.addEventListener('click', prevSlid);

function closeSlider() {
    ligtBoxContainer.classList.replace('d-flex', 'd-none');
}

ligtBoxContainer.addEventListener('click', function () {
    closeSlider();
});

ligtboxInner.addEventListener('click', function (e) {
    e.stopPropagation();
});