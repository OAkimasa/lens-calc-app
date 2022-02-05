import { useEffect, useState } from "react";
import Desmos from "desmos";

export const DrawLensGraphic = (props) => {
    const { allLensParams } = props;
    console.log(allLensParams);

    const [calc, setCalc] = useState();

    useEffect(() => {
        let elt = document.getElementById('calculator');
        let tmp = Desmos.GraphingCalculator(elt, { keypad: false, expressions: false, settingsMenu: false, showGrid: false });
        setCalc(tmp);
        return () => {
            // window.Desmos.GraphingCalculator.destroy()
        }
    }, []);

    useEffect(() => {
        if (calc !== undefined) {
            allLensParams.map((param, index) => {
            if (0 <= param[2]) {
                calc.setExpression({
                    id: 'graph'+index,
                    color: Desmos.Colors.BLUE,
                    latex: `
                        (x-${param[2]}-${param[3]})^2+y^2=(${param[2]})^2
                        \\space\\left\\{-${param[4]} \\le y \\le ${param[4]}\\right\\}
                        \\left\\{${param[3]} \\le x \\le ${param[2]}+${param[3]}\\right\\}
                    `,
                });
            };
            if (param[2] < 0) {
                calc.setExpression({
                    id: 'graph'+index,
                    color: Desmos.Colors.BLUE,
                    latex: `
                        (x-${param[2]}-${param[3]})^2+y^2=(-${param[2]})^2
                        \\space\\left\\{-${param[4]} \\le y \\le ${param[4]}\\right\\}
                        \\left\\{${param[2]}+${param[3]} \\le x \\le ${param[3]}\\right\\}
                    `,
                });
            }
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
