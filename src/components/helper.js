export const updateNewsInLocalStorage = (news, objectID, hide) => {
    let localStorageData = getLocalStorageData(news.page);
    const index = localStorageData.hits.findIndex(data => data.objectID === objectID);
    if (hide) {
        localStorageData.hits.splice(index, 1)
    }
    else {
        localStorageData.hits[index].points++;
    }
    localStorage.setItem(news.page, JSON.stringify(localStorageData))
}

export const setLocalStorage = (news) => {
    const localStorageData = getLocalStorageData(news.page);
    !localStorageData ? localStorage.setItem(news.page, JSON.stringify(news)) : null;
}

export const getLocalStorageData = (page) => {
    return JSON.parse(localStorage.getItem(page));
}

export const setStateWithLocalStorage = (page, updateModifiedNews) => {
    return getLocalStorageData(page) ? updateModifiedNews(getLocalStorageData(page)) : null;
}

export const getChartData = (page, news) => {
    let chartData = {
        objectIds: [],
        votes: []
    }
    news.hits.map(news => {
        chartData.objectIds.push(news.objectID);
        chartData.votes.push(news.points);
    })
    return chartData;
}