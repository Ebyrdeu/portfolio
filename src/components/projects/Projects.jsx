import React, {useState} from 'react';
import {Box, Button, Tooltip, Typography, Link, Card} from "@mui/material";

const Projects = () => {
	// * Projects data
	const [data, setData] = useState([
		{
			projectType: 'LANDING PAGE',
			projectName: 'Model Company',
			projectPreview: './assets/preview/Landing_Page/Model_Company.jpeg',
			projectLink: 'https://ebyrdeu.github.io/model_company/',
		},
		{
			projectType: 'LANDING PAGE',
			projectName: 'Construction Company',
			projectPreview: './assets/preview/Landing_Page/Construction_Company.jpeg',
			projectLink: 'https://ebyrdeu.github.io/construction_company/',
		},
		{
			projectType: 'LANDING PAGE',
			projectName: 'Kung Food',
			projectPreview: './assets/preview/Landing_Page/Kung_Food.jpeg',
			projectLink: 'https://ebyrdeu.github.io/kung-food/',
		},
		{
			projectType: 'LANDING PAGE',
			projectName: 'Almi',
			projectPreview: './assets/preview/Landing_Page/Almi.jpeg',
			projectLink: 'https://ebyrdeu.github.io/almi/',
		},
		{
			projectType: 'LANDING PAGE',
			projectName: 'Almi (alt version)',
			projectPreview: './assets/preview/Landing_Page/Almi_Alt.jpeg',
			projectLink: 'https://practical-snyder-d8195e.netlify.app/',
		},
		{
			projectType: 'MULTI PAGE WEBSITE',
			projectName: 'Kekchik Ranobe',
			projectPreview: './assets/preview/Multi_Page_Website/Kekchik_Ranobe.jpeg',
			projectLink: 'https://ebyrdeu.github.io/NovelWebSite/',
		},
		{
			projectType: 'GAME',
			projectName: 'Snake JS',
			projectPreview: './assets/preview/Game/snakeJS.jpeg',
			projectLink: 'https://ebyrdeu.github.io/SnakeJs/',
		},
		{
			projectType: 'GAME',
			projectName: 'Tetris OOP',
			projectPreview: './assets/preview/Game/tetris.jpeg',
			projectLink: 'https://ebyrdeu.github.io/Tetris/',
		},
		{
			projectType: 'GAME',
			projectName: 'Quiz Spel',
			projectPreview: './assets/preview/Game/Quiz_Spel.jpeg',
			projectLink: 'https://ebyrdeu.github.io/quiz-spel/',
		},
		{
			projectType: 'GAME',
			projectName: 'Battleship',
			projectPreview: './assets/preview/Game/Battleship.jpeg',
			projectLink: 'https://voluble-griffin-b1e2a3.netlify.app/',
		},
		{
			projectType: 'REACT SPA',
			projectName: 'MarvelAPI',
			projectPreview: './assets/preview/React_SPA/Marvel_API.jpeg',
			projectLink: 'https://new-marve-spa.herokuapp.com/',
		},
		{
			projectType: 'REACT SPA',
			projectName: 'Swapi',
			projectPreview: './assets/preview/React_SPA/swapi_API.jpeg',
			projectLink: 'https://incandescent-crisp-220a71.netlify.app/',
		},
	]);

	// * Tooltip for project preview
	const PreviewMe = ({projectPreview, projectType, projectName, projectLink}) => <Link href={projectLink} color={'white'} target='_blank' underline="none">
		<Typography align={'center'} children={`${projectType} / ${projectName}`}/>
		<img style={{width: '100%', borderRadius: 5}} src={projectPreview} alt={projectName}/>
	</Link>

	// * Render Tooltip
	const items = data.map(({projectType, projectName, projectPreview, projectLink}, i) => {
		return <Tooltip
			placement={'right'}
			PopperProps={{sx: {"& .MuiTooltip-tooltip": {background: 'rgba(0,0,0,0.7)', color: "white",}}}}
			title={<PreviewMe projectType={projectType} projectName={projectName} projectPreview={projectPreview} projectLink={projectLink}/>}
			key={i}
			children={<Link href={projectLink} target='_blank' underline="none" children={<Button children={projectName}/>}/>}/>
	})

	// * Render
	return <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgba(29,36,52,0.8)', width: 400}} >
		<Typography variant={'h3'} color={'white'}>
			<span style={{color: '#2196f3'}}>Maxim </span>
			Khnykin
		</Typography>
		{items}
	</Box>

};

export default Projects;