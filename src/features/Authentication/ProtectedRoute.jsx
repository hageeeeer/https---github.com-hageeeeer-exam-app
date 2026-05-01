import React, { useContext } from 'react'
import { auth } from '../../context/auth.context'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({children}) {
    
    const token  = localStorage.getItem('token')
  
    if(token)
        return children

    else
       return  <Navigate to={'/'}></Navigate>
}
