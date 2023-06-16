export const parseResponse = (get) => {
    let result = [];
    for(let i in get.data)
        result.push([i, get.data[i]]);
    return result;
}