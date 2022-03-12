import { PrimaryButton } from "../components/atoms/button/PrimaryButton"
import { SecondaryButton } from "../components/atoms/button/SecondaryButton"
import Semicircle1Pic from "../images/Semicircle1.png"
import Semicircle2Pic from "../images/Semicircle2.png"
import WaterBallPic from "../images/WaterBall.png"
import lens135mmPic from "../images/135mmLens.png"

export const LensTemplates = ({
    setWaterBallParams,
    set135mmLensParams,
    setSemicircle1Params,
    setSemicircle2Params
}) => {
    return (
        <div className="flex justify-center w-full bg-gray-100 lg:bg-white">
            <details open>
                <summary className="flex justify-center h-12 w-screen lg:w-full hover:bg-gray-300 leading-10 text-md lg:text-lg font-medium text-gray-700 dark:text-gray-300">
                    <p className="leading-10">- - - Lens Templates - - -</p>
                </summary>
                <div className="grid grid-cols-2 gap-4 ml-6 mr-6 lg:ml-10">
                    <div className="">
                        <img src={Semicircle1Pic} onClick={setSemicircle1Params} />
                        <div className="flex justify-center">
                            <PrimaryButton onClick={setSemicircle1Params}>
                                <p
                                    className="mb-0 text-sm lg:text-md lg:text-lg font-medium text-gray-100 dark:text-gray-300"
                                >- Semicircle 1 -</p>
                            </PrimaryButton>
                        </div>
                    </div>
                    <div>
                        <img src={Semicircle2Pic} onClick={setSemicircle2Params} />
                        <div className="flex justify-center">
                            <PrimaryButton onClick={setSemicircle2Params}>
                                <p
                                    className="mb-0 text-sm lg:text-md lg:text-lg font-medium text-gray-100 dark:text-gray-300"
                                >- Semicircle 2 -</p>
                            </PrimaryButton>
                        </div>
                    </div>
                    <div>
                        <img src={WaterBallPic} onClick={setWaterBallParams} />
                        <div className="flex justify-center">
                            <PrimaryButton onClick={setWaterBallParams}>
                                <p
                                    className="mb-0 text-sm lg:text-md lg:text-lg font-medium text-gray-100 dark:text-gray-300"
                                >- Water Ball -</p>
                            </PrimaryButton>
                        </div>
                    </div>
                    <div>
                        <img src={lens135mmPic} onClick={set135mmLensParams} />
                        <div className="flex justify-center">
                            <PrimaryButton onClick={set135mmLensParams}>
                                <p
                                    className="mb-0 text-sm lg:text-md lg:text-lg font-medium text-gray-100 dark:text-gray-300"
                                >- 135mm Lens -</p>
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            </details>
        </div>
    )
}