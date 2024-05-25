
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function LoginService() {
  const formData = useSelector((state) => state.form);
  const sendFormData = async () => {
    try {
        console.log('Sending form data to API:', formData);
        const response = await fetch('http://localhost:5001/api/customer/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || 'Failed to login');
        }

        console.log('Login successful:', result);
    } catch (error) {
        console.error('Error:', error.message);
    }
};

React.useEffect(() => {
    if (formData.email && formData.password) {
        sendFormData();
    }
}, [formData]);

}

export default LoginService;

