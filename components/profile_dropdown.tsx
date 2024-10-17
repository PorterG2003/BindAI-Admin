"use client";

import React, { useState } from "react";
import Image from "next/image";
import { signOut } from "aws-amplify/auth"; // Import Auth from aws-amplify
import { Amplify } from 'aws-amplify';
import outputs from '@/amplify_outputs.json';

//Amplify.configure(outputs);

export default function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      // Redirect to sign-in page or handle sign-out logic
      window.location.href = "/auth"; // Redirect to a sign-in page or home page
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="relative">
      <button onClick={toggleDropdown} className="flex items-center focus:outline-none">
        <Image
          src="/logo.png" // Replace with your profile image path
          alt="Profile"
          width={40}  // Adjust the size as needed
          height={40} // Adjust the size as needed
          className="rounded-full"
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-20">
          <button
            onClick={handleSignOut}
            className="block w-full text-left px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white rounded-lg"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}