import React from "react";
import { cocktailLists, mockTailLists } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Cocktails = () => {
	useGSAP(() => {
		const parallaxTl = gsap.timeline({
			scrollTrigger: {
				trigger: "#cocktails",
				start: "top 30%", //once top of section reacehs 30% of screen
				end: "bottom 80%", //once bottom of section reacehs 80% down screen
				scrub: 1,
			},
		});

		parallaxTl
			.from("#c-left-leaf", {
				x: -100,
				y: 100,
			})
			.from("#c-right-leaf", {
				x: 100,
				y: 100,
			});
	});

	return (
		<section id="cocktails" className="noisy">
			<img
				src="/images/cocktail-left-leaf.png"
				alt="left-leaf"
				id="c-left-leaf"
			/>
			<img
				src="/images/cocktail-right-leaf.png"
				alt="right-leaf"
				id="c-right-leaf"
			/>

			<div className="list">
				<div className="popular lg:ml-30">
					<h2>Most popular cocktails:</h2>
					<ul>
						{cocktailLists.map(({ name, country, detail, price }) => (
							<li key={name}>
								<div className="md:me-28">
									<h3>{name}</h3>
									<div className="flex items-center gap-40">
										<p>
											{country} | {detail}
										</p>
										<span>{price}</span>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>

				<div className="loved lg:mr-10">
					<h2>Most loved mocktails:</h2>
					<ul>
						{mockTailLists.map(({ name, country, detail, price }) => (
							<li key={name}>
								<div className="me-28">
									<h3>{name}</h3>
									<div className="flex items-center gap-40">
										<p>
											{country} | {detail}
										</p>
										<span>{price}</span>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Cocktails;
