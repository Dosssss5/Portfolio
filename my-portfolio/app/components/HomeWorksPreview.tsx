import Card from "./Card";


export default function HomeWorksPreview() {
    const preview = [
        {
            name: "3D Render",
            description: "Showcasing 3D model artworks.",
            image: "/zed-art/stik o gyud.png",
        },
        {
            name: "Digital Art",
            description: "Character illustration.",
            image: "/zed-art/art3.png",
        },
        {
            name: "Character Models",
            description: "Character model render.",
            image: "/zed-art/neiro.png",
        },
    ];


    return (
        <section className="bg-black text-white px-6 py-16">
            <h2 className="text-3xl font-bold mb-6">Featured Works</h2>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {preview.map((item, index) => (
                    <Card key={index} name={item.name} description={item.description} image={item.image} />
                ))}
            </div>
        </section>
    );
}