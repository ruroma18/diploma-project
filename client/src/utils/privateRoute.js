import React from 'react';
import { useSelector } from 'react-redux';
import Loading from 'components/Loading/Loading';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const { loading, userData } = useSelector((state) => state.auth);

  if (loading) {
    return <Loading />
  }

  if (!userData) {
    return navigate('/login');
  }

  return children;
}

export default PrivateRoute;
