"use client";

import { useEffect, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { FBXLoader } from "three-stdlib";
import { AnimationMixer } from "three";

export default function PlayerModel() {
    const fbx = useLoader(FBXLoader, "/models/player.fbx");
    const mixer = new AnimationMixer(fbx);
    const scale = window.innerWidth < 768 ? 0.01 : 0.02;
    const position = window.innerWidth < 768 ? [-4, -1, 0] : [-6, -2, 0];

    useEffect(() => {
        if (fbx.animations.length > 0) {
            const action = mixer.clipAction(fbx.animations[0]);
            action.play();
        }
    }, [fbx, mixer]);

    useFrame((state, delta) => {
        mixer.update(delta);
    });

    return <primitive
        object={fbx}
        scale={scale}
        position={position}
        rotation={[0, Math.PI / 2.2, 0]}
    />
}
