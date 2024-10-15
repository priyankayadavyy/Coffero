import React from "react";
import "./About.css";
import aboutImg from "../../assets/about-img.jpg";
import { FiCheck } from "react-icons/fi";

const About = () => {
  return (
    <>
      <section className="about section" id="about">
        <div className="about__grid container grid">
          <div className="about__img-wrapper">
            <img className="about__img" src={aboutImg} alt="" />
          </div>
          <div className="about__content">
            <h2 className="section__title title-left" data-title="About Us">
              Fresh Quality And Organic Tasty Coffee House For You
            </h2>
            <p className="about__description">
              Welcome to COFFERO, where every cup tells a story. Our passion for
              coffee began with a simple belief: that the best moments in life
              are shared over a great cup of coffee. we are dedicated to
              sourcing the finest beans from sustainable farms around the world.
            </p>
            <div className="about__details grid">
              <p className="about__details-description">
                <FiCheck className="about__detals" />
                At vero eos et accusamus et iusto odio
              </p>
              <p className="about__details-description">
                <FiCheck className="about__detals" />
                Established fact that a reader will be distracted
              </p>
              <p className="about__details-description">
                <FiCheck className="about__detals" />
                Sed ut perspiciatis unde omnis iste natus sit
              </p>
            </div>
            <a className="btn" href="#team">
              Our Experts
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
