import { createSlice } from "@reduxjs/toolkit";
import {
	monthlyAddons,
	monthlyPlans,
	personalInfoC,
	yearlyAddons,
} from "../utils/formTypes";

const initialState = {
	currentStep: 1,
	personalInfo: personalInfoC,
	planType: "monthly",
	plan: monthlyPlans[1],
	addons: [],
};

const formSlice = createSlice({
	name: "form",
	initialState,
	reducers: {
		nextStep(state, action) {
			const currentStep = state.currentStep;
			if (currentStep < 4) {
				state.currentStep = currentStep + 1;
			}
		},
		goBack(state, action) {
			const currentStep = state.currentStep;
			if (currentStep > 1) {
				state.currentStep = currentStep - 1;
			}
		},
		changeStep(state, action) {
			state.currentStep = action.payload;
		},
		setPersonalInfo(state, action) {
			state.personalInfo = action.payload;
		},
		setPlanType(state, action) {
			state.planType = action.payload;
		},
		setPlan(state, action) {
			state.plan = action.payload;
		},
		setAddons(state, action) {
			const addons = [];
			const addonList = action.payload;

			if (state.planType === "monthly") {
				addonList.forEach((addon) => {
					addons.push(monthlyAddons[addon]);
				});
			} else if (state.planType === "yearly") {
				addonList.forEach((addon) => {
					addons.push(yearlyAddons[addon]);
				});
			}

			state.addons = addons;
		},
		finish(state, action) {
			state.currentStep = 5;
		},
		clearState(state, action) {
			state.currentStep = 1;
			state.addons = [];
			state.planType = "monthly";
			state.plan = monthlyPlans[1];
			state.personalInfo = personalInfoC;
		},
	},
});

export default formSlice.reducer;
export const getFormData = (state) => state.form;
export const {
	goBack,
	nextStep,
	setAddons,
	setPersonalInfo,
	setPlan,
	setPlanType,
	clearState,
	finish,
	changeStep,
} = formSlice.actions;
