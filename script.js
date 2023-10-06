// script.js

const nameInputs = document.querySelectorAll(".name-input");
const signUpButtons = document.querySelectorAll(".sign-up-button");
const statusList = document.getElementById("status-list");

signUpButtons.forEach(button => {
    button.addEventListener("click", () => {
        const teamName = button.getAttribute("data-team");
        const nameInput = button.previousElementSibling;

        const userName = nameInput.value.trim();

        if (userName === "") {
            alert("Oops! Please enter your name");
        } else {
            const listItem = document.createElement("li");
            listItem.textContent = `${userName} joined from ${teamName}`;
            statusList.appendChild(listItem);

            // Clear the input field
            nameInput.value = "";
        }
    });
});
