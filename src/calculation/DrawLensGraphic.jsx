import { useEffect, useState } from "react";
import Desmos from "desmos";

export const DrawLensGraphic = (props) => {
    const { allLensParams } = props;
    // console.log(allLensParams);

    // ライトレーシングパラメータ
    const [rayTracePoint, setRayTracePoint] = useState([-10, 0]);
    const [rayTraceParamT, setRayTraceParamT] = useState(0);
    const [rayTraceDirectionV, setRayTraceDirectionV] = useState([1, 0]);


    const [calc, setCalc] = useState();
    useEffect(() => {
        let elt = document.getElementById('calculator');
        let tmp = Desmos.GraphingCalculator(elt, {
            keypad: false,
            expressions: false,
            settingsMenu: false,
            showGrid: false,
            expressionsCollapsed: true,
        });
        // 描画範囲
        tmp.setMathBounds({
            left: -6,
            right: 14,
            bottom: -7,
            top: 7,
        });
        setCalc(tmp);
        return () => {
            // window.Desmos.GraphingCalculator.destroy()
        }
    }, []);

    console.log(allLensParams)
    useEffect(() => {
        if (calc !== undefined) {
            allLensParams.map((param, index) => {
            console.log(param[3])
            // 光線 (始点と終点を渡すだけ)
            calc.setExpression({
                id: 'ray1'+index,
                color: Desmos.Colors.ORANGE,
                latex: `
                        y=${param[4]}*0.9
                        \\left\\{${param[3]-3} \\le x \\le ${param[3]}\\right\\}
                    `,
            });

            // 左側へ凸なレンズ (たぶん実装完了)
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
            // 右側へ凸なレンズ (たぶん実装完了)
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
            };
        })
        }
    }, [allLensParams]);

    return (
        <div class="mx-6 my-8">
            <div className="DrawLensGraphic">
                <div id="calculator" style={{
                    width: "600px",
                    height: "400px",
                }}></div>
            </div>
        </div>
    );
};
