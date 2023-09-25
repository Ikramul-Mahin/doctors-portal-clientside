import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
const AppointmentBanner = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())

    return (
        <div className="hero  text-black">
            <div className="hero-content flex-col  lg:flex-row-reverse">
                <img alt='banner' src={chair} className="rounded-lg w-1/3 shadow-2xl" />
                <div className='mr-8'>
                    <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}

                    />
                    <p>You have selected <span className='text-blue-800 font-bold'> {format(selectedDate, 'PP')}. </span></p>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;