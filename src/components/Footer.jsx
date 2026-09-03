import Link from "next/link";

export default function Footer() {
    return (

        <footer className="footer">

            <div className="container">

                <div className="footer-top">

                    {/* ===================================
                        BRAND
                    =================================== */}

                    <div className="footer-brand">

                        <img
                            src="/images/logo.png"
                            alt="Mini Sensory Club"
                            className="footer-logo"
                        />

                        <h2>Mini Sensory Club</h2>

                        <p>

                            Inspiring curious little minds through
                            sensory play, imagination and meaningful
                            learning experiences.

                        </p>

                    </div>

                    {/* ===================================
                        EXPLORE
                    =================================== */}

                    <div className="footer-column">

                        <h3>Explore</h3>

                        <Link href="/">Home</Link>

                        <Link href="/classes">
                            Classes
                        </Link>

                        <Link href="/party-hire">
                            Party Hire
                        </Link>

                        <Link href="/incursions">
                            Incursions
                        </Link>

                        <Link href="/about">
                            About
                        </Link>

                        <Link href="/contact">
                            Contact
                        </Link>

                    </div>

                    {/* ===================================
                        SERVICES
                    =================================== */}

                    <div className="footer-column">

                        <h3>Services</h3>

                        <p>Weekly Sensory Classes</p>

                        <p>Birthday Parties</p>

                        <p>Childcare Incursions</p>

                        <p>Private Events</p>

                    </div>

                    {/* ===================================
                        CONTACT
                    =================================== */}

                    <div className="footer-column">

                        <h3>Contact</h3>

                        <a href="tel:">

                            Call Us

                        </a>

                        <a href="mailto:">

                            Email Us

                        </a>

                        <a href="#">

                            Instagram

                        </a>

                        <a href="#">

                            Facebook

                        </a>

                    </div>

                </div>

                {/* ===================================
                    BOTTOM
                =================================== */}

                <div className="footer-bottom">

                    <p>

                        © {new Date().getFullYear()} Mini Sensory Club.
                        All Rights Reserved.

                    </p>

                    <p>

                        Designed &amp; Developed by{" "}

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

    );

}