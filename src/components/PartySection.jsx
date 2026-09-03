export default function PartySection() {

    return (

        <section className="party-section">

            <div className="container split-layout">

                <div className="split-text">

                    <span className="section-tag">
                        Birthday Parties
                    </span>

                    <h2>
                        Create a Birthday They'll Never Forget
                    </h2>

                    <p>

                        Our sensory birthday parties are packed with colour,
                        creativity and hands-on fun. We bring everything
                        needed so parents can relax while the children
                        explore, create and celebrate.

                    </p>

                    <ul className="feature-list">

                        <li>✔ Fully hosted party experience</li>

                        <li>✔ Multiple sensory themes</li>

                        <li>✔ Suitable for various ages</li>

                        <li>✔ We come to your venue</li>

                    </ul>

                    <a
                        href="/party-hire"
                        className="btn-primary"
                    >
                        Explore Party Packages
                    </a>

                </div>

                <div className="split-image">

                    <img
                        src="/images/party-placeholder.jpg"
                        alt="Sensory Birthday Party"
                    />

                </div>

            </div>

        </section>

    );

}