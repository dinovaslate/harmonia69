import { auth } from '../../../services/firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
export default function page() {
  const provider = new GoogleAuthProvider();
  const login = async () => {
    const result  = await signInWithPopup(auth, provider);

  };
  return (
    <div>
      <h1>GOOGLE SIGN IN</h1>
     <button onClick={login}>Sign In With Google</button>
    </div>
  )
}


// const googleSignIn = async() => {
//   signInWithPopup(auth, provider).then(res => {
//       console.log(res)
//   }).catch(err => {
//       console.log(err)
//   })
// }