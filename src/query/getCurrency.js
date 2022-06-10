export const getCurrency =  (from, to) => {
    return  fetch(`https://api.fastforex.io/fetch-one?from=${from}&to=${to}&api_key=55ce691fc6-e929b78fa4-rda3k2`)
        .then(res=>res.json())
}