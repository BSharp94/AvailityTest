import React from 'react'


function Question2() {

    return (
        <section id = "question2" className = "question__panel">
            <h2>Question 2</h2>

            <i><b>Tell me a about a book, blog, article or GitHub repo you read or liked recently, and why you like it and why you
should recommend I do the same.</b></i>

            <br />

            <img  src={ require("./../../images/nosql.jpg")} style = {{"float": "left", "width": "200px", "height": "auto", "margin": "3rem"}}/>
            <p>
              Recently, I read the the book, "NoSQL Distilled, A Brief Guide to the Emerging World of Polyglot Persistence". For me, this book was a perfect guide to understanding some of the knowledge gaps I had with non-relationship databases. I decided to read this because I was investigating the potential use of AWS's Dynamo DB for a side-project. I had familiarity with Document NoSQL databases (Hive, Elastic) but was confused on how DynamoDB (key-value storage) related to these.
            </p>

            <p>
              The book dives into a lot of the details about the fundamental storage of the 4 different types of NoSQL databases (key-value, Column-family, document, and graph). The biggest take away that I got from it was the tradeoff between the flexibility and performance of these databases. For example, relational databases are extremely flexible and optimal for most transactional systems but have considerable limits for volume and query performace when trying to query over several tables. On the opposite side of the spectrum, a KV database like redis allows amazing performance but is restricted in the flexibility when adding new properties to objects and adding new indexes.
            </p>

        </section>
    )
}

export default Question2;