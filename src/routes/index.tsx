import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Comments from '../pages/Comments';
import CreatePost from '../pages/CreatePost';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Posts from '../pages/Posts';
import Register from '../pages/Register';
import Solution from '../pages/Solution';

const RoutesMain = () => (
  <>
    <ToastContainer
      position='top-right'
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    <Routes>
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/comments' element={<Comments />} />
      <Route path='/solution' element={<Solution />} />
      <Route path='/newpost' element={<CreatePost />} />
      <Route path='/:posts' element={<Posts />} />
      <Route path='/posts/:search' element={<Posts />} />
      <Route path='*' element={<Navigate to='/dashboard' replace />} />
    </Routes>
  </>
);

export default RoutesMain;
