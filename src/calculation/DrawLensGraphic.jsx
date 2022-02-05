import { useEffect, useState } from "react";
import Desmos from "desmos";

export const DrawLensGraphic = (props) => {
    const { allLensParams } = props;
    console.log(allLensParams);

    const [calc, setCalc] = useState();

    useEffect(() => {
        let elt = document.getElementById('calculator');
        let tmp = Desmos.GraphingCalculator(elt, { keypad: false, expressions: false });
        setCalc(tmp);
        return () => {
            // window.Desmos.GraphingCalculator.destroy()
        }
    }, []);

    useEffect(() => {
        if (calc !== undefined) {
            allLensParams.map((param, index) => {
            calc.setExpression({ id: 'graph'+index, latex: `(x-${param[3]})^2+y^2=`+param[2]**2 });
        })
        }
    }, [allLensParams]);

    return (
        <div class="mx-6">
            <div className="DrawLensGraphic">
                <div id="calculator" style={{ width: "600px", height: "400px" }}></div>
            </div>
        </div>
    );
};
