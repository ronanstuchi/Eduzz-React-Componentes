import * as React from 'react';

import { sizeMap } from '../utils/getIconSize';

export default ({ width = sizeMap.small }) => (
  <svg width={width} viewBox='0 0 192 192' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M99.119 23.6418C97.0821 22.7827 94.7853 22.7862 92.7511 23.6516L32.31 49.3638C31.8083 49.5773 31.3554 49.868 30.9627 50.2188C29.9944 50.5139 29.0656 50.9609 28.2132 51.5553C25.5738 53.3955 24 56.4149 24 59.6384V133.322C24 137.34 26.4343 140.954 30.1506 142.455L87.4234 165.581L91.0597 167.05C94.1582 168.301 97.6165 168.317 100.727 167.095L104.492 165.615L161.764 143.108C165.526 141.63 168 137.992 168 133.941V59.6384C168 56.4149 166.426 53.3955 163.787 51.5553C163.124 51.0929 162.414 50.7197 161.676 50.4378C161.231 49.9848 160.694 49.6146 160.085 49.358L99.119 23.6418ZM100.909 81.446L129.947 70.1545L148.364 63.2952L158.182 59.6384V70.1408V133.941L110.727 152.59L100.909 156.449V145.875V81.446ZM65.1348 71.3022L91.0909 81.4816V145.836V156.449L81.2727 152.484L33.8182 133.322V70.1408V59.6384L43.6364 63.2952L65.1348 71.3022ZM126.463 60.9499L145.081 53.7099L95.9492 32.9855L47.2325 53.7101L68.6324 62.1026L94.5095 71.7405C95.0312 71.9348 95.5291 72.1704 96 72.4429C96.4709 72.1704 96.9688 71.9348 97.4905 71.7405L126.463 60.9499Z'
    />
  </svg>
);
