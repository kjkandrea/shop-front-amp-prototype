import { css } from 'goober'

// common styled classes
export const fitToScreen = css`
  max-width: 100%;
`;

export const square = (size) => css`
    display: block;
    position: relative;
    width: ${size};
    
    &:before {
       content: '';
       display: block;
       padding-top: 100%;
    };
    
    & > * {
       position: absolute;
       width: 100%;
       top: 0;
       left: 0;
    }
`