const closeMenu = document.getElementById('close-menu');
const openMenu = document.getElementById('open-menu');
const navList = document.querySelector('.nav-list');
const menuOverlay = document.querySelector('.menu-overlay');
const navItems = document.querySelector('.nav-items');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const ellipses = document.querySelectorAll('.ellipse')
const cards = document.querySelectorAll('.card');
const productBtns = document.querySelectorAll('.item-btn');
const viewBtn = document.getElementById('view-btn');

openMenu.addEventListener('click', () => {
    navList.classList.add('flex');
    menuOverlay.classList.add('flex');
    navList.classList.add('place');
    navItems.classList.add('active');
    document.body.classList.add('no-scroll');
})

closeMenu.addEventListener('click', () => {
    navList.classList.add('hide');
    navList.classList.remove('place');
    menuOverlay.classList.remove('flex');
    navList.classList.remove('flex');
    navItems.classList.remove('active');
    document.body.classList.remove('no-scroll');
})

function overlayDiv() {
    if (window.innerWidth > 700) {
        menuOverlay.classList.add('hide')
        menuOverlay.classList.remove('flex')
        navItems.classList.remove('active');
        navList.classList.remove('place');
        navList.classList.remove('flex');
        document.body.classList.remove('no-scroll');
    }

    let middleFourElements = Array.from(cards).slice(-8, -4);
    // console.log(lastFourElements);

    if (window.innerWidth < 700) {
        middleFourElements.forEach(ele => {
            ele.classList.add('hide')
        })
    } else if (window.innerWidth > 700) {
        middleFourElements.forEach(ele => {
            ele.classList.remove('hide')
        })
    }
}

overlayDiv();

window.addEventListener('resize', overlayDiv);

//Section 1: Introduction Section carousel
leftArrow.addEventListener('click', () => {
    let activeIndex = -1;

    Array.from(ellipses).filter((ellipse, index) => {
        if (ellipse.classList.contains('active')) {
            activeIndex = index;
        }
    })

    ellipses.forEach((ellipse, index) => {
        ellipse.classList.remove('active');
    })

    // Determine the new active ellipse (circular logic if needed)
    let nextIndex = (activeIndex - 1 + ellipses.length) % ellipses.length;

    // Add 'active' class to the new active ellipse
    ellipses[nextIndex].classList.add('active');
})

rightArrow.addEventListener('click', () => {
    let activeIndex = -1;
    Array.from(ellipses).filter((ellipse, index) => {
        if (ellipse.classList.contains('active')) {
            activeIndex = index;
        }
    })

    ellipses.forEach((ellipse, index) => {
        ellipse.classList.remove('active');
    })

    // Determine the new active ellipse (circular logic if needed)
    let nextIndex = (activeIndex + 1) % ellipses.length;

    // Add 'active' class to the new active ellipse
    ellipses[nextIndex].classList.add('active');
})


// Hover Effect on cards 
cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.classList.add('active');
    })

    card.addEventListener('mouseout', () => {
        card.classList.remove('active');
    })
})


// Hover Effect on card button's
productBtns.forEach(productBtn => {
    productBtn.addEventListener('mouseover', () => {
        productBtn.classList.add('active');
    })

    productBtn.addEventListener('mouseout', () => {
        productBtn.classList.remove('active');
    })
})

// Event Listener on View All Button
viewBtn.addEventListener('click', () => {
    cards.forEach(card => {
        if (card.classList.contains('hide')) {
            card.classList.remove('hide');
        }
    })
})

