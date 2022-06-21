import {Box, Container, Typography} from "@mui/material";
import Bokeh from "../bokeh/Bokeh";
import Projects from "../projects/Projects";
import Contacts from "../contacts/Contacts";

function App() {

	return (
		<div className="App">
			<Bokeh/>
			<Container>
				<Box sx={{mt: 20,display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
					<Contacts/>
					<Projects/>
				</Box>
			</Container>
		</div>
	);
}

export default App;
