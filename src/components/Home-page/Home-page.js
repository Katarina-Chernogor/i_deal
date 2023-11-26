import "./Home-page.css";

const NumberDescriber = () => {
  let textAgency = ['i', '', 'd', 'e', 'a', 'l', '', 'a', 'g', 'e', 'n', 'c', 'y'];
  let number_of_particle = 13;

  return (
    <div>
      {textAgency.map((letter, i) => (
        <div key={i} className={`background${i}`}>
          {letter}
        </div>
      ))}
    </div>
  );
};

const Home_page = () => (
  <div>
    <div className="container-text pointer">
      <h3 className="content-home-h">Ми – маркетингова агенція i.deal</h3>
      <h3 className="content-home-h">І ми не боїмось викликів! </h3>
      <p className="content-home">Немає айдентики чи концепції компанії?</p>
      <p className="content-home">У Гуглі вас не видно?</p>
      <p className="content-home">
        Колаборації, PR, брендинг, зняти рекламний ролик?
      </p>
      <p className="content-home">
        Організувати івент, щоб про нього написали в ЗМІ?
      </p>
      <p className="content-home">Співпраця з владою?</p>
      <p className="content-home">
        Або просто хочете консультацію чи навчання?
      </p>
      <h3 className="content-home-h">Запросто!</h3>
      <p className="content-home">
        "I Deal!" - каже агенція, коли отримує замовлення.
      </p>
      <p className="content-home">
        "Ideal!" - говорить клієнт, отримуючи результат.
      </p>
    </div>
  </div>
);

export default Home_page;
