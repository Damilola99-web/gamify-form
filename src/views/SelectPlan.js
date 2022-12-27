import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PlanContainer from "../components/PlanContainer";
import SwitchStep from "../components/SwitchStep";
import { getFormData, setPlan, setPlanType } from "../slices/formSlice";

export default function SelectPlan() {
	const dispatch = useDispatch();
	const form = useSelector(getFormData);
	const [plan, setplan] = useState(form.plan);
	const planType = form.planType;

	const isStepFilled = Boolean(plan);

	const handleNext = () => {
		dispatch(setPlan(plan));
	};
	const togglePlanType = () => {
		if (planType === "monthly") {
			dispatch(setPlanType("yearly"));
		} else if (planType === "yearly") {
			dispatch(setPlanType("monthly"));
		}
	};
	return (
		<div className="flex flex-col w-full lg:w-[90%] max-w-[500px]">
			<div>
				{" "}
				<h1 className=" text-3xl text-blue-800 font-bold my-2">
					Select your plan
				</h1>
				<p className=" my-1 text-lg text-gray-600">
					You have the option of monthly or yearly billing.
				</p>
			</div>

			<PlanContainer
				plan={plan}
				key={plan}
				planType={planType}
				setplan={setplan}
			/>

			<div className=" w-full p-4 bg-slate-100 flex justify-center space-x-4">
				<p>Monthly</p>
				<div
					onClick={togglePlanType}
					className=" w-16 h-6 top bg-blue-700 rounded-full p-1"
				>
					<span
						style={
							planType === "monthly"
								? { transform: "translateX(0)" }
								: { transform : "translateX(40px)" }
						}
						className=" w-4 h-4 rounded-full bg-white flex transitionn"
					></span>
				</div>
				<p>Yearly</p>
			</div>
			<SwitchStep isStepFilled={isStepFilled} handleNext={handleNext} />
		</div>
	);
}
