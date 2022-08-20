import React from "react";
import { MdCancel } from "react-icons/md";

function ContactMeModal({ turnModal }) {
  const sendMessage = async (e) => {
    e.preventDefault();
    const formData = {};
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });
    fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(formData),
    });
  };
  return (
    <div className="bg-slate-700 text-white relative shadow-2xl shadow-black flex space-y-5 rounded-2xl md:p-10 p-3 flex-col items-center">
      <button
        onClick={() => turnModal(false)}
        className="absolute left-3 top-3 active:text-black"
      >
        <MdCancel className="h-8 w-8 text-rose-50 active:text-rose-300 drop-shadow-lg hover:scale-105 hover:drop-shadow-xl" />
      </button>
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-4xl text-center">Contact Me</h1>
        <h1 className="text-xl text-slate-400">vishwanthbsavp@gmail.com</h1>
        <p className="text-center font-coder px-2 mt-2 text-slate-300 ">
          Under Development, kindly mail to above address.
        </p>
      </div>
      <form
        onSubmit={(e) => sendMessage(e)}
        className="flex flex-col space-y-3 text-white"
      >
        <input
          maxLength="30"
          placeholder="Enter your email"
          className="bg-neutral-900 md:h-12 h-10 shadow-lg rounded-xl p-3"
          type="email"
          name="Email"
          required
        ></input>
        <input
          maxLength="30"
          placeholder="Full name"
          className="bg-neutral-900 md:h-12 h-10 shadow-lg rounded-xl p-3"
          required
          name="Name"
        ></input>
        <textarea
          required
          rows="10"
          cols="30"
          placeholder="Message"
          name="Message"
          className="bg-neutral-900 shadow-lg scrollbar-hide rounded-xl p-3 max-h-44 outline-none min-h-full"
        ></textarea>
        <button
          type="submit"
          className="bg-cyan-500 font-semibold shadow-lg transition ease-linear hover:scale-105 p-2 rounded-xl"
        >
          SEND
        </button>
      </form>
    </div>
  );
}

export default ContactMeModal;
