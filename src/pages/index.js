import React from "react"
import Header from "../components/header"
import Cover from "../components/cover"
import Footer from "../components/footer"
import Letstalk from "../components/Letstalk"
import Section2 from "../components/section2"
import "../styles/styles.scss" //scss


const IndexPage = () => (
  <div>
    <Header />
    <Cover />
    <Section2 />
    <Letstalk />
    <Footer/>
  </div>
)

export default IndexPage
