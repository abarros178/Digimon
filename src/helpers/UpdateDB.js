import { db } from "../firebase";
import { collection,addDoc,deleteDoc,doc,updateDoc} from 'firebase/firestore/lite';


export const UpdateDB = async (id,valorBusqueda={}) => {
    await updateDoc(doc(db,'digimon',id),valorBusqueda)
   return true
}