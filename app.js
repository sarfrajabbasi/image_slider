const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");

const imgContainer = document.querySelector(".img-container");
const img =document.querySelectorAll('img')
console.log(imgContainer);

let currentImg = 1;
let timeOut;
nextEl.addEventListener("click", () => {
  currentImg++;
  clearTimeout(timeOut)
  updateImg();

});
prevEl.addEventListener('click',()=>{
currentImg--
clearTimeout(timeOut)
updateImg()

})

function updateImg() {
    if(currentImg > img.length){
        currentImg =1
    }else if(currentImg < 1){
        currentImg = img.length
    }
  imgContainer.style.transform = `translateX(-${(currentImg-1) * 500}px)`;
  timeOut = setTimeout(()=>{
    currentImg++
    updateImg()
      },3000)

}

