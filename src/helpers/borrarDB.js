import { db } from "../firebase";
import { collection,addDoc,deleteDoc,doc,updateDoc} from 'firebase/firestore/lite';


export const borrarDB = async (id) => {
    
    await deleteDoc(doc(db,'digimon',id))
}