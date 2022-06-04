import { db } from "../firebase";
import { collection,addDoc,deleteDoc,doc,updateDoc} from 'firebase/firestore/lite';


export const borrarDB = async (id) => {
    //await updateDoc(doc(db,'digimon',id),{valorBusqueda:"la fefgefgegfeg"})
    await deleteDoc(doc(db,'digimon',id))
}