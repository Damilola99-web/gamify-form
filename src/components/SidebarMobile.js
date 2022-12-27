import React from "react";
import { useSelector } from "react-redux";
import { getFormData } from "../slices/formSlice";

export default function SidebarMobile() {
	const { currentStep } = useSelector(getFormData);
	const steps = [1, 2, 3, 4];
	return (
		<div className=" sidebarm w-full h-[200px] lg:py-20 lg:hidden flex justify-center space-x-4 pt-10">
			{steps.map((step) => (
				<div
					key={step}
					style={
						currentStep === step
							? {
									backgroundColor: "hsl(206, 94%, 87%)",
									borderColor: "hsl(206, 94%, 87%)",
									color: "blue",
							  }
							: {}
					}
					className=" w-8 h-8 rounded-full border-2 border-white text-white flex items-center justify-center"
				>
					{step}
				</div>
			))}
		</div>
	);
}
