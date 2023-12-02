import PropTypes from 'prop-types';
import { SvgIcon } from '@mui/material';

const IconExport = ({ color = '#222222', width = 24, height = 24, sx = {} }) => {
  width = width.toString();
  height = height.toString();

  return (
    <SvgIcon sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_2450_16397"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2450_16397)">
          <path
            d="M6.92307 21.5C5.67692 21.5 4.61539 21.0631 3.73847 20.1894C2.86155 19.3157 2.4231 18.2557 2.4231 17.0096C2.4231 16.0788 2.67374 15.248 3.17502 14.5173C3.6763 13.7865 4.32695 13.2487 5.12695 12.9038H2.5V11.4039H7.7692V16.673H6.26922V14.075C5.58845 14.2211 5.02723 14.5666 4.58555 15.1115C4.14388 15.6564 3.92305 16.2859 3.92305 17C3.92305 17.8371 4.21632 18.5464 4.80287 19.1279C5.3894 19.7093 6.09614 20 6.92307 20V21.5ZM9.9615 20.5V19H18.6922C18.7692 19 18.8397 18.9679 18.9038 18.9038C18.9679 18.8397 19 18.7692 19 18.6923V5.3077C19 5.23077 18.9679 5.16024 18.9038 5.09613C18.8397 5.03203 18.7692 4.99998 18.6922 4.99998H5.3077C5.23076 4.99998 5.16024 5.03203 5.09612 5.09613C5.03202 5.16024 4.99997 5.23077 4.99997 5.3077V9.21153H3.5V5.3077C3.5 4.80257 3.675 4.375 4.025 4.025C4.375 3.675 4.80256 3.5 5.3077 3.5H18.6922C19.1974 3.5 19.6249 3.675 19.9749 4.025C20.3249 4.375 20.4999 4.80257 20.4999 5.3077V18.6923C20.4999 19.1974 20.3249 19.625 19.9749 19.975C19.6249 20.325 19.1974 20.5 18.6922 20.5H9.9615ZM9.9615 12.75H16.7499V11.25H9.9615V12.75ZM9.9615 16.75H13.7499V15.25H9.9615V16.75ZM7.25 8.74995H16.7499V7.25H7.25V8.74995Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

IconExport.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  sx: PropTypes.object,
};

export default IconExport;