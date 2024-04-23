import React from 'react'
import topProfile from '../assets/images/top-profile.jpg'
import { BiCalendar } from 'react-icons/bi';

const ProfileHeroTwo = () => {

  const getFormattedDate = () => {
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    var currentDate = new Date();
    var day = currentDate.getDate();
    var monthIndex = currentDate.getMonth();
    var year = currentDate.getFullYear();

    var suffix = getOrdinalSuffix(day);

    var formattedDate = day + suffix + " " + months[monthIndex] + " " + year;
    return formattedDate;
  }
  
  const getOrdinalSuffix = (day) => {
    if (day >= 11 && day <= 13) {
      return "th";
    }
    switch (day % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  }

  const formattedDate = getFormattedDate();


  return (
    <div>
      <div className='h-[25vh] p-4 rounded-md w-full relative'>
        <img src={topProfile} alt="" className='object-cover opacity-80 h-[25vh] w-full' />
        <div className='absolute backdrop-blur w-[calc(100%-8px)] mx-auto h-[100%] top-0 m-4 left-0'>
          <div className='flex justify-between'>
            <p className='ml-3 mt-3 text-2xl md:text-3xl text-yellow-500 dark:text-blue-600'>At a glance</p>
            <p className='flex justify-start items-center gap-2 pt-4 pr-5'>
              <BiCalendar size={22} />
              <span>{formattedDate}</span>
            </p>
          </div>
          <p className='pl-4 pt-4'>Welcome back...</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileHeroTwo