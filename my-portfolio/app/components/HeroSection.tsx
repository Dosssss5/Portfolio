import Image from "next/image";


export default function HeroSection() {
    return (
        <section className="relative w-full h-[80vh] flex items-end justify-end text-right text-white">
            {/* Background Image */}
            <Image
                src="/zed-art/background1.png"
                alt="Background"
                fill
                className="object-cover opacity-100"
            />


            <p className="relative text-lg max-w-3xl p-10 z-10">
                Welcome visitors to my site. Here, you’ll find out about me and my works.
            </p>
        </section>
    );
}