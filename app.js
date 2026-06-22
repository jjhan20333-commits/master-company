// ================================
// MASTER COMPANY
// app.js
// ================================

document.addEventListener("DOMContentLoaded", () => {

    // ===========================
    // Mobile Menu
    // ===========================

    const menuBtn = document.querySelector(".mobile-menu-btn");
    const nav = document.querySelector(".nav-menu");

    if (menuBtn && nav) {
        menuBtn.addEventListener("click", () => {
            nav.classList.toggle("active");
            menuBtn.classList.toggle("active");
        });
    }

    // ===========================
    // FAQ
    // ===========================

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");

        question.addEventListener("click", () => {

            faqItems.forEach(faq => {
                if (faq !== item) {
                    faq.classList.remove("active");
                }
            });

            item.classList.toggle("active");
        });
    });

    // ===========================
    // Scroll Animation
    // ===========================

    const animatedElements =
        document.querySelectorAll(
            ".service-card, .gallery-item, .review-card, .contact-card"
        );

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // ===========================
    // Counter
    // ===========================

    const counters =
        document.querySelectorAll(".counter");

    counters.forEach(counter => {

        const target =
            Number(counter.dataset.target);

        let count = 0;

        const updateCounter = () => {

            const increment =
                target / 100;

            if (count < target) {

                count += increment;

                counter.innerText =
                    Math.floor(count);

                requestAnimationFrame(
                    updateCounter
                );

            } else {

                counter.innerText =
                    target.toLocaleString();
            }
        };

        updateCounter();
    });

    // ===========================
    // Gallery Filter
    // ===========================

    const filterBtns =
        document.querySelectorAll(".filter-btn");

    const galleryItems =
        document.querySelectorAll(".gallery-item");

    filterBtns.forEach(btn => {

        btn.addEventListener("click", () => {

            filterBtns.forEach(b =>
                b.classList.remove("active")
            );

            btn.classList.add("active");

            const category =
                btn.dataset.filter;

            galleryItems.forEach(item => {

                if (
                    category === "all" ||
                    item.dataset.category === category
                ) {

                    item.style.display = "block";

                } else {

                    item.style.display = "none";
                }
            });
        });
    });

    // ===========================
    // Contact Form
    // ===========================

    const form =
        document.getElementById("contactForm");

    if (form) {

        form.addEventListener("submit", e => {

            e.preventDefault();

            const name =
                document.getElementById("name").value;

            const phone =
                document.getElementById("phone").value;

            const surgery =
                document.getElementById("surgery").value;

            if (
                name.trim() === "" ||
                phone.trim() === ""
            ) {

                alert("이름과 연락처를 입력해주세요.");

                return;
            }

            alert(
                "상담 신청이 접수되었습니다."
            );

            form.reset();
        });
    }

    // ===========================
    // Back To Top
    // ===========================

    const topBtn =
        document.querySelector(".top-btn");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            topBtn?.classList.add("show");

        } else {

            topBtn?.classList.remove("show");
        }
    });

    topBtn?.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

});


// =====================================
// Kakao Talk
// =====================================

function openKakao() {

    window.open(
        "https://open.kakao.com/o/wonhee2648",
        "_blank"
    );
}


// =====================================
// Smooth Scroll
// =====================================

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if(target){

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});