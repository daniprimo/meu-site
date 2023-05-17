import styles from "./NaoEncontrado.module.css";
import cachorro from "../../assets/erro_404.png";
import Botao from "Components/Botao";
import { useNavigate } from "react-router-dom";

export default function NaoEncontrado() {
  const navegar = useNavigate();


  return (
    <>
      <div className={styles.conteudoContainer}>
        <span className={styles.texto404}>404</span>
        <h1 className={styles.titulo}>Ops! Página não encontrado</h1>

        <p className={styles.paragrafo}>
          Hum confirme se este é o endereço correto.
        </p>
        <p className={styles.paragrafo}>
          Aguarde uns instantes até que a pagina volte.
        </p>

        <div 
          onClick={() => navegar(-1)}
          className={styles.botaoContainer}>
          <Botao tamanho="lg">Voltar</Botao>
        </div>

        <img
          src={cachorro}
          alt="Pagina incorreta"
          className={styles.imagemCachorro}
        />
      </div>
      <div className={styles.espacoEmBranco}></div>
    </>
  );
}
