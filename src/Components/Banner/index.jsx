import styles from './Banner.module.css';
import circuloColorado from '../../assets/circulo_colorido.png'
import minhaFoto from '../../assets/WhatsApp Image 2023-05-17 at 13.20.33.jpeg'

export default function Banner () {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
            <h1 className={styles.titulo}>
                    Eu sou Daniel Lopes!
                </h1>

                <p className={styles.paragrafo}>
                    Um desenvolvedor de software junior que está sempre em busca de aprendizado e desafios na área da tecnologia.
                    Sou apaixonado por programação e tenho conhecimentos em diversas linguagens e tecnologias como Java, JavaScript, HTML, CSS e SQL.
                    Além disso, estou sempre estudando e me atualizando sobre as novidades do mercado para poder oferecer aos meus clientes soluções inovadoras e eficientes.
                </p>

            </div>
            <div className={styles.imagens}>
                <img src={circuloColorado} alt="Circulo colorido" aria-hidden={true} className={styles.circuloColorido} />
                <img src={minhaFoto} alt="Minha foto" aria-hidden={true} className={styles.minhaFoto} />
                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto do Antônio Evaldo sorrindo"
                />
            
            </div>

            

        </div>
    )
}