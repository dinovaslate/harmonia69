'use client';

import React, { useEffect } from 'react';
import { Data } from '../CustomHooks/useGetData';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import firebaseApp from '../../../services/firebase';
export default function page() {
  const testing = async () => {
    try {
      const colRef = collection(getFirestore(firebaseApp), 'testing');
      await addDoc(colRef, {
        job: 'test1',
        name: 'test2',
      });
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    testing();
  }, []);
  return <div>page</div>;
}
