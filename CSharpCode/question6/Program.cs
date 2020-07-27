using System;
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
                string csvOutput = String.Join("\n", users.Select(x => x.ToCSVFormat()));

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
