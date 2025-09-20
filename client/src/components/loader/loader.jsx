import styled from "styled-components";

const LoaderContainer = ({ className }) => {
	return <div className={className}>
		<span className="loader"></span>
	</div>;
};

export const Loader = styled(LoaderContainer)`
	display: flex;
	height: 100vh;
	justify-content: center;
	align-items: center;
	.loader {
		display: flex;
		justify-content: center;
		margin: 0 auto;
		transform: translateZ(1px);
	}
	.loader:after {
		content: '';
		display: inline-block;
		width: 48px;
		height: 48px;
		margin: 8px;
		border-radius: 50%;
		background: #563de4;
		animation: coin-flip 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
	}
	@keyframes coin-flip {
		0%,
		100% {
			animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
		}
		0% {
			transform: rotateY(0deg);
		}
		50% {
			transform: rotateY(1800deg);
			animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
		}
		100% {
			transform: rotateY(3600deg);
		}
	}
`;
