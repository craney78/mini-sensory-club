import Link from "next/link";

export default function Navigation() {
    return (

        <header className="nav">

            <div className="nav-inner">

                {/* LEFT */}

                <div className="nav-left">

                    <Link
                        href="/"
                        className="brand-link"
                    >

                        <img
                            src="/images/logo.png"
                            alt="Mini Sensory Club"
                            className="nav-logo"
                        />

                    </Link>

                </div>

                {/* RIGHT */}

                <div className="nav-links-wrap">

                    <nav
                        className="nav-links"
                        id="navLinks"
                    >

                        <Link
                            href="/"
                            className="nav-link"
                        >
                            Home
                        </Link>

                        <Link
                            href="/classes"
                            className="nav-link"
                        >
                            Classes
                        </Link>

                        <Link
                            href="/party-hire"
                            className="nav-link"
                        >
                            Party Hire
                        </Link>

                        <Link
                            href="/incursions"
                            className="nav-link"
                        >
                            Incursions
                        </Link>

                        <Link
                            href="/about"
                            className="nav-link"
                        >
                            About
                        </Link>

                        <Link
                            href="/contact"
                            className="nav-link"
                        >
                            Contact
                        </Link>

                        <a
                            href="tel:"
                            className="nav-cta"
                        >
                            Call Us
                        </a>

                    </nav>

                    {/* Mobile Menu */}

                    <button
                        className="menu-toggle"
                        id="menuToggle"
                        aria-label="Open Menu"
                    >

                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >

                            <line
                                x1="3"
                                y1="6"
                                x2="21"
                                y2="6"
                            />

                            <line
                                x1="3"
                                y1="12"
                                x2="21"
                                y2="12"
                            />

                            <line
                                x1="3"
                                y1="18"
                                x2="21"
                                y2="18"
                            />

                        </svg>

                    </button>

                </div>

            </div>

        </header>

    );
}