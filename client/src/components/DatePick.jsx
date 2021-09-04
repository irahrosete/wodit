import React, { useState, forwardRef } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const DatePick = ({ exercise, setExercise }) => {
  const [date, setDate] = useState(new Date())
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <div className='flex justify-center'>
      <button
        className='btndate example-custom-input'
        onClick={onClick}
        ref={ref}
      >
        {value}
      </button>
    </div>
  ))

  const handleDateChange = (date) => {
    setDate(date)
    setExercise({ ...exercise, date })
  }

  return (
    <div className='flex justify-center m-6'>
      <DatePicker
        className='rounded'
        selected={date}
        onChange={handleDateChange}
        customInput={<ExampleCustomInput />}
        dateFormat='dd/MM/yyyy'
      />
    </div>
  )
}

export default DatePick
