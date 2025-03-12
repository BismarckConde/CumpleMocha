function checkNickname() {
    const nickname = document.getElementById("nickname").value.toLowerCase();
    if (nickname === "mocha") {
        document.getElementById("login-screen").classList.add("hidden");
        document.getElementById("card-screen").classList.remove("hidden");
    } else {
        alert("Apodo incorrecto. Intenta de nuevo.");
    }
}

function showFlowers() {
    document.getElementById("card-screen").classList.add("hidden");
    document.getElementById("flowers-screen").classList.remove("hidden");

    const flowersContainer = document.getElementById("flowers");
    const flowers = ["🌹", "🌸", "🌺", "💐", "🌷", "🌼", "🌻"];

    for (let i = 0; i < 20; i++) {
        const flower = document.createElement("span");
        flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
        flowersContainer.appendChild(flower);
    }
}

