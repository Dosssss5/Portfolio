import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function AboutPage() {
    return (
        <>
            <Navbar />

            <div className="relative w-full min-h-screen px-6 py-20 flex items-center justify-center">

                {/* Background Image */}
                <Image
                    src="/zed-art/art.png"
                    alt="Background Art"
                    fill
                    className="object-cover opacity-20 -z-10"
                />

                {/* Text Content */}
                <div className="max-w-3xl text-white">
                    <h1 className="text-5xl font-bold mb-6">About Me</h1>

                    <p className="text-lg leading-relaxed">
                        I am a multimedia artist passionate about animation, film, and digital
                        creation. My work focuses on storytelling through visual design,
                        blending 2D and 3D techniques to create unique experiences.
                    </p>

                    <p className="text-lg mt-4 leading-relaxed">
                        I specialize in concept art, character design, editing, and animation.
                        My goal is to bring ideas to life and create inspiring visual stories.
                    </p>
                </div>
            </div>

            <Footer />
        </>
    );
}
