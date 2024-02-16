import Foto_perfil_Camis_Maciel from '../../assets/Foto_perfil_Camis_Maciel.jpeg';
import Banner_Meu_Aprendizado from '../../assets/Banner_Meu_Aprendizado.png'
import styles from './sobre.module.css';

const Sobre = () => {
  return (
    <>
      <div className={styles.header}>
        <div>
            <img className={styles.headerImg} src={Foto_perfil_Camis_Maciel} alt="Foto de Perfil" />
        </div>
      </div>

      <div className={styles.containerSobre} >
          <h1 className={styles.nomeCompleto}>Camis Maciel</h1>
          <h2 className={styles.profissao}>UX UI Designer</h2>
          <p className={styles.sobreMim}>
              Sou Camila, mas me chame de Camis! Moro na primeira capital do Brasil, sou mãe de pet e de planta, quase graduada em Adm e "entusiasta" em tudo aquilo que faz meus olhos brilharem.
              <br />
              Me identifiquei com linguagens Front-End principalmente por conta de tudo que vi enquanto me formava em UX/UI. Transformar wireframes de alta fidelidade em telas funcionais e ver que
              era "isso que faltava" para ter uma solução tecnológica assertiva é o que tem me mantido firme na decisão de migrar de carreira.
              <br />
              Na formação nada básica da PretaLab, aprendi a programar em HTML, CSS, Java Script e React junto a um time de mulheres incríveis e isso segue fazendo a diferença.
              <br/>
              Como meu objetivo é, de fato, migrar de carreira, assumo que não tenho a intenção de retornar ao curso de Administração. Estou focada em seguir me desenvolvendo e me mantenho atualizada
              fazendo cursos e desenvolvendo projetos pessoais nas duas áreas. Assim, consigo aprimorar minhas hardskills e desenvolvo as softskills trabalhando em times multidisciplinares. 
              A área da tecnologia me cabe e eu estou pronta para seguir trilhando os passos necessários para alcançar os meus objetivos profissionais.
          </p>
      </div>

      <div className={styles.containerAprendizado}>
        <h2 className={styles.aprendizado}> O que aprendi até aqui </h2>
        <img className={styles.aprendizadoImg} src={Banner_Meu_Aprendizado} alt="Banner com a trilha de aprendizado no curso da PretaLab" />
      </div>
    </>
  )
}

export default Sobre;