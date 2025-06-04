import React from "react";

export default function UserMenuModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 bg-white bg-opacity-70 flex justify-center items-start pt-20 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="mb-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          onClick={onClose}
        >
          CLOSE
        </button>

        <section className="mt-6">
          <h3 className="text-2xl font-bold mb-4">Login</h3>
          <form className="space-y-4 max-w-md mx-auto">
            <div>
              <label className="block mb-1 font-semibold" htmlFor="firstName">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold" htmlFor="lastName">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold" htmlFor="username">
                Username*
              </label>
              <input
                id="username"
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold" htmlFor="email">
                E-mail Address
              </label>
              <input
                id="email"
                type="email"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold" htmlFor="password">
                Password*
              </label>
              <input
                id="password"
                type="password"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label
                className="block mb-1 font-semibold"
                htmlFor="confirmPassword"
              >
                Confirm Password*
              </label>
              <input
                id="confirmPassword"
                type="password"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded hover:bg-primary-dark transition"
            >
              Login
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
