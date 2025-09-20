import styled from "styled-components"

const MessageErrorContainer = ({className, children}) => {
return (
	<div className={className}>
		{children}
	</div>
)
}

export const MessageError = styled(MessageErrorContainer)`
	display: flex;
	text-align: center;
	color: #d3ced0;
`
