import React, { useEffect } from "react";

const useOutSideToClose = ({ ref, triggerRef, close, isModal = false }) => {
	useEffect(() => {
		function handleClickOutside(event) {
			if (ref.current && !ref.current.contains(event.target)) {
				if (isModal) document.body.style.overflow = "unset";

				close();
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref]);
};

export default useOutSideToClose;
