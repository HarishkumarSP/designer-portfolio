import { Route, Routes } from 'react-router-dom';
import { SITEMAP } from './routes';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Layout from './components/Layout';
import ProjectList from './pages/ProjectList';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={SITEMAP.home} element={<Home />} />
        <Route path={SITEMAP.about} element={<About />} />
        <Route path={SITEMAP.contact} element={<Contact />} />
        <Route path={SITEMAP.projects} element={<Projects />} />
        <Route path={`${SITEMAP.projects}/*`} element={<ProjectList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
