import React from "react";
import { Header } from "./header";
import { Content } from "./content";

export const NewsView = ({ news, updateModifiedNews }) => <div>
    <table>
        <Header />
        <Content news={news} updateModifiedNews={updateModifiedNews} />
    </table>
</div>

