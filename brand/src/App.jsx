import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutMe';
import Layout from './components/layout/Layout';
import './App.css';
import ErrorPage from './errors/route-error/error-page';
import Blogs from './pages/Blogs';
import BlogDetails from './components/sections/BlogDetails';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/aboutme" element={<AboutPage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="/error"  errorElement={<ErrorPage />}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
