import React from 'react';
import { useSelector } from 'react-redux';
import Loading from 'components/Loading/Loading';
import { Navigate } from 'react-router-dom';
import { getToken } from './helperFunctions';
import CONSTANTS from '../constants'

const PublicRoute = ({children}) => {
  const { loading } = useSelector((state) => state.auth);
  const token = getToken(CONSTANTS.ACCESS_TOKEN)

  if (token) {
    return <Navigate to='/dashboard' replace/>
  }

  if (loading) {
    return <Loading />
  }

  return children;
}

export default PublicRoute;
