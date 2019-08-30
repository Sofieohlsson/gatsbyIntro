import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import { Polar, HorizontalBar, Line } from 'react-chartjs-2';

const data = {
  datasets: [{
    data: [
      60,
      65,
      90,
      45
    ],
    backgroundColor: [
      '#F6CAC3',
      '#D4E6BF',
      '#E3DCF2',
      '#FFF6CA'
    ],
    label: 'My dataset' // for legend
  }],
  labels: [
    'Hyrule Warriors',
    'Breath of the Wild',
    'Octopath Traveler',
    'Lets Go Pikachu'
  ]
};

const yeardata = {
    labels: [ 'January', 'February', 'Mars', 'April', 'May'],
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
  

  const daydata = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'How badly I want to nap',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#F2AEC1',
        borderColor: '#F2CED8',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#F2CED8',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#F2CED8',
        pointHoverBorderColor: '#F2AEC1',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40]
        
      }
    ]
  };


export default () => (
  <Layout>
    <div>
      <Header headerText="Charts" />

      <h3>Hours on the switch</h3>
      <p>The top four most played games on my switch as of right now (botw would be doubled if I hadn't played it on wiiU first)</p>
      <Polar data={data} />

    <h3>Resisting naps throughout the week</h3>
      <Line data={daydata} />
    

    </div>
  </Layout>
)