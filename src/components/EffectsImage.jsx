import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import arrow1 from "../assets/left.svg";
import arrow2 from "../assets/right.svg";
import arrow4 from "../assets/end.svg";
import arrow3 from "../assets/seconda.svg";
import mobilearrow from "../assets/icons/even-arrow.svg";
import mobilengo from "../assets/ngo-zoom.svg";
import { useGSAP } from "@gsap/react";

const EffectsImage = (props) => {
	const group22ref = useRef(null);
	const frame14ref = useRef(null);

	const parallax = useRef(null);
	const parallax1 = useRef(null);

	useGSAP(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: group22ref.current,
				start: "top 30%",
				end: "bottom 70%",
				scrub: true,
				
			},
		});

		tl.from(parallax1.current, {
			opacity: 0,
			transformOrigin: "left",
			scale: 0,
			delay: 0,
			duration: 2,
			
		}).to(parallax1.current, { opacity: 1, scale: 1 });

		tl.from(parallax.current, {
			opacity: 0,
			scale: 0,
			transformOrigin: "left",
			delay: 0,
			duration: 2,
			
		}).to(parallax.current, { opacity: 1, scale: 1 });
	});

	return (
		<section>
			<div className="container mt-5 pt-5" id="scrolltriggerpoint" ref={group22ref}>
				<div className="overlap-4">
					<div className="frame-14" ref={frame14ref}>
						<p className="let-s-help-you">
							<span className="span"> {props.heading}</span>{" "}
							<span className="text-wrapper-3">{props.darkHeading}</span>
							<span className="span"> {props.heading2}</span>{" "}
						</p>
						<p className="text-wrapper-17 indivisualtext">{props.para}</p>
						<p className="text-wrapper-17 ngptextbold ">
							At Actitude, we want to help your organization get where you're
							trying to go. We help you{" "}
							<span className="text-wrapper-243">set up</span> volunteering
							opportunities, <span className="text-wrapper-23">connect</span>{" "}
							you to the right volunteers with the fitting skills, and{" "}
							<span className="text-wrapper-23">accompany</span> you throughout
							the process to increase your organization's impact.
						</p>
					</div>

					<div className="group-22" >
						<div className="overlap-5  mt-5 desktop-slider">
							<img
								ref={parallax1}
								src={arrow1}
								alt=""
								className="left-sideimg"
							/>
							<img src={arrow4} className="zoom-imaages" />
							<img src={arrow3} className="zoom-imaage" />
							<img
								ref={parallax}
								src={arrow2}
								alt=""
								className="right-sideimg"
							/>
						</div>
						<div id="scrolltrimob" className="mobile-slider">
							<img src={mobilearrow} className="zoom-imaages" />
							<img src={mobilengo} className="zoom-imaage" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default EffectsImage;