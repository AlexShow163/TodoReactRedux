import React from 'react';
import Title from "./Components/Title/Title";
import { Container, Grid} from "@material-ui/core";
import Header from "./Components/Header/Header";




function App() {

  return (
    <div className="App">
        <Header/>
        <Container>
            <Grid
                container
                direction="column"
                alignItems='center'
                justify='center'
            >

                <Title/>
            </Grid>
        </Container>
    </div>
  );
}

export default App;
