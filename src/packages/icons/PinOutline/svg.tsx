import * as React from 'react';

import { sizeMap } from '../utils/getIconSize';

export default ({ width = sizeMap.small }) => (
  <svg width={width} viewBox='0 0 192 192' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M88.1511 166.762C92.8967 172.564 96 176 96 176C96 176 99.1033 172.564 103.849 166.762C119.262 147.918 152 104.113 152 72C152 41.04 126.96 16 96 16C65.04 16 40 41.04 40 72C40 104.113 72.7377 147.918 88.1511 166.762ZM96 157.393C101.025 151.171 107.55 142.676 114.052 133.038C120.826 122.999 127.427 111.937 132.299 101.063C137.241 90.0314 140 80.072 140 72C140 47.6674 120.333 28 96 28C71.6674 28 52 47.6674 52 72C52 80.072 54.7593 90.0314 59.7012 101.063C64.5728 111.937 71.1742 122.999 77.9476 133.038C84.4503 142.676 90.9751 151.171 96 157.393ZM118 70C118 82.1503 108.15 92 96 92C83.8497 92 74 82.1503 74 70C74 57.8497 83.8497 48 96 48C108.15 48 118 57.8497 118 70Z'
    />
  </svg>
);
