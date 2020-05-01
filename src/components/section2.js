import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const section2 = () => {
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
`)

return (
<div className="section2">
    <div className="container">
        <div classname="row">
            <h1 classname="covertitle">Hello I'm Gatsby, I load things faster;<br></br>
                I can behave like a Human.
            </h1>
            <div className="secimg">
                <div className="col">
                <Img fluid={data.placeholderImage.childImageSharp.fluid} />
                </div>
            </div>
        </div>
    </div>
</div>
)
}

export default section2