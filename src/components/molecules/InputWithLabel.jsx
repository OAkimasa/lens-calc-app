import { memo } from "react";
import { Input } from "../atoms/input/Input";
import { PrimaryLabel } from "../atoms/label/PrimaryLabel";

export const InputWithLabel = memo((props) => {
    const { onChange, placeholder = "", value, children } = props;
    return (
        <div className="my-2">
            <div className="flex justify-center">
                <PrimaryLabel>{children}</PrimaryLabel>
            </div>
            <Input
                onChange={event => onChange(event)}
                placeholder={placeholder}
                value={value}
            />
        </div>
    )
});