// Assuming data is fetched from the database
document.addEventListener("DOMContentLoaded", () => {
    const studentData = [
        { name: "John Doe", rollno: "1001", college: "SMIC", branch: "CSE", phone: "1234567890", email: "john@example.com" },
        { name: "Jane Smith", rollno: "1002", college: "SMED", branch: "AIML", phone: "0987654321", email: "jane@example.com" },
        { name: "Michael Lee", rollno: "1003", college: "SMGIOH", branch: "AIDS", phone: "1122334455", email: "michael@example.com" },
        // More data...
    ];

    populateTable(studentData);
});

// Function to populate the student table with data
function populateTable(data) {
    const tableBody = document.querySelector("#studentTable tbody");
    tableBody.innerHTML = ""; // Clear any existing rows

    data.forEach((student) => {
        const row = `
            <tr>
                <td>${student.name}</td>
                <td>${student.rollno}</td>
                <td>${student.college}</td>
                <td>${student.branch}</td>
                <td>${student.phone}</td>
                <td>${student.email}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}
