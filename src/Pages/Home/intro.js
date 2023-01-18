import React, { useState } from "react";
import searchImg from "../../assets/img/SearchAndStream.png"
import movieswipeImg from "../../assets/img/MovieSwipe.png"
import codeabreakImg from "../../assets/img/codeabreakImg.png"
import ReikiHealing from "../../assets/img/ReikiHealingSite.png"
import Apiary from "../../assets/img/ApiarysiteImg.png"
import Me from "../../assets/img/me.jpg"
import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function Intro() {
    return (
        <>
         
        <Box className="IntroBox">
        <section id="Intro">
              
                <div className="introContainer">
                    <div>
                <img src={Me} />
                </div>
                <div>
                
                <div className="introTextContainer">
                    <br></br>
                <h3 className="ourProducts"> Hello. I'm Will!</h3>
                <h3 className="ourProduct"> About Me</h3>
                <div class="productLine"></div>
                <p class="productText">  A New Jersey native with a knack for making things beautiful. With a certification from Rutgers, a degree in Human Services and a collaborative approach - I am equipped to make all your digital dreams a reality. Some of my hobbies include photography, farming, landscaping + more! Leaning in to these hobbies has ultimately inspired my career path of capturing the beauty in everything through a story-telling lens. I look forward to working with you to create the platform to tell your story.
                </p>
                <p class="productTextTwo">
                    <div className="productInfo">
                        <div className="productAwayFromImage">
                            <p className="productSmall">Name: Will Gehrke</p>
                            <p className="productSmall">Location: New York Metro Area</p>
                        </div>
                        <div>
                        <p className="productSmall">Age: 32</p>
                        <p className="productSmall">Freelance: Available</p>
                        </div>
                     </div>
                    
                </p>
                </div>
                </div>
              
                </div>
            </section>


            </Box>
        
      
          
        </>












    );
}

export default Intro;