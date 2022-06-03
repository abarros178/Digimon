export const getGifs = async(valorBusqueda) => {
    const url = `https://digimon-api.vercel.app/api/digimon/name/${valorBusqueda}`;
    const response = await fetch(url);
    
    const digi = await response.json();
    
   /*  const gifs = data.map(({id,title,images:{downsized_medium:{url}}}) => {
        return {
            id,
            title,
            url
        }
    })
    /* console.log(gifs) */
    return digi
}




