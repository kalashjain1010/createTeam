import { useState } from "react";
import {doc, setDoc} from "firebase/firestore"
import {uuidv4} from "@firebase/util";
import { db } from "lib/firebase";


export function useAddPost(){
    const [isLoading, setLoading] = useState(false);

    async function addPost(post){
        setLoading(true);
        const id = uuidv4();
        await setDoc(doc(db,"posts",id), {
            ...post,
            id,
            date: Date.now(),
            likes: [],
        })
    }
    return {addPost, isLoading};
}