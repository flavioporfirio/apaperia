import React, { useState } from "react";
import "./App.css";
import "./components/Plans";

const planList = [
  {
    name: "Start",
    price: 500,
    benefits: ["5 manutenções mensais", "App SEO", "1 sistema operacional"],
  },
  {
    name: "Ultra",
    price: 1500,
    benefits: [
      "20 manutenções mensais",
      "App SEO",
      "4 sistemas operacionais",
      "24h de atendimento",
    ],
  },
  {
    name: "Mega",
    price: 1000,
    benefits: ["10 manutenções mensais", "App SEO", "2 sistemas operacionais"],
  },
];

export default function App() {
  return (
    <div className="app">
      <div id="header">
        <div className="nav">
          <Logo />
          <Nav />
        </div>
        <IntroPlans />
      </div>
      <HighlightsList />
      <AdvantagesList />
      <About />
      <Plans />
      <Contact />
      <Institucional />
      <Footer />
    </div>
  );
}

function Logo() {
  return (
    <div className="logo">
      <img src="./imgs/logo-apeperia.svg" alt="" />
    </div>
  );
}

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li>
          <a href="#about">Sobre</a>
        </li>
        <li>
          <a href="#plans">Planos</a>
        </li>
        <li>
          <a href="#header">Blog</a>
        </li>
        <li>
          <a href="#highlights-list">Destaques</a>
        </li>
        <li>
          <a href="#institucional">Institucional</a>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
      </ul>
    </nav>
  );
}

function IntroPlans() {
  return (
    <div className="intro-plans">
      <h2>Aplicativos na medida</h2>
      <p>
        Apaperia tem um jeito inovador de comparar e montar aplicativos para
        pequenas e médias empresas.
      </p>
      <button>Conheça os planos</button>
    </div>
  );
}

function HighlightsList() {
  return (
    <div id="highlights-list">
      <h2>Destaques</h2>
      <Highlights
        img="./imgs/comecando-criar-logotipo.png"
        description="Conheça as primeiras etapas para a criação de um logotipo"
      />
      <Highlights
        img="./imgs/dicas-fotografia.png"
        description="Conheça as primeiras etapas para a criação de um logotipo"
      />
      <button>Receber destaques por email</button>
    </div>
  );
}

function Highlights({ img, description }) {
  return (
    <div className="highlight">
      <img src={img} alt="" />
      <p>{description}</p>
    </div>
  );
}

function AdvantagesList() {
  return (
    <div id="advantages">
      <ul className="advantages-list">
        <li>
          {" "}
          <Advantage
            img="relogio"
            adv="Tempo"
            text="Tempo é importante! Trabalhamos em ritmo acelerado, atendendo rigorosamente aos prazos"
          />
        </li>
        <li>
          <Advantage
            img="dinheiro"
            adv="Foco"
            text="Focamos no empreendimento! Oferecemos serviços de qualidade com preços acessíveis."
          />
        </li>
        <li>
          <Advantage
            img="quimica"
            adv="Especialistas"
            text="Equipe experiente e especializada! Testamos todos os produtos antes do lançamento."
          />
        </li>
      </ul>
    </div>
  );
}

function Advantage({ img, adv, text }) {
  return (
    <div className="advantage">
      <div className="adv-header">
        <img src={`./imgs/icone-${img}.png`} alt="" />
        <p>{adv}</p>
      </div>
      <p>{text}</p>
    </div>
  );
}

function About() {
  return (
    <div className="about">
      <div className="about-text">
        <h3>Sobre</h3>
        <p>
          Criamos aplicativos personalizados para <span>todas as pessoas!</span>
        </p>
        <p>
          A manutenção de um aplicativo não pode ser um custo extra para o
          cliente, Na Apeperia você assina nosso serviço e a manutenção já está
          inclusa. Assim, você não se preocupa com manutenção, é tudo por nossa
          conta.
        </p>
        <p>
          <span>
            Conte com uma equipe especializada e exclusiva pra projetos
            incríveis em qualquer plataforma.
          </span>
        </p>
        <hr />
        <ul className="plataforms">
          <li>
            <img src="./imgs/apple.png" alt="" />
          </li>
          <li>
            <img src="./imgs/android.png" alt="" />
          </li>
          <li>
            <img src="./imgs/blackberry.png" alt="" />
          </li>
          <li>
            <img src="./imgs/windowsphone.png" alt="" />
          </li>
        </ul>
        <p>Desenvolvemos aplicativos para todas as plataformas</p>
      </div>
      <img src="./imgs/sobre-apeperia.png" alt="" className="about-img" />
    </div>
  );
}

function Plans() {
  return (
    <div className="plans">
      <h3>Planos</h3>
      <div className="plans-list">
        {planList.map((plan) => (
          <PlanInfo info={plan} />
        ))}
      </div>
    </div>
  );
}

function PlanInfo({ info }) {
  const color =
    info.name === "Start"
      ? "#56ccf2"
      : info.name === "Ultra"
      ? "#b04cd9"
      : "#e33b3b";

  const [bgColor, setBgColor] = useState("none");
  const [textColor, setTextColor] = useState(color);

  return (
    <div className="plan-info">
      <h4 style={{ color: `${color}` }}>{info.name}</h4>
      <hr />

      <div
        className="benefits"
        style={{ height: `{${info.name === "Ultra" ? "540px" : "auto"}}` }}
      >
        <h4
          style={{
            color: `${color}`,
          }}
        >
          R${info.price}
        </h4>
        {info.benefits.map((benefit) => (
          <p>{benefit}</p>
        ))}
        <button
          style={{
            color: `${textColor}`,
            border: `1px solid ${color}`,
            background: bgColor,
            transition: "color 1s, background 1s, transform 1s",
          }}
          onMouseEnter={() => {
            setBgColor(color);
            setTextColor("#fff");
          }}
          onMouseOut={() => {
            setBgColor("none");
            setTextColor(color);
          }}
        >
          {" "}
          Assinar plano
        </button>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="contact">
      <h3>Contato</h3>
      <p>Entre em contato com a gente</p>
      <button>Entre em contato</button>
    </div>
  );
}

function Institucional() {
  return (
    <div className="institucional">
      <h3>Institucional</h3>
      <div className="info-container">
        <div className="contact-info">
          <p>Um pouco mais sobre a Apeperia</p>
          <div className="address">
            <h4>Rua Vergueiro, 3185</h4>
            <h4>Vila Mariana, São Paulo</h4>
          </div>
          <p>(11) 5571-2751 ou contato@apeperia.com</p>
        </div>
        <div className="video">
          <video src="./imgs/formacao-java.mp4" controls></video>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <div className="nav-footer">
        <Logo />
        <Nav />
      </div>

      <ul className="socials">
        <li>
          <a href="#header">
            <img src="./imgs/facebook.png" alt="" />
          </a>
        </li>
        <li>
          <a href="#header">
            <img src="./imgs/instagram.png" alt="" />
          </a>
        </li>
        <li>
          <a href="#header">
            <img src="./imgs/twitter.png" alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
}
