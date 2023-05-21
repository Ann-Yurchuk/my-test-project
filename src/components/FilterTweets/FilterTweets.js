import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { statusFilters } from 'utils/constants';

const options = [
  statusFilters.all,
  statusFilters.follow,
  statusFilters.followings,
];

const FilterTweets = ({ selectedOption, setSelectedOption }) => {
  return (
    <Select
      name="selected-option"
      value={selectedOption}
      onChange={setSelectedOption}
      options={options}
    />
  );
};

FilterTweets.propTypes = {
  selectedOption: PropTypes.object,
  setSelectedOption: PropTypes.func.isRequired,
};

export default FilterTweets;
