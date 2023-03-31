import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { authentication } from './firebase';

export const signInWithGoogle = ()=>{
    console.log('google auth');
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
    .then((res)=>{
      console.log(res);
      console.log(res['user'].displayName);
      console.log(res['user'].email);
    })
    .catch((err=>{
      console.log(`error=> ${err.message}`);
    }))
  }