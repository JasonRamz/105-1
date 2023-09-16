$(document).ready(function() {
    // Event listener for form submission
    $("#registrationForm").submit(function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get values from the form
        var email = $("#email").val();
        var password = $("#password").val();
        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        var age = $("#age").val();
        var grade101 = $("#grade101").val();
        var grade102 = $("#grade102").val();
        var grade103 = $("#grade103").val();

        // Create a User object using Object Constructor technique
        function User(email, password, firstName, lastName, age, grade101, grade102, grade103) {
            this.email = email;
            this.password = password;
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.grades = {
                "Grade 101": grade101,
                "Grade 102": grade102,
                "Grade 103": grade103
            };
        }
        // Clear the form after registration
        $("#registrationForm")[0].reset();
    });
});