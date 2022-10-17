import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "pages/Main";
import StudentPage from "pages/Student";
import TeacherPage from "pages/Teacher";
import CoursePage from "pages/Course";
import Task from "pages/Task";
import PrivateRoute from "utils/privateRoute";
import history from "utils/history";

function App() {
  return (
    <Router history={history}>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/student" element={<PrivateRoute />}>
          <Route exact path="/student" element={<StudentPage />} />
          <Route exact path="/student" element={<TeacherPage />} />
          <Route exact path="/student" element={<CoursePage />} />
          <Route exact path="/student" element={<Task />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
