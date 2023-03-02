import React, { useState, useContext } from "react";
import "@styles/Header.scss";
import Menu from "@components/Menu.jsx";
import menu from "@icons/icon_menu.svg";
import Logo from "@logos/logo_yard_sale.svg";
import shoppingCar from "@icons/icon_shopping_cart.svg";
import AppContext from "../context/AppContext";
import MyOrder from "@containers/MyOrder";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const { state } = useContext(AppContext);
  const { cart } = state;

  const handleToggle = () => {
    if (toggleOrders === true) {
      setToggleOrders(!toggleOrders);
    }
    setToggle(!toggle);
  };

  return (
    <>
      <nav>
        <img src={menu} alt='menu' className='menu' />
        <div className='navbar-left'>
          <img src={Logo} alt='logo' className='nav-logo' />
          <ul>
            <li>
              <a href='/'>All</a>
            </li>
            <li>
              <a href='/'>Clothes</a>
            </li>
            <li>
              <a href='/'>Electronics</a>
            </li>
            <li>
              <a href='/'>Furnitures</a>
            </li>
            <li>
              <a href='/'>Toys</a>
            </li>
            <li>
              <a href='/'>Others</a>
            </li>
          </ul>
        </div>
        <div className='navbar-right'>
          <ul>
            <li onClick={handleToggle} className='navbar-email'>
              platzi@example.com
            </li>
            <li
              className='navbar-shopping-cart'
              onClick={() => {
                if (toggle === true) {
                  setToggle(!toggle);
                }
                setToggleOrders(!toggleOrders);
              }}
            >
              <img
                src={shoppingCar}
                alt='shopping cart'
                className='shopingCart'
              />
              {cart.length > 0 && <div>{state.cart.length}</div>}
            </li>
          </ul>
        </div>
        {toggle && <Menu />}
        {toggleOrders && <MyOrder />}
      </nav>
    </>
  );
};

export default Header;
