const modalFt = document.querySelector('.modal-one');
const modalCoy = document.querySelector('.modal-two');
const features = document.querySelector('.dropdown-ft');
const company = document.querySelector('.dropdown-coy');
const openMobileModal = document.querySelector('.icon-menu');
const closeMobileModal = document.querySelector('.close');
const mobileModal = document.querySelector('.mobile-modal');
const dim = document.querySelector('.grid');
const mobileFtMenu = document.querySelector('.modal-mobile');
const mobileCoyMenu = document.querySelector('.modal-mob');
const mobileFt = document.getElementById('ft');
const mobileCoy = document.getElementById('coy');
const arrowFt = document.querySelector('.arrow-ft');
const arrowCoy = document.querySelector('.arrow-coy');
const upArrow = document.querySelector('.arrow');
const arrowUp = document.querySelector('.arrow-up');


// To open and close features dropdown list
features.addEventListener('click', () => {
    if(modalFt.classList.contains('modal-one')) {
        modalFt.classList.toggle('display-ft')
    }
    upArrow.classList.toggle('up')
})

// To open and close company dropdown list
company.addEventListener('click', () => {
    if(modalCoy.classList.contains('modal-two')) {
        modalCoy.classList.toggle('display-coy')
    }
    arrowUp.classList.toggle('up')
})

// To open menu on smaller screens
openMobileModal.addEventListener('click', () => {
    mobileModal.classList.add('sm')
    dim.classList.add('shadow')
})

// To close the menu on smaller screens
closeMobileModal.addEventListener('click', () => {
    mobileModal.classList.remove('sm')
    mobileCoyMenu.style.display = 'none'
    mobileFtMenu.style.display = 'none'
    dim.classList.remove('shadow')
})

// To open and close mobile features menu
mobileFt.addEventListener('click', () => {
    if(mobileFtMenu.classList.contains('modal-mobile')) {
        mobileFtMenu.classList.toggle('fet')
    }
    arrowFt.classList.toggle('rotate')
})

// To open and close mobile company menu
mobileCoy.addEventListener('click', () => {
    if(mobileCoyMenu.classList.contains('modal-mob')) {
        mobileCoyMenu.classList.toggle('comp')
    }
    arrowCoy.classList.toggle('rotate')
})



