import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import reportWebVitals from './reportWebVitals';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import App from './App';
import Login from './components/Login';
import Register from './components/Register';
import ErrorPage from './components/ErrorPage';
import { UserContextProvider } from './contexts/UserContext';
import AddTask from './components/AddTask';
import Dashboard from './components/Dashboard';
import Details from './components/Details';
import TeamTasks from './components/TeamTasks';


const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    errorElement: <ErrorPage />,
    children:[
      {
        path:'/',
        element: <Dashboard />
      },
      {
        path:'/register',
        element: <Register />
      },
      {
        path:'/login',
        element: <Login />
      },
      {
        path:'/addtask',
        element: <AddTask />
      },
      {
        path:'/details',
        element: <Details />
      },
      {
        path:'/teamtasks',
        element: <TeamTasks />
      }
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserContextProvider>
      < RouterProvider router={router} />
  </UserContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
