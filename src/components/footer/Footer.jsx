import React from "react";
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SportsHockeyIcon from '@mui/icons-material/SportsHockey';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

import "./footer.css"

function Footer(props) {
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
                        <a href={props.github} target="_blank" rel="noreferrer">
                            <GitHubIcon 
                                fontSize="inherit" 
                                sx={{color: "white", borderRadius: "50%" }}
                            />
                        </a>
                    </IconButton>
                    <IconButton className="footer-button" aria-label="linkedin" size="large">
                        <a href={props.linkedin} target="_blank" rel="noreferrer">
                            <LinkedInIcon 
                                fontSize="inherit"
                                sx={{color: "white"}}
                             />
                        </a>
                    </IconButton>
                    <IconButton className="footer-button" aria-label="hockey" size="large">
                        <a href={props.hockey} target="_blank" rel="noreferrer">
                            <SportsHockeyIcon 
                                fontSize="inherit" 
                                sx={{color: "white"}}
                            />
                        </a>
                    </IconButton>
                    <IconButton className="footer-button" aria-label="message" size="large">
                        <a href={props.message} target="_blank" rel="noreferrer">
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