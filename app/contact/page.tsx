"use client"

import { useState } from "react";
import axios from "axios";
import PageTitle from "../components/pagetitle";
import Image from "next/image";

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
    <main className="relative flex flex-col flex-grow items-center justify-center py-8 px-6 sm:px-8 sm:py-4 w-full h-full text-white">
      <Image
        className="absolute inset-0 object-cover"
        src={"/home.jpg"}
        alt="home"
        fill
      />
      <PageTitle title="Contact" />
      <form onSubmit={handleSubmit} className="relative space-y-4 w-full sm:w-[500px] mx-auto mt-8">
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2 uppercase">Your Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border border-gray-300"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="mb-2 uppercase">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="p-2 border border-gray-300 h-32"
          ></textarea>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
        <button type="submit" className="w-full bg-white text-black p-2 uppercase">Send</button>
      </form>
    </main>
  );
}