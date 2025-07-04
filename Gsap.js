// gsap.to('#box',{
//     x:1000,
//     rotate:360,
//     backgroundColor:"green",
//     duration:5, // kab tak chalega
//     delay:1 // kittne der baad chaloo hoga 
// })
// gsap.from('#box',{
//     x:1000,
//     rotate:360,
//     backgroundColor:"green",
//     duration:5, // kab tak chalega
//     delay:1 // kittne der baad chaloo hoga 
// })
// let vl=gsap.timeline() // this will help animate one after another 
// vl.to("#box1",{
//     x:600,
//     rotate:360,
//     scale:0.5,

//     backgroundColor:"green",
//     duration:5,
//     delay:1
    
// })
// vl.to("#box4",{
//     x:600,
//     rotate:360,
//     scale:0.5,

//     backgroundColor:"green",
//     duration:5,
//     delay:0.5
    
// })
// vl.to("#box2",{
//     x:550,
//     rotate:270,
//     scale:0.5,

//     backgroundColor:"black",
//     duration:5,
    
    
// })
// vl.to("#box3",{
//     x:550,
//     rotate:270,
//     scale:0.5,

//     backgroundColor:"black",
//     duration:5,
//     delay:0.5
    
// })


// ********** Gsap Project ******************//
let tl =gsap.timeline()
tl.from('#nav h3',{
    y:-50,
    opacity:0,
    delay:0.4,
    duration:0.8,
    stagger:0.3
})
tl.from("#box h1",{
    x:-500,
    opacity:0,
    duration:0.8,
    stagger:0.3

})
tl.from('img',{
    x:100,
    rotate:45,
    opacity:0,
    duration:0.5,
    stagger:0.5
})