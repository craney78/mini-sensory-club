const siteNavigation = document.getElementById("site-navigation");

if (siteNavigation) {

    siteNavigation.innerHTML = `

        <header class="nav">

            <div class="nav-inner">

                <!-- LOGO -->

                <div class="nav-left">

                    <a
                        href="index.html"
                        class="brand-link"
                        aria-label="Mini Sensory Club Home"
                    >

                        <img
                            src="/images/logo.png"
                            alt="Mini Sensory Club"
                            class="nav-logo"
                        >

                    </a>

                </div>

                <!-- DESKTOP NAVIGATION -->

                <div class="nav-links-wrap">

                    <nav
                        class="nav-links"
                        id="navLinks"
                    >

                        <a
                            href="index.html"
                            class="nav-link"
                        >
                            Home
                        </a>

                        <a
                            href="weekly-classes.html"
                            class="nav-link"
                        >
                            Classes
                        </a>

                        <a
                            href="childcare-incursions.html"
                            class="nav-link"
                        >
                            Childcare
                        </a>

                        <a
                            href="party-hire.html"
                            class="nav-link"
                        >
                            Party Hire
                        </a>

                        <a
                            href="about.html"
                            class="nav-link"
                        >
                            About
                        </a>

                        <a
                            href="faqs.html"
                            class="nav-link"
                        >
                            FAQs
                        </a>

                        <a
                            href="contact.html"
                            class="nav-link"
                        >
                            Contact
                        </a>

                        <a
                            href="tel:"
                            class="nav-cta"
                        >
                            Call Us
                        </a>

                    </nav>

                    <!-- MOBILE MENU BUTTON -->

                    <button
                        class="menu-toggle"
                        id="menuToggle"
                        aria-label="Open Menu"
                        type="button"
                    >

                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2.2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>

                    </button>

                </div>

            </div>

        </header>

    `;

}



/* ==========================================
   MOBILE NAV TOGGLE
========================================== */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("nav-links-open");

    });

}