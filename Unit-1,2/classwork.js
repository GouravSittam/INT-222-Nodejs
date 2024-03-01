function fetchAndDisplayDetails() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var userDetailsTable = "<h3>User Details</h3><table>";
    userDetailsTable += "<tr><th>Attribute</th><th>Value</th></tr>";
    userDetailsTable += "<tr><td>First Name</td><td>" + firstName + "</td></tr>";
    userDetailsTable += "<tr><td>Last Name</td><td>" + lastName + "</td></tr>";
    userDetailsTable += "<tr><td>Email</td><td>" + email + "</td></tr>";
    userDetailsTable += "<tr><td>Age</td><td>" + age + "</td></tr>";
    userDetailsTable += "</table>";
    document.getElementById("userDetailsTable").innerHTML = userDetailsTable;
}