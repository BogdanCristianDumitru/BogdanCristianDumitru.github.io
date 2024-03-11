const menuBtn = document.querySelector("#menuBtn");
const openIcon = document.querySelector("#openIcon");
const closeIcon = document.querySelector("#closeIcon");
const mobileNav = document.querySelector("#mobileNav");
const mobileLinks = mobileNav.querySelectorAll("a");

const searchInput = document.getElementById('search-input');
const projectContainers = document.querySelectorAll('.project-container');

// FUNCTIONS
// Toggle Menu
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

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (mobileNav.classList.contains("open")) {
            toggleMenu();
        }
    });
});

// Search function 
function searchProject() {
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
            project.style.display = 'flex';
        }  else {
            project.style.display = 'none';
        } 

      separateProjects();
    });

        if (searchText === "") {
            location.reload();
        }
}

// Separate projects function
function separateProjects(matchFound) {
    const delineatingLines = document.querySelectorAll('.separate-projects');

    delineatingLines.forEach(hr => {
        if(matchFound) {
            hr.style.display = 'none';
        } else if (!matchFound) {
            hr.style.display = 'none';
        } else {
            hr.style.display = 'block';
        }
      });
}

// EVENT LISTENERS
// For Toggle Menu
menuBtn.addEventListener('click', () => {
    toggleMenu();
});

//For Search Function
searchInput.addEventListener('keyup', () => {
    searchProject();
});




       