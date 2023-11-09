// signUp.tsx

"use client";
import React, { useState } from "react";
import { SignUp } from "@clerk/nextjs";

import Header from "@/components/ui/LandingPage/Header";
import Hero from "@/components/ui/LandingPage/Hero";
import Content from "@/components/ui/LandingPage/Content";
import Uses from "@/components/ui/LandingPage/Uses";
import Steps from "@/components/ui/LandingPage/Steps";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-transparent">
        <div className="mb-4 flex justify-between items-center">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Clerk Sign Up</h3>
          <button
            type="button"
            className="text-gray-700 rounded-md hover:text-gray-500 focus:outline-none"
            onClick={closeModal}
          >
            <span className="sr-only">Close</span>
            &#x2715; {/* This is a unicode 'X' character */}
          </button>
        </div>
        <SignUp />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Create the sign-up button JSX to pass it as a prop
  const signUpButton = (
    <button className=" font-bold py-2 px-4 rounded" onClick={openModal}>
      Get Started
    </button>
  );

  return (
    <>
      {/* Pass the signUpButton as a prop to the Header component */}
      <Header signUpButton={signUpButton} />
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
      <Hero />
      <Content />
      <Steps />
      <Uses />
      {/* ...rest of your component (if any)... */}
    </>
  );
};

export default App;
