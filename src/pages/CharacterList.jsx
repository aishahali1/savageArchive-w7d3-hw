import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router';

function Home() {
  const [characters, setCharacters] = useState([]);
   const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get('https://655127797d203ab6626e943b.mockapi.io/Character_fahad')
      .then((response) => {
        setCharacters(response.data);
         setLoading(false)
      })
  }, []);
 if (loading) return <div>Loading...</div>

  return (
    <>
    <div className="gravitas-one-regular flex flex-wrap gap-10 justify-center p-4 bg-stone-100 py-5">
  {characters
    .filter(info => info.image && info.image.trim() !== "")
    .map((info) => (
      <div
        key={info.id}
        className="card rounded-2xl my-4 w-70 h-100 bg-white shadow-lg"
      >
        <Link to={`/character/${info.id}`}>
          <img
            src={info.image}
            alt={info.name}
            className="w-full h-70 object-cover rounded-2xl"
          />
        </Link>
        <div className="p-4 flex justify-center items-center h-30">
          <h2 className="text-lg font-semibold text-center">{info.name}</h2>
        </div>
      </div>
    ))}
</div></>

    )
}

export default Home;
