import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SwitchStep from "../components/SwitchStep";
import { getFormData, nextStep, setPersonalInfo } from "../slices/formSlice";
import validator from "validator";

export default function PersonalInfo() {
	const dispatch = useDispatch();
	const form = useSelector(getFormData);
	const [name, setName] = useState(form.personalInfo.name);
	const [email, setEmail] = useState(form.personalInfo.email);
	const [errors, setErrors] = useState([]);

	const [phoneNumber, setPhoneNumber] = useState(
		form.personalInfo.phoneNumber
	);

	const isStepFilled =
		Boolean(name) && Boolean(email) && Boolean(phoneNumber);

	const validateAndSave = () => {
		let error = [];
		if (name.trim().length < 3) {
			error.push("name");
		}
		if (!validator.isEmail(email)) {
			error.push("email");
		}
		if (phoneNumber.length < 11 || !phoneNumber.includes("+")) {
			error.push("phoneNumber");
		}
		setErrors(error);

		if (error.length === 0) {
			dispatch(setPersonalInfo({ name, email, phoneNumber }));
			setErrors([]);
			dispatch(nextStep());
		}
	};

	const handleNext = () => {
		validateAndSave();
	};

	return (
		<div className="flex flex-col justify-between w-full lg:w-[90%] max-w-[500px]">
			<div>
				{" "}
				<h1 className=" text-3xl text-blue-800 font-bold my-2">
					Personal info
				</h1>
				<p className=" my-1 text-lg text-gray-600">
					Please provide your name, email address and phone number.
				</p>
			</div>

			<div className=" flex flex-col mt-10 space-y-4">
				<label className=" flex flex-col space-y-3">
					<span
						style={errors.includes("name") ? { color: "red" } : {}}
						className=" text-blue-800 text-lg"
					>
						Name{" "}
						{errors.includes("name")
							? "(Name must be at least 3 characters)"
							: ""}
					</span>
					<input
						style={
							errors.includes("name")
								? { borderColor: "red", color: "red" }
								: {}
						}
						value={name}
						onChange={(e) => setName(e.target.value)}
						className=" w-full outline-none border-[2px] border-gray-600 hover:border-blue-800 transition px-6 py-2 rounded-md hover:border-2"
						type="text"
						placeholder="e.g. Wahab Abdul-Rasheed"
					/>
				</label>
				<label className=" flex flex-col space-y-3">
					<span
						style={errors.includes("email") ? { color: "red" } : {}}
						className=" text-blue-800 text-lg"
					>
						Email{" "}
						{errors.includes("email")
							? "(Enter a valid Email)"
							: ""}
					</span>
					<input
						style={
							errors.includes("email")
								? { borderColor: "red", color: "red" }
								: {}
						}
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className=" w-full outline-none border-[2px] border-gray-600 hover:border-blue-800 transition px-6 py-2 rounded-md hover:border-2"
						type="email"
						placeholder="e.g. rasheedw622@gmail.com"
					/>
				</label>
				<label className=" flex flex-col space-y-3">
					<span
						style={
							errors.includes("phoneNumber")
								? { color: "red" }
								: {}
						}
						className=" text-blue-800 text-lg"
					>
						Phone Number{" "}
						{errors.includes("phoneNumber")
							? "(Enter a valid Tel. No.)"
							: ""}
					</span>
					<input
						style={
							errors.includes("phoneNumber")
								? { borderColor: "red", color: "red" }
								: {}
						}
						value={phoneNumber}
						onChange={(e) => setPhoneNumber(e.target.value)}
						className=" w-full outline-none border-[2px] border-gray-600 hover:border-blue-800 transition px-6 py-2 rounded-md hover:border-2"
						type="text"
						placeholder="e.g. +234 704 5993 767"
					/>
				</label>
			</div>
			<SwitchStep isStepFilled={isStepFilled} handleNext={handleNext} />
		</div>
	);
}
