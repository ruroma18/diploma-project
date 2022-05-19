import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from 'pages/Main'
import StudentPage from 'pages/Student'
import TeacherPage from 'pages/Teacher'
import CoursePage from 'pages/Course'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/student" element={<StudentPage />}/>
        <Route path="/teacher" element={<TeacherPage />}/>
        <Route path="/course" element={<CoursePage />}/>
      </Routes>
    </Router>
  );
}


export default App;
