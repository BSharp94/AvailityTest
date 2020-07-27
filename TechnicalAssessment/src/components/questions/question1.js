import React from 'react'


function Question1() {

    return (
        <section id = "question1" className = "question__panel">
            <h2>Question 1</h2>

            <i><b>Tell me about your proudest professional achievement. It can be a personal or school project.</b></i>

            <p>The proudest moment for me happened when I was working at Forcura as a Software Engineer. It was the start of 2019 and the leadership team had an ambitious set of yearly goals for our development team. The largest of these goals was to redesign the user interface for the company's flagship web application. The application was extensive and consisted of just under 50 pages of heavily data driven forms, tables, and modals. The legacy application had been built with server-side rendering with scattered pieces of javascript. Our team took a daring leap and decided to build the new design using React powered by a headless api.</p>

            <p>This project had multiple challenges from the start:</p>
            <ul>
                <li>Since the new application impacted customer training, we only had ~3 months to complete the enitre redesign.</li>
                <li>We only had 4 web developers on the team. 2 members had no experience with react prior to starting the project.</li>
                <li>The project was two large to write out tasks in Jira or to attempt to follow sprint schedules. Instead we used a shared spreadsheet with a burndown chart.</li>
            </ul>

            <p>This project was massive to say the least and it challenged even the best devlopers on our team. After 3 months and multiple weekends and all nighters, we managed to deliver the redesign to production. Customers started to message in right away saying that the new application was faster, easier to understand, and more professional looking. Additionally, due to use caching more information on the client side, we reuced the total wait time on the database by 30%. a couple months later, our efforts were rewarded with our software becoming a finalist in the 2019 SaaS Awards Program (<a href = "https://www.forcura.com/news/forcura-recognized-2019-best-ui-ux-design-saas">Forcura Recognized In 2019 Best UI/UX Design In Saas Awards</a>)</p>

        </section>
    )
}

export default Question1;