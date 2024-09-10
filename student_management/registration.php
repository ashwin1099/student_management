<?php
// Database connection
$conn = new mysqli('localhost', 'root', '', 'student_management');

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $rollno = $_POST['rollno'];
    $college = $_POST['college'];
    $branch = $_POST['branch'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];

    // Insert data into the students table
    $sql = "INSERT INTO students (name, rollno, college, branch, phone, email) VALUES ('$name', '$rollno', '$college', '$branch', '$phone', '$email')";

    if ($conn->query($sql) === TRUE) {
        echo "Registration successful!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
