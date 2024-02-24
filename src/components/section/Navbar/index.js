/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import logo from "../../../assets/logo/logo.svg";

import contact_img from "../../../assets/images/Contact.svg";
import "./index.css";
class Navbar extends Component {
  render() {
    return (
      <>
        <nav>
          <div className="logo">
            <img src={logo} />
          </div>
          <ul>
            <li>Продукция</li>
            <li>Области применения</li>
            <li>Калькулятор</li>
            <li>Проекты</li>
            <li>Информация</li>
            <li>Новости</li>
            <li>O компании</li>
            <li>Контакты</li>
          </ul>
          <div className="contact">
            <img src={contact_img} />
          </div>
        </nav>
        <div className="bord"></div>
      </>
    );
  }
}
export default Navbar;
