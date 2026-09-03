const siteFooter = document.getElementById("site-footer");

if (siteFooter) {

    siteFooter.innerHTML = `

        <footer class="footer">

            <div class="container">

                <div class="footer-top">

                    <!-- BRAND -->

                    <div class="footer-brand">

                        <img
                            src="/images/logo.png"
                            alt="Mini Sensory Club"
                            class="footer-logo"
                        >

                        <h2>Mini Sensory Club</h2>

                        <p>
                            Inspiring curious little minds through sensory
                            play, imagination and meaningful learning
                            experiences across Newcastle and Lake Macquarie.
                        </p>

                    </div>

                    <!-- EXPLORE -->

                    <div class="footer-column">

                        <h3>Explore</h3>

                        <a href="index.html">Home</a>

                        <a href="weekly-classes.html">
                            Weekly Classes
                        </a>

                        <a href="childcare-incursions.html">
                            Childcare Incursions
                        </a>

                        <a href="party-hire.html">
                            Party Hire
                        </a>

                        <a href="about.html">
                            About
                        </a>

                        <a href="faqs.html">
                            FAQs
                        </a>

                        <a href="contact.html">
                            Contact
                        </a>

                    </div>

                    <!-- SERVICES -->

                    <div class="footer-column">

                        <h3>Services</h3>

                        <p>Weekly Sensory Classes</p>

                        <p>Childcare Centre Incursions</p>

                        <p>Soft Play Party Hire</p>

                        <p>Special Events</p>

                    </div>

                    <!-- CONTACT -->

                    <div class="footer-column">

                        <h3>Contact</h3>

                        <a href="tel:">
                            Call Us
                        </a>

                        <a href="mailto:minisensoryclub@gmail.com">
                            Email Us
                        </a>

                        <a
                            href="https://www.instagram.com/minisensoryclub"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Instagram
                        </a>

                        <a href="contact.html">
                            Contact Form
                        </a>

                    </div>

                </div>

                <!-- BOTTOM -->

                <div class="footer-bottom">

                    <p>
                        © 2026 Mini Sensory Club. All Rights Reserved.
                    </p>

                    <div class="footer-legal">

                        <a href="privacy-policy.html">
                            Privacy Policy
                        </a>

                        <a href="terms-and-conditions.html">
                            Terms &amp; Conditions
                        </a>

                        <a href="website-disclaimer.html">
                            Disclaimer
                        </a>

                    </div>

                    <p>
                        Designed &amp; Developed by

                        <a
                            href="https://www.craneplatformlabs.com.au"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Crane Platform Labs
                        </a>
                    </p>

                </div>

            </div>

        </footer>

    `;

}