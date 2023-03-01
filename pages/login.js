import React from 'react'
import LoginSuccess from '../components/LoginSuccess'
import HomePage from '../components/HomePage'
import LogIn from '../components/LogIn'
import Header from '../components/Header'
import Footer from '../components/Footer'

import { useSession, signIn, signOut } from 'next-auth/react'

const Login = () => {
  // const {data:session} = useSession();

  // if(session){
  //    return(
  //     <>
      
  //     <p>Welcome {session.user.email}</p>
  //     <button onClick={()=> signOut()}>Sign Out</button>
  //     <LoginSuccess/>
  //     </>
      
  //     )
          
  // }    
  // else{
  //   return(
  //     <>
  //     <HomePage/>
  //     <p>You are not signed in</p>
  //     <button onClick={()=> signIn()}>Sign In</button>
  //     </>
        
  //   )
  // }
  return (
    <>
    <Header/>
    <LogIn/>
    <Footer/>
    </>
  )
}

export default Login