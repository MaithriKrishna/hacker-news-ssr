import React from "react";
import { UpVote } from "./upVote";
import { Description } from "./description";

export const Content = ({ news }) =>
    news.length && news.map(info =>
        <tr key={info.id}>
            <td>{info.id}</td>
            <td>{info.votes}</td>
            <td><UpVote info={info} /></td>
            <td><Description info={info} /></td>
        </tr>
    );
