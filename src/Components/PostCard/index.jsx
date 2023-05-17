import styles from "./Post.module.css";
import foto from "../../assets/posts/2/capa.png";
import { Link } from "react-router-dom";
import Botao from "Components/Botao";

export default function PostCard({ post }) {
  return (
    <Link to={`../../posts/${post.id}`}>
      <div className={styles.post}>
        <img
          alt={`Imagem da capa do post ${post.id}`}
          className={styles.capa}
          src={foto}
        />
        <h2 className={styles.titulo}>{post.titulo}</h2>

          <Botao>Ler</Botao>
        </div>
    </Link>
  );
}
