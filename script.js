const bg = document.querySelector('.bg');
const loadText = document.querySelector('.loading-text');

let load = 0;
let int = setInterval(blurring,30)
function blurring(){
    load++
    if(load >99){
        clearInterval(int)
    }
    loadText.innerText = `${load}%`; // text has to shhow the countdown from 0 t0 100%
    // opacity value ranges from 1 (invisible/black) to 0 (visible/clear)
    //mapping one no.range to another no.range
    loadText.style.opacity = scale(load,0,100,1,0);
    bg.style.filter = `blur(${scale(load, 0,100, 30 ,0)}px)`
}
//source stackoverflow
const scale = (num, in_min, in_max, out_min, out_max)=>{
    return (num - in_min)*(out_max - out_min)/(in_max-in_min)+out_min
}