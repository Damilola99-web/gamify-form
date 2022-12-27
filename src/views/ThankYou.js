import React from "react";
import { useDispatch } from "react-redux";
import thankYou from "../assets/images/icon-thank-you.svg";
import { clearState } from "../slices/formSlice";

export default function ThankYou() {
	const dispatch = useDispatch();
	return (
		<div className=" w-full lg:w-[80%] flex flex-col items-center justify-center h-auto md:min-h-[550px] space-y-4 py-12">
			<img src={thankYou} alt="Thank you" />
			<p className=" text-2xl font-bold text-blue-700">Thank you!</p>
			<p className=" text-gray-700 text-center max-w-[490px]">
				Thanks for confirming your subscription! We hope you have fun
				using our platform. If you ever need support, please feel free
				to email us at support@loremgaming.com.
			</p>
			<button
				onClick={() => dispatch(clearState())}
				className=" hidden lg:flex px-6 py-3 rounded-md bg-blue-700 text-white"
			>
				Close
			</button>
		</div>
	);
}
