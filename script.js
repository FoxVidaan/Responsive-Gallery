const filterButtons = document.querySelectorAll('.filterButton');
const itemBoxs = document.querySelectorAll('.itemBox');

for (const filterButton of filterButtons) {
    filterButton.addEventListener('click', () => {
        const activeFilterButton = document.querySelector(".filterButton.active");
        activeFilterButton.classList.remove('active');
        filterButton.classList.add('active');

        for (const itemBox of itemBoxs) {
            const filter = filterButton.getAttribute("data-filter");
            const item = itemBox.getAttribute("data-item");
            console.log(item + " " + filter)

            itemBox.classList.remove("hide")

            if (item !== filter && "all" !== filter) {
                itemBox.classList.add("hide");
            }
        }
    });
}

const lightbox = document.querySelector('.lightbox');
const section = document.querySelector('section');
const lightboxImg = document.querySelector('.lightbox-viewer img');

for (const itemBox of itemBoxs) {
    itemBox.addEventListener('click', () => {
        const imgSrc = itemBox.children[0].src;
        console.log(imgSrc);
        lightbox.classList.add('active');
        section.classList.add('blur');
        lightboxImg.src = imgSrc;
    });
}

const lightboxCloseButton = document.querySelector('.lightbox-close-btn');

lightboxCloseButton.addEventListener('click', () => {
    lightbox.classList.remove('active');
    section.classList.remove('blur');

})