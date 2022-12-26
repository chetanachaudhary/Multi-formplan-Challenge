const yearTxt=document.querySelector("#yearlytext");
const freeoff=document.getElementById("freeoffer");
const onoffslide=document.getElementById("smallcircle");
const slide=document.querySelector(".onoffbox");


onoffslide.addEventListener("click",()=>{
    document.getElementById("smallcircle").style.marginLeft='1.5rem';
   
    // onoffslide.style.display='none';
    // slide.style.display='block';
});

// slide.addEventListener("click",()=>{
//     document.getElementById("smallcircle2").style.display='block';
// })

function show(){
    document.getElementById("freeoffer").style.display='block';
    document.getElementById("freeoffer1").style.display='block';
    document.getElementById("freeoffer2").style.display='block';

}

yearTxt.addEventListener("click",show);

const arca=document.getElementById('arcade');
arca.addEventListener('click',()=>{
    arca.style.borderColor='hsl(243, 100%, 62%)';
});

