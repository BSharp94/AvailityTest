import React from 'react'
import { useInView } from 'react-intersection-observer'
import VisibilityTracker from './../visibility-tracker'


function Question3({updateNavigation}) {

    return (
      <VisibilityTracker onVisible = {(visible) => updateNavigation("question3", visible)}>

        <section id = "question3" className = "question__panel">
          <h2>Question 3</h2>


          <i><b>If you were to describe to a 7-year old what Availity does, what would you say?</b></i>


          <p>
            Sometimes, managing all the payments when you go to the doctor can be like a game of telephone. The doctor wants money for the appointment, but he may not know who he has to ask and for how mow much. Its difficult for doctors to manage all the different people and money in the equation.
          </p>

          <p>
            Availity makes this easy by creating a one-stop shop for handling all the payments. Availty acts as a middle man between your insurance company, the doctor, and the patient. This is perfect because the goal of Availity is to allow the Doctor to spend more time with patients and less time managing all the payments.
          </p>


        </section>
      </VisibilityTracker>

    )
}

export default Question3;