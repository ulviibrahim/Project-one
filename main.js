
//  var t=$('.count-span').text()
// console.log(t)
// scrollTo($('count-span'))(
//     $('count-span').text='15'
// )
// var lastScrollTop=0
// $(window).scroll(function(e){
//     var st=$(this).scrollTop()
//     if(st>lastScrollTop){
//         console.log($('.count-span'))
//     }
// })

// var art=0
// var x=35
// var counts=()=>{
//     for(var i=0;i<x;i++){
//         art++
//     }
// }
// counts()
// console.log(art)
var one  =  document.querySelectorAll('.counter span')


window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if(scroll>3400){

      var t=0
    var fx=  setInterval(function(e) {
          t++
          for(var i=0;i<one.length;i++){
          
   if (t>one[i].getAttribute('data-count')){
       clearInterval(fx)
   }else{
    one[i].innerHTML=t
   }
  }       
      }, 2);
  
    }else if(scroll>3600){
      $('.count-span').html(0)
    } if(scroll<3600){

      var t=0
    var fx=  setInterval(function(e) {
          t++
          for(var i=0;i<one.length;i++){
          
   if (t>one[i].getAttribute('data-count')){
       clearInterval(fx)
   }else{
    one[i].innerHTML=t
   }
  }       
      }, 2);
  
    }else if(scroll>3600){
      $('.count-span').html(0)
    }
 
});

window.addEventListener("scroll", (event) => {
  console.log(this.scrollY)

})

// const genNumber = () => {
//     document.querySelector(".count-span").style.setProperty("--percent", Math.random());
//   };
  
//   setInterval(genNumber, 2000);
//   setTimeout(genNumber);