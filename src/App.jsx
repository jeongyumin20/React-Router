// App.jsx 
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Video from './pages/Video';
import NotFound from './pages/NotFound';
import Root from './pages/Root';
import VideoDetail from './pages/VideoDetail';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Root />,
    errorElement : <NotFound />,
    children : [
      { index: '/', element: <Home />}, 
      { path: '/video', element: <Video />}, 
      { path: '/video/:videoId', element: <VideoDetail />}, 
    ],
  },

]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
