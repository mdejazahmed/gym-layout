import "./instructor.css"

function Instructor({instructor}) {
  return (
    <div className="instructorCard">
        <img src={instructor.imgUrl} alt="" className="instructorImg" />
        <h4 className="instructorName">{instructor.name}</h4>
        <p className="role">Gym trainer</p>
    </div>
  )
}

export default Instructor