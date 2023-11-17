import PropTypes from 'prop-types';
import { SvgIcon } from '@mui/material';

const IconSync = ({ color = '#222222', width = 24, height = 24 }) => {
  width = width.toString();
  height = height.toString();

  return (
    <SvgIcon sx={{ width: `${width}px`, height: `${height}px` }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_2515_4554"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2515_4554)">
          <path
            d="M10.75 21.4114C9.57303 21.246 8.48202 20.8905 7.4769 20.345C6.47178 19.7995 5.60032 19.1082 4.8625 18.271C4.12468 17.4338 3.54648 16.4803 3.1279 15.4104C2.7093 14.3406 2.5 13.2037 2.5 11.9999C2.5 10.5217 2.80738 9.15213 3.42213 7.89123C4.03688 6.63033 4.91733 5.53835 6.06348 4.61528H3.375V3.1153H8.74995V8.49025H7.25V5.59218C6.20512 6.36398 5.40223 7.305 4.84133 8.41525C4.28043 9.52552 3.99998 10.7204 3.99998 11.9999C3.99998 13.9794 4.63395 15.7085 5.9019 17.1874C7.16983 18.6662 8.78585 19.5659 10.75 19.8864V21.4114ZM15.25 20.8941V15.5191H16.75V18.4172C17.7884 17.6287 18.5897 16.6819 19.1538 15.5768C19.7179 14.4717 20 13.2794 20 11.9999C20 10.0204 19.366 8.29123 18.0981 6.81238C16.8301 5.33355 15.2141 4.43387 13.25 4.11335V2.58838C15.6102 2.9089 17.5753 3.95152 19.1452 5.71626C20.715 7.48099 21.5 9.57553 21.5 11.9999C21.5 13.4781 21.1926 14.8492 20.5778 16.1133C19.9631 17.3774 19.0826 18.471 17.9365 19.3941H20.625V20.8941H15.25Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

IconSync.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default IconSync;
