import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP')

    const handleBooking = event => {
        event.preventDefault()
        const form = event.target;
        const slot = form.slot.value;
        const presentName = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;


        const booking = {
            presentName,
            email,
            phone,
            treatmentName: name,
            appointmentDate: date,
            slot
        }
        console.log(booking)
        setTreatment(null)
    }

    return (
        <>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking_modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking_modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled defaultValue={date} className="input input-bordered w-full " />

                        <select name='slot' className="select select-bordered w-full">
                            <option disabled selected>Select your Time</option>
                            {slots?.map((slot, i) => <option key={i} value={slot}>{slot}</option>)}
                        </select>

                        <input name='name' type="text" placeholder="Your Name" className="input input-bordered w-full " />
                        <input name='email' type="text" placeholder="Your Email" className="input input-bordered w-full " />
                        <input name='phone' type="text" placeholder="Your Phone Number" className="input input-bordered w-full " />
                        <input type="submit" className="btn btn-accent w-full " />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;