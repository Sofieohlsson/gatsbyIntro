import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Header from "../components/header"
export default () => (
  <Layout>
  <div style={{ color: `purple` }}>

    <Header headerText="Hello Gatsby!" />
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
    <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
    <p>
      What do I like to do? Lots of course but definitely enjoy building
      websites.
    </p>
  </div>
  </div>
  </Layout>
)