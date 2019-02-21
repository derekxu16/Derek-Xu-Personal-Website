import React from 'react';

import DimTile from '../components/DimTile';
import HomeButton from '../components/HomeButton';
import TileContainer from '../components/TileContainer';

export default function Resume() {
	return (
		<div className='fullscreen' style={{ display: 'flex', justifyContent: 'center' }}>
			<HomeButton />
			<TileContainer>
				<DimTile name='Resume' icon='file' color='orange' message='Click here to view a PDF version of my resume' to='/resume.pdf'/>
				<DimTile name='LinkedIn' icon='linkedin' color='rgba(72, 117, 180)' message='Click here to view my LinkedIn' to='https://www.linkedin.com/in/derek-xu-06814177/'/>
				<DimTile name='Github' icon='github' color='rgba(110, 84, 148)' message='Click here to view my Github profile' to='https://github.com/derekxu16'/>
				<DimTile name='React/Redux' icon='react' color='rgba(5, 165, 209)' message="Building beautiful interactive webapps with React and Redux is what I am most comfortable with. Check out my resume and projects to see what I've accomplished!" />
				<DimTile name='Python' icon='python' color='rgba(43, 91, 132, 80)' message="I have experience building backends with Python using Flask and Django. I am also comfortable doing data analysis and manipulation with NumPy, SciPy and Pandas." />
				<DimTile name='SQL' icon='database' color='rgba(209, 79, 82)' message='I am fluent in SQL and can confidently manage relational databases.' />
			</TileContainer>
		</div>
	);
}
