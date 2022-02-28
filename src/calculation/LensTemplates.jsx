import { PrimaryButton } from "../components/atoms/button/PrimaryButton"

export const LensTemplates = ({
    setWaterBallParams,
    set135mmLensParams,
    setSemicircle1Params,
    setSemicircle2Params,
    deleteAllExpression
}) => {
    return (
        <div>
            <div className="ml-32 lg:ml-48">
                <p
                    className="mb-2 text-md lg:text-lg font-medium text-gray-700 dark:text-gray-300"
                >- Lens Templates -</p>
            </div>
            <div className="grid grid-cols-2 gap-4 ml-6 mr-6 lg:ml-24">
                <PrimaryButton onClick={setSemicircle1Params}>
                    <p
                        className="mb-0 text-sm lg:text-md lg:text-lg font-medium text-gray-100 dark:text-gray-300"
                    >- Semicircle 1 -</p>
                </PrimaryButton>
                <PrimaryButton onClick={setSemicircle2Params}>
                    <p
                        className="mb-0 text-sm lg:text-md lg:text-lg font-medium text-gray-100 dark:text-gray-300"
                    >- Semicircle 2 -</p>
                </PrimaryButton>
                <PrimaryButton onClick={setWaterBallParams}>
                    <p
                        className="mb-0 text-sm lg:text-md lg:text-lg font-medium text-gray-100 dark:text-gray-300"
                    >- Water Ball -</p>
                </PrimaryButton>
                <PrimaryButton onClick={set135mmLensParams}>
                    <p
                        className="mb-0 text-sm lg:text-md lg:text-lg font-medium text-gray-100 dark:text-gray-300"
                    >- 135mm Lens -</p>
                </PrimaryButton>
            </div>
            <div className="ml-32 lg:ml-48">
                <PrimaryButton onClick={deleteAllExpression}>
                    <p
                        className="mb-0 text-sm lg:text-md lg:text-lg font-medium text-gray-100 dark:text-gray-300"
                    >- Delete All -</p>
                </PrimaryButton>
            </div>
        </div>
    )
}