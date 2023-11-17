import PropTypes from 'prop-types';
import { SvgIcon } from '@mui/material';

const IconEllipse = ({ color = '#222222', width = 24, height = 24 }) => {
  width = width.toString();
  height = height.toString();

  return (
    <SvgIcon sx={{ width: `${width}px`, height: `${height}px` }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
        <circle cx="8" cy="8.5" r="8" fill={color} />
      </svg>
    </SvgIcon>
  );
};

IconEllipse.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default IconEllipse;
