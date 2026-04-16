import React from 'react'

const page = () => {
  return (
    <div className="mt-10 flex justify-center items-center">
      <div className="text-center bg-white px-10 py-8 rounded-2xl shadow-lg border-2 border-gray-100 max-w-1/2">
        <h1 className="text-3xl">Contact Us</h1>
        <p className="text-gray-600 my-4">
          Feel free to reach out to us with any questions or feedback!
        </p>

        <div>
          <form className="flex flex-col gap-4 w-full max-w-xl">
            <div className="flex items-center gap-4">
              <label htmlFor="name" className="font-bold min-w-28 text-left">
                Your Name :
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="flex-1 border-2 border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center gap-4">
              <label htmlFor="email" className="font-bold min-w-28 text-left">
                Your Email :
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="flex-1 border-2 border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-start gap-4">
              <label htmlFor="message" className="font-bold min-w-28 text-left pt-2">
                Your Message :
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                className="flex-1 border-2 border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 hover:cursor-pointer text-white font-bold py-2 px-4 rounded-lg transition duration-300 self-center"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default page