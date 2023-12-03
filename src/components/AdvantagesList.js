export function AdvantagesList() {
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
