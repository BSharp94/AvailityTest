import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'


function Question6() {

  let fileLocation = "{project_directory}/CSharpCode/question6/Program.cs"

  let codeSolution = `using System;
  using System.IO;
  using System.Collections.Generic;
  using System.Linq;
  
  namespace question6
  {
      class Program
      {
          static void Main(string[] args)
          {
              // Test 1
              EnrollmentFileParser parser = new EnrollmentFileParser();
              parser.ParseEnrollmentCSV("/Users/briansharp/Dev/enrollment1.csv");
          }
      }
  
  
      class EnrollmentFileParser
      {
  
          Dictionary<string, CompanyDictory> companyDictionary = new Dictionary<string, CompanyDictory>();
  
          public void ParseEnrollmentCSV(string fileName) {
              // Load all the company enrollments then iterate over them and write them back to disk
              LoadEnrollmentCSV(fileName);
              WriteEnrollmentCSVFiles(fileName);
  
          }
  
          private void LoadEnrollmentCSV(string fileName) {
              using (var reader = new StreamReader(fileName)) {
                  while (!reader.EndOfStream) {
                      var line = reader.ReadLine();
                      LoadEnrollmentCSVLine(line);
                  }
              }
          }
  
          private void LoadEnrollmentCSVLine(string line) {
              var values = line.Split(',');
  
              string userId = values[0];
              string fullName = values[1];
              int version = Int32.Parse(values[2]);
              string insuranceCompany = values[3];
  
              // Create new User object and add to 
              User newUser = new User(userId, fullName, version, insuranceCompany);
              if (companyDictionary.ContainsKey(insuranceCompany)) {
                  companyDictionary[insuranceCompany].AddUser(newUser);
              } else {
                  CompanyDictory newCompany = new CompanyDictory();
                  newCompany.AddUser(newUser);
                  companyDictionary.Add(insuranceCompany, newCompany);
              }
          }
  
          private void WriteEnrollmentCSVFiles(string fileName) {
  
              foreach(KeyValuePair<string, CompanyDictory> entry in companyDictionary) 
              {
                  IEnumerable<User> users = entry.Value.GetUserArray();
                  string csvOutput = String.Join("/n", users.Select(x => x.ToCSVFormat())); // should be forward slash but I cant escape it in React
  
                  string newFileName = Path.GetDirectoryName(fileName) + $"/{entry.Key}.csv";
                  using(System.IO.StreamWriter file = new System.IO.StreamWriter(newFileName, true))
                  {
                      file.WriteLine(csvOutput);
                  }
              }
          }
  
      }
  
      class CompanyDictory {
  
          Dictionary<string, User> userDictonary = new Dictionary<string, User>();
  
          public void AddUser(User user) {
              if (userDictonary.ContainsKey(user.userId)) {
                  // Check for existing user and compare versions
                  User existingUser = userDictonary[user.userId];
                  if (existingUser.version > user.version) {
                      return;
                  } else {
                      userDictonary.Remove(user.userId);
                      userDictonary.Add(user.userId, user);
                  }
  
              } else {
                  userDictonary.Add(user.userId, user);
              }
          }
  
          public IEnumerable<User> GetUserArray() {
              return userDictonary.Values.ToList().OrderBy(x => x.fullName);
          }
      }
  
      class User
      {
          public string userId;
          public string fullName;
          public int version;
          public string insuranceCompany;
  
          public User(string userId, string fullName, int version, string insuranceCompany) {
              this.userId = userId;
              this.fullName = fullName;
              this.version = version;
              this.insuranceCompany = insuranceCompany;
          }
  
          public string ToCSVFormat() {
              return $"{userId},{fullName},{version},{insuranceCompany}";
          }
      }
  }
  `
  
  let testFile = `1,Bob Hope,1,Company 1
2,Jane Smith,1,Company 2
3,John Doe,1,Company 1
1,Bob Hope,2,Company 1
4,Jeff Smith,2,Company 3
4,Jeff Smith Older,1,Company 3`

    return (
        <section id = "question6" className = "question__panel">
          <h2>Question 6</h2>

          <i><b>Coding exercise (using C#): Availity receives enrollment files from various benefits management and enrollment
solutions (I.e. HR platforms, payroll platforms).  Most of these files are typically in EDI format.  However, there
are some files in CSV format.  For the files in CSV format, write a program that will read the content of the file
and separate enrollees by insurance company in its own file. Additionally, sort the contents of each file by last
and first name (ascending).  Lastly, if there are duplicate User Ids for the same Insurance Company, then only
the record with the highest version should be included. The following data points are included in the file:</b></i>
            <ul>
                <li>User Id (string)</li>
                <li>First and Last Name (string)</li>
                <li>Version (integer)</li>
                <li>Insurance Company (string</li>
            </ul>
          
            <p>Ive added the code below. You can also the actual file in the following location:
                <a href = "https://github.com/BSharp94/AvailityTest/blob/master/CSharpCode/question6/Program.cs">
                    {fileLocation}
                </a>    
            </p>

            <SyntaxHighlighter language = 'csharp' style = {atomOneLight} showLineNumbers = {true}>
            
                { codeSolution }
            </SyntaxHighlighter>

            <p>This is the test file I was using for test the different scenarios.</p>

            <SyntaxHighlighter language = 'text' style = {atomOneLight} showLineNumbers = {true}>
            
                { testFile }
            </SyntaxHighlighter>
        </section>

    )
}

export default Question6;