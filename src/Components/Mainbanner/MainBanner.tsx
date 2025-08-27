"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import PlayerModel from "../PlayerModel/PlayerModel";
import SupportBanner from "../Support/Support";

export function MainBanner() {
    return (
        <div className="w-full h-full">
            <Canvas>
                <color attach="background" args={["#a0dba3"]} />
                <ambientLight intensity={0.8} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <PlayerModel />
            </Canvas>
            <SupportBanner />
        </div>
    );
}

