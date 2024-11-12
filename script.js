var nameField = document.getElementById("name");
var emailField = document.getElementById("email");
var phoneField = document.getElementById("phone");
var addressField = document.getElementById("address");
var educationField = document.getElementById("education");
var gradYearField = document.getElementById("gradYear");
var companyField = document.getElementById("company");
var positionField = document.getElementById("position");
var yearsField = document.getElementById("years");
var skillsField = document.getElementById("skills");
var generateCVButton = document.getElementById("generateCVBtn");
var resumeSection = document.getElementById("resumeSection");
var resumeName = document.getElementById("resumeName");
var resumeEmail = document.getElementById("resumeEmail");
var resumePhone = document.getElementById("resumePhone");
var resumeAddress = document.getElementById("resumeAddress");
var resumeEducation = document.getElementById("resumeEducation");
var resumeGradYear = document.getElementById("resumeGradYear");
var resumeWork = document.getElementById("resumeWork");
var resumeSkills = document.getElementById("resumeSkills");
var generateResume = function () {
    var name = nameField.value;
    var email = emailField.value;
    var phone = phoneField.value || "Not Provided";
    var address = addressField.value || "Not Provided";
    var education = educationField.value;
    var gradYear = gradYearField.value;
    var company = companyField.value;
    var position = positionField.value;
    var years = yearsField.value;
    var skills = skillsField.value;
    resumeName.textContent = name || "Your Full Name";
    resumeEmail.textContent = email ? "Email: ".concat(email) : "Email: Not Provided";
    resumePhone.textContent = "Phone: ".concat(phone);
    resumeAddress.textContent = "Address: ".concat(address);
    resumeEducation.textContent = "Degree/School: ".concat(education);
    resumeGradYear.textContent = "Graduation Year: ".concat(gradYear);
    resumeWork.textContent = "Company: ".concat(company, ", Position: ").concat(position, ", Years Worked: ").concat(years);
    resumeSkills.textContent = skills ? "Skills: ".concat(skills) : "Skills: Not Provided";
    resumeSection.style.display = "block";
};
generateCVButton.addEventListener("click", generateResume);
var makeEditable = function (element) {
    element.addEventListener("click", function () {
        var currentText = element.textContent || "";
        var input = document.createElement("input");
        input.type = "text";
        input.value = currentText;
        element.innerHTML = "";
        element.appendChild(input);
        input.addEventListener("blur", function () {
            element.innerHTML = input.value || currentText;
        });
        input.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                input.blur();
            }
        });
    });
};
makeEditable(resumeName);
makeEditable(resumeEmail);
makeEditable(resumePhone);
makeEditable(resumeAddress);
makeEditable(resumeEducation);
makeEditable(resumeGradYear);
makeEditable(resumeWork);
makeEditable(resumeSkills);
