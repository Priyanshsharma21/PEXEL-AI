import React from 'react'
import { useSelector } from 'react-redux';

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,}) => {
    const { isDark } = useSelector((state)=>state.user);


  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
      <label
        style={{color : isDark ? 'white' : '#222328'}}
        htmlFor={name}
        className="block text-sm font-medium text-gray-900"
      >
        {labelName}
      </label>
      {isSurpriseMe && (
        <button
          type="button"
          onClick={handleSurpriseMe}
          style={{background : isDark ? '#161616' : 'white', color : isDark ? '#fff' : '#291821', border : `1px solid ${isDark ? 'white' : 'black'}`}}
          className="font-semibold text-xs bg-[#EcECF1] py-1 px-2 rounded-[5px] text-black"
        >
          Surprise me
        </button>
      )}
      </div>

      <input
      type={type}
      id={name}
      name={name}
      style={{background : isDark ? '#161616':'white',
      color : isDark ? 'white':'#161616',
      }}
      className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-3"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
    />
    </div>
  )
}

export default FormField