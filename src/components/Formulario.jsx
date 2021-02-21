import { useState } from "react";
import Error from "./Error";
import shortid from 'shortid';

const Formulario = () => {

    //Definimos el State del Formulario
    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    // Cuando el usuario agrega un gasto
    const agregarGasto = e => {
        e.preventDefault();

        // Validar 
        // isNaN(): devuelve "true" si el valor es vacio
        if( cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){
            guardarError(true);
            return;
        }

        guardarError(false);

        // Construir el gasto
        const gastos = {
            nombre,
            cantidad,
            id: shortid.generate()
        }

        console.log(gastos);
        // Pasar el gasto al componente principal 


        // Resetear el formulario
    }

    return ( 
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aquí</h2>

            {error ? <Error mensaje="Ambos campos son obligatorios o presupuesto incorrecto."/> : null}

            <div className="campo">
                <label>Nombre Gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Cantidad Gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={e => guardarCantidad(parseInt(e.target.value))}
                />
            </div>

            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />
        </form>
     );
}
 
export default Formulario;