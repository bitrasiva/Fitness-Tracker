document.getElementById('workout-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const workoutType = document.getElementById('workout-type').value;
    const caloriesBurned = document.getElementById('calories-burned').value;
    const stepsTaken = document.getElementById('steps-taken').value;

    const workoutItem = document.createElement('li');
    workoutItem.textContent = `Workout Type: ${workoutType}, Calories Burned: ${caloriesBurned}, Steps Taken: ${stepsTaken}`;

    document.getElementById('workout-list').appendChild(workoutItem);

    document.getElementById('workout-form').reset();
});
// Store workout data in localStorage
function storeWorkoutData(workoutType, caloriesBurned, stepsTaken) {
    const workoutData = {
        workoutType,
        caloriesBurned,
        stepsTaken
    };

    let workoutList = JSON.parse(localStorage.getItem('workoutList')) || [];
    workoutList.push(workoutData);
    localStorage.setItem('workoutList', JSON.stringify(workoutList));
}

