import Image from "next/image";
import {
   MdLunchDining,
   MdLocalBar,
   MdDining,
   MdIcecream,
   MdFastfood,
} from "react-icons/md";

import styles from "./page.module.css";

import Slider from "@/componentes/slider";
import ProdutosHome from "@/componentes/produtos/produtosHome";

export default function Home() {
   return (
      <div className="containerGlobal">
         <Slider />

         <div className={styles.tipos}>
            <MdLunchDining className={styles.tpicon} />
            <MdLocalBar className={styles.tpicon} />
            <MdDining className={styles.tpicon} />
            <MdIcecream className={styles.tpicon} />
            <MdFastfood className={styles.tpicon} />
         </div>

         <ProdutosHome />

         {/* <h1 className={styles.tituloHomePage}>Aula Next JS</h1>
         <h2>Exemplo h2</h2>
         <h3>Exemplo h3</h3>
         <p>Texto parágrafo</p>

         <div className={styles.containerImagem}>
            <Image
               src="/download.jfif"
               width={500}
               height={500}
               alt="Imagem"
               className={styles.imagemHomePage}
            />

            <Image
               src="/download.jfif"
               width={50}
               height={50}
               alt="Imagem"
               className={styles.imagemHomePage}
            /> */}
      </div>
   );
}
