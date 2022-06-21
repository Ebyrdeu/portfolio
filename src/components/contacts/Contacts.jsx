import React, {useState} from 'react';
import {Box, IconButton, Link, Tooltip} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Contacts = () => {
	return (
		<Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 1}}>
			<Tooltip placement={'left'} title="Email" PopperProps={{sx: {"& .MuiTooltip-tooltip": {background: 'rgba(0,0,0,0.7)', color: "white",}}}}>
				<Link href={'mailto:ebyrdeu.khnykin@gmail.com'} target={'_blank'} children={<IconButton children={<EmailIcon sx={{width: 36, height: 36}} color={'primary'}/>}/>}/>
			</Tooltip>
			<Tooltip placement={'left'} title="LinkedIn" PopperProps={{sx: {"& .MuiTooltip-tooltip": {background: 'rgba(0,0,0,0.7)', color: "white",}}}}>
				<Link href={'https://www.linkedin.com/in/maxim-khnykin-1b3370238/'} target={'_blank'} children={<IconButton children={<LinkedInIcon sx={{width: 36, height: 36}} color={'primary'} />}/>}/>
			</Tooltip>
			<Tooltip placement={'left'} title="Github" PopperProps={{sx: {"& .MuiTooltip-tooltip": {background: 'rgba(0,0,0,0.7)', color: "white",}}}}>
				<Link href={'https://github.com/Ebyrdeu'} target={'_blank'} children={<IconButton children={<GitHubIcon sx={{width: 36, height: 36}} color={'primary'}/>}/>}/>
			</Tooltip>
		</Box>
	);
};

export default Contacts;