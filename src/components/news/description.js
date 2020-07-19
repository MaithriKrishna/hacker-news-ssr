import React from "react";
import {
    updateNewsInLocalStorage,
    getLocalStorageData,
    getFormattedTime,
    getDomainFromUrl
} from "../helper";

const Hide = ({ news, info, updateModifiedNews }) =>
    <span
        className="highlight clickable"
        onClick={() => {
            updateNewsInLocalStorage(news, info.objectID, true)
            updateModifiedNews(getLocalStorageData(news.page))
        }}>hide</span>;


export const Description = ({ news, info, updateModifiedNews }) =>
    <div className="description">
        <span className="highlight title"><a href={info.url}>{info.title}</a></span>
        <span className="url"> ( <a href={info.url}>{getDomainFromUrl(info.url)}</a>) by </span>
        <span className="highlight">{info._highlightResult.author.value}</span>
        <span>{info.time} {getFormattedTime(info.created_at)} ago [</span>
        <Hide news={news} info={info} updateModifiedNews={updateModifiedNews} />
        <span>]</span>
    </div>;