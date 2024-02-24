import React, { Component } from "react";
import Footimg from "../../../assets/images/footer-img.png";
import "./index.css";
class Footer extends Component {
  render() {
    return (
      <>
        <footer>
          <div className="foot-img">
            <img src={Footimg} />
          </div>
          <div className="texts">
            <div className="htwo">
              <h2>
                А может хотите
                <span> персональную скидку</span> специально для вас?
              </h2>
            </div>
            <p>
              Оставьте заявку и наши специалисты свяжутся с вами в ближайшее
              время для обсуждения всех деталей спецпредложения специально для
              вас.
            </p>
            <strong>
              Для начала, давайте определимся, к какому типу клиентов вы себя
              относите :)
            </strong>
            <div className="btn">
              <button>Собственник</button>
            </div>
          </div>
        </footer>
        <div className="asas"></div>
      </>
    );
  }
}
export default Footer;
