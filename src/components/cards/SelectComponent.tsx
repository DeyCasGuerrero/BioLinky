import { ComponentProps } from "react";

interface SelectComponentProps {
    names:string[];
    
}

type SelectProps = ComponentProps<"select">

type PropsCombination = SelectComponentProps & SelectProps;

export default function SelectComponent({names}:PropsCombination) {
    return(
        <div className="flex flex-col gap-2 w-full">
            <label className="text-white text-lg font-bold">Select Name </label>
            <select className="bg-white outline-none p-2 cursor-pointer bg-opacity-20 backdrop-blur-lg shadow-lg rounded-lg w-full ">
                {names.map((name, index)=>(
                    <option className="space-y-4" key={index} value={name}>{name}</option>
                ))}
            </select>
        </div>
    )
}