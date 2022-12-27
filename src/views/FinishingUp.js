import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SwitchStep from "../components/SwitchStep";
import { changeStep, getFormData } from "../slices/formSlice";

export default function FinishingUp() {
	const formData = useSelector(getFormData);
	const dispatch = useDispatch();
	const changePlan = () => {
		dispatch(changeStep(2));
	};
	const addonsPriceArr = formData.addons.map((addon) => addon.price);

	const addonsPrice = addonsPriceArr.reduce((prev, curr) => prev + curr);

	const totalPrice = formData.plan.price + addonsPrice;
	return (
		<div className="flex flex-col w-full lg:w-[90%] max-w-[500px]">
			<div>
				{" "}
				<h1 className=" text-3xl text-blue-800 font-bold my-2">
					Finishing up
				</h1>
				<p className=" my-1 text-lg text-gray-600">
					Double-check everything looks OK before confirming.
				</p>
			</div>

			<div className=" w-full my-6 bg-blue-50 rounded-lg shadow-lg p-4">
				<div className=" flex justify-between items-center">
					<div className=" flex flex-col space-y-2">
						<p className=" capitalize text-base font-bold text-blue-700">
							{formData.plan.name} ({formData.planType})
						</p>
						<p
							onClick={changePlan}
							className=" text-sm text-gray-500 underline"
						>
							Change
						</p>
					</div>
					<p className=" text-sm font-bold text-blue-700">
						${formData.plan.price}/
						{formData.planType === "monthly" ? "mo" : "yr"}
					</p>
				</div>
				<hr className=" my-4 text-gray-600 bg-gray-600" />

				<div className=" w-full my-4">
					<div className=" w-full">
						{formData.addons.map((addon) => (
							<div key={addon.name} className=" w-full flex items-center justify-between my-3">
								<p className=" text-lg text-gray-500">
									{addon.name}
								</p>
								<p className=" text-blue-700 font-semibold">
									+${addon.price}/
									{formData.planType === "monthly"
										? "mo"
										: "yr"}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className=" w-full flex items-center justify-between px-6">
				<p className=" text-xl text-gray-500">
					Total(per{" "}
					{formData.planType === "monthly" ? "month" : "year"})
				</p>
				<p className=" text-lg font-bold text-blue-700">
					${totalPrice}/{formData.planType === "monthly" ? "mo" : "yr"}
				</p>
			</div>

			<SwitchStep isStepFilled={true} handleNext={() => {}} />
		</div>
	);
}
