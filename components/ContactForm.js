'use client';

import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

export default function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const isConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

  useEffect(() => {
    if (PUBLIC_KEY) {
      emailjs.init({ publicKey: PUBLIC_KEY });
    }
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!isConfigured) {
      setStatus('config');
      return;
    }

    setStatus('sending');

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, {
        first_name: firstName,
        last_name: lastName,
        email,
        phone_number: phone,
        message,
      })
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
      <div className="w-full surface-card p-8 rounded-2xl shadow-2xl">
        <h1 className="font-bold text-center lg:text-left text-brand uppercase text-4xl">Send us an email!</h1>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
          <input className="input-field mt-2" type="text" placeholder="First Name*" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
          <input className="input-field mt-2" type="text" placeholder="Last Name*" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
          <input className="input-field mt-2" type="email" placeholder="Email*" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input className="input-field mt-2" type="tel" placeholder="Phone*" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <textarea className="input-field h-32 mt-4" placeholder="Message*" value={message} onChange={(e) => setMessage(e.target.value)} required />
        <button type="submit" disabled={status === 'sending' || !isConfigured} className="uppercase text-sm font-bold tracking-wide bg-accent hover:bg-brand text-white p-3 rounded-lg w-full md:w-1/2 mx-auto block mt-4 disabled:opacity-60">
          {status === 'sending' ? 'Sending...' : 'Send Email'}
        </button>
        {status === 'success' && <p className="text-green-600 dark:text-green-400 mt-4">Your message has been sent successfully!</p>}
        {status === 'error' && <p className="text-red-600 dark:text-red-400 mt-4">Something went wrong. Please try again or call (772) 207-3720.</p>}
        {status === 'config' && <p className="text-red-600 dark:text-red-400 mt-4">The contact form is temporarily unavailable. Please call (772) 207-3720.</p>}
      </div>
    </form>
  );
}
