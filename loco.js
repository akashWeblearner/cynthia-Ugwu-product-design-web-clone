const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function firstpageainm(){
    var tl = gsap.timeline();
    tl.from("#nav",{
        y: "-10",
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })

   
    .to(".bounding-elem",{
        y: 0,
      
        duration: 2,
        ease: Expo.easeInOut,
        stagger: .2
    })
    .from(".herofooter",{
        y:-10,
        duration: 1.5,
        opacity:0,
        ease: Expo.easeInOut
        



    })
}
function circlemousemove(){
    window.addEventListener("mousemove", function(dets){
    document.querySelector(".minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px )`
    })
}

document.querySelectorAll(".elem").forEach(function(elem){
var rotate = 0;
var diffrot=0;
elem.addEventListener("mouseleave", function(dets){
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate= dets.clientX;
    gsap.to(elem.querySelector("img"),{
        opacity:0,
        ease: "power1"
      
    });
});
elem.addEventListener("mousemove", function(dets){
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate= dets.clientX;
    gsap.to(elem.querySelector("img"),{
        opacity:1,
        ease: "power1",
        top: diff,
        left: dets.clientX,
       rotate: gsap.utils.clamp(-20,20,diffrot)
    });
    
});
});




circlemousemove();
firstpageainm();