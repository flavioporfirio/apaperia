import "./App.css";

function App() {
  return (
    <div className="App">
      <div id="header">
        <Logo />
        <Nav />
      </div>
      <Plans />
      <HighlightsList />
      <AdvantagesList />
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

function Plans() {
  return (
    <div className="plans">
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
    <div id="advantages-list">
      <div className="first-row">
        <Advantage
          img="relogio"
          adv="Tempo"
          text="Tempo é importante! Trabalhamos em ritmo acelerado, atendendo rigorosamente aos prazos"
        />
        <Advantage
          img="dinheiro"
          adv="Foco"
          text="Focamos no empreendimento! Oferecemos serviços de qualidade com preços acessíveis."
        />
      </div>
      <div className="second-row">
        <Advantage
          img="quimica"
          adv="Especialistas"
          text="Equipe experiente e especializada! Testamos todos os produtos antes do lançamento."
        />
      </div>
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
    <div>
      <h2>Sobre</h2>
    </div>
  );
}

function Contact() {}

function Footer() {}
export default App;
