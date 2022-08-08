import React from "react";
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SportsHockeyIcon from '@mui/icons-material/SportsHockey';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

import "./footer.css"

function Footer() {
    const github = "https://github.com/SamWeninger";
    const linkedin = "https://www.linkedin.com/in/samuel-weninger/";
    const hockey = "https://www.eliteprospects.com/player/455776/sam-weninger";
    const message = "https://www.mcdonalds.com/us/en-us/full-menu.html";

    return (
        <div className="footer">
            <div className="footer-stack">
                <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={2}
                    >

                    <IconButton className="footer-button" aria-label="github" size="large">
                        <a href={github} target="_blank" rel="noreferrer">
                            <GitHubIcon 
                                fontSize="inherit" 
                                sx={{color: "white", borderRadius: "50%" }}
                            />
                        </a>
                    </IconButton>
                    <IconButton className="footer-button" aria-label="linkedin" size="large">
                        <a href={linkedin} target="_blank" rel="noreferrer">
                            <LinkedInIcon 
                                fontSize="inherit"
                                sx={{color: "white"}}
                             />
                        </a>
                    </IconButton>
                    <IconButton className="footer-button" aria-label="hockey" size="large">
                        <a href={hockey} target="_blank" rel="noreferrer">
                            <SportsHockeyIcon 
                                fontSize="inherit" 
                                sx={{color: "white"}}
                            />
                        </a>
                    </IconButton>
                    <IconButton className="footer-button" aria-label="message" size="large">
                        <a href={message} target="_blank" rel="noreferrer">
                            <ChatBubbleIcon 
                                fontSize="inherit" 
                                sx={{color: "white"}}
                            />
                        </a>
                    </IconButton>
                </Stack>  
                    
                {/* </Grid>   */}
                <footer>
                    <p>Developed by me!</p>
                    <p>Copyright &copy; 2022</p> 
                </footer>
            </div>
            
        </div>
    );
}

export default Footer;