import React from 'react'
import useGetValue from '../../../hooks/useGetValue'
import { getDatabase, ref, child, get } from 'firebase/database'
import firebaseApp from '../../../services/firebase'
export default function page({values}) {
    // const posts = useGetValue('post')

    //   if(posts.isLoading) {
    //     return <p>Fetching data...</p>
    //   }
      
    //   const posts = snapshot.current
    //   const data = Object.values(posts.snapshot)
  return (
    <div>
        {values && values.map((item) => {
            return(
                <h1>{item.description}</h1>
            )
        })}
    </div>
  )
}

export async function getServerSideProps () {
    const database = getDatabase(firebaseApp)
    const rootReference = ref(database)
    const dbGet = await get(child(rootReference, 'post'))
    const data = await dbGet.json()
    console.log({message: 'Berhasil'})
    return{
        props:{
            values: data,
        }
    }
}