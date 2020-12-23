import React from "react"
import { Link } from "gatsby"
import Carousel, { autoplayPlugin, Dots } from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"

import Button from "../components/button"

class HomeCarousel extends React.Component {
  constructor() {
    super()
    this.state = {
      value: 0,
      slides: [
        (
          <div>
            <p>Previously, I've worked for an established publisher and a small agency, respectively. I focus on building responsive user experiences with an eye for detail and design.</p>
            <Link to="/work/">
              <Button marginTop="35px">Go to Work</Button>
            </Link>
          </div>
        ),
        (
          <div>
            <p>Prior to working in digital/web development, I was in the operational side of the independent music business and also moonlighted as a DJ.</p>
            <Link to="/mixes/">
              <Button marginTop="35px">Go to Mixes</Button>
            </Link>
          </div>
        ),
      ]
    }
    this.onchange = this.onchange.bind(this);
  }

  onchange(value) {
    this.setState({ value });
  }

  render() {
    return (
      <div>
        <Carousel
          className="carousel"
          value={this.state.value}
          slides={this.state.slides}
          onChange={this.onchange}
          plugins={[
            'infinite',
            {
              resolve: autoplayPlugin,
              options: {
                interval: 2000,
              }
            },
          ]}
          animationSpeed={1000}
        />
        <Dots
          className="carousel__dots"
          value={this.state.value}
          onChange={this.onchange}
          number={this.state.slides.length}
        />
      </div>
    )
  }
}

export default HomeCarousel
