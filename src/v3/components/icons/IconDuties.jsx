import PropTypes from 'prop-types';
import { SvgIcon } from '@mui/material';

const IconDuties = ({ color = '#222222', width = 24, height = 24, sx = {} }) => {
  width = width.toString();
  height = height.toString();

  return (
    <SvgIcon id="organized-icon-duties" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_3258_161974"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_3258_161974)">
          <path
            d="M4.3077 21.5C3.80257 21.5 3.375 21.325 3.025 20.975C2.675 20.625 2.5 20.1974 2.5 19.6923V9.3077C2.5 8.80257 2.675 8.375 3.025 8.025C3.375 7.675 3.80257 7.5 4.3077 7.5H9.5V3.99998C9.5 3.58461 9.64615 3.23077 9.93845 2.93845C10.2308 2.64615 10.5846 2.5 11 2.5H13C13.4153 2.5 13.7692 2.64615 14.0615 2.93845C14.3538 3.23077 14.5 3.58461 14.5 3.99998V7.5H19.6923C20.1974 7.5 20.625 7.675 20.975 8.025C21.325 8.375 21.5 8.80257 21.5 9.3077V19.6923C21.5 20.1974 21.325 20.625 20.975 20.975C20.625 21.325 20.1974 21.5 19.6923 21.5H4.3077ZM4.3077 20H19.6923C19.782 20 19.8557 19.9711 19.9134 19.9134C19.9711 19.8557 20 19.782 20 19.6923V9.3077C20 9.21795 19.9711 9.14423 19.9134 9.08653C19.8557 9.02883 19.782 8.99998 19.6923 8.99998H14.5V9.38463C14.5 9.79359 14.3522 10.1458 14.0567 10.4413C13.7612 10.7368 13.4089 10.8846 13 10.8846H11C10.591 10.8846 10.2388 10.7368 9.94328 10.4413C9.64776 10.1458 9.5 9.79359 9.5 9.38463V8.99998H4.3077C4.21795 8.99998 4.14423 9.02883 4.08653 9.08653C4.02883 9.14423 3.99998 9.21795 3.99998 9.3077V19.6923C3.99998 19.782 4.02883 19.8557 4.08653 19.9134C4.14423 19.9711 4.21795 20 4.3077 20ZM6.15383 17.7115H11.8461V17.4154C11.8461 17.1577 11.775 16.9208 11.6327 16.7048C11.4904 16.4888 11.2936 16.3205 11.0423 16.2C10.7154 16.0564 10.3843 15.9487 10.049 15.8769C9.71375 15.8051 9.36408 15.7692 8.99998 15.7692C8.63588 15.7692 8.2862 15.8051 7.95095 15.8769C7.61568 15.9487 7.28459 16.0564 6.95768 16.2C6.70639 16.3205 6.5096 16.4888 6.3673 16.7048C6.22498 16.9208 6.15383 17.1577 6.15383 17.4154V17.7115ZM14 16.1923H18V15H14V16.1923ZM8.99998 15C9.37176 15 9.68907 14.8686 9.9519 14.6058C10.2147 14.3429 10.3461 14.0256 10.3461 13.6538C10.3461 13.282 10.2147 12.9647 9.9519 12.7019C9.68907 12.4391 9.37176 12.3077 8.99998 12.3077C8.62819 12.3077 8.31088 12.4391 8.04805 12.7019C7.78523 12.9647 7.65383 13.282 7.65383 13.6538C7.65383 14.0256 7.78523 14.3429 8.04805 14.6058C8.31088 14.8686 8.62819 15 8.99998 15ZM14 13.5H18V12.3077H14V13.5ZM11 9.38463H13V3.99998H11V9.38463Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

IconDuties.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  sx: PropTypes.object,
};

export default IconDuties;