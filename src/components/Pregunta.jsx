import { Fragment, useState } from "react";

const Pregunta = () => {

    //Definimos el State de Pregunta
    const [cantidad, guardarCantidad] = useState(0);

    // Función que lee el presupuesto
    const definirPresupuesto = e =>{
        guardarCantidad(parseInt(e.target.value, 10));
    }

    // Submit para definir presupuesto
    const agregarPresupuesto = e =>{
        e.preventDefault();

        // Validar



        // Si se pasa la validación
    }


    return ( 
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            <form>
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