import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios'

import Layout from '../layout/Default'
import styles from '../styles/pokemon.module.css'

const _headers = {
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
}

export default function Home() {

  const [pokemons, setPokemons] = useState([])
  const pokemonCount = useState(151)

  useEffect(async () => {
    const api = 'https://pokeapi.co/api/v2/'
    await axios(
      `${api}pokemon/?limit=${pokemonCount}`, _headers).then(allPokemons => {
      allPokemons.data.results.forEach(async (pokemon) => {
        await fetchPokemon(pokemon)
      })
        
    })
  }, []);


  const fetchPokemon = useCallback(async (e) => {
    const api = e.url
    console.log(api)
    const result = await axios(api, _headers)
    setPokemons(oldItems => [...oldItems, result.data].sort((a, b) => a.id - b.id));
  }, []);

  return (
    <div>
      <Layout>
        <div className={styles.box_container}>
          { pokemons.map((item, index) => (
              <div className={styles.box} key={index}>
                <div className={styles.image}>
                  <img src={`https://pokeres.bastionbot.org/images/pokemon/${item.id}.png`} />
                <p>{item.name}</p>
                <p>{item.id}</p>
                </div>
              </div>
            ))
          }
        </div>
      </Layout>
    </div>
  )
}
