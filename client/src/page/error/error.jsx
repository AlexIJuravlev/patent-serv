import styled from "styled-components"

const ErrorContainer = ({className, }) => {
	return (
		<div className={className}>
			<h2>Ошибка получения данных</h2>

		</div>
	)
}

export const Error = styled(ErrorContainer)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 100px auto;
`
