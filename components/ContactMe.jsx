import React, { useCallback, useState } from "react";
import axios from "axios";

const ContactMe = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: {
      error: false,
      msg: null,
    },
  });

  const [inputs, setInputs] = useState({
    custmerName: "",
    email: "",
    message: "",
  });

  const handleOnChange = useCallback((e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: {
        error: false,
        msg: null,
      },
    });
  }, []);

  const handleServerResponse = useCallback((ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: {
          error: false,
          msg,
        },
      });
      setInputs({
        custmerName: "",
        email: "",
        message: "",
      });
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: {
          error: true,
          msg,
        },
      });
    }
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
      axios({
        method: "POST",
        url: process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT_URL,
        data: inputs,
      }).then((_response) => {
        handleServerResponse(
          true,
          "Thank you, your message has been submmitted."
        );
      });
    },
    [inputs, handleServerResponse]
  );
  return (
    <div className="bg-black text-white flex flex-col justify-center items-center pt-10 min-h-screen">
      <div className="flex flex-1 flex-col justify-center items-center pt-10 lg:pt-6">
        <h2 className="text-xs sm:text-2xl lg:text-4xl font-bold">
          It doesn&apos;t have to end here, let&apos;s connect!
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 mt-16 px-10 lg:mt-20 min-w-full lg:min-w-[500px]"
        >
          {status.info.error && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong className="font-bold">Error</strong>:{" "}
              <span className="block sm:inline">{status.info.msg}</span>
            </div>
          )}
          {status.submitted ? (
            <div
              className="text-white text-xl font-bold px-4 py-3 rounded relative"
              role="alert"
            >
              Your message has been successfully sent. We will contact you very
              soon!
            </div>
          ) : (
            <>
              <input
                id="customerName"
                name="customerName"
                required
                maxLength={128}
                type="text"
                placeholder="Your Name"
                className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
                onChange={handleOnChange}
                value={inputs.customerName}
              />
              <input
                id="email"
                name="email"
                type="email"
                required
                maxLength={128}
                placeholder="Your Email"
                className="bg-black text-white outline-none border-white border-2 rounded-3xl px-8 py-2"
                onChange={handleOnChange}
                value={inputs.email}
              />
              <textarea
                id="message"
                name="message"
                required
                maxLength={1048576}
                placeholder="Your Message"
                className="bg-black text-white outline-none border-white border-2 rounded-3xl px-8 py-6 min-h-[16rem]"
                onChange={handleOnChange}
                value={inputs.message}
              ></textarea>
              <div className="text-center mt-10">
                <button
                  type="submit"
                  className="bg-white text-black rounded-3xl px-8 py-2 font-bold mb-4"
                >
                  {!status.submitting
                    ? !status.submitted
                      ? "Submit"
                      : "Submitted"
                    : "Submitting..."}
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
