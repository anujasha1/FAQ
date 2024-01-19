import { useState } from "react"

const questions = [
    {
        id: "1",
        question: "What is the capital of HP",
        answer: "shimla"
    }, 
    {
        id: "2",
        question: "What is the capital of Punjab",
        answer: "Chandigarh"
    },
    {
        id: "3",
        question: "What is the capital of Haryana",
        answer: "Chandigarh"
    },
    {
        id: "4",
        question: "What is the capital of Uttrakhand",
        answer: "Dehradun"
    }
]
 

const Display = ({question}) => {
    const [activeQuestion, setActiveQuestion] = useState(0)


    function Test() {
        setActiveQuestion(question.id)
    }
    return (
    <div>
        {
           <p>{question.question}
            { activeQuestion == question.id ? <button onClick={() => {setActiveQuestion(0)}}>X</button> :
             <button onClick = {Test}>+</button> }
           <br/>
           { activeQuestion == question.id && question.answer  }</p>     
        }
    </div>
    )

}


function Faq() {
    return (
        <div>
            { questions.map((val, index) => <Display question = {val} key = {index}/>) }
        </div>
    )
}

export default Faq