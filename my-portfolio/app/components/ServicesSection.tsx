import Image from "next/image";


export default function ServicesSection() {
    return (
        <section className="relative bg-black text-white px-6 py-24 text-center">


            <Image
                src="/zed-art/background2.png"
                alt="Background"
                fill
                className="object-cover opacity-20"
            />


            <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4">Services</h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                    Digital Illustration • 3D Modeling • Character Modeling • Concept Art
                </p>
            </div>
        </section>
    );
}