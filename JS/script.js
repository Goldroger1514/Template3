let lastLi=document.querySelector('#last-li');
let megaMenu=document.querySelector('.mega-menu');
lastLi.addEventListener('click',()=>megaMenu.classList.toggle('active'));
let topRows=document.querySelectorAll('div.top-row .after');
console.log(topRows);
let rates=document.querySelectorAll("span.progress");
rates.forEach((span,index)=>{
  console.log(span)
  span.style.width=span.dataset.progress+'%';
  topRows[index].innerHTML=span.dataset.progress+'%';
})