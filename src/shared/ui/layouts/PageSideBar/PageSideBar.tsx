import {CustomRangeSlider} from "../../RangeSlider/RangeSlider.tsx";
import {Checkbox} from "../../Checkbox";

export const PageSideBar = () => {
    return (
        <div className="border-r border-green h-[100vh] px-4 flex flex-col gap-2">
            <h2>Filter</h2>
           <CustomRangeSlider min={50} max={1000}/>

            <Checkbox id="first" isChecked={true} label="Kozmetika"/>
            <Checkbox id="first" isChecked={true} label="Kozmetika"/>
            <Checkbox id="first" isChecked={true} label="Kozmetika"/>
            <Checkbox id="first" isChecked={true} label="Kozmetika"/>
            <Checkbox id="first" isChecked={true} label="Kozmetika"/>
            <Checkbox id="first" isChecked={true} label="Kozmetika"/>
            <Checkbox id="first" isChecked={true} label="Kozmetika"/>
            <Checkbox id="first" isChecked={true} label="Kozmetika"/>
            <Checkbox id="first" isChecked={true} label="Kozmetika"/>
            <Checkbox id="first" isChecked={true} label="Kozmetika"/>

        </div>
    )
}