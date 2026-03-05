import {getFirestore,collection,getDocs} from "firebase/firestore";
import app from "./firebase";


const db = getFirestore(app);

export async function retrieveProducts(CollectionName:string){
    const snapshot = await getDocs(collection(db,CollectionName));
    const data = snapshot.docs.map((doc) => ({
        id: 
        doc.id, 
        ...doc.data(),
    }));
    return data;
}