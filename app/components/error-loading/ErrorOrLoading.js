import React from 'react';
import PropTypes from 'prop-types';
import ErrorMessage from './error-message/ErrorMessage';
import CustomLoading from './CustomLoading';

const ErrorOrLoading = (props) => {
  let result = null;
  if (props.error) {
    result = (
      <ErrorMessage
        tryAgain={props.doRequest}
        error={props.error.message}
      />
    );
  } else if (props.isLoading) {
    result = <CustomLoading color={props.loadingColor}/>;
  }
  return result;
};

ErrorOrLoading.propTypes = {
  error: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  doRequest: PropTypes.func.isRequired,
  loadingColor: PropTypes.string,
};

ErrorOrLoading.defaultProps = {
  loadingColor: 'white'
};

export default ErrorOrLoading;
