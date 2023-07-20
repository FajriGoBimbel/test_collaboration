import React from 'react'
import { StaticMathField } from 'react-mathquill';

const StaticField = ({symbol}:any) => {
  return (
    <div>
        <StaticMathField>{symbol}</StaticMathField>
    </div>
  )
}

export default StaticField