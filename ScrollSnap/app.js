function smoothScroll(target,duration){
    var target = document.querySelector(target);
    var startPosition=window.pageYOffset;
    var targetPosition=target.getBoundingClientRect().top;

    console.log(startPosition);
}

smoothScroll('.section1',1000);