const db = require("./models");

async function main() {
	console.log(await db.exercise.find({}))
	console.log(await db.workout.find({}))
	console.log(await db.exercise.findByName("Bench Press"))
	console.log(await db.exercise.findByType("cardio"))
	
	let exercise = (await db.exercise.find({}))
	console.log( exercise.map(it => it.fmt() ))
	
	let workouts = (await db.workout.find({}).populate("exercises"))

	console.log(workouts);
	console.log(workouts[0].exercises);
}
main()
