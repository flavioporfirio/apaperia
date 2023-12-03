export function About() {
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
