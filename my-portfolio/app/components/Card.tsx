import Image from "next/image";


interface CardProps {
    name: string;
    description: string;
    image: string;
}


export default function Card({ name, description, image }: CardProps) {
    return (
        <div className="bg-gray-900 p-4 rounded-lg shadow-lg hover:scale-105 transition">
            <Image
                src={image}
                alt={name}
                width={500}
                height={500}
                className="rounded-lg mb-4 object-cover w-full h-60"
            />
            <h3 className="text-xl font-bold text-white">{name}</h3>
            <p className="text-gray-400 mt-2">{description}</p>
        </div>
    );
}