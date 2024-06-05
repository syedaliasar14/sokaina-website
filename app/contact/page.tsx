"use client"

import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!email || !message) {
      setError('Both fields are required.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Email is invalid.');
      return;
    }

    setError('');
    try {
      const response = await axios.post('https://lwumd25fhc.execute-api.us-east-1.amazonaws.com/default/contactMe', 
        { email, message }, 
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      if (response.data.success) {
        setSuccess('Your message has been sent!');
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
    <main className="flex flex-col sm:w-[500px] mx-auto mt-8">
      <h1 className="text-2xl mb-6 uppercase tracking-widest text-center">Contact Me</h1>
      <form onSubmit={handleSubmit} className="space-y-4 w-full">
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2 uppercase">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="mb-2 uppercase">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="p-2 border border-gray-300 rounded h-32"
          ></textarea>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
        <button type="submit" className="w-full bg-black text-white p-2 rounded uppercase">Send</button>
      </form>
    </main>
  );
}