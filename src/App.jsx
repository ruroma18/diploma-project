import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "pages/Main";
import StudentPage from "pages/Student";
import TeacherPage from "pages/Teacher";
import CoursePage from "pages/Course";
import { useState } from "react";
import { UserContext } from "contexts";
import Task from "pages/Task";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  console.log(currentUser)
  
  return (
    <Router>
      <UserContext.Provider value={[setCurrentUser, currentUser]}>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/student" element={<StudentPage />} />
          <Route path="/teacher" element={<TeacherPage />} />
          <Route path="/course" element={<CoursePage />} />
          <Route path="/task" element={<Task />} />
        </Routes>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
