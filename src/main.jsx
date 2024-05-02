import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

// Define your routes
const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'aboutme', element: <AboutMe /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'contact', element: <Contact /> },
      { path: 'resume', element: <Resume /> },
    ],
  },
];

// Render your app with the Router and Routes
ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element}>
          {route.children && route.children.map((childRoute, childIndex) => (
            <Route key={childIndex} path={childRoute.path} element={childRoute.element} />
          ))}
        </Route>
      ))}
    </Routes>
  </Router>
);