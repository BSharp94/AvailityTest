using System;
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
                throw new Exception("Test 1 - Failed\n\texpected: true\n\trecieved: false\n\ttext: " + testOneString); 
            else
                Console.WriteLine("Test 1 - Passed");

            // Test 2
            const string testTwoString = "((a + b )";
            if (checkParentheses(testTwoString)) 
                throw new Exception("Test 2 - Failed\n\texpected: false\n\trecieved: true\n\ttext: " + testTwoString); 
            else
                Console.WriteLine("Test 2 - Passed");

            // Test 3
            const string testThreeString = ")((a + b ))";
            if (checkParentheses(testThreeString)) 
                throw new Exception("Test 3 - Failed\n\texpected: false\n\trecieved: true\n\ttext: " + testThreeString); 
            else
                Console.WriteLine("Test 3 - Passed");

        }
    }
}
