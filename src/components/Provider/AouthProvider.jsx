import { createContext } from "react"
import PropTypes from 'prop-types';

export const AuthContext=createContext(null)
export default function AouthProvider({children}) {
    const theame='----------->light'
  return (
    <AuthContext.Provider value={theame}>
      {children}
    </AuthContext.Provider>
  )
}

AouthProvider.propTypes={
  children:PropTypes.node.isRequired,
}
