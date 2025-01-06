import React,{useState} from 'react'
import './Databot.css'
import Card from '../utils/Cards/Card'


function Databot() {
    const [option, setOption] = useState("")
    const data =[
         "Give me summary of data",
         "User engangement change vs last week",
        "Provide an overview of this week's IAP Revenue performance",
      "What are the factors of drop in our Sales Revenue this week"
]
  return (
    <div className='main_container'>
        <div className='sidebar'></div>
        <div className='mid_section'>
            <div className='heading'>
                <div className='title'>Databot</div>
                <div className='options_label'>Connected Data:
                <select id ='dropdown'
                value={option}
                >
                    <option value="Clothing Sales">Clothing Sales</option>
                    <option value="Ecommerce">Ecommerce</option>
                    <option value="HealthCare">HealthCare</option>
                </select>
                </div>
            </div>
            <div className='just_a_border'></div>
            <div className='Ai_title'><span className='Ai'>AI Conversational</span> Data Analyst</div>
            <p className='content'>Your personal AI data assistant. Seamlessly integrate your database for rapid, informed decision-making. Get instant analysis and answers, optimizing growth metrics daily. Ask anything, get analyst-grade responses.</p>
            <div className='card_section'>
                {data.map((item,i)=>(
                    <span>
                        <Card text={item}/>
                    </span>
                ))}
            </div>
        </div>
        <div className='last_section'></div>


    </div>
  )
}

export default Databot