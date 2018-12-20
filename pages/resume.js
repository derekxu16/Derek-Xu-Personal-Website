import React, { Component } from 'react'
import DimTile from '../components/DimTile'
import TileContainer from '../components/TileContainer'
import { CSSTransition } from 'react-transition-group';

export default class Resume extends Component {
	constructor() {
		super();
		this.state = { headerPadding: 0, header: '' };
	}
	componentDidMount() {
		this.updateDimensions();
		window.addEventListener("resize", this.updateDimensions);
		this.setState({ mounted: true })
	}

	updateDimensions = () => {
		const mobile = window.innerWidth < 680;
		let state = {style: { fontSize: 22, height:'100%', width:'100%' }}
		if (mobile) {
			state.style['justifyContent'] = 'flex-start';
			this.setState(Object.assign(state,{
				headerPadding: '52px 20px 0px 20px',
				header: 'The tiles below best characterize me as a developer. Tap on them to learn more!',
			}));
		} else {
			this.setState(Object.assign(state,{
				headerPadding: '0px 20px 0px 20px',
				header: 'The tiles below best characterize me as a developer. Hover over them to learn more!',
			}));
		}
	}
	render() {
		return (
			<div className='fullscreen vertical-center-container' style={this.state.style}>
				<CSSTransition appear classNames="fadeHeader" timeout={1800} in={this.state.mounted}>
					<p className="tile-container-header" style={{ padding: this.state.headerPadding }}>
						{this.state.header}
					</p>
				</CSSTransition>
				<TileContainer>
					<DimTile name='Resume' icon='file' color='orange' message='Click here to view a PDF version of my resume' to={'/resume.pdf'}/>
					<DimTile name='LinkedIn' icon='linkedin' color='rgba(72, 117, 180)' message='Click here to view my LinkedIn' to='https://www.linkedin.com/in/derek-xu-06814177/'/>
					<DimTile name='Github' icon='github' color='rgba(110, 84, 148)' message='Click here to view my Github profile' to='https://github.com/PlumSauc3'/>
					<DimTile name='React/Redux' icon='react' color='rgba(5, 165, 209)' message="Building beautiful interactive webapps with React and Redux is what I am most comfortable with. Check out my resume and projects to see what I've accomplished!" />
					<DimTile name='Python' icon='python' color='rgba(43, 91, 132, 80)' message="I have experience building backends with Python using Flask and Django. I am also comfortable doing data analysis and manipulation with NumPy, SciPy and Pandas." />
					<DimTile name='SQL' icon='database' color='rgba(209, 79, 82)' message='I am fluent in SQL and can confidently manage relational databases.' />
				</TileContainer>
			</div>
		)
	}
}
