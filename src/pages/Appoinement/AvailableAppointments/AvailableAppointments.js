import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';

const AvailableAppointments = ({ selectedDate }) => {
    // const [appointmentOptions, setAppointmentoptions] = useState([])
    const [treatment, setTreatment] = useState(null)
    const { isLoading, data: appointmentOptions = [] } = useQuery({
        queryKey: ['appointmentOptions'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentOptions');
            const data = await res.json()
            return data;
        }
    })

    // useEffect(() => {
    //     fetch('appointmentOptions.json')
    //         .then(res => res.json())
    //         .then(data => setAppointmentoptions(data))
    // }, [])
    return (
        <section className='my-16'>
            <p className='text-center text-secondary font-bold'>Available Appointments on <span className='text-blue-800'>{format(selectedDate, 'PP')}</span> </p>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    treatment={treatment}
                    setTreatment={setTreatment}
                    selectedDate={selectedDate}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointments;