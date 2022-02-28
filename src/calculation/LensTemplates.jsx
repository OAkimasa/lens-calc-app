import { PrimaryButton } from "../components/atoms/button/PrimaryButton"

export const LensTemplates = () => {
    return (
        <div>
            <div className="ml-32 lg:ml-48">
                <p
                    className="mb-2 text-md lg:text-lg font-medium text-gray-700 dark:text-gray-300"
                >- Lens Templates -</p>
            </div>
            <div className="grid grid-cols-2 gap-4 ml-6 mr-6 lg:ml-24">
                <PrimaryButton>
                    <p
                        className="mb-0 text-sm lg:text-md lg:text-lg font-medium text-gray-100 dark:text-gray-300"
                    >- Water Ball -</p>
                </PrimaryButton>
                <PrimaryButton>
                    <p
                        className="mb-0 text-sm lg:text-md lg:text-lg font-medium text-gray-100 dark:text-gray-300"
                    >- Lens Templates -</p>
                </PrimaryButton>
                <PrimaryButton>
                    <p
                        className="mb-0 text-sm lg:text-md lg:text-lg font-medium text-gray-100 dark:text-gray-300"
                    >- Lens Templates -</p>
                </PrimaryButton>
                <PrimaryButton>
                    <p
                        className="mb-0 text-sm lg:text-md lg:text-lg font-medium text-gray-100 dark:text-gray-300"
                    >- Lens Templates -</p>
                </PrimaryButton>
            </div>
        </div>
    )
}