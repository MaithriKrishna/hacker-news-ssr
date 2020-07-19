import React from "react";
import { updateNewsInLocalStorage, getLocalStorageData } from "../helper";

export const UpVote = ({ news, info, updateModifiedNews }) =>
    <span
        aria-label="upvote"
        class="upVote clickable"
        onClick={() => {
            updateNewsInLocalStorage(news, info.objectID, false)
            updateModifiedNews(getLocalStorageData(news.page))
        }
        }
    ></span>;
