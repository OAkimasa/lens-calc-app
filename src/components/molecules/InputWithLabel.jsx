import { Input } from "../atoms/input/Input";
import { PrimaryLabel } from "../atoms/label/PrimaryLabel";

export const InputWithLabel = (props) => {
    const { onChange, placeholder = "", value, children } = props;
    return (
        <div class="my-2">
            <PrimaryLabel>{children}</PrimaryLabel>
            <Input
                onChange={event => onChange(event)}
                placeholder={placeholder}
                value={value}
            />
        </div>
    )
}