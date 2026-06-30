const form = document.getElementById("workoutForm");
const workoutList = document.getElementById("workoutList");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const duration = document.getElementById("duration").value;
    const notes = document.getElementById("notes").value;

    const workout = document.createElement("div");
    workout.classList.add("workout-card");

    workout.innerHTML = `
        <h3>${name}</h3>
        <p>Datum: ${date}</p>
        <p>Tid: ${duration} min</p>
        <p>${notes}</p>
        <button class="deleteBtn">Ta bort</button>
    `;

    workoutList.appendChild(workout);

    form.reset();

    workout.querySelector(".deleteBtn").addEventListener("click", function () {
        workout.remove();
    });
});