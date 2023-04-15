import React from 'react'
import { getDatabase, ref, child, get, set } from 'firebase/database'
import firebaseApp from '../../../services/firebase'

export class Data{
    #data = [];
    #error = "";
    get data(){
        return this.#data;
    }
    get error(){
        return this.#error;
    }
    async loadData(branch){
        this.#error = "";
        this.#data = [];
        try{
            const database = getDatabase(firebaseApp);
            const rootReference = ref(database);
            const dbGet = await get(child(rootReference, branch));
            if(dbGet.exists()){
                this.#data = dbGet.val();
            }else{
                this.#error = "THIS BRANCH DOESN'T EXIST";
            }
        }catch(getError) {
            this.#error = getError;
        }
    }
    async addData(branch, datum, id){
        this.#error = "";
        try{
            const database = getDatabase(firebaseApp);
            await set(ref(database, branch + '/' + id, JSON.parse(JSON.stringify(datum))));
        }catch(getError){
            this.#error = getError;
        }
    }
}
