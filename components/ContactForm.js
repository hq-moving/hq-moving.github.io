'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          first_name: firstName,
          last_name: lastName,
          email,
          phone_number: phone,
          message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then(() => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setStatus('success');
      })
      .catch(() => setStatus('error'));
  };

  return (
    <form onSubmit={sendEmail}>
      <div className="w-full bg-white p-8 rounded-2xl shadow-2xl">
        <h1 className="font-bold text-center lg:text-left text-brand uppercase text-4xl">Send us an email!</h1>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
          <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg" type="text" placeholder="First Name*" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
          <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg" type="text" placeholder="Last Name*" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
          <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg" type="email" placeholder="Email*" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg" type="tel" placeholder="Phone*" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <textarea className="w-full h-32 bg-gray-100 text-gray-900 mt-4 p-3 rounded-lg" placeholder="Message*" value={message} onChange={(e) => setMessage(e.target.value)} required />
        <button type="submit" disabled={status === 'sending'} className="uppercase text-sm font-bold tracking-wide bg-accent hover:bg-brand text-white p-3 rounded-lg w-full md:w-1/2 mx-auto block mt-4">
          {status === 'sending' ? 'Sending...' : 'Send Email'}
        </button>
        {status === 'success' && <p className="text-green-600 mt-4">Your message has been sent successfully!</p>}
        {status === 'error' && <p className="text-red-600 mt-4">Something went wrong. Please try again or call (772) 207-3720.</p>}
      </div>
    </form>
  );
}
