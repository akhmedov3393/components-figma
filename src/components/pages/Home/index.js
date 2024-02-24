import React, { Component } from "react";
import Navbar from "../../section/Navbar";
import images1 from "../../../assets/images/Image1.png";
import images2 from "../../../assets/images/image2.png";
import images3 from "../../../assets/images/image3.png";
import images4 from "../../../assets/images/image4.png";
import images5 from "../../../assets/images/image5.png";
import Footer from "../../section/Footer";
import "./index.css";

class Home extends Component {
  render() {
    return (
      <>
        <div className="allPageWidth">
          <div className="container">
            <Navbar />
            <section>
              <div className="texts">
                <h1>
                  <span className="one">Раздвижные конструкции </span>
                  <span className="two">c высоким уровнем звукоизоляции </span>
                </h1>

                <div className="title">
                  <div className="a">
                    <div className="point"></div>
                    <p>Собственное производство в России</p>
                  </div>

                  <div className="a">
                    <div className="point"></div>
                    <p>Уровень вукоизоляции до 52 дБ</p>
                  </div>

                  <div className="a">
                    <div className="point"></div>
                    <p>Расчит проекта по вашим требованиям за 1 час</p>
                  </div>

                  <div className="a">
                    <div className="point"></div>
                    <p>Гарантия на продукцию 3 года</p>
                  </div>

                  <div className="a">
                    <div className="point"></div>
                    <p>Работа “под ключ”</p>
                  </div>
                </div>
                <button>Получить рассчет проекта</button>
              </div>

              <div className="pictures">
                <div className="pic-one">
                  <img src={images1} />
                </div>
                <div className="pic-two">
                  <img src={images2} />
                </div>
                <div className="pic-three">
                  <img src={images3} />
                </div>
                <div className="pic-four">
                  <img src={images4} />
                </div>
                <div className="pic-five">
                  <img src={images5} />
                </div>
              </div>
            </section>
            <div className="page-two">
              <div className="bg-img-one">
                <div className="rooms-page">
                  <strong>Раздвижные стены</strong>
                  <div className="sp">
                  <span>от 18 000 ₽/м² </span>
                  <span>• </span>
                  <span>2 бренда </span> <span>• </span>
                  <span>7 типов конструкций</span>
                  </div>
                </div>
              </div>
              <div className="bg-img-one">
                <div className="rooms-page">
                  <strong>Раздвижные стены</strong>
                  <div className="sp">
                  <span>от 18 000 ₽/м² </span>
                  <span>• </span>
                  <span>2 бренда </span> <span>• </span>
                  <span>7 типов конструкций</span>
                  </div>
                </div>
              </div>
            </div>
            <Footer/>
          </div>
        </div>
      </>
    );
  }
}
export default Home;
