import React from 'react';
import { useSelector } from 'react-redux';
import { Route, useNavigate } from 'react-router-dom';
import Loading from 'components/Loading/Loading';


const PrivateRoute = ({ roles, ...routerProps }) => {
  const navigate = useNavigate();
  const { loading, userData } = useSelector((state) => state.auth);

  if (loading) {
    return <Loading />
  }

  if(userData) {
    return <Route {...routerProps} />
  }

  return navigate("/login");
}

export default PrivateRoute;
