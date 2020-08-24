import { Component } from 'react'
import FirebaseConfig from './config'
import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/firestore'




 class Firebase extends Component {
  constructor(){
    super()
    app.initializeApp(FirebaseConfig)

    this.auth = app.auth()
    this.db = app.firestore()
    this.facturas = app.firestore()
    this.storage = app.storage()        
  }

  async registrar(name, email, password){
    const newUser = await this.auth.createUserWithEmailAndPassword(email, password)

    return newUser.user.updateProfile({ displayName: name})
  }

  async login(email, password){
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  async cerrarSesion(){
    return this.auth.signOut()
  }
}

const firebase = new Firebase()
export default firebase
