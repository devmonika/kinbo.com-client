
import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './Routes/Routes/Routes';
export const webName = 'Kinbo.com';

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
