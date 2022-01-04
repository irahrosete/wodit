import React, { useState, forwardRef } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const DatePick = ({ exercise, setExercise, wdate, setWdate }) => {
  // const [date, setDate] = useState(wdate ? wdate : new Date())
  const [date, setDate] = useState(new Date())

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <div className='flex justify-center'>
      <button className='btndate' onClick={onClick} ref={ref}>
        {value}
      </button>
    </div>
  ))

  const handleDateChange = (date) => {
    const noTimeDate = new Date(date)
    setDate(noTimeDate)
    exercise && setExercise({ ...exercise, date: noTimeDate })
    wdate && setWdate(noTimeDate)
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
