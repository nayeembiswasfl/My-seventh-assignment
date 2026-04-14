import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

function AppShell() {
  return (
    <div className="page-shell">
      <Navbar />
      <main className="flex-1 py-8 sm:py-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppShell;

