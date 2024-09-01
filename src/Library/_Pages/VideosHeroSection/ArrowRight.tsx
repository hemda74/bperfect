import React from "react";

const ArrowRight = ({ className }: { className?: string }) => {
	return (
		<>
			<svg
				className={className}
				width="20px"
				height="20px"
				viewBox="0 0 24 24"
				strokeWidth="2.5"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				color="#905cdb"
			>
				<path
					d="M3 12L21 12M21 12L12.5 3.5M21 12L12.5 20.5"
					stroke="#b89c6c"
					strokeWidth="2.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		</>
	);
};

export default ArrowRight;
