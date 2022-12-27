import React from "react";
import { useSelector } from "react-redux";
import { getFormData } from "../slices/formSlice";

export default function Sidebar() {
	const { currentStep } = useSelector(getFormData);

	const steps = [
		{ no: 1, detail: "YOUR INFO" },
		{ no: 2, detail: "SELECT PLAN" },
		{ no: 3, detail: "ADD-ONS" },
		{ no: 4, detail: "SUMMARY" },
	];

	return (
		<div>
			<div className=" hidden lg:flex flex-col sidebar w-[280px] px-8 py-12 rounded-lg h-full space-y-8">
				{steps.map((step) => (
					<div
						key={step.no}
						className=" flex space-x-4 text-white items-center"
					>
						<div
							className=" w-8 h-8 rounded-full border-2 border-white text-white flex items-center justify-center"
							style={
								currentStep === step.no
									? {
											backgroundColor:
												"hsl(206, 94%, 87%)",
											borderColor: "hsl(206, 94%, 87%)",
											color: "blue",
									  }
									: {}
							}
						>
							{step.no}
						</div>
						<div>
							<p className=" text-sm text-slate-400">
								STEP {step.no}
							</p>
							<h1 className=" text-base">{step.detail}</h1>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
