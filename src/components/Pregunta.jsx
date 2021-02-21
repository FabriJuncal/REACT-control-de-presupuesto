import { Fragment, useState } from "react";
import Error from "./Error";

const Pregunta = ({guardarPresupuesto, guardarRestante}) => {

    //Definimos el State de Pregunta
    const [cantidad, guardarCantidad] = useState(0);

    const [error, guardarError] = useState(false);

    // Función que lee el presupuesto
    const definirPresupuesto = e =>{
        guardarCantidad(parseInt(e.target.value, 10));
    }

    // Submit para definir presupuesto
    const agregarPresupuesto = e =>{
        e.preventDefault();

        // Validar
        // isNaN(): devuelve "true" si el valor es vacio
        if( cantidad < 1 || isNaN(cantidad) ){
            guardarError(true);
            return;
        }

        // Si se pasa la validación
        guardarError(false);

        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
    }


    return ( 
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            {error ? <Error mensaje="El Presupuesto es Incorrecto"/> : null}

            <form
                onSubmit={agregarPresupuesto}
            >
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />

                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />
            </form>
        </Fragment>
     );
}
 
export default Pregunta;