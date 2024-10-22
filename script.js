
const emojis=["😍","😍","❤️","❤️","😈","😈","☘️","☘️","🌸","🌸","🔥","🔥","😭","😭","🌳","🌳"];

var shuf_emojis=emojis.sort(()=>(Math.random()>.5)?2: -1);
for(var i=0;i<emojis.length;i++){
    let box=document.createElement('div')
    box.className='item';
    box.innerHTML=shuf_emojis[i]

    box.onclick=function(){
        this.classList.add('boxopen')
        
    
        setTimeout(function(){
if(document.querySelectorAll('.boxopen').length>1){
    if(document.querySelectorAll('.boxopen')[0].innerHTML==
document.querySelectorAll('.boxopen')[1].innerHTML){
    document.querySelectorAll('.boxopen')[0].classList.add
    ('boxMatch')
    document.querySelectorAll('.boxopen')[1].classList.add
    ('boxMatch')
    document.querySelectorAll('.boxopen')[1].classList.remove
    ('boxopen')
    document.querySelectorAll('.boxopen')[0].classList.remove
    ('boxopen')
    if(document.querySelectorAll('.boxMatch').length== emojis.length){
        alert('WIN')
    }
}else{
    document.querySelectorAll('.boxopen')[1].classList.remove
    ('boxopen')
    document.querySelectorAll('.boxopen')[0].classList.remove
    ('boxopen')
}
}
        },500);''
    }      
      

    document.querySelector(".game").appendChild(box);
}