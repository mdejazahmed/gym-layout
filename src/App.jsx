import { useState } from "react";
import "./app.css";
import ClassCard from "./components/classCard/ClassCard";
import Faq from "./components/faq/Faq";
import FeedbackCard from "./components/feedbackCard/FeedbackCard";
import Instructor from "./components/instructor/Instructor";
import WorkoutCard from "./components/workoutCard/WorkoutCard";

const workouts=[
  {
    id:1,
    type:"GYM",
    imgUrl:"https://res.cloudinary.com/dxxh8iica/image/upload/v1686639388/gym/type1_ki0jnt.png",
    desc:'Expect a heart-pumping workout that will leave you feeling energized and accomplished. Our supportive community of like-minded individuals.'
  },
  {
    id:2,
    type:"ZUMBA",
    imgUrl:"https://res.cloudinary.com/dxxh8iica/image/upload/v1686639387/gym/type2_onk5xn.png",
    desc:'Expect a heart-pumping workout that will leave you feeling energized and accomplished. Our supportive community of like-minded individuals.'
  },
  {
    id:3,
    type:"YOGA",
    imgUrl:"https://res.cloudinary.com/dxxh8iica/image/upload/v1686639387/gym/type3_dqlcxp.png",
    desc:'Expect a heart-pumping workout that will leave you feeling energized and accomplished. Our supportive community of like-minded individuals.'
  },
  {
    id:4,
    type:"Martial Arts",
    imgUrl:"https://res.cloudinary.com/dxxh8iica/image/upload/v1686639387/gym/type4_hnlscv.png",
    desc:'Expect a heart-pumping workout that will leave you feeling energized and accomplished. Our supportive community of like-minded individuals.'
  },
]

const classes = [
  {
    id: 1,
    className: "Yoga",
    studentCount: 29,
    title: "Strength & Sweat",
    duration: "2H",
    instructor: "Esther Howard",
    noOfClasses: "30",
    difficulty: "Beginner",
    imgUrl:
      "https://res.cloudinary.com/dxxh8iica/image/upload/v1686639387/gym/class1_aqvluc.png",
  },
  {
    id: 2,
    className: "Fitness",
    studentCount: 34,
    title: "Total Body Burnout",
    duration: "4H",
    instructor: "Wade Warren",
    noOfClasses: "45",
    difficulty: "Medium",
    imgUrl:
      "https://res.cloudinary.com/dxxh8iica/image/upload/v1686639386/gym/class2_s8y9fg.png",
  },
  {
    id: 3,
    className: "Yoga",
    studentCount: 60,
    title: "Strength & Sweat",
    duration: "3H",
    instructor: "Robert Fox",
    noOfClasses: "52",
    difficulty: "hard",
    imgUrl:
      "https://res.cloudinary.com/dxxh8iica/image/upload/v1686639386/gym/class3_wfuzc1.png",
  },
];

const instructor = [
  {
    id: 1,
    imgUrl:
      "https://res.cloudinary.com/dxxh8iica/image/upload/v1686639386/gym/tutuor_rpwi4w.png",
    name: "Jacob Jones",
  },
  {
    id: 2,
    imgUrl:
      "https://res.cloudinary.com/dxxh8iica/image/upload/v1686639386/gym/tutuor2_hvt9o5.png",
    name: "Leslie Alexander",
  },
  {
    id: 3,
    imgUrl:
      "https://res.cloudinary.com/dxxh8iica/image/upload/v1686639385/gym/tutuor3_okygb3.png",
    name: "Cameron Williamson",
  },
  {
    id: 4,
    imgUrl:
      "https://res.cloudinary.com/dxxh8iica/image/upload/v1686639386/gym/tutuor4_kwcrtg.png",
    name: "Jane Cooper",
  },
];

const feedback = [
  {
    id: 1,
    feedback:
      "Al-Balad is essentially Jeddah old town. It was once surrounded by a wall, but now only the gates re",
    imgUrl:
      "https://res.cloudinary.com/dxxh8iica/image/upload/v1686639384/gym/feed_heaplv.png",
    name: "Courtney Henry",
  },
  {
    id: 2,
    feedback:
      "This a great historic site to visit. I rented a little cart and the driver was a really good friendl",
    imgUrl:
      "https://res.cloudinary.com/dxxh8iica/image/upload/v1686639384/gym/feed2_absfie.png",
    name: "Brooklyn Simmons",
  },
  {
    id: 3,
    feedback:
      "I had been to Al Balad several times. It is one of my favorite places in Jeddah. It is historic, ful",
    imgUrl:
      "https://res.cloudinary.com/dxxh8iica/image/upload/v1686639384/gym/feed3_lxmkx2.png",
    name: "Jane Cooper",
  },
];

const faqs = [
  {
    id: 1,
    faq: "What are your focus areas as a UI/UX agency?",
    ans: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop",
  },
  {
    id: 2,
    faq: "Why is UI/UX design important for your business growth?",
    ans: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop",
  },
  {
    id: 3,
    faq: "Can your UX design agency help us with web design?",
    ans: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop",
  },
  {
    id: 4,
    faq: "How much does a UI/UX design project cost?",
    ans: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop",
  },
];

