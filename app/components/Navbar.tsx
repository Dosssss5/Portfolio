"use client";


import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Navbar() {
    const pathname = usePathname();


    const links = [
        { name: "Home", href: "/" },
        { name: "Works", href: "/works" },
        { name: "About", href: "/about" },
    ];


    return (
        <nav className="w-full bg-black text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50">
            <h1 className="font-bold text-xl">ZED BLANCO</h1>


            <div className="flex gap-6">
                {links.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`hover:text-yellow-400 transition ${
                            pathname === link.href ? "text-yellow-400" : ""
                        }`}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
}