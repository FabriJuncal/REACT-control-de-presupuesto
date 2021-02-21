import { Fragment} from "react";
const ControlPresupuesto = ({presupuesto,restante}) => (
    <Fragment>
        <div className="alert alert-primary">
            Presupuesto: $ {presupuesto}
        </div>
        <div className="alert">
            Restante: $ {restante}
        </div>
    </Fragment>
);
 
export default ControlPresupuesto;