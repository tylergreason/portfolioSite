console.log(navigator.userAgent)

// fix cover image not showing right on iPhone
// find background element 
const cover = document.getElementById('cover'); 
// if 'iPhone' is in the userAgent, add ios class to the cover element 
if (navigator.userAgent.includes('iPhone')){
    cover.classList.add('iPhone')
}