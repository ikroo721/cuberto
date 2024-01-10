gsap.from("h1",{
    y:200,
    stagger:.2,
    duration:1
})
gsap.from("video",{
    y:200,
    duration:1
})
document.addEventListener("mousemove",function(a){
    // document.querySelector("")
    gsap.to(".cursor",{
        x: a.pageX,
        y:a.pageY
    })
})