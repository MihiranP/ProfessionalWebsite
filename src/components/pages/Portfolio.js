import React from 'react';
import Banner from '../Banner';
import CardItem from '../CardItem';

function Portfolio() {
    return (
        <>
            <Banner banner='banner-container2'/>
            <CardItem 
            header="My Portfolio"
            subheader="Here you'll find the projects that I have worked on. (make it look better)"
            text="1. This website!"
            text1="- Created using Reactjs; components written in javascript, html, and css."
            text2="- Deployed to give me a 'professional presence' on the internet and provide third parties with information about me"
            text3="2. NutriApp"
            text4="- An app that scans nutrition labels and gives you details on the ingredients (link devpost)"
            text5="- Made with React Native integrated with Google's vision api"
            text6="3. SpyKit Discord bot"
            text7="- A discord bot that allows you to 'Spy-Up' your server (link devpost)"
            text8="- Allows you to encrypt and decrypt messages"
            text9="(link github)"
            />
       </>
    );
}

export default Portfolio
