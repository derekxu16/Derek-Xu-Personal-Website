import React from "react"
import SketchWrapper from '../components/SketchWrapper'
import rainSketch from '../components/rainSketch'

export default class Index extends React.Component {
  render() {
      return (
        <SketchWrapper sketch={rainSketch}/>
      );
  }
}