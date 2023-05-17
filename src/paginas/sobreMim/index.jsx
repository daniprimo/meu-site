import PostModelo from 'Components/PostModelo';
import styles from './SobreMim.module.css';   
import fotoCapa from '../../assets/sobre_mim_capa.png'
import fotoSobreMim from '../../assets/WhatsApp Image 2023-05-17 at 13.20.33.jpeg'

export default function SobreMim() {
  return (
    <PostModelo
      fotoCapa={fotoCapa}
      titulo='Sobre Mim'
    >
      <h3 className={styles.subtitulo}>
        Olá, eu sou o Daniel Lopes !
      </h3>

      <img 
        src={fotoSobreMim}
        alt='Minha foto'
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}> 
        Bom eu tenho 23 anos, e estou desde 2020 me dedicando em estudar e me tornar um profissional de excelência na area de desenvolvimento,
        e sim me apaixonei por essa profissão que é apaixonante, sigo buscando novos conhecimentos com intuito de me torna um profissional completo,
        e assim me capacitar para os novos desafios.
      </p>

      <p className={styles.paragrafo}> 
        Possuo a habilidade de se comunicar e se relacionar bem com as pessoas, e acredito que isso é um dos maiores poderes do ser humano,
        e sim é uma grande vantagem em nossa vida profissional.
      </p>

      <p className={styles.paragrafo}> 
        Acredito que sou alguém que busca sempre se aperfeiçoar, através de leitura, estudo, conversas com amigos, tutoria é um processo de aprendizagem constante.
        Ser perseverante e determinação são coisas admiráveis em qualquer um, e sim me considero um homem determinado, e não irei desistir até alcançar meus objetivos.
      </p>

      <p className={styles.paragrafo}> 
        Essas são algumas das minhas características que acredito que me tornem uma pessoa legal, e que me dão combústivel para alcançar coisas maiores sempre.  
      </p>

      <p className={styles.paragrafo}> 
      "Engenharia de software é a arte de projetar e desenvolver soluções inteligentes para problemas complexos. É a combinação perfeita de ciência e tecnologia, habilidades e conhecimento, criatividade e inovação. Através da engenharia de software, podemos transformar sonhos em realidade, ideias em produtos, e criar um legado duradouro para toda a humanidade.

      Não há limites para o que é possível com a engenharia de software. Desde sistemas de controle de tráfego aéreo até aplicativos de música, desde robótica avançada até software de ensino à distância, nossas criações impactam a vida de muitas pessoas, trazendo maior eficiência, conforto e segurança para o nosso dia a dia.

      Porém, para ser um verdadeiro engenheiro de software, também precisamos ter em mente as implicações éticas e sociais do nosso trabalho. Precisamos considerar o meio ambiente, a segurança, a privacidade e a inclusão. Somente assim poderemos realmente fazer a diferença na vida das pessoas e contribuir para um futuro melhor para todos.

      Portanto, seja você um estudante, um profissional experiente ou apenas um curioso, nunca deixe de se desafiar. Conheça as novas tecnologias, suas aplicações e limitações. Coloque seu talento e paixão em cada projeto que desenvolver. E acima de tudo, lembre-se que sua criação pode mudar o mundo, para sempre." - Bill Gates, fundador da Microsoft.
      </p>


      
      

    </PostModelo>
  );
}
