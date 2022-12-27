import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	clearState,
	finish,
	getFormData,
	goBack,
	nextStep,
} from "../slices/formSlice";

export default function SwitchStep({ isStepFilled, handleNext }) {
	const dispatch = useDispatch();

	const handleDone = () => {
		dispatch(finish());
	};
	const close = () => {
		dispatch(clearState());
	};

	const { currentStep } = useSelector(getFormData);
	return (
		<div className=" w-full justify-between flex lg:flex self-end mt-10 items-center">
			{currentStep > 1 && currentStep < 5 && (
				<p
					className=" cursor-pointer"
					onClick={() => dispatch(goBack())}
				>
					Go Back
				</p>
			)}
			{(currentStep <= 1 || currentStep === 5) && <p></p>}
			{currentStep < 4 && (
				<button
					disabled={!isStepFilled}
					onClick={() => {
						handleNext();
						if (currentStep !== 1) {
							dispatch(nextStep());
						}
					}}
					className="disabled:bg-gray-600/50 px-6 py-3 rounded-md text-white bg-slate-800 cursor-pointer"
				>
					Next Step
				</button>
			)}
			{currentStep === 4 && (
				<button
					onClick={handleDone}
					className=" px-6 py-3 rounded-md bg-blue-700 text-white cursor-pointer"
				>
					Confirm
				</button>
			)}
			{currentStep === 5 && (
				<button
					onClick={close}
					className=" p-4 bg-blue-700 text-white cursor-pointer"
				>
					Close
				</button>
			)}
		</div>
	);
}
