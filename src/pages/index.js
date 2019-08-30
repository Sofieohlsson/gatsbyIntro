import React from "react"
import Layout from "../components/layout"
import styles from "./index.module.css"
import { Link } from "gatsby"
import Header from "../components/header"
import korok from "../../static/images/korok.png" 
import bowser from "../../static/images/bowserjr.png"
import cubone from "../../static/images/cubone.png"



const Project = props => (
  <div className={styles.project}>
    <img src={props.thumbnail} className={styles.thumbnail} alt="" />
    <div className={styles.description}>
      <h2 className={styles.projectname}>{props.projectname}</h2>
      <p className={styles.info}>{props.info}</p>
    </div>
  </div>
)


export default () => (
  <Layout>
    <div>

      <Header headerText="Drawings" />
      <p>I like drawing copyrighted things. Here are some of my latest</p> 

      <Project
        projectname="Korok"
        thumbnail={korok}
        info="Yahaha, you found me! Cute little creature found in The Legend of Zelda franchise"
      />

      <Project
        projectname="Bowser Junior"
        thumbnail={bowser}
        info="Continuing on the Nintendo theme we have Bowser Jr from Mario"
      />

      <Project
        projectname="Cubone"
        thumbnail={cubone}
        info="Not only are there hundred of designs of pokémons, they are also very rewarding to draw. Gen 1 offers a lot of great pokémons, one of my favroites being Cubone"
      />
    </div>

    

  </Layout>

)