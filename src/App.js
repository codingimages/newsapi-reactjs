import React, { useState, useEffect } from 'react';

// components
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoNoticias from "./components/ListadoNoticias"

function App() {

  // definir la categoria
  const [categoria, guardarCategoria] = useState("")
  const [noticias, guardarNoticias] = useState([])

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=bc9471b0c90c4d1a8d41860292e59d6b`

      const respuesta = await fetch(url)
      const noticias = await respuesta.json()

      guardarNoticias(noticias.articles)
    }

    consultarAPI()
  }, [categoria])

  return (

    <>
      <Header
        titulo=" Buscador de noticias"
      />

      <div className="container white">
        <Formulario
          guardarCategoria={guardarCategoria}
        />
        <ListadoNoticias
          noticias={noticias}
        />
      </div>
    </>
  );
}

export default App;
