import React from 'react'
import PropTypes from "prop-types"
import useSelect from "../hooks/useSelect"
import styles from "./Formulario.module.css"

const Formulario = ({ guardarCategoria }) => {

    // categorias
    const OPCIONES = [
        { value: "general", label: "General" },
        { value: "business", label: "Negocios" },
        { value: "entertainment", label: "Entretenimiento" },
        { value: "health", label: "Salud" },
        { value: "science", label: "Ciencia" },
        { value: "technology", label: "Technology" },
    ]

    const [categoria, SelectNoticias] = useSelect("general", OPCIONES)

    // submit al form
    const buscarNoticias = e => {
        e.preventDefault()

        guardarCategoria(categoria)
    }

    return (
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">

                <form
                    onSubmit={buscarNoticias}
                >
                    <h2 className={styles.heading}>Encuentra Noticias por Categoría</h2>

                    <SelectNoticias />

                    <div className="input-field col s12">
                        <input
                            type="submit"
                            className={`${styles.btnBlock} btn-large amber darken-2`}
                            value="Buscar"
                        />
                    </div>
                </form>

            </div>
        </div>
    )
}

Formulario.propTypes = {
    guardarCategoria: PropTypes.func.isRequired
}

export default Formulario