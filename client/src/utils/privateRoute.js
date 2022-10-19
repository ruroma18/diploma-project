import React from 'react';
import { useSelector } from 'react-redux';
import Loading from 'components/Loading/Loading';
import { useNavigate } from 'react-router-dom';
import { getToken } from './helperFunctions';
import CONSTANTS from '../constants'

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const { loading, userData } = useSelector((state) => state.auth);
  const token = getToken(CONSTANTS.ACCESS_TOKE)

  if (!userData && !token) {
    return navigate('/login');
  }

  if (loading) {
    return <Loading />
  }

  return children;
}

export default PrivateRoute;
