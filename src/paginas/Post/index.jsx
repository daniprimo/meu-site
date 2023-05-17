import "./Post.css";
import { Route, Routes, useParams } from "react-router-dom";
import posts from "../../json/posts.json";
import PostModelo from "Components/PostModelo";
import fotoDoCacete from "../../assets/posts/2/capa.png";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import NaoEncontrado from "paginas/NaoEncontrado";

export default function Post() {
  const parametros = useParams();

  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });

  if (!post) {
    return <NaoEncontrado />;
  }

  return (
    <Routes>
      <Route path="*" element={<NaoEncontrado />}>
        <Route
          index
          element={
            <PostModelo fotoCapa={fotoDoCacete} titulo={post.titulo}>
              <div className="post-markdown-container">
                <ReactMarkdown>{post.texto}</ReactMarkdown>
              </div>
            </PostModelo>
          }
        />
      </Route>
    </Routes>
  );
}
