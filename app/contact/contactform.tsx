"use client"

import { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setError('Missing required fields.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Email is invalid.');
      return;
    }

    setError('');
    try {
      const response = await axios.post('https://xhqqxur59f.execute-api.us-east-1.amazonaws.com/contactForm', 
        { name, email, message }, 
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      if (response.data.success) {
        setSuccess('Your message has been sent!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setError('Failed to send message.');
      }
    } catch (error) {
      setError('Failed to send message.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative space-y-4 w-full sm:w-[500px] mx-auto">
      <div className="flex flex-col">
        <label htmlFor="name" className="mb-2 uppercase">Your Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border border-gray-300 text-gray-800 shadow-xl focus:outline-none"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="mb-2 uppercase">Your Email:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border border-gray-300 text-gray-800 shadow-xl focus:outline-none"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="message" className="mb-2 uppercase">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="p-2 border border-gray-300 h-32 text-gray-800 shadow-xl focus:outline-none"
        ></textarea>
      </div>
      {error && <p className="text-white-500 font-bold">{error}</p>}
      {success && <p className="text-white">{success}</p>}
      <button type="submit" className="w-full bg-white hover:bg-gray-200 text-gray-800 p-2 uppercase rounded-lg shadow-xl focus:outline-none">Send</button>
    </form>
  );
}