function App() {
const [activeWorkout,setWorkout]=useState(workouts[0].id)

const setActiveCard=(id)=>{
  setWorkout(id)
}

  return (
    <div className="home">
      <div className="heroSection">
        <header className="header">
          <p className="logo">LOGO</p>
          <ul className="navbar">
            <li className="navItem">Classes</li>
            <li className="navItem">Team</li>
            <li className="navItem">About Us</li>
            <li className="navItem">Gallery</li>
          </ul>
          <button className="btn">Contact Us</button>
        </header>
        <div className="heroContent">
          <h2 className="heroHeading">
            <span className="heroSpan">Unleash</span> your Inner Athlete
          </h2>
          <p className="heroPara">
            Get ready to sweat it out and achieve your fitness goals with our
            high-energy fitness classes! Our classes are designed to cater to
            all fitness levels and provide a fun and motivating environment to
            help you reach your peak performance.
          </p>
          <button className="btn">Start free trail</button>
        </div>
      </div>

      <div className="afterHeroSection">
        <h2 className="afterHeading">Find what moves you</h2>
        <div className="imgsContainer">
{workouts.map((each)=>(
  <WorkoutCard key={each.id} workout={each} activeWorkout={activeWorkout===each.id} setActiveCard={setActiveCard}/>
))}
        </div>
      </div>

      <div className="lifestyleSection">
        <h4 className="lifestyleHeading">Fit for your lifestyle</h4>
        <p className="lifestylePara">
          Wake up with a sunrise meditation, sweat it out with lunchtime HIIT,
          or unwind with an evening flow. You’ll find movement for every mood
          with classes sorted by time, style, and skill level.
        </p>
        <img
          className="lifestyleImg"
          src="https://res.cloudinary.com/dxxh8iica/image/upload/v1686639387/gym/center_zwtea4.png"
          alt=""
        />
        <span className="imgBg"></span>
        <span className="sideDivSmall"></span>
        <span className="sideDivLarge"></span>
      </div>

      <div className="classSection">
        <h4 className="classHeading">Classes</h4>
        <div className="classesContainer">
          {classes.map((each) => (
            <ClassCard key={each.id} details={each} />
          ))}
        </div>
        <button className="btn" style={{ marginBottom: "36px" }}>
          See all
        </button>
      </div>

      <section className="instructorSection">
        <h4 className="classHeading">Instructors</h4>
        <div className="instructorContainer">
          {instructor.map((each) => (
            <Instructor key={each.id} instructor={each} />
          ))}
        </div>
        <span className="instructorsideDivSmall"></span>
        <span className="instructorsideDivLarge"></span>
      </section>

      <section className="appSection">
        <div className="appSecLeft">
          <h3 className="appSecHeading">Download the most loved fitness app</h3>
          <p className="appSecPara">
            Start your fitness journey with us. Join the cult!
          </p>
          <div className="appSecBtnContainer">
            <img
              src="https://res.cloudinary.com/dxxh8iica/image/upload/v1686640029/gym/playstore_f8qzum.png"
              alt=""
              className="btnImg"
            />
            <img
              src="https://res.cloudinary.com/dxxh8iica/image/upload/v1686640029/gym/apple_store_aqtv1u.png"
              alt=""
              className="btnImg"
            />
          </div>
        </div>
        <img
          src="https://res.cloudinary.com/dxxh8iica/image/upload/v1686639385/gym/mobile_g8fqrt.png"
          alt=""
          className="appSecRightImg"
        />
      </section>

      <section className="videoSec">
        <iframe
          width="80%"
          height="548"
          src="https://www.youtube.com/embed/tUykoP30Gb0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </section>

      <section className="feedbackSection">
        <h4 className="classHeading">Client’s Feedback</h4>
        <div className="feedbackContainer">
          {feedback.map((each) => (
            <FeedbackCard key={each.id} feedback={each} />
          ))}
        </div>
        <img
          src="https://res.cloudinary.com/dxxh8iica/image/upload/v1685950392/Frame_336_ugy6tv.png"
          alt=""
          className="feedbackFooter"
        />
      </section>

      <section className="faqSec">
        <h4 className="faqHeading">Frequently Asked Question</h4>
        <ul className="faqContainer">
          {faqs.map((each)=>(
        <Faq key={each.id} faq={each}/>
          ))}
        </ul>
        <div className="changeContainer">
          <div className="changeContainerContent">
            <h4 className="changeContainerHeading">Are you ready to change?</h4>
            <p className="changeContainerPara">Challenge your strength. Stretch your body. Breathe easy. Our team of world-class instructors will empower</p>
          </div>
        <div className="changeBtnContainer">
          <button className="changeBtn">Start your Free Trial</button>
        </div>
        </div>
      </section>
      
      <footer className="footer">
        <div className="footerDiv">
        <p className="logo">LOGO</p>
        <p className="footerPara">Join us today and experience the transformative power of our fitness classes. Don't wait to start your fitness journey. Take the first step towards a healthier, stronger you. Let's sweat, have fun, and make fitness a way of life together!</p>
        <img src="https://res.cloudinary.com/dxxh8iica/image/upload/v1686640029/gym/social_icon_czmvq1.png" alt="" className="footerIcons" />
        </div>
        <p className="footerLast">SPYRO 2023. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
