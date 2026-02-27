import Navbar from "@/components/Navbar";
import Contact from "@/components/contact/Contact";
import Hero from "@/components/contact/Hero";

export const metadata = {
    title: "Contact - NewBestway Inc.",
    description: "Comprehensive tennis training programs for everyone",
};

export default function ExpertisePage() {
    return (
        <>
            <Navbar />
            <div className="w-full min-h-screen rounded-bl-[60px] rounded-br-[60px]">
                <Hero />
                <Contact />
            </div>

        </>
    );
}
