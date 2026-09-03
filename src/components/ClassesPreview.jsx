export default function ClassesPreview() {

    const classes = [

        {
            title: "Baby Explorers",
            age: "0–12 Months",
            image: "/images/class-1.jpg"
        },

        {
            title: "Tiny Toddlers",
            age: "1–3 Years",
            image: "/images/class-2.jpg"
        },

        {
            title: "Messy Play",
            age: "All Ages",
            image: "/images/class-3.jpg"
        },

        {
            title: "Special Events",
            age: "Seasonal",
            image: "/images/class-4.jpg"
        }

    ];

    return (

        <section className="classes">

            <div className="container">

                <h2>Weekly Sensory Classes</h2>

                <p className="section-intro">

                    Designed to inspire curiosity, creativity and confidence
                    through age-appropriate sensory play.

                </p>

                <div className="class-grid">

                    {classes.map((item, index) => (

                        <div
                            className="class-card"
                            key={index}
                        >

                            <img
                                src={item.image}
                                alt={item.title}
                            />

                            <div className="class-content">

                                <h3>{item.title}</h3>

                                <p>{item.age}</p>

                                <a
                                    href="/classes"
                                    className="btn-primary"
                                >
                                    Learn More
                                </a>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}