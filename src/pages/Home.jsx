import React from 'react'
  import { Link } from 'react-router'



  
function Home() {
  return (
    <>
    <div className="w-screen mx-auto p-10 py-20 bg-stone-100 gravitas-one-regular">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          Welcome to <span className="text-[#c2ff72]" 
          style={{WebkitTextStroke: '1px black', textStroke: '1px black',}}>Savage Archive</span>
        </h1>
        <p className="text-lg text-gray-700">
          Your ultimate destination for exploring unique character profiles from a vibrant digital collection. Dive into detailed profiles and discover fascinating stories behind each character, all curated for fans and enthusiasts alike.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-3 text-gray-900">Our Story</h2>
        <p className="text-gray-700 text-base leading-relaxed">
          At <span className="font-semibold">Savage Archive</span>, we believe every character has a story worth sharing. Built to showcase a rich variety of characters from a dynamic API source, our platform offers clean, intuitive profile cards for each character. Whether you’re here to explore, discover, or simply admire, our archive is designed to connect you with captivating personalities one profile at a time.
        </p>
      </section>

      <div className="text-center">
        <Link to="/characterlist">
          <button className="inline-block bg-black hover:bg-lime-200 hover:text-black text-white font-semibold py-3 px-6 rounded-md shadow-md transition duration-300"
        >
          Explore Characters</button>
        </Link>
      </div>
    </div>

    </>
  )}

export default Home