import { Outlet } from 'react-router-dom';
// import classes from './Layout.module.scss';
import { Header } from './Header';
import { Footer } from './Footer';


export const Layout = () => (

//   <div className={classes.block}>
  <div>
    <Header />
    <Outlet />
    <Footer/>
  </div>
);