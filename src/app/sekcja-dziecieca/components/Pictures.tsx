export function Pictures() {
    const images = ["/michal.jpg", "/milosz.jpg", "/pawel.jpg"];

    return (
        <div className="max-w-5xl mx-auto px-6 animate-fadeIn delay-250">
            <h2 className="text-2xl font-semibold mb-6">Chwile, które kształtują przyszłość</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {images.map((src: string, idx: number) => (
                    <div
                        key={idx}
                        className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transform transition duration-300"
                    >
                        <img
                            src={src}
                            alt={`Trening ${idx + 1}`}
                            className="w-full h-56 object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
