import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { AutoComplete, Typography } from '@components';
import { IconCongregation, IconSearch } from '@icons';
import useCongregation from './useCongregation';
import { useAppTranslation } from '@hooks';

const CongregationSelector = ({ country, setCongregation }) => {
  const { setValue, value, setInputValue, options, isLoading } = useCongregation({ country });

  const { t } = useAppTranslation();

  return (
    <AutoComplete
      isOptionEqualToValue={(option, value) => option.congNumber === value.congNumber}
      getOptionLabel={(option) => `${option.congName}, ${option.congNumber}`}
      filterOptions={(x) => x}
      options={options}
      autoComplete={true}
      includeInputInList={true}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        setCongregation(newValue);
      }}
      onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
      loading={isLoading}
      label={t('yourCongregation')}
      startIcon={<IconCongregation color="var(--black)" />}
      endIcon={<IconSearch color="var(--accent-350)" />}
      renderOption={(props, option) => (
        <Box component="li" {...props} sx={{ margin: 0, padding: 0 }}>
          <Typography variant="body-regular">
            {option.congName}, {option.congNumber}
          </Typography>
        </Box>
      )}
    />
  );
};

CongregationSelector.propTypes = {
  country: PropTypes.object,
  setCongregation: PropTypes.func,
};

export default CongregationSelector;
