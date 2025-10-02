import React from "react";
import { Title } from "./components/Tittle";
import { Caption } from "./components/Caption";
import { History } from "./components/History";
import { NewPath } from "./components/NewPath";
import { Rewards } from "./components/Rewards";
import { Children } from "./components/Children";
import { Support } from "./components/Support";
import { Pictures } from "./components/Pictures";

export default function SekcjaDziecieca() {
    return (
        <section className="max-w-5xl px-6 py-12 mt-30">
            <Title />
            <Caption />
            <History />
            <Pictures />
            <NewPath />
            <Rewards />
            <Children />
            <Support />
        </section>
    );
}
