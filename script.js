const filterButtons = document.querySelectorAll('.filterButton');
const itemBoxs = document.querySelectorAll('.itemBox');

for (const filterButton of filterButtons) {
    filterButton.addEventListener('click', () => {
        const activeFilterButton = document.querySelector(".filterButton.active");
        activeFilterButton.classList.remove('active');
        filterButton.classList.add('active');

        for (const itemBox of itemBoxs) {
            const dataFilter = filterButton.getAttribute("data-filter");
            const dataItem = itemBox.getAttribute("data-item");

            itemBox.classList.remove("hide");

            if (dataItem !== dataFilter && "all" !== dataFilter) {
                itemBox.classList.add("hide");
            }
        }
    });
}

const lightbox = document.querySelector('.lightbox');
const section = document.querySelector('section');

for (const itemBox of itemBoxs) {
    itemBox.addEventListener('click', () => {

        section.classList.add('blur');
        lightbox.classList.add('active');

        const lightboxImg = document.querySelector('.lightbox-viewer img');
        lightboxImg.src = itemBox.children[0].src;
    });
}

const lightboxCloseButton = document.querySelector('.lightbox-close-btn');

lightboxCloseButton.addEventListener('click', () => {
    lightbox.classList.remove('active');
    section.classList.remove('blur');
});