window.addEventListener("load", function () {
    var sendButton = document.querySelector("div.send-button-container input.send-button");
    var optOutButton = document.querySelector("input.subtle-button");
    var emailCheckbox = document.querySelector("input.email-checkbox");
    var emailInput = document.querySelector("input#email");

    var nameInput = document.querySelector("input#name");
    var startButton = document.querySelector("form.form-group-inner .send-button");

    nameInput.disabled = true;
    startButton.disabled = true;
    emailCheckbox.checked = true;

    sendButton.addEventListener("click", emailButtonsClicked);
    optOutButton.addEventListener("click", emailButtonsClicked);

    function emailButtonsClicked () {
        sendButton.disabled = true;
        optOutButton.disabled = true;
        emailCheckbox.disabled = true;
        emailInput.disabled = true;

        nameInput.disabled = false;
        startButton.disabled = false;
    }
});