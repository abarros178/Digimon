import { useEffect, useState } from "react";
import getFirebase from "../helpers/getFirebase";
import { getDigi } from "../helpers/getDigi";
import { saveBd } from "../helpers/saveBd";

const useGetGifs = (valorBusqueda, arrayData = [],setControlDB) => {
  const aux = arrayData.filter((item) => item.valorBusqueda === valorBusqueda);
    
  const [estado, setEstado] = useState({
    digi: [],
    cargando: true,
  });

  useEffect(() => {
    getDigi(valorBusqueda).then((imgs) => {
      if (aux.length === 0) {
        setControlDB(true)
        saveBd({ valorBusqueda, imgs });
        setEstado({
          digi: imgs,
          cargando: false,
        });
      } else {
        alert("Eso existed");
      }
    });
  }, [valorBusqueda]);
  return estado;
};

export default useGetGifs;
