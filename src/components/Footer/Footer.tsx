import {
  Facebook,
  Instagram,
  Twitter,
  WhatsApp,
  Room,
  Phone,
  MailOutline,
} from "@mui/icons-material";
import React from "react";
import style from "./Footer.module.scss";
import { Link } from "react-router-dom";
import { categories } from "../../data";

interface ICategory {
  id: number;
  img: string;
  imgMobile: string;
  title: string;
  category: string;
}

function Footer() {
  return (
    <div className={style.Container}>
      <div className={style.Left}>
        <div className={style.About}>
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nemo
            cum, quo architecto officiis fugit ab cumque eveniet reprehenderit,
            minima voluptatem!
          </p>
        </div>
        <div className={style.SocialContainer}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com"
            className={style["SocialIcon--facebook"]}
          >
            <Facebook />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com"
            className={style["SocialIcon--instagram"]}
          >
            <Instagram />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.twitter.com"
            className={style["SocialIcon--twitter"]}
          >
            <Twitter />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.whatsApp.com"
            className={style["SocialIcon--whatsapp"]}
          >
            <WhatsApp />
          </a>
        </div>
      </div>
      <div className={style.Center}>
        <h1>Usefull Links</h1>
        <ul>
          <li>
            <Link to="/" className={style.Link}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/cart" className={style.Link}>
              Cart
            </Link>
          </li>

          {categories.map((item: ICategory) => (
            <li key={item.id}>
              <Link to={`/products/${item.category}`} className={style.Link}>
                {item.title}
              </Link>
            </li>
          ))}

          <li>
            <Link to="/user" className={style.Link}>
              My Account
            </Link>
          </li>
        </ul>
      </div>
      <div className={style.Right}>
        <h1>Contact</h1>
        <div>
          <Room style={{ marginRight: "10px" }} />
          3949 Deer Haven Drive, Greenville, SC
        </div>
        <div>
          <Phone style={{ marginRight: "10px" }} />
          803-389-4982
        </div>
        <div>
          <MailOutline style={{ marginRight: "10px" }} />
          bexoli2205@anlubi.com
        </div>
        <img src="assets/images/payment-methods.jpg" alt="payment methods" />
      </div>
    </div>
  );
}

export default Footer;
