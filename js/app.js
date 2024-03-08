const menuBtn = document.querySelector("#menuBtn");
const openIcon = document.querySelector("#openIcon");
const closeIcon = document.querySelector("#closeIcon");
const mobileNav = document.querySelector("#mobileNav");
const mobileLinks = mobileNav.querySelectorAll("a");

const searchInput = document.getElementById('search-input');
const projectContainers = document.querySelectorAll('.project-container');



function toggleMenu() {
    const isExpanded = menuBtn.getAttribute("aria-expanded") === "true";

    menuBtn.setAttribute("aria-expanded", !isExpanded);

    mobileNav.setAttribute("aria-hidden", isExpanded);

    if (!isExpanded) {
        closeIcon.style.display = "block";
        openIcon.style.display = "none";
        mobileNav.classList.add("open");
    } else {
        closeIcon.style.display = "none";
        openIcon.style.display = "block";
        mobileNav.classList.remove("open");
    }
}

menuBtn.addEventListener('click', () => {
    toggleMenu();
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (mobileNav.classList.contains("open")) {
            toggleMenu();
        }
    });
});


// Event Listener for Search Function
searchInput.addEventListener('keyup', () => {
    const searchText = searchInput.value.toLowerCase();
    const screenWidth = window.innerWidth;

    projectContainers.forEach(project => {
        const techStacks = project.querySelectorAll('.project-techs span');
        let matchFound = false;

        techStacks.forEach(span => {
            const spanText = span.textContent.toLowerCase();
            if (spanText.includes(searchText)) {
                matchFound = true;
            }
        });

        if (matchFound && screenWidth < 768) {
            project.style.display = 'block';
        } else if (matchFound && screenWidth > 768) {
            project.style.display = 'flex'
        } else {
            project.style.display = 'none';
        } 
    });

        if (searchText === "") {
            location.reload();
        }
});



       