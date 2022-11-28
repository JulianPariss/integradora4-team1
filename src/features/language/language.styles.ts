import styled, { css } from "styled-components";

export const LanguageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 2px 0;
`;

export const LanguageButtonWrapper = styled.div<{ isActive: boolean }>`
  padding: 4px 2px;
  margin-right: 10px;

  ${(props) =>
    props.isActive
      ? css`
          color: white;
          background-color: #17589f;
        `
      : css`
          background-color: white;
        `}
`;
