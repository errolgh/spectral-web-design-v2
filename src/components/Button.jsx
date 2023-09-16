import React from 'react'

// @TODO: Make "in-line" button order

const Button = ({ children, order, onClick }) => {
  let buttonClasses =
    'mt-4 py-4 px-8 text-xl font-bold text-slate-500 rounded-3xl lg:py-4 focus:outline-none'

  if (order === 'primary') {
    buttonClasses += ' bg-blue-800 text-white hover:bg-[#002C58]'
  } else if (order === 'secondary') {
    buttonClasses += ' bg-gray-300 text-gray-700 hover:bg-gray-400'
  } else if (order === 'tertiary') {
    buttonClasses += ' text-blue-500 hover:text-blue-600 hover:underline'
  }

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
