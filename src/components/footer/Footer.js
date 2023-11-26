import "./Footer.css";

const Footer = () => (
  <div>
    <footer className="footer">
      <div className="container pointer">
        <h2 className="item-content">Реклама</h2>
        <p className="item-content-p">Facebook & Instagram Ads</p>
        <p className="item-content-p">Google Ads</p>
        <p className="item-content-p">SEO</p>
        <p className="item-content-p">Зовнішня реклама</p>
      </div>

      <div className="container pointer">
        <h2 className="item-content">Просування</h2>
        <p className="item-content-p">SMM</p>
        <p className="item-content-p">PR</p>
        <p className="item-content-p">Branding</p>
        <p className="item-content-p">Google maps</p>
      </div>

      <div className="container pointer">
        <h2 className="item-content">Дизайн</h2>
        <p className="item-content-p">3D motion</p>
        <p className="item-content-p">Graphic design</p>
        <p className="item-content-p">Web-Design</p>
      </div>

      <div className="container pointer">
        <h2 className="item-content">Контакти</h2>

        <div>
          <a className="item-content-p" href="https://www.instagram.com/i.deal.agency" target="_blank">
            i.deal.agency
          </a>
        </div>

        <div id="number" className="mobilie">
          <a className="item-content-p" href="tel:+380660838198">+380660838198</a>
        </div>

        <div id="email" className="email">
          <a className="item-content-p" href="mailto: i.deal.inspireandcreate@gmail.com">
            i.deal.inspireandcreate@gmail.com
          </a>
        </div>
      </div>
    </footer>
  </div>
);

export default Footer;
