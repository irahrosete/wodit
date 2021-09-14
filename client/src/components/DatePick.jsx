import React, { useState, forwardRef } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const DatePick = ({ exercise, setExercise }) => {
  const [date, setDate] = useState(
    new Date()
    // new Date().getFullYear(),
    // new Date().getMonth(),
    // new Date().getDate()
  )
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <div className='flex justify-center'>
      <button className='btndate' onClick={onClick} ref={ref}>
        {value}
      </button>
    </div>
  ))

  const handleDateChange = (date) => {
    const noTimeDate = new Date(date)
    // date.getFullYear(),
    // date.getMonth(),
    // date.getDate()
    setDate(noTimeDate)
    setExercise({ ...exercise, date: noTimeDate })
  }

  return (
    <div className='flex justify-center pt-6 px-16 md:px-80 lg:px-96 z-0'>
      <DatePicker
        selected={date}
        onChange={handleDateChange}
        customInput={<ExampleCustomInput />}
        dateFormat='dd/MM/yyyy'
      />
    </div>
  )
}

export default DatePick
