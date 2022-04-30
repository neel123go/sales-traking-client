import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Header from './Components/Pages/Shared/Header/Header';
import Login from './Components/Pages/LoginRegister/Login/Login';
import SignUp from './Components/Pages/LoginRegister/SignUp/SignUp';
import Footer from './Components/Pages/Shared/Footer/Footer';
import Blogs from './Components/Pages/Blogs/Blogs';
import { Toaster } from 'react-hot-toast';
import NotFound from './Components/Pages/Shared/NotFound/NotFound';
import AddItems from './Components/Pages/AddItem/AddItem';
import RequireAuth from './Components/Pages/LoginRegister/RequireAuth/RequireAuth';
import ManageItems from './Components/Pages/ManageItems/ManageItems';
import InventoryItemDetails from './Components/Pages/InventoryItemDetails/InventoryItemDetails';
import MyItems from './Components/Pages/MyItems/MyItems';
import CheckOut from './Components/Pages/CheckOut/CheckOut';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='additem' element={
          <RequireAuth>
            <AddItems></AddItems>
          </RequireAuth>
        }></Route>
        <Route path='manageItems' element={
          <RequireAuth>
            <ManageItems></ManageItems>
          </RequireAuth>
        }></Route>
        <Route path='inventory/:id' element={
          <RequireAuth>
            <InventoryItemDetails></InventoryItemDetails>
          </RequireAuth>
        }></Route>
        <Route path='myItems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path='checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
