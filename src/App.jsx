import React, { useEffect, useState } from 'react'
import { BsFillPauseFill } from 'react-icons/bs'
import { FaDiceFive } from 'react-icons/fa'
import ddata from './dummydata'

const App = () => {

  const[data, setData] = useState(ddata);
  const [dataChanger, setDataChanger] = useState(false);
  
  useEffect(() => {
    async function getData() {
      const response = await fetch(`https://api.adviceslip.com/advice`);
      const advice = await(response.json());
      setData(advice)
    }

    getData();
  }, [dataChanger])

  return (
    <div className="main">
      <div className="advice">
        <p className="advice--number">ADVICE #{data.slip.id}</p>
        <p className="advice--text">"{data.slip.advice}"</p>
        <div className="hor--pause">
          <hr />
          <BsFillPauseFill className='pause--icon'/>
          <hr />
        </div>
        <FaDiceFive className='dice' onClick={() => setDataChanger(prev => !prev)}/>
      </div>
    </div>
  )
}

export default App