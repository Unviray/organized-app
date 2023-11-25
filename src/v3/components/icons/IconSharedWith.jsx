import PropTypes from 'prop-types';
import { SvgIcon } from '@mui/material';

const IconSharedWith = ({ color = '#222222', width = 24, height = 24, sx = {} }) => {
  width = width.toString();
  height = height.toString();

  return (
    <SvgIcon sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_2621_40947"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2621_40947)">
          <path
            d="M16 21.5V19.3173C15.1179 19.0621 14.3666 18.5929 13.7461 17.9096C13.1256 17.2262 12.7461 16.423 12.6077 15.5H14.1076C14.2858 16.2231 14.6602 16.8205 15.2307 17.2923C15.8012 17.7641 16.4743 18 17.25 18H20.25C20.5961 18 20.891 18.1218 21.1346 18.3654C21.3782 18.6089 21.5 18.9038 21.5 19.25V21.5H16ZM18.75 16.5C18.2641 16.5 17.8509 16.3298 17.5106 15.9894C17.1702 15.649 17 15.2359 17 14.75C17 14.2641 17.1702 13.8509 17.5106 13.5106C17.8509 13.1702 18.2641 13 18.75 13C19.2359 13 19.649 13.1702 19.9894 13.5106C20.3298 13.8509 20.5 14.2641 20.5 14.75C20.5 15.2359 20.3298 15.649 19.9894 15.9894C19.649 16.3298 19.2359 16.5 18.75 16.5ZM9.38462 13.75C9.38462 11.532 10.1603 9.64904 11.7115 8.10098C13.2628 6.55291 15.1474 5.77888 17.3653 5.77888V7.27885C15.5628 7.27885 14.032 7.90673 12.773 9.16248C11.5141 10.4182 10.8846 11.9474 10.8846 13.75H9.38462ZM12.8846 13.75C12.8846 12.5077 13.3208 11.4503 14.1932 10.5779C15.0657 9.70544 16.123 9.26923 17.3653 9.26923V10.7692C16.5384 10.7692 15.8349 11.0593 15.2547 11.6394C14.6746 12.2195 14.3846 12.923 14.3846 13.75H12.8846ZM2.5 11V8.75C2.5 8.40385 2.6218 8.10898 2.8654 7.8654C3.10898 7.6218 3.40385 7.5 3.75 7.5H6.75C7.52563 7.5 8.19871 7.26411 8.76923 6.79233C9.33974 6.32052 9.71411 5.72308 9.89233 5H11.4019C11.2762 5.91025 10.9016 6.71025 10.2779 7.4C9.65413 8.08973 8.89484 8.56217 7.99998 8.8173V11H2.5ZM5.25 5.99998C4.7641 5.99998 4.35096 5.82978 4.01058 5.4894C3.67019 5.14902 3.5 4.73588 3.5 4.25C3.5 3.7641 3.67019 3.35096 4.01058 3.01058C4.35096 2.67019 4.7641 2.5 5.25 2.5C5.73588 2.5 6.14902 2.67019 6.4894 3.01058C6.82978 3.35096 6.99998 3.7641 6.99998 4.25C6.99998 4.73588 6.82978 5.14902 6.4894 5.4894C6.14902 5.82978 5.73588 5.99998 5.25 5.99998Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

IconSharedWith.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  sx: PropTypes.object,
};

export default IconSharedWith;