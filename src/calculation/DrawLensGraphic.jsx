import { useEffect } from "react";
import Desmos from "desmos";

export const DrawLensGraphic = ({ allLensParams, allRayParams, calc, setCalc }) => {
    //console.log(allLensParams);

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
            bottom: -5,
            top: 5,
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
                    if (param[0] == 1) {
                        calc.setExpression({
                            id: 'pointL' + index,
                            color: Desmos.Colors.BLACK,
                            hidden: true,
                            latex: `(${param[3]}, ${param[4]}*1.3)`,
                            label: `air←`,
                            showLabel: true,
                            labelSize: Desmos.LabelSizes.SMALL,
                            labelOrientation: Desmos.LabelOrientations.LEFT,
                            dragMode: Desmos.DragModes.NONE,
                        });
                    } else if (param[1] == 1) {
                        calc.setExpression({
                            id: 'pointL' + index,
                            color: Desmos.Colors.BLACK,
                            hidden: true,
                            latex: `(${param[3]}, ${param[4]}*1.2)`,
                            label: `→air`,
                            showLabel: true,
                            labelSize: Desmos.LabelSizes.SMALL,
                            labelOrientation: Desmos.LabelOrientations.RIGHT,
                            dragMode: Desmos.DragModes.NONE,
                        });
                    }
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
                    if (param[0] == 1) {
                        calc.setExpression({
                            id: 'pointR' + index,
                            color: Desmos.Colors.BLACK,
                            hidden: true,
                            latex: `(${param[3]}, -${param[4]}*1.7)`,
                            label: `air←`,
                            showLabel: true,
                            labelSize: Desmos.LabelSizes.SMALL,
                            labelOrientation: Desmos.LabelOrientations.LEFT,
                            dragMode: Desmos.DragModes.NONE,
                        });
                    } else if (param[1] == 1) {
                        calc.setExpression({
                            id: 'pointR' + index,
                            color: Desmos.Colors.BLACK,
                            hidden: true,
                            latex: `(${param[3]}, -${param[4]}*1.1)`,
                            label: `→air`,
                            showLabel: true,
                            labelSize: Desmos.LabelSizes.SMALL,
                            labelOrientation: Desmos.LabelOrientations.RIGHT,
                            dragMode: Desmos.DragModes.NONE,
                        });
                    }
                };
            })
        }
    }, [allLensParams]);

    // 光線のパラメーターは、[sP0, sP1, T, dV0, dV1]
    const roopY = [0.65, -0.4, -0.15, 0.15, 0.4, -0.65]
    // 6光線の光路長
    const allOpticalPathLength = []
    const RayTraceTTT = (forIndex, roopValue) => {
        // インデックス指定のため
        const lensParamsLength = allLensParams.length
        // 1光線の光路長
        const opticalPathLength = [0]
        allLensParams.map((params, index) => {
            // [sP0, sP1, T, dV0, dV1]のかたまりを作る
            const paramBox = [];
            // 変数宣言
            const sP = [];
            const dV = [];
            const nV = [];
            const normnV = [];
            const normdV = [];
            const paramA = [];
            const cos_t_in = [];
            const cos_t_out = [];
            const sin_t_in = [];
            const sin_t_out = [];
            const paramB = [];
            const outdV = [];
            const normoutdV = [];

            // ---------------始点 の計算 start--------------------------
            if (index == 0) {
                // 初期値
                paramBox[0] = -10;
                paramBox[1] = params[4] * roopValue;
                sP[0] = -10;
                sP[1] = params[4] * roopValue;
            } else {
                // 前回の終点を引き継ぐ
                paramBox[0] = allRayParams[lensParamsLength * forIndex + index - 1][0]
                    + allRayParams[lensParamsLength * forIndex + index - 1][2]
                    * allRayParams[lensParamsLength * forIndex + index - 1][3];
                paramBox[1] = allRayParams[lensParamsLength * forIndex + index - 1][1]
                    + allRayParams[lensParamsLength * forIndex + index - 1][2]
                    * allRayParams[lensParamsLength * forIndex + index - 1][4];
                sP[0] = allRayParams[lensParamsLength * forIndex + index - 1][0]
                    + allRayParams[lensParamsLength * forIndex + index - 1][2]
                    * allRayParams[lensParamsLength * forIndex + index - 1][3];
                sP[1] = allRayParams[lensParamsLength * forIndex + index - 1][1]
                    + allRayParams[lensParamsLength * forIndex + index - 1][2]
                    * allRayParams[lensParamsLength * forIndex + index - 1][4];
            }
            // ---------------始点 の計算 end--------------------------

            // ---------------方向ベクトル の計算 start--------------------------
            if (index == 0) {
                // 初期値
                paramBox[3] = 1;
                paramBox[4] = 0;
                dV[0] = 1;
                dV[1] = 0;
                //console.log("dV=", index, dV)
            } else {
                // ---------------------------------------------------
                // 屈折計算 start--------------------------------------

                // step1 法線ベクトルの計算----------------(平面の場合は別処理したほうが良さそう r5000が境界ぽい)
                nV[0] = (2 / allLensParams[index - 1][2] ** 2) * (sP[0] - allLensParams[index - 1][2] - allLensParams[index - 1][3])
                nV[1] = (2 / allLensParams[index - 1][2] ** 2) * (sP[1])
                // step1 end------------------------------

                // step2 スネルの法則----------------------
                // まず直前の方向ベクトル
                dV[0] = allRayParams[lensParamsLength * forIndex + index - 1][3]
                dV[1] = allRayParams[lensParamsLength * forIndex + index - 1][4]
                // 正規化
                normnV[0] = Math.sqrt(nV[0] ** 2 + nV[1] ** 2)
                nV[0] = nV[0] / normnV[0]
                nV[1] = nV[1] / normnV[0]
                normdV[0] = Math.sqrt(dV[0] ** 2 + dV[1] ** 2)
                dV[0] = dV[0] / normdV[0]
                dV[1] = dV[1] / normdV[0]
                //console.log("dV=", index, dV)
                //console.log(paramA)
                if (allLensParams[index - 1][2] >= 0) {
                    // 左に凸の場合
                    // 係数 A
                    paramA[0] = allLensParams[index - 1][0] / allLensParams[index - 1][1]
                    // 入射角
                    cos_t_in[0] = -(dV[0] * nV[0] + dV[1] * nV[1])
                } else {
                    // 右に凸の場合
                    // 係数 A
                    paramA[0] = allLensParams[index - 1][1] / allLensParams[index - 1][0]
                    // 入射角
                    cos_t_in[0] = (dV[0] * nV[0] + dV[1] * nV[1])
                }
                // 量子化誤差対策
                if (cos_t_in[0] < -1.) {
                    cos_t_in[0] = -1.
                } else if (cos_t_in[0] > 1.) {
                    cos_t_in[0] = 1.
                }
                //console.log(cos_t_in)
                // スネルの法則
                sin_t_in[0] = Math.sqrt(1.0 - cos_t_in[0] ** 2)
                sin_t_out[0] = sin_t_in[0] * paramA[0]
                if (sin_t_out[0] > 1.0) {
                    // 全反射
                    outdV[0] = 0
                    outdV[1] = 0
                }
                cos_t_out[0] = Math.sqrt(1.0 - sin_t_out[0] ** 2)
                //console.log(cos_t_out)
                // 係数 B
                paramB[0] = -cos_t_out[0] + paramA[0] * cos_t_in[0]
                //console.log(paramB)
                // 出射方向ベクトル
                outdV[0] = paramA[0] * dV[0] + paramB[0] * nV[0]
                outdV[1] = paramA[0] * dV[1] + paramB[0] * nV[1]
                //console.log(outdV)
                // 正規化
                normoutdV[0] = Math.sqrt(outdV[0] ** 2 + outdV[1] ** 2)
                outdV[0] = outdV[0] / normoutdV[0]
                outdV[1] = outdV[1] / normoutdV[0]
                //console.log(outdV)
                // step2 end------------------------------

                paramBox[3] = outdV[0];
                paramBox[4] = outdV[1];
                dV[0] = outdV[0];
                dV[1] = outdV[1];
                // 屈折計算 end----------------------------------------
                // ---------------------------------------------------
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
                allRayParams = [...allRayParams, paramBox];
            } else {
                paramBox[2] = ((-B + Math.sqrt(B ** 2 - A * C)) / A)
                allRayParams = [...allRayParams, paramBox];
            }
            // ---------------係数 T の計算 end--------------------------
            // ---------------光路長の計算 start-------------------------
            if (Math.sign(paramBox[1])===Math.sign(paramBox[1]+paramBox[2]*paramBox[4])) {
                opticalPathLength[0] = opticalPathLength[0]+paramBox[2]*allLensParams[index][0]
            } else {
                // 焦点の場合は光軸との交点までを足す
                const lastRayLength = (-paramBox[1]/paramBox[4])*allLensParams[index][0]
                opticalPathLength[0] = opticalPathLength[0]+lastRayLength
                allOpticalPathLength.push(opticalPathLength)
            }
            // ---------------光路長の計算 end---------------------------
        })
    }

    for (const [forIndex, roopValue] of roopY.entries()) {
        RayTraceTTT(forIndex, roopValue)
    }

    // 確認
    console.log("allOpticalPathLength =",allOpticalPathLength)
    //const allRayParams = RayTraceTTT(allLensParams);
    //console.log(allLensParams)
    //console.log(allRayParams)

    // 光線の描画
    useEffect(() => {
        if (calc !== undefined) {
            allRayParams.map((param, index) => {
                // 光線
                calc.setExpression({
                    id: 'ray' + index,
                    color: Desmos.Colors.ORANGE,
                    latex: `
                    ${param[3]}(y-${param[1]})=${param[4]}(x-${param[0]})
                        \\left\\{${param[0]} \\le x \\le ${param[0] + param[2] * param[3]}\\right\\}
                    `,
                });
            })
        }
    }, [allLensParams, allRayParams]);

    // レスポンシブ対応
    var windowSize = window.innerWidth;
    //console.log(windowSize)
    if (windowSize < 400) {
        return (
            <>
                <div className="mx-6 my-8">
                    <div className="DrawLensGraphic">
                        <div
                            id="calculator"
                            style={{
                                width: "100%",
                                height: "170px",
                            }}
                        ></div>
                    </div>
                </div>
            </>
        )
    } else if (windowSize < 900) {
        return (
            <>
                <div className="mx-6 my-8">
                    <div className="DrawLensGraphic">
                        <div
                            id="calculator"
                            style={{
                                width: "100%",
                                height: "390px",
                            }}
                        ></div>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="mx-6 my-8">
                    <div className="DrawLensGraphic">
                        <div
                            id="calculator"
                            style={{
                                width: "1000px",
                                height: "500px",
                            }}
                        ></div>
                    </div>
                </div>
            </>
        )
    }
};
