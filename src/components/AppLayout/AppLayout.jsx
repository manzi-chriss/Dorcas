import { useLocation } from 'react-router-dom';  // Assuming you're using React Router

const AppLayout = ({ children }) => {
  const location = useLocation();

 
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && <Header />}
      <main>{children}</main>
    </>
  );
};

export default AppLayout;
