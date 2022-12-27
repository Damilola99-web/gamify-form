import { useSelector } from "react-redux";
import SidebarMobile from "../components/SidebarMobile";
// import SwitchStepMobile from "../components/SwitchStepMobile";
import { getFormData } from "../slices/formSlice";
import FinishingUp from "./FinishingUp";
import PersonalInfo from "./PersonalInfo";
import PickAddons from "./PickAddons";
import SelectPlan from "./SelectPlan";
import Template from "./Template";
import ThankYou from "./ThankYou";

export default function CurrentStep() {
	const { currentStep } = useSelector(getFormData);
	return (
		<div className="w-full h-auto min-h-screen flex flex-col lg:flex-row lg:items-center justify-between lg:justify-center bg-slate-300 lg:py-20">
			<div className=" w-full flex flex-col lg:flex-row lg:items-center justify-between lg:justify-center">
				<SidebarMobile />
				<div className=" p-6 lg:p-0 -mt-28 lg:mt-0 w-full lg:w-[75%] max-w-[1000px] ">
					{" "}
					{currentStep === 1 && <Template step={<PersonalInfo />} />}
					{currentStep === 2 && <Template step={<SelectPlan />} />}
					{currentStep === 3 && <Template step={<PickAddons />} />}
					{currentStep === 4 && <Template step={<FinishingUp />} />}
					{currentStep === 5 && <Template step={<ThankYou />} />}
				</div>
			</div>
			{/* <SwitchStepMobile handleNext={} isStepFilled={} /> */}
		</div>
	);
}
