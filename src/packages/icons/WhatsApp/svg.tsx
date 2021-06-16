import * as React from 'react';

import { sizeMap } from '../utils/getIconSize';

export default ({ width = sizeMap.small }) => (
  <svg width={width} viewBox='0 0 192 193' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M96 180.496C141.84 180.496 179 143.112 179 96.9961C179 50.8803 141.84 13.4961 96 13.4961C50.1604 13.4961 13 50.8803 13 96.9961C13 114.623 18.4293 130.975 27.6974 144.45C22.5403 159.262 17.3682 174.043 17.063 174.657C16.6425 175.503 36.8083 170.03 49.8176 166.387C63.0204 175.298 78.9068 180.496 96 180.496Z'
      fill='#4CAF50'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M95.8705 184.967H95.8341C81.0844 184.961 66.5913 181.258 53.719 174.23L7 186.496L19.5028 140.79C11.7905 127.413 7.73227 112.24 7.73888 96.6941C7.75822 48.0621 47.2933 8.49609 95.8697 8.49609C119.446 8.50628 141.573 17.6919 158.212 34.3643C174.851 51.0357 184.009 73.1962 184 96.7637C183.98 145.385 144.461 184.947 95.8705 184.967ZM55.8837 158.263L58.5585 159.851C69.805 166.531 82.6968 170.065 95.841 170.07H95.8706C136.244 170.07 169.104 137.182 169.12 96.7586C169.127 77.1695 161.516 58.7507 147.686 44.8933C133.856 31.0359 115.465 23.4007 95.8995 23.3939C55.495 23.3939 22.6348 56.2786 22.6188 96.6992C22.6131 110.552 26.4857 124.042 33.8182 135.714L35.5598 138.488L28.16 165.541L55.8837 158.263ZM140.27 117.738C139.719 116.819 138.252 116.267 136.049 115.164C133.847 114.061 123.021 108.73 121.002 107.993C118.984 107.258 117.515 106.891 116.048 109.097C114.58 111.303 110.36 116.267 109.075 117.738C107.791 119.209 106.506 119.393 104.305 118.29C102.103 117.187 95.0071 114.86 86.596 107.351C80.0496 101.507 75.6302 94.2899 74.3457 92.0835C73.0611 89.877 74.2087 88.6847 75.3111 87.5857C76.3018 86.5979 77.5134 85.0109 78.6143 83.7244C79.7153 82.4378 80.0823 81.5179 80.8163 80.0481C81.5503 78.5765 81.1834 77.29 80.6327 76.1868C80.0823 75.0835 75.6784 64.2354 73.8434 59.8225C72.0558 55.525 70.2404 56.1072 68.8888 56.0393C67.6058 55.9748 66.1362 55.9612 64.6684 55.9612C63.2004 55.9612 60.8146 56.5128 58.7962 58.7193C56.7778 60.9257 51.0891 66.2577 51.0891 77.105C51.0891 87.9531 58.9796 98.433 60.0807 99.9036C61.1817 101.375 75.6083 123.635 97.6985 133.182C102.952 135.453 107.054 136.809 110.252 137.824C115.527 139.502 120.328 139.265 124.122 138.698C128.353 138.065 137.15 133.367 138.986 128.219C140.82 123.07 140.82 118.657 140.27 117.738Z'
      fill='#FDFDFD'
    />
  </svg>
);
