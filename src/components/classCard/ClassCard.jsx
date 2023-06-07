import "./classCard.css";

const ClassCard = ({ details }) => {
  return (
    <div className="classCard">
      <div className="classImgContainer">
        <img src={details.imgUrl} alt="" className="classImg" />
        <span className="classCardSpan"></span>
      </div>
      <div className="cardContent">
        <div className="firstFlex">
          <div className="className">
            <span className="dot"></span>
            {details.className}
          </div>
          <div className="studentCount">
            <img
              src="https://res.cloudinary.com/dxxh8iica/image/upload/v1685788964/solar_users-group-two-rounded-line-duotone_f1is9v.png"
              alt=""
              className="studentIcon"
            />
            <p className="students">{details.studentCount} Students</p>
          </div>
        </div>
        <div className="firstFlex">
          <p className="title">{details.title}</p>
          <div className="studentCount">
            <img
              src="https://res.cloudinary.com/dxxh8iica/image/upload/v1685792114/ion_timer-outline_wum1pj.png"
              alt=""
              className="studentIcon"
            />
            <p className="students">{details.duration}</p>
          </div>
        </div>
        <ul className="instructorUl">
          Instructor:{details.instructor}
          <li className="listItem">
            <span className="listBullet"></span> No. of Classes:
            {details.noOfClasses}
          </li>
          <li className="listItem">
            <span className="listBullet"></span> Difficulty:{details.difficulty}
          </li>
        </ul>

      </div>
      <div className="btnContainer">
          <button className="btn">Learn more</button>
          <button className="btnOutline">Start a free trail</button>
        </div>
    </div>
  );
};

export default ClassCard;
