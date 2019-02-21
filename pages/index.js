import React from 'react'
import { Header, Icon } from 'semantic-ui-react'
import { navigate } from 'gatsby'

import SketchWrapper from '../components/SketchWrapper'
import rainSketch from '../components/RainSketch'

export default class Index extends React.Component {
  constructor() {
    super();
    this.state = {leftOpen: false, rightOpen: false};
  }

  navigateLeft = () => {
    setTimeout(() => navigate('/resume/'), 1000);
    this.setState({ leftOpen: true });
  }

  navigateRight = () => {
    setTimeout(() => navigate('/about/'), 1000);
    this.setState({ rightOpen: true });
  }

  render() {
    const leftClass = `frontpage-nav ${this.state.leftOpen ? 'left-open' : ''}`
    const rightClass = `frontpage-nav ${this.state.rightOpen ? 'right-open' : ''}`
    return (
      <div className="fullscreen">
        <SketchWrapper sketch={rainSketch} />
        <div className="fullscreen" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {!this.state.rightOpen && 
            <div
              className={leftClass}
              onClick={this.navigateLeft}
              style={{ left: 0, borderRadius: '0 50px 50px 0 / 0 50% 50% 0', marginRight: 14 }}
            >
              {!this.state.leftOpen && <Icon inverted name="chevron left" />}
              {!this.state.leftOpen && <p style={{ fontSize: 12, marginTop: 6 }}>Work</p>}
            </div>
          }
          <div className='vertical-center-container' style={{ zIndex: 1, padding: '0 70px 0 70px' }}>
            <Header as='h1' style={{ color: 'white', fontSize: 70, fontWeight: 200 }}>
              Hi, I'm Derek!
            </Header>
            <p style={{ maxWidth: 406, fontSize: 18 }}>
              I study software engineering at uWaterloo
              and I'm currently working as a frontend intern for Google.
            </p>
          </div>
          {!this.state.leftOpen && 
            <div
              className={rightClass}
              onClick={this.navigateRight}
              style={{ right: 0, borderRadius: '50px 0 0 50px / 50% 0 0 50%', marginLeft: 14 }}
            >
              {!this.state.rightOpen && <Icon inverted name="chevron right" />}
              {!this.state.rightOpen && <p style={{ fontSize: 12, marginTop: 6 }}>Personal</p>}
            </div>
          }
        </div>
      </div>
    );
  }
}