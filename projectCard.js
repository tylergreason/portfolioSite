const projectCard = () => {
    // create outer div 
    const projectCard = createElement('div'); 
    addClass(projectCard, 'projectCard'); 
    appendTo(projectCard__img, projectCard); 
    return projectCard; 
}

const projectCard__img = (src) => {
    const img = createElement('img'); 
    addClass(img, 'projectCard__img'); 
    img.src = src; 
    return img; 
}

const projectCard__details = () => {
    const projectCard__details = createElement('div'); 
    addClass(projectCard__details, 'projectCard__details'); 

    return projectCard__details; 
}