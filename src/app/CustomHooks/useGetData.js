import React from 'react'
import { getDatabase, ref, child, get, set, remove, update, onValue, query, orderByChild, startAt, endAt, startAfter, endBefore, equalTo} from 'firebase/database'
import { getStorage, ref as sRef, uploadBytesResumable, getDownloadURL, uploadBytes} from "firebase/storage";
import {addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, onSnapshot, updateDoc} from "firebase/firestore";
import { v4 as createUniqueID } from 'uuid';
import firebaseApp from '../../../services/firebase'

class BackEnd{
    static database = getFirestore();
    static storage = getStorage(firebaseApp, "gs://harmonia-4e63b.appspot.com");
}

export class Data extends BackEnd{
    constructor(setErrorState){
        super();
        this.setErrorState = setErrorState;
    }
    #getCollectionRef(pathToCollection){
        return collection(Data.database, pathToCollection);
    }
    #getDocRef(pathToCollection, id){
        return doc(Data.database, pathToCollection, id);
    }
    async loadData(branch, setState){
        if(!setState){
            this.setErrorState("No Setter available");
        }
       const colRef = this.#getCollectionRef(branch);
       try{
            const snapshot = await getDocs(colRef);
            const data = [];
            for(const doc of snapshot.docs){
            data.push({
                ...doc.data(),
                id: doc.id
            })
            }
           setState(data)
       }catch(error){
          this.setErrorState(error);
       }
    }
    connect(pathToData, setState){
        if(!setState){
            this.setErrorState("No Setter available");
        }
        const colRef = this.#getCollectionRef(pathToData);
        onSnapshot(colRef, (snapshot => {
             const data = [];
             for(const doc of snapshot.docs){
             data.push({
                 ...doc.data(),
                 id: doc.id
             })
             }
             setState(data);
        }));
    }
    async addData(branch, datum){
       const colRef = this.#getCollectionRef(branch);
       try{
            await addDoc(colRef, {
                ...datum
            });
       }catch(error){
        this.setErrorState(error);
       }
       
    }
    async deleteData(branch, id){
        const docRef = this.#getDocRef(branch, id);
        try{
            await deleteDoc(docRef);
        }catch(error){
            this.setErrorState(error);
        }
        
    }
    async updateData(branch, id, newData){
        const docRef = this.#getDocRef(branch, id);
        try{
            await updateDoc(docRef, {
                ...newData
            });
        }catch(error){
            this.setErrorState(error);
        }
        
    }
    async query(branch, conditions, setState){
        if(!setState){
            this.setErrorState("No Setter available");
        }
        const colRef = this.#getCollectionRef(branch);
        const q = query(colRef, ...conditions);
        try{
            const snapshot = await getDocs(q);
            const data = [];
            for(const doc of snapshot.docs){
            data.push({
                ...doc.data(),
                id: doc.id
            })
            }
            setState(data)
       }catch(error){
          this.setErrorState(error);
       }
    }
    async getById(branch, id, setState){
        const docRef = this.#getDocRef(branch, id);
        try{
            const doc = await getDoc(docRef);
            setState({
                ...doc.data(), id: doc.id
            })
        }catch(error){
            this.setErrorState(error);
        }
    }
}


export class Uploader extends BackEnd{
    constructor(){
        super();
    }
    #uploadTask = null;
    uploadFile(file, pathToFile, onDone, errorHandler, percentageUpdate){
        if(!file){
            this.errorHandler("No File Received");
            return;
        }
        const pathRef = sRef(Uploader.storage, pathToFile);
        const uploadTask = uploadBytesResumable(pathRef, file);
        this.#uploadTask = uploadTask;
        uploadTask.on('state_changed', (snapshot) => {
           if(percentageUpdate) percentageUpdate((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        }, (error) => {
            errorHandler(error);
        },
        async () => {
            const url = await getDownloadURL(uploadTask.snapshot.ref);
            onDone(url);
        });
        
    }
    async uploadFileServer(file, pathToFile, fileType, onDone, errorHandler){
        console.log("I'm Called");
        const pathRef = sRef(Uploader.storage, pathToFile);
        try{
            const snapshot = await uploadBytes(pathRef, file, {contentType: fileType});
            const url = await getDownloadURL(snapshot.ref);
            onDone(url);
        }catch(error){
            console.log(error);
            errorHandler(error);
        }
    }
    pause(){
        if(!this.#uploadTask) throw "Haven't uploaded anything";
        this.#uploadTask.pause();
    }
    resume(){
        if(!this.#uploadTask) throw "Haven't uploaded anything";
        this.#uploadTask.resume();
    }
    cancel(){
        if(!this.#uploadTask) throw "Haven't uploaded anything";
        this.#uploadTask.cancel();
    }
}