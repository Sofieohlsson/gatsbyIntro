import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import { Link } from "gatsby"


export default () => (
  <Layout>
  <div style={{ color: `teal` }}>
    <Header headerText="About Gatsby" />
    <Header headerText="It's pretty cool" />
    <p>Such wow. Very React.</p>
      <div>
    <h1>About me</h1>
    <p>I’m good enough, I’m smart enough, and gosh darn it, people like me!</p>
  </div>
  </div>
  </Layout>
)