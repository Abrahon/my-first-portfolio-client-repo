
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Home/Home/Home';
import router from './Routes/Routes';

function App() {
  return (
    <div  className='max-w-[1440px] mx-auto'>
      <RouterProvider router={router}></RouterProvider>
      {/* <Home></Home> */}

    </div>
  );
}

export default App;
