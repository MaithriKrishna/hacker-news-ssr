import React from "react";
import { UpVote } from "./upVote";
import { Description } from "./description";

export const Content = ({ news, updateModifiedNews }) =>
    news.hits.length && news.hits.map(info =>
        <tr key={info.objectID}>
            <td data-testid="numberof-comments-1">{info.num_comments}</td>
            <td data-testid="up-votes-1">{info.points || 0}</td>
            <td ><UpVote news={news} info={info} updateModifiedNews={updateModifiedNews} /></td>
            <td><Description info={info} news={news} updateModifiedNews={updateModifiedNews} /></td>
        </tr>
    );
