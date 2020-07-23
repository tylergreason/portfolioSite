const stdmImgs = Array.from(document.getElementsByClassName('stdm__img')); 

let startImgIndex = 0; 

// remove each open class from the imgs 
const removeAllClasses = (array, classToRemove) => {
    array.forEach(img => img.classList.remove(classToRemove))

}

// add open class to next img 
const animateNextImg = (index, array, classToAdd) => {
    // console.log(index);
    // console.log(startImgIndex);
    if (startImgIndex >= array.length-1){
        startImgIndex = 0; 
    }
    array[index].classList.add(classToAdd); 
    startImgIndex += 1; 
    console.log(startImgIndex);
}

const animateImgs = (index,array,classToAdd, classToRemove) => {
    removeAllClasses(array, classToRemove); 
    index = animateNextImg(index, array, classToAdd); 
}

window.setInterval(() => animateImgs(startImgIndex, stdmImgs, "stdm__img__open", "stdm__img__open"), 1500)