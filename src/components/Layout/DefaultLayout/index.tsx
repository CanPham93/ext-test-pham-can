import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const DefaultLayout = (props: any) => {
  return (
    <>
      <Header {...props} />
      <main style={{ minHeight: "calc(100vh - 260px)", paddingBottom: 64 }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
