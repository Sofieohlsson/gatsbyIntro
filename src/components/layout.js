import React from "react"
import { Link } from "gatsby"
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)


export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none`, textDecoration: `underline` }}>
        <h3 class="logo" style={{ display: `inline` }}>Sofie Ohlsson</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right`, fontSize: `1.2rem` }}>
        <ListLink to="/" class="nav">Home</ListLink>
        <ListLink to="/about/" class="nav">About</ListLink>
        <ListLink to="/contact/" class="nav">Contact</ListLink>
        <ListLink to="/charts/" class="nav">Charts</ListLink>
      </ul>
    </header>
    {children}
  </div>
)