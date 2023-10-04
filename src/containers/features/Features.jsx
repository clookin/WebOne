import React from 'react'
import './feature.css'
import { Feature } from '../../components'

const featuresData = [
  {
    title:"Limitless Potential",
    text:"ChatGPT-3 can generate human-like text in multiple languages, paving the way for seamless global communication."
  },
  {
    title:"Innovative Partnerships",
    text:"ChatGPT-3 is collaborating with various industries, from healthcare to entertainment, to revolutionize customer service and content creation."
  },
  {
    title:'Enhanced Understanding',
    text:'Future iterations of ChatGPT-3 aim to possess advanced emotional intelligence, making interactions more empathetic and supportive.'
  },
  {
    title:'Evolving Responsibly',
    text:'Developers are actively working on ChatGPT-3 is ethics and biases to ensure a more fair and equitable AI for the future.'
  }
]
const Features = () => {
  return (
    <div className='gpt3__feature section__padding' id='feature'>
      <div className='gpt3__feature-heading'>
        <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3__feature-container'>
        {featuresData.map((item,index) => (
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </div>
  )
}

export default Features