export function Institucional() {
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
