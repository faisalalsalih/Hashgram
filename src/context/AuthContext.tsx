import React, {useContext, useEffect, useState, createContext} from 'react'


export const INITIAL_USER = {
    id: '',
    name: '',
    username: '',
    email: '',
    imageUrl: '',
    bio: ''
}


const INITIAL_STATE = {
    user: INITIAL_USER,
    isLoading: false,
    isAuthenticated: false,
    setUser: () => {},
    setIsAuthenticated: () => {},
    checkAuthUser: async () => false as boolean
}



const AuthContext = () => {
  return (
    <>
      
    </>
  )
}

export default AuthContext
