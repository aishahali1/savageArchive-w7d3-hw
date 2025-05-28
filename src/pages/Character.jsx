import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

function Character() {
  const { id } = useParams()
  const [character, setCharacter] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

 useEffect(() => {
  if (!id) return;

  const url = `https://655127797d203ab6626e943b.mockapi.io/Character_fahad`

  axios.get(url)
    .then(res => {
      const character = res.data.find((c) => c.id.toString() === id)
      setCharacter(character)
      setLoading(false)
    })
    .catch(error => {
      console.error("Error fetching character:", error)
      setLoading(false)
    });
}, [id]);


  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>
  if (!character) return <div>No character data found.</div>
  return (
    <>
   <div className="gravitas-one-regular flex flex-wrap gap-4 justify-center items-center p-4 bg-stone-100 min-h-screen text-2xl md:text-3xl">
  <div className="cardProfile audiowide-regular bg-white flex flex-col md:flex-row justify-start items-center max-w-5xl w-full gap-6 rounded-2xl shadow-lg">
    
    <img
      src={character.image}
      alt={character.name}
      className="rounded-2xl object-cover w-100 md:w-60 h-100"
    />

    <div className="flex flex-col space-y-2 text-left p-2">
      <h1 className="text-3xl md:text-4xl font-bold">
        Character Name: {character.name}
      </h1>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Hair: {character.hair}</p>
      <p>Origin: {character.origin}</p>
    </div>

  </div>
</div>

    </>
  )
}

export default Character