import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Section2 = () => {
    const data = useStaticQuery(graphql`
    query {
      image2: file(relativePath: { eq: "image2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image3: file(relativePath: { eq: "image3.jpg" }) {
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
                <div className="imagered">
                <Img fluid={data.image3.childImageSharp.fluid} />
                </div>
                <div className="image2">
                <Img fluid={data.image2.childImageSharp.fluid} />
                </div>
            </div>
        </div>
    </div>
</div>

)
}

export default Section2