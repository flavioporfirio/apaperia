export function HighlightsList() {
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
