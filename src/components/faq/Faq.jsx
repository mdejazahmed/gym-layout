import { useState } from "react"
import "./faq.css"

const Faq = ({faq}) => {
  const [isFaqOpen,setFaqOpen]=useState(false)
  return (
    <li className="faq" onClick={()=>setFaqOpen(!isFaqOpen)}>
      <div className="faqQuestionContainer">
        <p className="faqQuestion">{faq.faq}</p>
        <button className={isFaqOpen?"faqBtn activeFaq":"faqBtn"} >+</button>
      </div>
      {isFaqOpen && <div className="faqAnsContainer">
        <p className="faqAns">{faq.ans}</p>
      </div>}
    </li>
  )
}

export default Faq