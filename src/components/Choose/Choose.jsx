import React from "react";
import "./Choose.css";
import chooseImg from "../../assets/choose.jpg";
import coffeeMug from "../../assets/coffee-mug.svg";
import coffeeBeans2 from "../../assets/coffee-beans-2.svg";
import coffeeBeans3 from "../../assets/coffee-beans-3.svg";

const Choose = () => {
  return (
    <>
      <section className="choose section">
        <div className="choose__grid container grid">
          <div className="choose__content">
            <h2
              className="section__title title-left"
              data-title="Why Choose Us"
            >
              Coffero Most Out Of Your Favorite & Tasty Coffee House
            </h2>

            <p className="choose__description">
              Welcome to COFFERO, where every cup tells a story. Our passion for
              coffee began with a simple belief: that the best moments in life
              are shared over a great cup of coffee. we are dedicated to
              sourcing the finest beans from sustainable farms around the world.
            </p>
            <div className="choose__details grid">
              <div className="choose__details-item">
                <div className="choose__details-img-wrapper">
                  <img src={coffeeMug} alt="" className="choose__details-img" />
                </div>
                <div>
                  <h3 className="choose__details-title">Awesome Aroma</h3>
                  <p className="choose__details-description">
                    we are dedicated to sourcing the finest beans from
                    sustainable farms around the world.
                  </p>
                </div>
              </div>
              <div className="choose__details-item">
                <div className="choose__details-img-wrapper">
                  <img
                    src={coffeeBeans2}
                    alt=""
                    className="choose__details-img"
                  />
                </div>
                <div>
                  <h3 className="choose__details-title">Pure Grades</h3>
                  <p className="choose__details-description">
                    we are dedicated to sourcing the finest beans from
                    sustainable farms around the world.
                  </p>
                </div>
              </div>
              <div className="choose__details-item">
                <div className="choose__details-img-wrapper">
                  <img
                    src={coffeeBeans3}
                    alt=""
                    className="choose__details-img"
                  />
                </div>
                <div>
                  <h3 className="choose__details-title">Healthy Coffee</h3>
                  <p className="choose__details-description">
                    we are dedicated to sourcing the finest beans from
                    sustainable farms around the world.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img src={chooseImg} alt="" className="choose__img" />
        </div>
      </section>
    </>
  );
};

export default Choose;
