import Footer from './Footer';
import NavBar from './NavBar';

const Layout = ({ children }) => {
  return (
    <div className="grid gap-20">
      <NavBar />
      <main className="relative">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
