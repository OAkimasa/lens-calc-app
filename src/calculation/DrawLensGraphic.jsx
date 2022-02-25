import { memo, useCallback, useEffect, useState } from "react";
import Desmos from "desmos";

export const DrawLensGraphic = ({ allLensParams }) => {
    // console.log(allLensParams);

    const [calc, setCalc] = useState();
    useEffect(() => {
        let elt = document.getElementById('calculator');
        let tmp = Desmos.GraphingCalculator(elt, {
            keypad: false,
            expressions: true,
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

    // 球面レンズの描画
    useEffect(() => {
        if (calc !== undefined) {
            allLensParams.map((param, index) => {
                // 左側へ凸なレンズ (たぶん実装完了)
                if (0 <= param[2]) {
                    calc.setExpression({
                        id: 'graph' + index,
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
                        id: 'graph' + index,
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

    // レイトレーシングパラメータ
    //const [sP, setsP] = useState([-5, 0]);
    //const [T, setT] = useState(2);
    //const [dV, setdV] = useState([1, 0.3]);

    // 一段階ごとに高さを変えて6本の光線を計算
    /**
    const RayTraceT = useCallback((params) => {
        const param2 = Number(params[2])
        //console.log(param2);
        const param3 = Number(params[3])
        //console.log(param3);
        const A = (dV[0] ** 2) / param2 ** 2
            + (dV[1] ** 2) / param2 ** 2
        const B = (sP[0] - param2 - param3) * dV[0] / param2 ** 2
            + (sP[1]) * dV[1] / param2 ** 2
        const C = -1 + (sP[0] - param2 - param3) ** 2 / param2 ** 2
            + (sP[1]) ** 2 / param2 ** 2
        // レンズ曲率で場合分け
        if (0 <= param2) {
            setT((-B - Math.sqrt(B ** 2 - A * C)) / A)
            //setsP([sP[0] + dV[0] * (-B - Math.sqrt(B ** 2 - A * C)) / A,
            //sP[1] + dV[1] * (-B - Math.sqrt(B ** 2 - A * C)) / A])
        } else {
            setT((-B + Math.sqrt(B ** 2 - A * C)) / A)
            //setsP([sP[0] + dV[0] * (-B + Math.sqrt(B ** 2 - A * C)) / A,
            //sP[1] + dV[1] * (-B + Math.sqrt(B ** 2 - A * C)) / A])
        }
    }, [])
     */

    // 光線のパラメーターは、[sP0, sP1, T, dV0, dV1]
    const allRayParams = []
    const RayTraceTTT = allLensParams.map((params, index) => {
        // [sP0, sP1, T, dV0, dV1]のかたまりを作る
        const paramBox = [];
        const sP = [];
        const dV = [];

        // ---------------始点 の計算 start--------------------------
        if (index == 0) {
            // 初期値
            paramBox[0] = -5;
            paramBox[1] = 0;
            sP[0] = -5;
            sP[1] = 0;
        } else {
            // 前回の終点を引き継ぐ
            paramBox[0] = allRayParams[index - 1][0] + allRayParams[index - 1][2] * allRayParams[index - 1][3];
            paramBox[1] = allRayParams[index - 1][1] + allRayParams[index - 1][2] * allRayParams[index - 1][4];
            sP[0] = allRayParams[index - 1][0] + allRayParams[index - 1][2] * allRayParams[index - 1][3];
            sP[1] = allRayParams[index - 1][1] + allRayParams[index - 1][2] * allRayParams[index - 1][4];
        }
        // ---------------始点 の計算 end--------------------------

        // ---------------方向ベクトル の計算 start--------------------------
        if (index == 0) {
            // 初期値
            paramBox[3] = 1;
            paramBox[4] = 0.3;
            dV[0] = 1;
            dV[1] = 0.3;
        } else {
            // 屈折計算 (法線ベクトルの計算が必要)
            paramBox[3] = 1;
            paramBox[4] = 0;
            dV[0] = 1;
            dV[1] = 0;
        }
        // ---------------方向ベクトル の計算 end--------------------------

        // ---------------係数 T の計算 start-------------------------
        const param2 = Number(params[2])
        //console.log(param2);
        const param3 = Number(params[3])
        //console.log(param3);
        const A = (dV[0] ** 2) / param2 ** 2
            + (dV[1] ** 2) / param2 ** 2
        const B = (sP[0] - param2 - param3) * dV[0] / param2 ** 2
            + (sP[1]) * dV[1] / param2 ** 2
        const C = -1 + (sP[0] - param2 - param3) ** 2 / param2 ** 2
            + (sP[1]) ** 2 / param2 ** 2
        // レンズ曲率で場合分け
        if (0 <= param2) {
            paramBox[2] = ((-B - Math.sqrt(B ** 2 - A * C)) / A)
            allRayParams[index] = paramBox;
        } else {
            paramBox[2] = ((-B + Math.sqrt(B ** 2 - A * C)) / A)
            allRayParams[index] = paramBox;
        }
        // ---------------係数 T の計算 end--------------------------
    })


    //const allRayParams = RayTraceTTT(allLensParams);
    console.log(allLensParams)
    console.log(allRayParams)

    // 光線の描画
    useEffect(() => {
        if (calc !== undefined) {
            allRayParams.map((param, index) => {
                // 光線 (屈折計算がまだ)
                calc.setExpression({
                    id: 'ray1' + index,
                    latex: `
                    ${param[3]}(y-${param[1]})=${param[4]}(x-${param[0]})
                        \\left\\{${param[0]} \\le x \\le ${param[0] + param[2] * param[3]}\\right\\}
                    `,
                });
            })
        }
    }, [allRayParams]);
    /**
    // 光線の描画
    useEffect(() => {
        if (calc !== undefined) {
            allLensParams.map((param, index) => {
                // 光線 (屈折計算がまだ)
                // 係数 T
                RayTraceT(param)
                console.log(index, sP)
                calc.setExpression({
                    id: 'ray1' + index,
                    latex: `
                    ${dV[0]}(y-${sP[1]})=${dV[1]}(x-${sP[0]})
                        \\left\\{${sP[0]} \\le x \\le ${sP[0] + T * dV[0]}\\right\\}
                    `,
                });
            })
        }
    }, [allLensParams, T, setsP, dV]);
    */

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
