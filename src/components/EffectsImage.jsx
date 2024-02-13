import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// Don't change below svgs they were manually return
import IndividualPageChart from "./../assets/indivisualpagedesktop.svg?react";
import NgoPageChart from "./../assets/ngoPageChartdesktop.svg?react";
import IndividualPageChartMobile from "../assets/indivisualpageMobile.svg?react";
import NgoPageChartMobile from "./../assets/ngoPageChartMobile.svg?react";

const EffectsImage = (props) => {
	const group22ref = useRef(null);
	const group22MobileRef = useRef(null);

	const frame14ref = useRef(null);

	useGSAP(
		() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: group22ref.current,
					start: "top 55%",
					end: "bottom center",
					scrub: true,
				},
			});

			tl.from(".chart-left-arrow", {
				opacity: 0,
				transformOrigin: "left",
				scale: 0.5,
				duration: 2,
				ease: "sine.in",
			}).to(".chart-left-arrow", { opacity: 1, scale: 1 });

			tl.from(".chart-right-arrow", {
				opacity: 0,
				transformOrigin: "left",
				scale: 0.5,
				duration: 2,
				ease: "sine.out",
				delay: "-0.5",
			}).to(".chart-right-arrow", { opacity: 1, scale: 1 });
		},
		{ scope: group22ref }
	);

	// Mobile arrow Animation

	useGSAP(
		() => {
			const tlIndividualPage = gsap.timeline({
				scrollTrigger: {
					trigger: group22ref.current,
					start: "top 70%",
					end: "bottom 65%",
					scrub: true,
				},
			});
			const tlNgoPage = gsap.timeline({
				scrollTrigger: {
					trigger: group22ref.current,
					start: "top center",
					end: "bottom 40%",
					scrub: true,
				},
			});

			tlIndividualPage
				.from(".group-22-mobile-arrow-top", {
					opacity: 0,
					scaleY: 0,
					scaleX: 0.5,
					transformOrigin: "top",
					duration: 1,
				})
				.to(".group-22-mobile-arrow-top", {
					ease: "sine.Out",
					opacity: 1,
					scaleY: 1,
					scaleX: 1,
				});
			tlIndividualPage
				.from(".group-22-mobile-arrow-bottom", {
					opacity: 0,
					scaleY: 0,
					scaleX: 0.5,
					transformOrigin: "top",
					duration: 2,
					delay: "0.5",
				})
				.to(".group-22-mobile-arrow-bottom", {
					ease: "sine.out",
					opacity: 1,
					scaleY: 1,
					scaleX: 1,
				});

			tlNgoPage
				.from(".ngoChartMobile-arrow-top", {
					opacity: 0,
					scaleY: 0,
					scaleX: 0.5,
					transformOrigin: "top",
					duration: 1,
				})
				.to(".ngoChartMobile-arrow-top", {
					ease: "sine.in",
					opacity: 1,
					scaleY: 1,
					scaleX: 1,
				});

			tlNgoPage
				.from(".ngoChartMobile-arrow-bottom", {
					opacity: 0,
					transformOrigin: "top",
					scale: 0.5,
					duration: 2,
					delay: "-0.5",
				})
				.to(".ngoChartMobile-arrow-bottom", { opacity: 1, scale: 1 });
		},
		{ scope: group22MobileRef.current }
	);

	return (
		<section>
			<div className="container mt-5 pt-5" id="scrolltriggerpoint">
				<div className="overlap-4">
					<div className="frame-14" ref={frame14ref}>
						<p className="let-s-help-you">
							<span className="span"> {props.heading}</span>{" "}
							<span className="text-wrapper-3">{props.darkHeading}</span>
							<span className="span"> {props.heading2}</span>{" "}
						</p>
						<p className="text-wrapper-17 indivisualtext">{props.para}</p>
						<p className="">
							At Actitude, we want to help your organization get where you're
							trying to go. We help you{" "}
							<span className="text-wrapper-243">set up</span> volunteering
							opportunities, <span className="text-wrapper-23">connect</span>{" "}
							you to the right volunteers with the fitting skills, and{" "}
							<span className="text-wrapper-23">accompany</span> you throughout
							the process to increase your organization's impact.
						</p>
					</div>

					<div className="group-22" ref={group22ref}>
						<div className="overlap-5  mt-5 desktop-slider">
							<IndividualPageChart className="zoom-imaages" />
							<NgoPageChart className="zoom-imaage" />
						</div>
						<div
							id="scrolltrimob"
							ref={group22MobileRef}
							className="mobile-slider">
							<IndividualPageChartMobile className="zoom-imaages" />
							<NgoPageChartMobile className="zoom-imaage" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default EffectsImage;
