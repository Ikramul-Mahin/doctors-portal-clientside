import React from 'react';
import AppointmentBanner from '../AppointmentBanner.js/AppointmentBanner';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const Appoinement = () => {
    return (
        <div>
            <AppointmentBanner></AppointmentBanner>
            <AvailableAppointments></AvailableAppointments>
        </div>
    );
};

export default Appoinement;