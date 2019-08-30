import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import { Link } from "gatsby"
import mariogame from "../../static/images/mariogame.png"
import styles from "./about.module.css"
import senti from "../../static/images/senti.png"
import chibi from "../../static/images/chibime.png"


const Site = props => (
  <div className={styles.project}>
    <a href={props.sitelink} target="_blank">
      <img src={props.thumbnail} className={styles.thumbnail} alt="" />
    </a>
    <div className={styles.description}>
      <h2 className={styles.projectname}>{props.projectname}</h2>
      <p className={styles.info}>{props.info}</p>

    </div>
  </div>
)

export default () => (
  <Layout>
    <div>
      <img src={chibi} />
   
      <Header headerText="About me" />

     
      <p>Hi, my name is Sofie! I'm currently studying to become a Frontend Developer. When I'm not trying to figure out some code I spend my time with something creative. I love creating things, whether it's photography, drawing, clay or anything else you can think of. </p>
      <p>Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. Lorem ipsum har inte bara överlevt fem århundraden, utan även övergången till elektronisk typografi utan större förändringar. Det blev allmänt känt på 1960-talet i samband med lanseringen av Letraset-ark med avsnitt av Lorem Ipsum, och senare med mjukvaror som Aldus PageMaker.
      </p>

      </div>
      
     
      <h3>Here are some websites I've done in the past. Please click on the picture if you are interested</h3>
      
      <Site
        projectname="Learn for kids"
        thumbnail={senti}
        info="A site for small children to learn both how to use a computer and things like numbers while playing games!"
        sitelink="https://sofieohlsson.github.io/learnforkids/"
      />

      <Site
        projectname="Mario game"
        thumbnail={mariogame}
        info="I also made a mashup game of the classic pokémon fighting system with nintendo characters. ((**sound on**))"
        sitelink="https://compassionate-lovelace-d33b19.netlify.com/"
      />












    
  </Layout>
)