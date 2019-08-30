import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"
import styles from "./contact.module.css"
import Phone from "../../static/images/phone2.png"
import Email from "../../static/images/email.png"
import { HorizontalBar } from 'react-chartjs-2';


const Contact = props => (
  <div className={styles.project}>
    <img src={props.thumbnail} className={styles.thumbnail} alt="" />
    <div className={styles.description}>
      <p className={styles.info}>{props.info}</p>
    </div>
  </div>
)


const data = {
  labels: ['January', 'February', 'Mars', 'April', 'May'],
  datasets: [
    {
      label: 'Average temp in Sweden (night)',
      backgroundColor: '#D6C9F2',
      borderColor: '#C9B6F2',
      borderWidth: 1,
      hoverBackgroundColor: '#CEE4F2',
      hoverBorderColor: '#9fcce9',
      data: [-5, -7, -2, 1, 6]
    }
  ]
};


export default () => (
  <div>
    <Layout>
      <Header headerText="Contact" />



      <h3>How to reach me</h3>
      <Contact
        thumbnail={Phone}
        info="0762635671"
      />

      <Contact
        thumbnail={Email}
        info="anna.sofie.ohlsson@gmail.com"
      />

      <HorizontalBar data={data} />


      <h3>Where to find me</h3>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2033.1219561351832!2d17.9922035160737!3d59.364303481671016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9dc1732ff9a3%3A0xbf1acba646d15768!2sStr%C3%A5kv%C3%A4gen+1%2C+169+35+Solna!5e0!3m2!1sen!2sse!4v1542717508174" width="500" height="350"></iframe>




    </Layout>


  </div>

)