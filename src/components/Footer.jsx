import React from 'react'

function Footer() {
  return (
    <>
    <footer className="bg-white text-black py-6">
    <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
    <div className="text-center md:text-left">
      <h2 className="text-lg font-semibold">Savage Archive</h2>
      <p className="text-sm">© 2025 Savage Archive. All rights reserved.</p>
    </div>

    <div className="flex gap-4">
      <a href="/" className="hover:underline">Home</a>
      <a href="/characters" className="hover:underline">Characters</a>
      <a href="/about" className="hover:underline">About</a>
    </div>

    <div className="text-sm">
      Data from <a href="https://mockapi.io" target="_blank" className="text-lime-400 hover:underline">MockAPI</a>
    </div>
  </div>
  </footer>
    </>
  )
}

export default Footer