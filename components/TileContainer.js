import React from 'react'

class TileContainer extends React.Component {
    constructor() {
        super();
        this.state = {width: 0, height: 0}
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
    }

    updateDimensions = () => {
        const mobile = window.innerWidth < 700;
        let width, height;
        if (mobile) {
            width = window.innerWidth;
            height = '';
        } else {
            width = Math.min(800, window.innerWidth);
            height = this.props.rows * Math.floor(width/this.props.columns);
        }
        this.setState({width: width, height: height});
    }
    
    render() {
        return (
            <div className='stackable' style={{ width: this.state.width, height: this.state.height }} >
                {this.props.children}
            </div>
        )
    }
}

export default TileContainer;