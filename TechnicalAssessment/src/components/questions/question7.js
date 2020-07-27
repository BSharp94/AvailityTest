import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'

function Question7() {

    let sqlAnswer1 = `SELECT 
    c.FirstName,
    c.LastName
FROM customer c
WHERE 
    c.LastName like 'S%'
ORDER BY c.LastName DESC;`

    let sqlAnswer2 = `SELECT
    c.CustID,
    COALESCE(SUM(ol.cost), 0) AS OrderTotal
FROM customer c

    LEFT JOIN Order o
        ON c.CustID = o.CustomerID
            AND o.OrderDate > DATEADD(month, -6, GETUTCDATE()) --less than 6 months old

    LEFT JOIN OrderLine ol
        ON o.OrderID = ol.OrdID

GROUP BY c.CustID
`

    let sqlAnswer3 = `SELECT
    c.CustID,
    COALESCE(SUM(ol.cost), 0) AS OrderTotal
FROM customer c

    LEFT JOIN Order o
        ON c.CustID = o.CustomerID
            AND o.OrderDate > DATEADD(month, -6, GETUTCDATE()) --less than 6 months old

    LEFT JOIN OrderLine ol
        ON o.OrderID = ol.OrdID

GROUP BY c.CustID
HAVING SUM(ol.cost) > 100 AND SUM(ol.cost) < 500
`

    return (
        <section id = "question7" className = "question__panel">
          <h2>Question 7</h2>

          <i><b>This database diagram is to be used for the questions that follow:</b></i>
            

            <section id = "question7a">
                <p>
                    Write a SQL query that will produce a reverse-sorted list (alphabetically by name) of customers (first and last names) whose last name begins with the letter ‘S.’
                </p>
            </section>

            <SyntaxHighlighter language = 'sql' style = {atomOneLight} showLineNumbers = {true}>
                { sqlAnswer1 }
            </SyntaxHighlighter>

            <section id = "question7b">
                <p>
                    Write a SQL query that will show the total value of all orders each customer has placed in the past six months. Any customer without any orders should show a $0 value.
                </p>
            </section>

            <SyntaxHighlighter language = 'sql' style = {atomOneLight} showLineNumbers = {true}>
                { sqlAnswer2 }
            </SyntaxHighlighter>


            <section id = "question7c">
                <p>
                    Amend the query from the previous question to only show those customers who have a total order value of more than $100 and less than $500 in the past six months.
                </p>
            </section>

            <SyntaxHighlighter language = 'sql' style = {atomOneLight} showLineNumbers = {true}>
                { sqlAnswer3 }
            </SyntaxHighlighter>
        </section>

    )
}

export default Question7;