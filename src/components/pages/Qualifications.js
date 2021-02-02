import React, {useState} from 'react'
import CardItem from '../CardItem'
import CardItem1 from '../CardItem1'
import { Document, Page } from 'react-pdf';
import pdf from './Resume3.0.pdf';

function Qualifications() {
    return (
        <>

            <CardItem1 
            header="My Qualifications"
            subheader="Below you will find my skills and technical abilities along with my resume attached"
            pdf={pdf}
            pdftext="Click here for my resume"
            text="As far as my programming languages go these are languages that I am proficient in:"
            li11="C++"
            li12="Python"
            li13="Java"
            text1="These are some of my technical skills:"
            li21="Unix (Proficient)"
            li22="React/React Native (beginner)"
            li23="Excel (Proficient)"
            li24="Jupyter Notebook (Proficient)"
            li25="Microsoft Office Suite (Proficient)"
            text2="My technical areas of interest are data science/analysis, artificial intelligence, game development, and robotics. (expand on this)"
            />
            

        </>
    );
}

export default Qualifications
