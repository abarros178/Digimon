export const getGifs = async(valorBusqueda,limit=5) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=z7ab24aDznPs27HTBLpFHZicCqpbXd3O&q=${valorBusqueda}&limit=${limit}`;
    const response = await fetch(url);
    const { data } = await response.json();
    const gifs = data.map(({id,title,images:{downsized_medium:{url}}}) => {
        return {
            id,
            title,
            url
        }
    })
    console.log(gifs)
    return gifs
}




