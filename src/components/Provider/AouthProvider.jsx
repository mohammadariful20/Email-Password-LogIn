import { createContext, useEffect, useState } from "react"
import PropTypes from 'prop-types';
import auth from "../../Firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null)

export default function AouthProvider({ children }) {
  const [loading,setLoading]=useState(true)
  const [user, setUser] = useState(null);
  //register user
  const registerUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  //sign in User
  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  //sign out user
  const signOutUser = () =>{
    setLoading(true)
    return signOut(auth)
  }
  
  //observe user
  useEffect(() => {
    const unSubsribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("auth state changed", currentUser)
      setUser(currentUser)
      setLoading(false)
    })

    return () => unSubsribe();
  }, [])

  const aouthInfo = { registerUser, signInUser,user,signOutUser,loading }
  return (
    <AuthContext.Provider value={aouthInfo}>
      {children}
    </AuthContext.Provider>
  )
}

AouthProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
