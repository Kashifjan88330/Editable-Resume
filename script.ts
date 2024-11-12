const nameField = document.getElementById("name") as HTMLInputElement;
const emailField = document.getElementById("email") as HTMLInputElement;
const phoneField = document.getElementById("phone") as HTMLInputElement;
const addressField = document.getElementById("address") as HTMLInputElement;
const educationField = document.getElementById("education") as HTMLInputElement;
const gradYearField = document.getElementById("gradYear") as HTMLInputElement;
const companyField = document.getElementById("company") as HTMLInputElement;
const positionField = document.getElementById("position") as HTMLInputElement;
const yearsField = document.getElementById("years") as HTMLInputElement;
const skillsField = document.getElementById("skills") as HTMLTextAreaElement;
const generateCVButton = document.getElementById("generateCVBtn") as HTMLButtonElement;
const resumeSection = document.getElementById("resumeSection") as HTMLDivElement;
const resumeName = document.getElementById("resumeName") as HTMLHeadingElement;
const resumeEmail = document.getElementById("resumeEmail") as HTMLParagraphElement;
const resumePhone = document.getElementById("resumePhone") as HTMLParagraphElement;
const resumeAddress = document.getElementById("resumeAddress") as HTMLParagraphElement;
const resumeEducation = document.getElementById("resumeEducation") as HTMLParagraphElement;
const resumeGradYear = document.getElementById("resumeGradYear") as HTMLParagraphElement;
const resumeWork = document.getElementById("resumeWork") as HTMLParagraphElement;
const resumeSkills = document.getElementById("resumeSkills") as HTMLParagraphElement;

const generateResume = () => {
    const name = nameField.value;
    const email = emailField.value;
    const phone = phoneField.value || "Not Provided";
    const address = addressField.value || "Not Provided";
    const education = educationField.value;
    const gradYear = gradYearField.value;
    const company = companyField.value;
    const position = positionField.value;
    const years = yearsField.value;
    const skills = skillsField.value;

    resumeName.textContent = name || "Your Full Name";
    resumeEmail.textContent = email ? `Email: ${email}` : "Email: Not Provided";
    resumePhone.textContent = `Phone: ${phone}`;
    resumeAddress.textContent = `Address: ${address}`;

    resumeEducation.textContent = `Degree/School: ${education}`;
    resumeGradYear.textContent = `Graduation Year: ${gradYear}`;

    resumeWork.textContent = `Company: ${company}, Position: ${position}, Years Worked: ${years}`;
    resumeSkills.textContent = skills ? `Skills: ${skills}` : "Skills: Not Provided";

    resumeSection.style.display = "block";
};

generateCVButton.addEventListener("click", generateResume);

const makeEditable = (element: HTMLElement) => {
    element.addEventListener("click", () => {
        const currentText = element.textContent || "";
        const input = document.createElement("input");
        input.type = "text";
        input.value = currentText;
        element.innerHTML = "";
        element.appendChild(input);

        input.addEventListener("blur", () => {
            element.innerHTML = input.value || currentText;
        });

        input.addEventListener("keydown", (event) => {
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
