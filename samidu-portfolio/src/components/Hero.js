import { Container, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/system';

const HeroContainer = styled(Container)({
    paddingTop: '4rem',
    paddingBottom: '4rem',
    textAlign: 'center',
});

const Hero = () => {
    return(
        <HeroContainer id="home">
            <Typography variant="h2" component="h1" gutterBottom>
                Samidu Samarasinghe
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom color="textSecondary">
                Software Engineering Student | Passionate About Backend Development & Embedded Systems
            </Typography>
            <Box mt={3}>
                <Button variant="contained" color="primary" href="#projects" size="large" sx={{mr: 2}}>
                    View My Projects
                </Button>
                <Button variant="outlined" color="primary" href="#contact" size="large">
                    Contact Me
                </Button>
            </Box>
        </HeroContainer>
    );
};

export default Hero;