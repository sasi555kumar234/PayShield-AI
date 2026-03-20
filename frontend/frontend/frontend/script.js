let selected = "";

function selectPlan(plan) {
    selected = plan;
    document.getElementById("selectedPlan").innerText =
        "Selected Plan: " + plan;
}

function triggerEvent() {
    if (selected === "") {
        alert("Please select a plan first!");
        return;
    }

    document.getElementById("result").innerText =
        "✅ Heavy Rain Detected → Claim Triggered → ₹500 Credited!";
}
