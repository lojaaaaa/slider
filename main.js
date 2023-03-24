const slider = document.querySelector('.slider')
const arrowIcons = document.querySelectorAll('.wrapper i')
const firstImg = slider.querySelectorAll('img')[0]

let isDragStart = false, prevPageX, PrevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 15

arrowIcons.forEach (icon => {
    icon.addEventListener('click', () =>{
        slider.scrollLeft += icon.id == 'left' ? -firstImgWidth : firstImgWidth
    })
})



const dragStart = (event)=>{
    isDragStart = true
    prevPageX = event.pageX
    PrevScrollLeft = slider.scrollLeft
}

const dragging = (event) =>{
    if(!isDragStart) return;
    event.preventDefault()
    slider.classList.add('dragging')
    let positionDiff = event.pageX - prevPageX
    slider.scrollLeft = PrevScrollLeft - positionDiff
}

const dragStop = () =>{
    isDragStart = false
    slider.classList.remove('dragging')
}

slider.addEventListener('mousedown', dragStart)
slider.addEventListener('mousemove', dragging)
slider.addEventListener('mouseup', dragStop)