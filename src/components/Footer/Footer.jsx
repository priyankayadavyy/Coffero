import React from "react";
import "./Footer.css";
import Logo from "../../assets/logo.png";
import {
  FaRegEnvelope,
  FaCaretRight,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import { AiOutlinePhone } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__grid container grid">
          <div className="footer__content">
            <a href="/" className="footer__logo">
              <img src={Logo} alt="" className="footer__logo-img" />
            </a>
            <p className="footer__description">
              Welcome to COFFERO, where every cup tells a story. Our passion for
              coffee began with a simple belief: that the best moments in life
              are shared over a great cup of coffee.
            </p>
            <ul className="footer__contact">
              <li className="footer__content-item">
                <AiOutlinePhone className="icon" /> +91 xxxxxxxxxx
              </li>
              <li className="footer__content-item">
                <MdOutlineLocationOn className="icon" /> India
              </li>
              <li className="footer__content-item">
                <FaRegEnvelope className="icon" /> xyz@gmail.com
              </li>
            </ul>
          </div>
          <div className="footer__content">
            <h3 className="footer__title">Quick Links</h3>
            <ul className="footer__links">
              <li>
                <a href="#about" className="footer__link">
                  <FaCaretRight className="icon" /> About Us
                </a>
              </li>
              <li>
                <a href="#menu" className="footer__link">
                  <FaCaretRight className="icon" /> Menu
                </a>
              </li>
              <li>
                <a href="#features" className="footer__link">
                  <FaCaretRight className="icon" /> Features
                </a>
              </li>
              <li>
                <a href="#gallery" className="footer__link">
                  <FaCaretRight className="icon" /> Gallery
                </a>
              </li>
              <li>
                <a href="#team" className="footer__link">
                  <FaCaretRight className="icon" /> Chefs
                </a>
              </li>
              <li>
                <a href="#reservation" className="footer__link">
                  <FaCaretRight className="icon" /> Reservation
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__content">
            <h3 className="footer__title">Opening Hours</h3>

            <div className="footer__opening-hour">
              <ul className="opening__hour-list">
                <li className="opening__hour-item">
                  <span>Monday:</span>
                  <span>09AM - 06PM</span>
                </li>
                <li className="opening__hour-item">
                  <span>Tuesday:</span>
                  <span>09AM - 06PM</span>
                </li>
                <li className="opening__hour-item">
                  <span>Wednesday:</span>
                  <span>09AM - 06PM</span>
                </li>
                <li className="opening__hour-item">
                  <span>Thursday:</span>
                  <span>09AM - 06PM</span>
                </li>
                <li className="opening__hour-item">
                  <span>Friday:</span>
                  <span>09AM - 06PM</span>
                </li>
                <li className="opening__hour-item">
                  <span>Saturday:</span>
                  <span>09AM - 06PM</span>
                </li>
                <li className="opening__hour-item">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer__content">
            <h3 className="footer__title">NewLetter</h3>
            <p className="footer__description">
              Subscribe Our NewLetter To Get Latest Update And News
            </p>

            <form className="subscribe__form" action="">
              <input
                className="form__input subscibe__input"
                type="text"
                placeholder="Your Email"
              />
              <button className="btn btn--flex subscribe__btn">
                <FaRegEnvelope /> Subscribe Now
              </button>
            </form>
            <div className="footer__socials">
              <h3 className="footer__social-follow">follow Us </h3>

              <div className="footer__socials-links">
                <a className="footer__social-link" href="/">
                  <FaFacebookF />
                </a>
                <a className="footer__social-link" href="/">
                  <FaTwitter />
                </a>
                <a className="footer__social-link" href="/">
                  <FaLinkedinIn />
                </a>
                <a className="footer__social-link" href="/">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="copyright__text">
          Created By Priyanka Yadav 2024 @ <span>Coffero</span> All Rights
          Reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
