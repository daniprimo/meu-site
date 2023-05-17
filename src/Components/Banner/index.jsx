import styles from './Banner.module.css';
import circuloColorado from '../../assets/circulo_colorido.png'
import minhaFoto from '../../assets/WhatsApp Image 2023-05-17 at 13.20.33.jpeg'

export default function Banner () {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                Meu nome é Daniel Lopes
                </h1>

                <p className={styles.paragrafo}>
                Sou um desenvolvedor de software junior que está sempre em busca de aprendizado e desafios na área da tecnologia.
                Sou apaixonado por programação e tenho conhecimentos em diversas linguagens e tecnologias como Java, JavaScript, HTML, CSS e SQL.
                Além disso, estou sempre estudando e me atualizando sobre as novidades do mercado para poder oferecer aos meus clientes soluções inovadoras e eficientes.
                Se você está procurando um desenvolvedor de software que possa te ajudar a transformar suas ideias em realidade, está no lugar certo! Com minha experiência e habilidades,
                posso ajudar a construir aplicações web, mobile e desktop, sistemas para empresas e outras soluções sob medida para atender às suas necessidades.
                Estou comprometido em oferecer um serviço de qualidade e trabalhar com ética e responsabilidade para garantir a satisfação dos meus clientes.
                Entre em contato comigo para conversarmos sobre sua ideia e como eu posso ajudá-lo a alcançar seus objetivos. Vamos juntos transformar o mundo com a tecnologia!
                </p>

            </div>
            <div className={styles.imagens}>
                <img src={circuloColorado} alt="Circulo colorido" aria-hidden={true} className={styles.circuloColorido} />
                <img src={minhaFoto} alt="Minha foto" aria-hidden={true} className={styles.minhaFoto} />
            </div>
        </div>
    )
}