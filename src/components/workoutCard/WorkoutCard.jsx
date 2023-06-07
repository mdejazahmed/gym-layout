import "./workoutCard.css";

const WorkoutCard = ({activeWorkout,setActiveCard,workout}) => {

const onClickWorkout=()=>{
    setActiveCard(workout.id)
}

  return (
    <div onClick={onClickWorkout}>
        {activeWorkout?<div className="activeWoroutCard">
       <img src={workout.imgUrl} alt="" className="activeWorkoutImg" />
       <div className="workoutContent">
         <h4 className="workoutType">{workout.type}</h4>
         <p className="workoutDesc">{workout.desc}</p>
       </div>
     </div>: <div className="workOutCard">
       <img src={workout.imgUrl} alt="" className="workoutImg" />
        <p className="workOutType">{workout.type}</p>
       </div> }
    </div>

      

   
  )
}

export default WorkoutCard
