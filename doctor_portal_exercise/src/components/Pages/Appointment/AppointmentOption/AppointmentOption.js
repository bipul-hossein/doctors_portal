import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
    const { name, slots } = appointmentOption;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-2xl font-bold text-secondary text-center">{name}</h2>
                <p className="text-secondary text-center">{slots.length > 0 ? slots[0] : 'Try another day'}</p>
                <p className="text-secondary text-center">{slots.length} {slots.length > 1 ? "spaces" : 'space'} available</p>

                <div className="card-actions mx-auto">
                    <label
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(appointmentOption)} htmlFor="booking_modal"
                        className="btn btn-primary text-white">Book Appointment</label>
                </div>

            </div>
        </div>
    );
};

export default AppointmentOption;