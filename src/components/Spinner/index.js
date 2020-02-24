import React from 'react'
import Loader from 'react-loader-spinner';

export default function Spinner() {
  return (
    <div className="loader-container">
      <Loader
        type="Oval"
        color="#f5471ecc"
        height={100}
        width={100}
        timeout={60000}
      />
    </div>
  )
}
