import "./feedbackCard.css"

const FeedbackCard = ({feedback}) => {
  return (
    <div className="feedbackCard">
        <p className="feedback">{feedback.feedback}</p>
        <img src="https://res.cloudinary.com/dxxh8iica/image/upload/v1686640029/gym/stars_wxatep.png" alt="" className="feedbackStars"/>
        <div className="feedbacker">
            <img src={feedback.imgUrl} alt="" className="feedbackerImg" />
            <p className="feedbackerName">{feedback.name}</p>
        </div>
    </div>
  )
}

export default FeedbackCard