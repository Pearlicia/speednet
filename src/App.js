import AdminService from './components/AdminService';
import ProjectCreate from './components/ProjectCreate';
import Landing from './components/Landing';
import TaskCreate from "./components/TaskCreate";
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/admin" element={<AdminService />} />
      <Route path="/newproject" element={<ProjectCreate />} />
      <Route path="/createtask" element={<TaskCreate />} />
    </Routes>
  );
}

export default App;
