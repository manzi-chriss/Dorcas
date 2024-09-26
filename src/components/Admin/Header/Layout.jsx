import React from 'react';
import AdminHeader from './AdminHeader'; // Admin-specific header
import AdminHomePage from '../AdminHomePage';

const AdminLayout = ({ children }) => {
  return (
    <>
      <AdminHeader /> {/* Optional admin header */}
      <AdminHomePage>
        {children} {/* Render the children components */}
      </AdminHomePage> {/* Admin-specific homepage */}
  
     
   
    </>
  );
};

export default AdminLayout;
