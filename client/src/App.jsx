import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "pages/Main";
import StudentPage from "pages/Student";
import TeacherPage from "pages/Teacher";
import CoursePage from "pages/Course";
import Task from "pages/Task";
import PrivateRoute from "utils/privateRoute";
import history from "utils/history";
import { getToken } from 'utils/helperFunctions';
import { fetchUserData } from 'redux/features/auth/authThunk';
import { useDispatch } from "react-redux";
import CONSTANTS from "./constants";

function App() {

  const dispatch = useDispatch();

  if(getToken(CONSTANTS.ACCESS_TOKEN)) {
    dispatch(fetchUserData());
  }

  return (
    <Router history={history}>
      <Routes>
        <Route exact path="/login" element={<MainPage />} />
        <Route exact path="/teacher" element={
          <PrivateRoute>
            <TeacherPage />
          </PrivateRoute>
        }>
        </Route>
        <Route exact path="/student" element={
          <PrivateRoute>
            <StudentPage />
          </PrivateRoute>
        }>
        </Route>
        <Route exact path="/course" element={
          <PrivateRoute>
            <CoursePage />
          </PrivateRoute>
        }>
        </Route>
        <Route exact path="/task" element={
          <PrivateRoute>
            <Task />
          </PrivateRoute>
        }>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
