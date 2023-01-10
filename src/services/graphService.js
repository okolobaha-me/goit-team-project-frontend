import { differenceInDays } from 'date-fns';

export const getFormattedResults = (results, startDate) => {
    const formattedResults = {};

    for (const result of results) {
        const dayNumber = differenceInDays(
            new Date(result.date),
            new Date(startDate)
        );

        if (formattedResults[dayNumber]) {
            formattedResults[dayNumber] =
                formattedResults[dayNumber] + result.pagesCount;
        } else {
            formattedResults[dayNumber] = result.pagesCount;
        }
    }

    return formattedResults;
};

export const fillGraphData = (results, startDate, totalPages, duration) => {
    const pagesPerDay = Math.ceil(totalPages / duration);

    if (!results.length) return Array(duration).fill({ pv: pagesPerDay });
    const arr = [];

    const obj = getFormattedResults(results, startDate);

    const lastDay = Object.keys(obj)[Object.keys(obj).length - 1];

    for (let i = 0; i < lastDay; i++) {
        const day = { uv: 0, pv: pagesPerDay };
        arr.push(day);
    }

    const daysLeft = duration - Number(lastDay);

    let left = [];

    if (daysLeft > 0) {
        for (let i = 0; i < daysLeft; i++) {
            const day = { pv: pagesPerDay };
            left.push(day);
        }
    }

    const graphData = [...arr, ...left];

    for (const day in obj) {
        graphData[Number(day)].uv = obj[day];
    }

    return graphData;
};
