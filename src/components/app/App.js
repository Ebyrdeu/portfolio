import {Button, Container, Link, Typography} from "@mui/material";
const MainColor = '#43C6AC'

function App() {

  return (
    <div className="App">
     <Container>
        <div style={{marginTop: 50, display: "flex", flexDirection: "column"}}>

            <Typography variant='h2' style={{color: 'white'}} >LANDING PAGES</Typography>
            <Link style={{textDecoration:'none'}} href="https://ebyrdeu.github.io/model_company/">
                <Button  style={{color: MainColor, fontSize: 20}}>Model Company</Button>
            </Link>
            <Link style={{textDecoration:'none'}} href="https://ebyrdeu.github.io/construction_company/">
                <Button  style={{color: MainColor, fontSize: 20}}>Construction Company</Button>
            </Link>
            <Link style={{textDecoration:'none'}} href="https://ebyrdeu.github.io/kung-food/">
                <Button  style={{color: MainColor, fontSize: 20}}>Kung Food</Button>
            </Link>
            <Link style={{textDecoration:'none'}} href="https://ebyrdeu.github.io/almi/">
                <Button  style={{color: MainColor, fontSize: 20}}>Almi</Button>
            </Link>
            <Link style={{textDecoration:'none'}} href="https://practical-snyder-d8195e.netlify.app/">
                <Button  style={{color: MainColor, fontSize: 20}}>Almi (alt version)</Button>
            </Link>

            <Typography variant='h2' style={{color: 'white'}} >MULTI PAGE WEBSITES</Typography>
            <Link style={{textDecoration:'none'}} href="https://ebyrdeu.github.io/NovelWebSite/">
                <Button  style={{color: MainColor, fontSize: 20}}>Novel Simple Site</Button>
            </Link>


            <Typography variant='h2' style={{color: 'white'}} >GAMES</Typography>
            <Link style={{textDecoration:'none'}} href="https://ebyrdeu.github.io/SnakeJs/">
                <Button  style={{color: MainColor, fontSize: 20}}>Snake</Button>
            </Link>
            <Link style={{textDecoration:'none'}} href="https://ebyrdeu.github.io/Tetris/">
                <Button  style={{color: MainColor, fontSize: 20}}>OOP Tetris</Button>
            </Link>
            <Link style={{textDecoration:'none'}} href="https://ebyrdeu.github.io/quiz-spel/">
                <Button  style={{color: MainColor, fontSize: 20}}>Quiz</Button>
            </Link>


            <Typography variant='h2' style={{color: 'white'}} >REACT SPA</Typography>
            <Link style={{textDecoration:'none'}} href="https://new-marve-spa.herokuapp.com/">
                <Button  style={{color: MainColor, fontSize: 20}}>MarvelAPI</Button>
            </Link>
            <Link style={{textDecoration:'none'}} href="https://incandescent-crisp-220a71.netlify.app/">
                <Button  style={{color: MainColor, fontSize: 20}}>Swapi</Button>
            </Link>




        </div>
     </Container>
    </div>
  );
}

export default App;
