import React from "react"
import Navbar from '../components/Navbar'
import SketchWrapper from '../components/SketchWrapper'
import rainSketch from '../components/RainSketch'

import 'semantic-ui-css/semantic.min.css';
import '../css/index.css';

export default class Template extends React.Component {
  render() {
    return (
      <div className="fullscreen">
        <Navbar />
        <SketchWrapper sketch={rainSketch}/>
        {this.props.children}
      </div>
    )
  }
}