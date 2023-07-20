import React, { useRef, useState } from 'react'
import MathInput from "react-math-keyboard";
// import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css'
// import { StaticMathField } from 'react-mathquill';
import dynamic from 'next/dynamic'

const StaticField = dynamic(() => import('../components/staticField'), {
  ssr: false
})

// addStyles();
const Home = () => {
const mf = useRef()
const [latex, setLatex] = useState('')
const [symbol, setSymbol] = useState('')

const handleChange = (mathField:any) => {
  setSymbol(mathField)
  setLatex(mathField)
}
  return (
    <div>
       <MathInput setValue={handleChange} setMathfieldRef={(mathfields:any) => (mf.current = mathfields)}/>
      <h3 className='text-xl my-4'>latex: {latex}</h3>
      <h3>
      Soal: 
      </h3>
      <StaticField symbol={symbol}/>
    </div>
  )
}

export default Home