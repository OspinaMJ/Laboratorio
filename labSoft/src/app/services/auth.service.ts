import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authFire: AngularFireAuth) { }
  async register(email:string, password:string){

    try{
      return await this.authFire.createUserWithEmailAndPassword(email,password)

    }catch(error){
      console.log('register error'+error);
      return null;
   }
  }
  async login(email:string, password:string){
     try{
       return await this.authFire.signInWithEmailAndPassword( email, password);
     }catch(error){
       console.log('email error'+error);
       return null;
     }
  }
  async loginwithGoogle(email: string, password:string){
        try{
          return await this.authFire.signInWithPopup(new firebase.auth.GoogleAuthProvider)
   
        }catch(error){
          console.log('email error'+error);
          return null;
     }
  }
  async loginWithFacebook(email: string, password:string){
    try{
      return await this.authFire.signInWithPopup(new firebase.auth.FacebookAuthProvider)

    }catch(error){
      console.log('email error'+error);
      return null;
 }
}
async loginWithGitHub(email: string, password:string){
  try{
    return await this.authFire.signInWithPopup(new firebase.auth.GithubAuthProvider)

  }catch(error){
    console.log('email error'+error);
    return null;
}
}
  getUserState(){
    return this.authFire.authState;
  }
  logout(){
    this.authFire.signOut();
  }
}
