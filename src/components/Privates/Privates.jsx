import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Provider/AouthProvider";
import PropTypes from 'prop-types';

export default function Privates({children}) {
    const { user,loading } = useContext(AuthContext)
    if (loading) {
        return <span className="loading loading-spinner text-error"></span>
    }
    if (user) {
      return children;
    }
  return (<Navigate to="/signin"></Navigate>)
}

Privates.propTypes={
    children:PropTypes.node 
}