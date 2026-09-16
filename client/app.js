const button = document.getElementById("checkButton");
const result = document.getElementById("result");

button.addEventListener("click", async () => {
    result.textContent = "Checking server...";

    try {
        const response = await fetch("http://localhost:3000/api/health");
        const data = await response.json();

        result.textContent = data.message;
    } catch (error) {
        result.textContent = "Server is not running yet.";
    }
});