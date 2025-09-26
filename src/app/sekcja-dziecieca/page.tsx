import React from "react";
import { Tittle } from "./components/Tittle";
import { Values } from "./components/Values";
import { Pictures } from "./components/Pictures";
import { Groups } from "./components/Groups";
import { Sign } from "./components/Sign";
import { Contact } from "./components/Contact";
import { Files } from "./components/Files";

export default function SekcjaDziecieca() {
    return (
        <section className="w-full py-16 space-y-16 mt-20">
            <Tittle />
            <Values />
            <Pictures />
            <Groups />
            <Sign />
            <Contact />
            <Files />
        </section>
    );
}
