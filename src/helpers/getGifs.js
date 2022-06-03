export const getGifs = async(valorBusqueda,limit=5) => {
    const url = `https://digimon-api.vercel.app/api/digimon/name/${valorBusqueda}`;
    const response = await fetch(url);
    console.log(response)
    const digiuwu = await response.json();
    console.log(digiuwu[0])
   /*  const gifs = data.map(({id,title,images:{downsized_medium:{url}}}) => {
        return {
            id,
            title,
            url
        }
    })
    /* console.log(gifs) */
    return digiuwu
}




