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
      <p>
        Roads go ever ever on over rock and under tree.
        By caves where never sun has shone.
        By streams that never find the sea.
        Over snow by winter sown and through the merry flowers of June.
        Over grass and over stone and under mountains in the moon.

        Roads go ever ever on under cloud and under star.
        Yet feet that wandering have gone turn at last to home afar.
        Eyes that fire and sword have seen and horror in the halls of stone.
        Look at last on meadows green and trees and hills they long have known.

        The Road goes ever on and on down from the door where it began.
        Now far ahead the Road has gone and I must follow, if I can.
        Pursuing it with weary feet until it joins some larger way where many paths and errands meet.
        And whither then? I cannot say.

        The Road goes ever on and on out from the door where it began.
        Now far ahead the Road has gone.
        Let others follow, if they can!
        Let them a journey new begin.
        But I at last with weary feet will turn towards the lighted inn.
        My evening-rest and sleep to meet.</p>

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