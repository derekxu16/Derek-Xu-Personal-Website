import React from 'react'

class TileContainer extends React.Component {
    constructor() {
        super();
        this.state = { style :{width: 0, height: 0}, columns: 1 };
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
    }

    updateDimensions = () => {
        let columns;
        if (window.innerWidth <= 480) {
            columns = 1;
        } else if (window.innerWidth <= 720) {
            columns = 2;
        } else {
            columns = 3;
        }
        let width, height;
        width = Math.min(800, window.innerWidth);
        height = window.innerWidth <= 480 ? 200 : Math.floor(width/columns);
        this.setState({style: {width: width, height: height}, columns: columns});
    }
    
    render() {
        let ind = 0;
        let rows = [];
        while (ind < this.props.children.length) {
            if (ind % this.state.columns == 0) {
                rows.push([]);
            }
            rows[rows.length - 1].push(this.props.children[ind]);
            ind ++;
        }
        return (
            <div>
                {rows.map((row, i) => <div className='stackable' children={[row]} key={i} style={this.state.style} />)}
            </div>
        );
    }
}

export default TileContainer;