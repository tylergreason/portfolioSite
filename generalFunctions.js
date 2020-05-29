const createElement = type => {
    return document.createElement(type); 
}

// const appendTo = (append, whatToAppendTo) => {
//     return whatToAppendTo.appendChild(append); 
// }

const addClass = (ele, newClass) => {
    return ele.className = ele.className + ` ${newClass}`; 
};

