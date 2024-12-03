import { ComponentProps } from "react";

interface ComponentsInputProps {
    label: string;
    value?: string  ;
}


type InputProps = ComponentProps<"input">

type PropsCombination = InputProps & ComponentsInputProps;

export default function ComponentsInput({label,value, placeholder}:PropsCombination) {
    return(
        <div className="flex flex-col gap-2 w-full">
            <label className="text-white text-lg font-bold">{label}</label>
            <input placeholder={`${placeholder}`} className="bg-white p-2 cursor-pointer bg-opacity-20 outline-none backdrop-blur-lg shadow-lg rounded-lg w-full " type="text" value={value}/>
        </div>
    )
}