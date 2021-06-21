

// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from './components/AppNavbar';
import TA from './components/TA';
import './App.css';
//import ChangePass from './components/ChangePass';
import Student from './components/Student';
import CourseStudents from './components/CourseStudents';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // useRouteMatch,
  // useParams
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <AppNavbar />
      </div>

      <Switch>
        <Route path="/ta"><TA /></Route>
        <Route path="/course-students"><CourseStudents /></Route>
        <Route path="/students"><Student /></Route>
        <Route path="/change-password"><ChangePass /></Route>
      </Switch>
    </Router>
);


}

export default App;
