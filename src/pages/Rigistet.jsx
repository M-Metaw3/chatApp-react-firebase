import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useRef } from 'react'
import { auth } from '../Firebase'
import { useState } from 'react'
const Rigistet = () => {
  const [err ,seterr]=useState('')


  const handelersubmit= async (e)=>{
    e.preventDefault()
// console.log(e.target[0].value)
// console.log(e.target[1].value)
// console.log(e.target[2].value)
// console.log(e.target[3].value)
// console.log(e.target[4].files[0])
const email = String( e.target[1].value)
const password = String(e.target[3].value)

if (e.target[3].value===e.target[2].value){
try {
await  auth.createUserWithEmailAndPassword(email,password).then((e)=>{
  console.log(e.user.uid)
  seterr("")
  
  })
} catch(error){

  seterr("email already in use")
}
  
}else{
 seterr("password don,t match")

}
  }
  return (
    <div>
      <form onSubmit={(e)=>handelersubmit(e)} style={{display:'flex' ,flexDirection:'column'}}>
        <label htmlFor="">user name</label>
        <input type="text" />
        <label htmlFor="">email</label>
        <input type="email" />
        <label htmlFor="">password</label>
        <input type="password" />
        <label htmlFor="">confirm  password </label>
        <input type="password" />
        <label htmlFor="">photo</label>
        <input type="file" />
        <button type="submit" class="btn btn-primary">Sign in</button>
      </form>
      <h1>{err}</h1>
    </div>
  )
}

export default Rigistet