import Card from "./Card";


export default function WorksSection() {
    const projects = [
        { name: "Stik o Gyud", description: "3D Rendered Art.", image: "/zed-art/stik o gyud.png" },
        { name: "Art 1", description: "Digital Artwork.", image: "/zed-art/art.png" },
        { name: "Art 2", description: "Digital Artwork.", image: "/zed-art/art2.png" },
        { name: "Art 3", description: "Digital Artwork.", image: "/zed-art/art3.png" },
        { name: "Art 4", description: "Digital Artwork.", image: "/zed-art/art4.png" },
        { name: "Art 5", description: "Digital Artwork.", image: "/zed-art/art5.png" },
        { name: "Art 6", description: "Digital Artwork.", image: "/zed-art/art6.png" },
        { name: "Art 7", description: "Digital Artwork.", image: "/zed-art/art7.png" },
        { name: "Neiro", description: "Character Model Render.", image: "/zed-art/neiro.png" },
        { name: "Final Rendered", description: "Final Render.", image: "/zed-art/Final Rendered.png" },
        { name: "Final", description: "Final Scene.", image: "/zed-art/Final.png" },
    ];


    return (
        <section className="bg-black text-white px-6 py-16 min-h-screen">
            <h2 className="text-3xl font-bold mb-6">My Works</h2>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <Card
                        key={index}
                        name={project.name}
                        description={project.description}
                        image={project.image}
                    />
                ))}
            </div>
        </section>
    );
}