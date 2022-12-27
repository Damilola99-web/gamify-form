import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SwitchStep from "../components/SwitchStep";
import { getFormData, setAddons } from "../slices/formSlice";
import { monthlyAddons, yearlyAddons } from "../utils/formTypes";
import Tick from "../assets/images/icon-checkmark.svg";

export default function PickAddons() {
	const dispatch = useDispatch();
	const form = useSelector(getFormData);
	const planType = form.planType;
	const addons = planType === "monthly" ? monthlyAddons : yearlyAddons;
	const arr = form.addons.map((addon) => addon.id);
	const [selectedAddons, setSelectedAddons] = useState(arr);

	const handleNext = () => {
		dispatch(setAddons(selectedAddons));
	};
	return (
		<div className="flex flex-col w-full lg:w-[90%] max-w-[500px]">
			<div>
				{" "}
				<h1 className=" text-3xl text-blue-800 font-bold my-2">
					Pick add-ons
				</h1>
				<p className=" my-1 text-lg text-gray-600">
					Add-ons help enhance your gaming experience.
				</p>
			</div>

			<div className=" w-full my-6">
				{addons.map((addon) => (
					<div
						style={
							selectedAddons.includes(addon.id)
								? {
										borderColor: "blue",
										backgroundColor: "rgba(0,0,255, 0.1)",
								  }
								: {}
						}
						key={addon.id}
						className=" w-full space-y-4 md:space-y-0 md:space-x-6 flex flex-col md:flex-row p-6 justify-between shadow-lg border-2 rounded-md my-3 items-center hover:bg-blue-700/10 hover:border-blue-700 group cursor-pointer"
						onClick={() => {
							if (selectedAddons.includes(addon.id)) {
								const filtered = selectedAddons.filter(
									(adon) => {
										return addon.id !== adon;
									}
								);
								setSelectedAddons(filtered);
							} else {
								setSelectedAddons((prev) => [
									...prev,
									addon.id,
								]);
							}
						}}
					>
						<div className=" flex  space-x-4 items-center">
							<span
								style={
									selectedAddons.includes(addon.id)
										? {
												borderColor: "blue",
												backgroundColor: "blue",
										  }
										: {}
								}
								className="check w-5 h-5 flex items-center justify-center rounded-md border-2 group-hover:border-blue-700"
							>
								{selectedAddons.includes(addon.id) && (
									<img src={Tick} alt="icon-tick" />
								)}
							</span>
							<div className=" flex flex-col">
								<p className="text-lg font-bold text-blue-700">
									{addon.name}
								</p>
								<p className=" text-gray-500 text-base">
									{addon.description}
								</p>
							</div>
						</div>
						<p className=" text-blue-700 font-bold md:font-normal">
							+${addon.price}/
							{planType === "monthly" ? "mo" : "yr"}
						</p>
					</div>
				))}
			</div>

			<SwitchStep isStepFilled={true} handleNext={handleNext} />
		</div>
	);
}
