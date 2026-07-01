import { useEffect, useState } from "react";
import "/./src/estilos/tempoJuntos.css";

function TempoJuntos() {

  const dataInicio = new Date("2026-02-20T23:36:00");

  const [tempo, setTempo] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  useEffect(() => {

    const intervalo = setInterval(() => {

      const agora = new Date();
      const diferenca = agora - dataInicio;

      const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
      const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
      const segundos = Math.floor((diferenca / 1000) % 60);

      setTempo({ dias, horas, minutos, segundos });

    }, 1000);

    return () => clearInterval(intervalo);

  }, []);

  return (

    <div className="tempo-container">

      <h3 className="titulo-tempo">
        Desde que começamos a conversar 💚
      </h3>

      <div className="contador">

        <div className="caixa-tempo">
          <span>{tempo.dias}</span>
          <p>dias</p>
        </div>

        <div className="caixa-tempo">
          <span>{tempo.horas}</span>
          <p>horas</p>
        </div>

        <div className="caixa-tempo">
          <span>{tempo.minutos}</span>
          <p>min</p>
        </div>

        <div className="caixa-tempo">
          <span>{tempo.segundos}</span>
          <p>seg</p>
        </div>

      </div>

    </div>

  );
}

export default TempoJuntos;