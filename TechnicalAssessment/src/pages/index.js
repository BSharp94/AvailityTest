import React, { useState } from "react"
import './index.css'

import SideNavigation from './../components/side-navigation/side-navigation'
import Question1 from './../components/questions/question1'
import Question2 from './../components/questions/question2'
import Question3 from './../components/questions/question3'
import Question4 from './../components/questions/question4'
import Question5 from './../components/questions/question5'
import Question6 from './../components/questions/question6'
import Question7 from './../components/questions/question7'
import './../components/questions/question.css'

const IndexPage = () => {
  
  const [pageStructure, setPageStructure] = useState([
    {
      "title": "Question 1",
      "id": "question1",
    },
    {
      "title": "Question 2",
      "id": "question2"
    },
    {
      "title": "Question 3",
      "id": "question3",
    },
    {
      "title": "Question 4",
      "id": "question4"
    },
    {
      "title": "Question 5",
      "id": "question5",
    },
    {
      "title": "Question 6",
      "id": "question6"
    },
    {
      "title": "Question 7",
      "id": "question7",
      "children": [
        {
          "title": "Question 7a",
          "id": "question7a"
        },
        {
          "title": "Question 7b",
          "id": "question7b"
        }
      ]
    }
  ]);

  // only updates the first level
  function updateSectionVisibility(sectionId, value) {
    let newPageStructure = pageStructure;
    newPageStructure.forEach((ps, idx) =>{
      if (ps.id === sectionId) {
        newPageStructure[idx].active = value
      }
    })
    setPageStructure(newPageStructure);
  }

  
  return(

    <div id = "index-page__panel">
      <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>

      <SideNavigation pageStructure = {pageStructure} />

      <div id = "question-content__panel">
        <h1>Availity Technical Assessment</h1>
        <Question1 updateNavigation = {updateSectionVisibility} />
        <Question2 updateNavigation = {updateSectionVisibility} />
        <Question3 updateNavigation = {updateSectionVisibility} />
        <Question4 updateNavigation = {updateSectionVisibility} />
        <Question5 updateNavigation = {updateSectionVisibility} />
        <Question6 updateNavigation = {updateSectionVisibility} />
        <Question7 updateNavigation = {updateSectionVisibility} />
      </div>

    </div>
  )
}

function pageSection(pageStructure, depth) {

}


export default IndexPage
