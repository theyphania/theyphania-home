import React from 'react';
import styled from 'styled-components';

import { base } from '@pagerland/common/src/utils';

const Svg = styled.svg`
  display: block;
  ${base};
`;

const Logo = props => (
  <Svg 
    width="200" 
    height="45" 
    viewBox="0 0 475 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path 
      d="M103.066 37V58.645H77.0664L68.4214 67.355V89H77.0664V67.355H103.066V89H111.711V37H103.066ZM114.759 88.285V89H149.404V80.29H123.404L114.759 88.285ZM114.759 37L123.404 45.71H149.404V37H114.759ZM114.759 58.71V67.355H123.404H149.404V58.71H123.404H114.759ZM187.478 63L207.758 37H196.773L181.953 55.98L167.198 37H156.083L176.493 63L156.083 89H167.198L181.953 70.02V70.085L187.478 63ZM181.953 70.02L167.198 89L181.953 70.085V70.02ZM252.003 42.07C248.623 38.69 244.528 37 239.783 37H213.783L222.428 45.71H239.783C242.123 45.71 244.138 46.555 245.828 48.245C247.583 49.935 248.428 52.015 248.428 54.355C248.428 56.76 247.518 58.775 245.828 60.465C244.138 62.155 242.123 63 239.783 63H222.428H213.783V89H222.428V71.71H239.783C244.528 71.71 248.623 70.02 252.003 66.64C255.448 63.26 257.073 59.1 257.073 54.355C257.073 49.61 255.383 45.515 252.003 42.07ZM288.545 37V58.645H262.545L253.9 67.355V89H262.545V67.355H288.545V89H297.19V37H288.545ZM328.737 71.71L336.407 56.435L344.012 71.71H353.762L336.407 37L310.407 89H320.027L324.447 80.29L328.737 71.71ZM358.052 80.355H348.432L352.722 89H362.407L358.052 80.355ZM378.426 37V68.135L343.846 37V50.13L387.071 89V88.935V88.87V37H378.426ZM405.685 45.58L397.04 37V89L405.685 80.29V45.58ZM427.697 71.71L435.367 56.435L442.972 71.71H452.722L435.367 37L409.367 89H418.987L423.407 80.29L427.697 71.71ZM457.012 80.355H447.392L451.682 89H461.367L457.012 80.355Z" 
      fill="#ffffff"
    />
    <rect 
      x="45" 
      y="29" 
      width="16" 
      height="60" 
      rx="2" 
      fill="#ffffff"
    />
    <rect 
      x="10" 
      y="26.4548" 
      width="16" 
      height="46" 
      rx="2" 
      transform="rotate(-75 10 26.4548)" 
      fill="#ffffff"
    />
    <rect 
      width="16" 
      height="46" 
      rx="2" 
      transform="matrix(0.258819 0.965926 0.965926 -0.258819 48 22.9057)" 
      fill="#ffffff"
    />
  </Svg>
);

export default Logo;
