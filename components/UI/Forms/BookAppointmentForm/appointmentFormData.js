export const appointmentFormData = [
    {
        id: 'pickup', label: 'Pick up address', type: 'text', required: true, validation: value => {
            if (typeof value === 'string') {
                return value.trim().length > 3;
            }
            return false;
        },
        errorMessage: 'Please enter a valid address'
    },
    {
        id: 'dropoff', label: 'Drop off address', type: 'text', required: true, validation: value => {
            if (typeof value === 'string') {
                return value.trim().length > 3;
            }
            return false;
        },
        errorMessage: 'Please enter a valid address'
    },
    {
        id: 'firstName', label: 'First name', type: 'text', required: true, autoComplete: "given-name", validation: value => {
            if (typeof value === 'string') {
                return value.trim().length > 2;
            }
            return false;
        },
        errorMessage: 'First name should be at least 3 characters long'
    },
    {
        id: 'email', label: 'Email address', type: 'email', required: true, autoComplete: "email", validation: value => /\S+@\S+\.\S+/.test(value),
        errorMessage: 'Enter a valid email address'
    },
    {
        id: 'phone', label: 'Phone number', type: 'tel', required: true, autoComplete: "tel", validation: value => {
            const cleanPhone = (value || '').replace(/[^0-9]/g, '');
            return cleanPhone.length > 6; // Matches numbers having more than 6 characters
        },
        errorMessage: 'Please enter a valid phone number'
    },
    {
        id: 'numberOfPassengers', label: 'Number Of Passengers', type: 'text', required: true,  validation: value => {
            if (typeof value === 'string') {
                return value.trim().length > 0;
            }
            return false;
        },
        errorMessage: 'Please enter number of passengers'
    },
    {
        id: 'message', label: 'Message', type: 'textarea', required: false,
    },



    // 
]