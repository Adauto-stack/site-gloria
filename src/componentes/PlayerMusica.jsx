import { useRef, useState } from "react";
import "/src/estilos/playerCard.css";

function PlayerCard() {
  const audioRef = useRef(null);
  const [tocando, setTocando] = useState(false);

  const playPause = () => {
    if (tocando) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setTocando(!tocando);
  };

  const avancar = () => {
    audioRef.current.currentTime += 10;
  };

  const voltar = () => {
    audioRef.current.currentTime -= 10;
  };

  return (
    <div className="player-card">
      <audio ref={audioRef} src="musica/musica.mp3" />

      <img
        src="musica/capa.jpg"
        alt="Capa"
        className="capa-musica"
      />

      <h4 className="nome-musica">Como Tudo Deve Ser</h4>

      <div className="controles">
        <button onClick={voltar}>⏪</button>
        <button onClick={playPause}>
          {tocando ? "⏸" : "▶"}
        </button>
        <button onClick={avancar}>⏩</button>
      </div>
    </div>
  );
}

export default PlayerCard;