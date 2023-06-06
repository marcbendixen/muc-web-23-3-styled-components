import styled, { css } from "styled-components";

const StyledInfoBox = styled.div`
  padding: 2rem;
  border: 0.25rem solid black;

  ${({ type }) =>
    type === "success" &&
    css`
      color: var(--primary-color);
      border-color: var(--primary-color);
    `}

  ${({ type }) =>
    type === "error" &&
    css`
      color: var(--secondary-color);
      border-color: var(--secondary-color);
    `}
`;

export default function InfoBox({ title, message, variant }) {
  return (
    <StyledInfoBox type={variant}>
      <h2>{title}</h2>
      <p>{message}</p>
    </StyledInfoBox>
  );
}
