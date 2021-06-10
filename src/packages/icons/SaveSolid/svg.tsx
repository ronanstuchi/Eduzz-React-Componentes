import * as React from 'react';

import { sizeMap } from '../utils/getIconSize';

export default ({ width = sizeMap.medium }) => (
  <svg width={width} viewBox='0 0 192 192' fill='#546E7A' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M111 24H34C28.4772 24 24 28.4771 24 34V158C24 163.523 28.4771 168 34 168H158C163.523 168 168 163.523 168 158V81V79.799V57H167.98C168.117 55.307 167.538 53.5672 166.243 52.2721L139.728 25.7574C138.687 24.7168 137.36 24.1384 136 24.022V24H112.201H111ZM135.659 156C135.88 155.374 136 154.701 136 154V118C136 114.686 133.314 112 130 112H62C58.6863 112 56 114.686 56 118V154C56 154.701 56.1203 155.374 56.3414 156H135.659ZM62 36V58C62 61.3137 64.6863 64 68 64H123C126.314 64 129 61.3137 129 58V36H124.201H111H62Z'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M34 24.5C28.7533 24.5 24.5 28.7533 24.5 34V158C24.5 163.247 28.7533 167.5 34 167.5H158C163.247 167.5 167.5 163.247 167.5 158V57.5H167.439L167.482 56.9598C167.607 55.4067 167.076 53.8127 165.889 52.6256L139.374 26.1109C138.42 25.1568 137.204 24.6269 135.957 24.5202L135.722 24.5H34ZM168.5 56.5V158C168.5 163.799 163.799 168.5 158 168.5H34C28.201 168.5 23.5 163.799 23.5 158V34C23.5 28.201 28.201 23.5 34 23.5H136.5V23.5793C137.811 23.7855 139.072 24.3939 140.081 25.4038L166.596 51.9185C167.862 53.1841 168.496 54.8422 168.5 56.5ZM61.5 35.5H129.5V58C129.5 61.5899 126.59 64.5 123 64.5H68C64.4101 64.5 61.5 61.5898 61.5 58V35.5ZM62.5 36.5V58C62.5 61.0376 64.9624 63.5 68 63.5H123C126.038 63.5 128.5 61.0376 128.5 58V36.5H62.5ZM55.5 118C55.5 114.41 58.4102 111.5 62 111.5H130C133.59 111.5 136.5 114.41 136.5 118V154C136.5 154.759 136.37 155.488 136.13 156.167L136.012 156.5H55.9878L55.87 156.167C55.6302 155.488 55.5 154.759 55.5 154V118ZM62 112.5C58.9624 112.5 56.5 114.962 56.5 118V154C56.5 154.521 56.5722 155.024 56.7069 155.5H135.293C135.428 155.024 135.5 154.521 135.5 154V118C135.5 114.962 133.038 112.5 130 112.5H62Z'
    />
  </svg>
);
