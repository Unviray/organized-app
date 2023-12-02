import PropTypes from 'prop-types';
import { SvgIcon } from '@mui/material';

const IconArrowBack = ({ color = '#222222', width = 24, height = 24, sx = {} }) => {
  width = width.toString();
  height = height.toString();

  return (
    <SvgIcon sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_2557_53764"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2557_53764)">
          <path
            d="M10 21.6538L0.346191 12L10 2.34619L11.4192 3.76539L3.18462 12L11.4192 20.2346L10 21.6538Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

IconArrowBack.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  sx: PropTypes.object,
};

export default IconArrowBack;