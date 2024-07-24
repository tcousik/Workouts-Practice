import { useState } from 'react'

const WorkoutForm = () => {
    const [title, setTitle] = useState('')
    const [sets, setSets] = useState('')
    const [reps, setReps] = useState('')
    const [weight, setWeight] = useState('')
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // if (!user) {
        //   setError("You must be logged in");
        //   return;
        // }

        const workout = { title, weight, sets, reps };

        const response = await fetch(
            "http://localhost:4000/workouts",
            {
                method: "POST",
                body: JSON.stringify(workout),
                headers: {
                    "Content-Type": "application/json",
                    // "Authorization": `Bearer ${user.token}`,
                },
            }
        );

        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
            // setEmptyFields(json.emptyFields || []);
            // setErrorFields(json.errorFields || []);
        } else {
            setError(null);
            setTitle("");
            setWeight("");
            setSets("");
            setReps("");
            // setEmptyFields([]);
            // setErrorFields([]);
            // dispatch({ type: "CREATE_WORKOUT", payload: json });
        }
    };

    return (
        <form
            className={"create"}
            onSubmit={handleSubmit}
        >
            <h3
                style={{
                    textAlign: "center",
                    fontSize: "30px",
                    marginTop: "0",
                    marginBottom: "10px",
                }}
            >
                Add a Workout
            </h3>

            <label htmlFor="title" style={{ fontSize: "20px" }}>
                Exercise Name:
            </label>
            <input
                style={{ fontSize: "15px" }}
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                id="title"
                name="title"
            // className={emptyFields.includes("title") ? "error" : ""}
            />
            <label htmlFor="weight" style={{ fontSize: "20px" }}>
                Weight (pounds):
            </label>
            <input
                style={{ fontSize: "15px" }}
                type="number"
                onChange={(e) => setWeight(e.target.value)}
                value={weight}
                id="weight"
                name="weight"
            // className={
            //     emptyFields.includes("weight") || errorFields.includes("weight")
            //         ? "error"
            //         : ""
            // }
            />
            <label htmlFor="sets" style={{ fontSize: "20px" }}>
                Number of Sets:
            </label>
            <input
                style={{ fontSize: "15px" }}
                type="number"
                onChange={(e) => setSets(e.target.value)}
                value={sets}
                id="sets"
                name="sets"
            // className={
            //     emptyFields.includes("sets") || errorFields.includes("sets")
            //         ? "error"
            //         : ""
            // }
            />
            <label htmlFor="reps" style={{ fontSize: "20px" }}>
                Number of Reps:
            </label>
            <input
                style={{ fontSize: "15px" }}
                type="number"
                onChange={(e) => setReps(e.target.value)}
                value={reps}
                id="reps"
                name="reps"
            // className={
            //     emptyFields.includes("reps") || errorFields.includes("reps")
            //         ? "error"
            //         : ""
            // }
            />
            <button>Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    );
}

export default WorkoutForm