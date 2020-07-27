import React from 'react'
import { useInView } from 'react-intersection-observer'
import VisibilityTracker from './../visibility-tracker'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'

function Question4({updateNavigation}) {

    let fileLocation = "{project_directory}/CSharpCode/question4/Program.cs"

    let codeSolution = `using System;
using System.Collections;

namespace question4
{
    class Program
    {

        static bool checkParentheses(string inputProgram) {
            Stack parenthesesStack = new Stack();

            foreach (char c in inputProgram) {
                if (c.Equals('(')) {
                    parenthesesStack.Push(')');
                } else if (c.Equals(')')) {
                    
                    // if their is a closing parentheses without a opening one first, throw false
                    if (parenthesesStack.Count == 0)
                        return false;
                    
                    parenthesesStack.Pop();
                }
            }

            return (parenthesesStack.Count == 0);
        }


        static void Main(string[] args)
        {
            
            // Test 1
            const string testOneString = "((a + b ))";
            if (!checkParentheses(testOneString)) 
                throw new Exception("Test 1 - Failed expected: true recieved: false text: " + testOneString); 
            else
                Console.WriteLine("Test 1 - Passed");

            // Test 2
            const string testTwoString = "((a + b )";
            if (checkParentheses(testTwoString)) 
                throw new Exception("Test 2 - Failed expected: false recieved: true text: " + testTwoString); 
            else
                Console.WriteLine("Test 2 - Passed");

            // Test 3
            const string testThreeString = ")((a + b ))";
            if (checkParentheses(testThreeString)) 
                throw new Exception("Test 3 - Failed expected: false recieved: true text: " + testThreeString); 
            else
                Console.WriteLine("Test 3 - Passed");

        }
    }
}`


    return (
      <VisibilityTracker onVisible = {(visible) => updateNavigation("question3", visible)}>

        <section id = "question3" className = "question__panel">
            <h2>Question 4</h2>


            <i><b>Coding exercise (using C#): You are tasked to write a checker that validates the parentheses of a LISP code.
    Write a program which takes in a string as an input and returns true if all the parentheses in the string are
    properly closed and nested.</b></i>

            <p>Ive added the code below. You can also the actual file in the following location:
                <a href = "#">
                    {fileLocation}
                </a>    
            </p>

            <SyntaxHighlighter language = 'csharp' style = {atomOneLight} showLineNumbers = {true}>
            
                { codeSolution }
            </SyntaxHighlighter>
        </section>
      </VisibilityTracker>

    )
}

export default Question4;