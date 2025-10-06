"use client";
import Image from "next/image";
import { useState } from "react";

export function Pictures() {
    const images = ["/o/ziomalev2.jpg", "/o/gazetka1v2.jpg", "/o/gazetka2v2.jpg", "/o/skladv2.jpg"];
    const [selectedImg, setSelectedImg] = useState<string | null>(null);

    return (
        <div className="max-w-5xl mx-auto px-6 animate-fadeIn delay-250 mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {images.map((src: string, idx: number) => (
                    <div
                        key={idx}
                        className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transform transition duration-300 cursor-pointer"
                        onClick={() => setSelectedImg(src)}
                    >
                        <Image
                            src={src}
                            alt={`Trening ${idx + 1}`}
                            className="w-full h-64 object-cover"
                            width={400}
                            height={256}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 400px"
                        />
                    </div>
                ))}
            </div>

            {selectedImg && (
                <div
                    className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999] cursor-pointer"
                    onClick={() => setSelectedImg(null)}
                >
                    <div className="relative max-w-4xl max-h-[90vh]">
                        <Image
                            src={selectedImg}
                            alt="Pełne zdjęcie"
                            width={1200}
                            height={800}
                            className="object-contain rounded-lg"
                        />
                        <button
                            className="absolute top-2 right-2 text-white text-2xl font-bold"
                            onClick={() => setSelectedImg(null)}
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
