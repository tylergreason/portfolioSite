const stdmImgs = Array.from(document.getElementsByClassName('stdm__img')); 

let startImgIndex = 0;

const increaseIndex = () => {
    if (startImgIndex >= stdmImgs.length -1){
        startImgIndex = 0;  
    }else{
        startImgIndex +=1; 
    }
}

const toggleClass = (array, index, classToToggle) => {
    array[index].classList.toggle(classToToggle)
}

// remove each open class from the imgs 
const removeAllClasses = (array, classToRemove) => {
    array.forEach(img => img.classList.remove(classToRemove))
}

// add open class to next img 
const animateNextImg = (array, classToAdd) => {
    array.forEach((img, i) =>{
        if (img.classList.contains(classToAdd)){
            img.classList.toggle(classToAdd); 

            // check if this is the last img in the array
            if (i === array.length-1){
                // console.log(array[0]);
                return array[0].classList.add(classToAdd); 
            }else {
                // console.log(array[i+1]);
                return array[i+1].classList.add(classToAdd); 
            }
        }
        
        })
    }

const animateImgs = (array,classToToggle) => {
    removeAllClasses(array, classToToggle)
    toggleClass(array, startImgIndex, classToToggle); 
    increaseIndex()
}

window.setInterval(() => animateImgs(stdmImgs, "stdm__img__open"), 1500)