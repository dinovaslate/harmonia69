'use client'
import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { getDatabase, ref, child, get } from 'firebase/database'
import firebaseApp from '../services/firebase'
const useGetValue = (path) => {

    const [isLoading, setIsLoading] = useState(true)
    const snapshot = useRef(null)
    const error = useRef(null)

  
    const getValue = async () => {
        try{
          const database = getDatabase(firebaseApp)
          const rootReference = ref(database)
          const dbGet = await get(child(rootReference, path))
          const dbValue = dbGet.val()
          snapshot.current = dbValue
          console.log(dbValue)
          console.log('berhasil bang')
        } catch (getError){
          error.current = getError.message
          console.log({ERROR: getError.message})
        }
        setIsLoading(false)
      }
    
      useEffect(() => {
        getValue()
      }, [])

      
      
  return {isLoading, snapshot: snapshot.current, error: error.current}
}

export default useGetValue

export async function getServerSideProps() {
   
}