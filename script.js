// =====================================================
// MOBILE MENU
// =====================================================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", function () {

        navMenu.classList.toggle("active");

    });

}


// =====================================================
// CLOSE MOBILE MENU WHEN LINK IS CLICKED
// =====================================================

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


// =====================================================
// CERTIFICATE MODAL
// =====================================================

const certificateModal =
    document.getElementById("certificateModal");

const certificateFullImage =
    document.getElementById("certificateFullImage");


// Open certificate
function openCertificate(imagePath) {

    if (!certificateModal || !certificateFullImage) {
        return;
    }

    certificateFullImage.src = imagePath;

    certificateModal.classList.add("active");

    document.body.style.overflow = "hidden";
}


// Close certificate
function closeCertificate() {

    if (!certificateModal) {
        return;
    }

    certificateModal.classList.remove("active");

    document.body.style.overflow = "auto";

}


// =====================================================
// CLOSE MODAL WHEN CLICKING OUTSIDE IMAGE
// =====================================================

if (certificateModal) {

    certificateModal.addEventListener(
        "click",
        function (event) {

            if (event.target === certificateModal) {

                closeCertificate();

            }

        }
    );

}


// =====================================================
// CLOSE MODAL WITH ESCAPE KEY
// =====================================================

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeCertificate();

        }

    }
);


// =====================================================
// FOOTER YEAR
// =====================================================

const yearElement =
    document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


// =====================================================
// SCROLL REVEAL
// =====================================================

const revealElements = document.querySelectorAll(
    ".about-card, .education-card, .skill-card, .internship-card, .project-card, .certificate-card, .contact-card"
);


if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(function (element) {

        element.classList.add("reveal");

        observer.observe(element);

    });

}


// =====================================================
// ACTIVE NAVIGATION ON SCROLL
// =====================================================

const sections =
    document.querySelectorAll("section[id]");


window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        const linkTarget =
            link.getAttribute("href");

        if (linkTarget === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});


// =====================================================
// PREVENT BROKEN CERTIFICATE IMAGE
// =====================================================

if (certificateFullImage) {

    certificateFullImage.addEventListener(
        "error",
        function () {

            console.log(
                "Certificate image could not be loaded."
            );

        }
    );

}