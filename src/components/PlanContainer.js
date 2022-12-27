import React, { useEffect, useState } from "react";
import { monthlyPlans, yearlyPlans } from "../utils/formTypes";
import arcadeImg from "../assets/images/icon-arcade.svg";
import advancedImg from "../assets/images/icon-advanced.svg";
import proImg from "../assets/images/icon-pro.svg";

export default function PlanContainer({ plan, setplan, planType }) {
	const images = [arcadeImg, advancedImg, proImg];
	const [plansArr, setPlansArr] = useState([]);

	useEffect(() => {
		const plan = planType === "monthly" ? monthlyPlans : yearlyPlans;
		setPlansArr(plan);
	}, [planType]);

	return (
		<div className=" grid  grid-cols-1 md:grid-cols-3  my-10 gap-4">
			{plansArr.map((plann) => (
				<div
					key={plann.imageUrl}
					style={
						plan.imageUrl === plann.imageUrl
							? {
									background: "rgba(0,0,255,0.1)",
									borderColor: "blue",
							  }
							: {}
					}
					onClick={() => setplan(plansArr[plann.imageUrl])}
					className=" p-4 flex md:flex-col md:space-y-10 items-center md:items-start rounded-md border-2 shadow-lg space-x-4 md:space-x-0 md:justify-between md:min-h-[180px] hover:border-blue-700 hover:bg-blue-800/10"
				>
					<img
						className="w-[50px]"
						src={images[plann.imageUrl]}
						alt=""
					/>
					<div>
						<p className=" font-semibold text-blue-700">
							{plann.name}
						</p>
						<p>
							${plann.price}/
							{planType === "monthly" ? "mo" : "yr"}
						</p>
						{planType === "yearly" && (
							<p className=" text-blue-900">2 months free</p>
						)}
					</div>
				</div>
			))}
		</div>
	);
}
