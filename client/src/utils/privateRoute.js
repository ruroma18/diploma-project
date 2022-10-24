import React from 'react';
import { useSelector } from 'react-redux';
import Loading from 'components/Loading/Loading';
import { Navigate } from 'react-router-dom';
import { getToken } from './helperFunctions';
import CONSTANTS from '../constants'

const PrivateRoute = ({children}) => {
  const { loading } = useSelector((state) => state.auth);
  const token = getToken(CONSTANTS.ACCESS_TOKEN)

  if (loading) {
    return <Loading />
  }

  if (!token) {
    return <Navigate to='/login' replace/>
  }

  return children;
}

export default PrivateRoute;
