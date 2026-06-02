// student info project

let studentName = prompt("Enter student name");
let collegeName = prompt("Enter college name");
let marks = prompt("Enter student marks");
let section = prompt("class/section");

document.write("Student Name: " + studentName + "<br>");
document.write("College Name: " + collegeName + "<br>");
document.write("Section: " + section + "<br>");
document.write("Marks: " + marks + "<br>");

if (marks >= 35) {
    document.write("Result: Passed");
} else {
    document.write("Result: Failed");
}
