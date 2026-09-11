// Get elements
const startBtn = document.getElementById("startBtn");
const nextPageBtn = document.getElementById("nextPageBtn");
const rabbit = document.querySelector(".rabbit");
const rabbitImg = document.querySelector(".rabbit-img");
const jackfruit = document.querySelector(".jackfruit");
const message = document.getElementById("message");

// Start animation when button is clicked
startBtn.addEventListener("click", function () {

    // Remove existing tombstone if any
    const existingTombstone = document.querySelector(".tombstone");
    if (existingTombstone) {
        existingTombstone.remove();
    }

    // Hide next page button
    nextPageBtn.style.display = "none";

    // Reset everything
    rabbit.style.left = "-100px";
    rabbit.style.transition = "none";
    rabbit.classList.remove("running");
    jackfruit.classList.remove("falling");
    rabbitImg.style.opacity = "1";
    rabbitImg.style.transform = "scale(1)";
    message.style.color = "darkgreen";

    message.innerHTML = "🐰 Rabbit is running toward the tree...";

    // Force browser to apply reset
    void rabbit.offsetWidth;

    // Start rabbit running animation
    rabbit.classList.add("running");

    // Animate rabbit running to the tree
    rabbit.style.transition = "left 3s ease-in-out";
    rabbit.style.left = "550px";

    // When rabbit reaches the tree (after 3 seconds)
    setTimeout(function () {

        // Stop running animation
        rabbit.classList.remove("running");

        message.innerHTML = "🍈 Jackfruit is falling on the rabbit!";

        // Start jackfruit falling
        jackfruit.classList.add("falling");

        // When jackfruit hits the rabbit (after 1.5 seconds)
        setTimeout(function () {

            // Hide rabbit (squished)
            rabbitImg.style.transition = "opacity 0.3s, transform 0.3s";
            rabbitImg.style.opacity = "0";
            rabbitImg.style.transform = "scale(0.5)";

            // Show RIP message
            message.innerHTML = "💀 <span style='font-size: 32px;'>R.I.P. Rabbit 🪦</span> 💀";
            message.style.color = "#8B0000";

            // Add RIP tombstone
            const tombstone = document.createElement("div");
            tombstone.className = "tombstone";
            tombstone.innerHTML = "R.I.P.<br>Rabbit";
            document.querySelector(".scene").appendChild(tombstone);

            // Show Next Page button
            nextPageBtn.style.display = "inline-block";

        }, 1500);

    }, 3000);

});

// Next Page button click handler
nextPageBtn.addEventListener("click", function () {
    window.location.href = "page2.html";
});


