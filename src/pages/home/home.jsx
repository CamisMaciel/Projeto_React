import styles from './home.module.css';
import BannerProjetoFinalReactPretaLab from '../../assets/BannerProjetoFinalReactPretaLab.png'
import Woman_Together from '../../assets/Woman_Together.png'
import Future from '../../assets/Future.png';


const Home = () => {
  return (
    <>
      <div className={styles.header}>
        <img src={BannerProjetoFinalReactPretaLab} />
      </div>
      <div className={styles.subtitulo}>
        <p>
         Esse é o site do projeto final do módulo de React do Ciclo formativo Básico da Pretalab. Projeto desenvolvido em React abordando todos os tópicos vistos durante a aula com a orientadora Amanda Silva e a monitora Amanda Gregório. (Componentes, Props, Estados, Listas e Keys, Hooks, onChange e onClick, Context API em React, React Router DOM imagens e modularização do CSS, TDD).
          <br/>
          <a class="link-formacao" href="https://www.canva.com/design/DAF7MCKi7jE/C1i7JzmO1Nn8sRqTpQttuA/view" target="_blank">Proposta do projeto com os requisitos obrigatórios e opcionais.</a>
        </p>
      </div>
      <div className={styles.beneficios}>
    <section className={styles.content}>
      <div className={styles.cardsContainer}>
        <h2 className={styles.tituloCards}>Porquê ser Pretalabber</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img className={styles.imagemCard} src={Woman_Together} />
            <div className={styles.textos}>
              <h3 className={styles.subtituloCard}>Mulheres Juntas</h3>
              <p className={styles.texto}>Fui aluna do Ciclo Presencial da PretaLab aqui em Salvador e continuar me desenvolvendo com e através de mulhures fez e faz 
              total diferença na minha vida. Aqui eu fiz amigas, aqui eu pude me enxergar dentro da comunidade tech e aqui eu confirmei que
              eu consigo sim! A PretaLab é um divisor de águas na vida daqueles que se deixam impactar e tenho a mais absoluta certeza de que essa formação 
              - e todas as outras que eu puder completar com elas, é o que marca mais um passo na minha caminhada de migração de carreira.</p>
            </div>
          </div>
          <div className={styles.card}>
            <img className={styles.imagemCard} src={Future} />
            <div className={styles.textos}>
              <h3 className={styles.subtituloCard}>Para o futuro</h3>
              <p className={styles.texto}>Busco conciliar meu background de UX/UI Design e linguagens de desenvolvimento Front-End 
              com o intuito de prover soluções ideais para as dores do usuário, focando o resultado em conexões, vivências e
              priorizando a pessoa usuária em todo o processo, agindo de maneira assertiva e inclusiva.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
    </>
  )
}

export default Home;