import styles from "./Post.module.css";
import { Link, useParams } from "react-router-dom";
import Botao from "Components/Botao";

export default function PostCard({ post }) {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
        <img
          alt={`Imagem da capa do post`}
          className={styles.capa}
          src={`/assets/posts/${post.id}/capa.png`}
        />
        <h2 className={styles.titulo}>{post.titulo}</h2>

          <Botao>Ler</Botao>
        </div>
    </Link>
  );
}
