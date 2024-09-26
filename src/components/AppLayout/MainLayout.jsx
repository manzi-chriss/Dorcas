import Header from "../TopBar/TopBar";
const MainLayout = ({ children }) => {
    return (
      <>
        <Header />  
        <main>{children}</main>
      </>
    );
  };
  
  export default MainLayout;
  