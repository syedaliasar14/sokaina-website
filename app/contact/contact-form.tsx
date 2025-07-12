"use client"

import { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [userEmail, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess('');
    if (!userEmail || !message) {
      setError('Both fields are required.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(userEmail)) {
      setError('Email is invalid.');
      return;
    }

    try {
      setError('');
      setIsSending(true);
      const response = await axios.post('api/contact', { userEmail, message });
      if (response.status === 200) {
        setSuccess('Your message has been sent!');
        setEmail('');
        setMessage('');
      } else {
        throw new Error('Failed to send message.');
      }
    } catch (error) {
      setError('Failed to send message.');
      console.log(error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
      <div className="flex flex-col">
        <label htmlFor="email" className="mb-2 uppercase">Email</label>
        <input
          className="py-2 px-3 border border-gray-300 rounded text-gray-700"
          id="email"
          value={userEmail}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="message" className="mb-2 uppercase">Message</label>
        <textarea
          className="py-2 px-3 border border-gray-300 rounded h-32 text-gray-700"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {success && <p className="text-sm">{success}</p>}
      <button type="submit" className="w-full p-2 text-white cursor-pointer rounded bg-black hover:bg-gray-700 transition-colors duration-300">
        {isSending ? 'Sending...' : 'Send'}
      </button>
    </form>
  );
}