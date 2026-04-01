import {getFirestore,collection,getDocs,doc,getDoc} from "firebase/firestore";
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

export async function retrieveDataByID(CollectionName:string, id:string){
    const snapshot = await getDoc(doc(db,CollectionName, id));
    const rawData = snapshot.data();
    const data = rawData ? { id: snapshot.id, ...rawData } : null;
    return data;
}
