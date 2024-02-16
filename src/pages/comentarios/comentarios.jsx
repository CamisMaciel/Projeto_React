import { useState } from "react";
import './comentarios.module.css';
import Comentario from '../../assets/Comentario.png';

const Comentarios = () => {
  const [novoComentario, setNovoComentario] = useState('');

  const aoDigitarComentario = (event) => {
    setNovoComentario(event.target.value);
  };

  const aoClicarBotao = () => {
    setNovoComentario('');
  };

  return (
    <>
      <div className={styles.header}>
        <h1>
            Deixe o seu comentário
        </h1>
        <img src={Comentario} alt="Comentário" />
      </div>
      <div className={styles.commentBox}>
        <input
          type="text" id=" "name=""
          value={novoComentario}
          onChange={aoDigitarComentario}
          placeholder="Digite aqui..."
        />
        <button className={styles.button} onClick={aoClicarBotao}>+</button>
      </div>
    </>
  );
};

export default Comentarios;