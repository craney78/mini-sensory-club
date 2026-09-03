import Hero from "../components/Hero";
import ClassesPreview from "../components/ClassesPreview";
import PartySection from "../components/PartySection";
import ChildcareSection from "../components/ChildcareSection";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Home() {
    return (
        <>
            <Hero />

            <ClassesPreview />

            <PartySection />

            <ChildcareSection />

            <WhyChooseUs />
        </>
    );
}