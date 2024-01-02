// Function to process applicant information
function processApplicant(applicant) {
  // Check for null values in the applicant information
  if (
    !applicant.firstName ||
    !applicant.lastName ||
    !applicant.age ||
    !applicant.testGrade ||
    !applicant.maritalStatus ||
    !applicant.gender
  ) {
    console.log("Application rejected, information not complete");
    return;
  }

  // Check the test grade
  if (applicant.testGrade < 6) {
    failedApplicants.push(applicant);
    console.log("You failed the test, Try again another time");
  } else {
    newEmployees.push(applicant);
    console.log("Congratulations! You got the job");
  }
}

let failedApplicants = [];
let newEmployees = [];

//Rejected Application:
let rejectedApplicant = {
  firstName: null,
  lastName: "Doe",
  age: 25,
  testGrade: 8,
  maritalStatus: "single",
  gender: "M",
};
processApplicant(rejectedApplicant);

//Failed Applicant:
let failedTestApplicant = {
  firstName: "John",
  lastName: "Smith",
  age: 30,
  testGrade: 4,
  maritalStatus: "married",
  gender: "F",
};
processApplicant(failedTestApplicant);

//Successful Applicant:
let successfulApplicant = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 28,
  testGrade: 9,
  maritalStatus: "single",
  gender: "F",
};
processApplicant(successfulApplicant);

// Display test results
console.log("Failed Applicants:", failedApplicants);
console.log("New Employees:", newEmployees);
