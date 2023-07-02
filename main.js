
let section=document.getElementById('counter')

let stat=document.querySelectorAll('.count-span')

let start=false


window.onscroll=function(){
    if(window.scrollY>=section.offsetTop||window.scrollY>=3500){
console.log(window.scrollY)

        if(!start){
console.log(start)
            stat.forEach(element => {
                startCount(element)
            });

            // stat.foreach((sta)=>startCount(sta))
        }
        start=true
        
console.log(start)
 
    }else{
        
        stat.forEach(element => {
            element.innerHTML=0
        });
        start=false
    }
}

function startCount(el){
    let max=el.dataset.count;
    let count=setInterval(()=>{
        el.textContent ++
        if(el.textContent==max){
            clearInterval(count);
        }
    },200/ stat)
}

