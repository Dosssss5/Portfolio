import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function WorksPage() {
    const images = [
        "/zed-art/stik o gyud.png",
        "/zed-art/art.png",
        "/zed-art/art2.png",
        "/zed-art/art3.png",
        "/zed-art/art4.png",
        "/zed-art/art5.png",
        "/zed-art/art6.png",
        "/zed-art/art7.png",
        "/zed-art/neiro.png",
        "/zed-art/Final Rendered.png",
        "/zed-art/Final.png",
    ];

    return (
        <>
            <Navbar />

            <div className="px-6 py-10 text-white">
                <h1 className="text-4xl font-bold mb-6">My Works</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {images.map((src, index) => (
                        <div key={index} className="w-full">
                            <Image
                                src={src}
                                alt={`Work ${index}`}
                                width={400}
                                height={400}
                                className="rounded-lg w-full h-64 object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    );
}
