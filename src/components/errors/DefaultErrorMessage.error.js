import React from 'react';
import PropTypes from 'prop-types';
import { ErrorTypes } from '../../constants/errors';

const DefaultErrorMessage = ({ error }) => {
  // Handle different error formats
  const message =
    error?.message || error?.toString() || 'An unexpected error occurred';
  const code = error?.code || null;
  const type = error?.type || ErrorTypes.UNKNOWN_ERROR;

  // Map error types to Bootstrap alert classes
  const getAlertClass = (errorType) => {
    switch (errorType) {
      case ErrorTypes.HTTP_ERROR:
        return 'danger';
      case ErrorTypes.VALUE_ERROR:
      case ErrorTypes.GENERAL_ERROR:
        return 'warning';
      case ErrorTypes.UNKNOWN_ERROR:
        return 'info';
      default:
        return 'info';
    }
  };

  const alertClass = getAlertClass(type);

  const getIcon = (typeName) => {
    switch (typeName) {
      case 'warning':
        return '&#9888;'; // Warning sign
      case 'error':
      case 'danger':
        return '&#9940;'; //  Cross mark in a circle
      case 'info':
        return '&#8505;'; // Info sign
      default:
        // give a warning sign, idk the problem bruh
        return '&#9888;';
    }
  };

  return (
    <div className="container py-3">
      <div
        className={`alert alert-${alertClass} shadow-sm fade show`}
        role="alert"
      >
        <div className="d-flex align-items-center">
          <div
            className="flex-shrink-0 me-3 fs-4"
            dangerouslySetInnerHTML={{ __html: getIcon(alertClass) }}
          />
          <div className="flex-grow-1">
            <div className="d-flex align-items-center mb-1">
              <h5 className="alert-heading mb-0">
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </h5>
              {code && (
                <span className="ms-3 badge bg-light text-dark border">
                  Code: {code}
                </span>
              )}
            </div>
            <p className="mb-0">
              {
                "Unfortunately, an error has occurred, and today's events cannot be displayed"
              }
            </p>
            <p className="mb-0">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// TODO: Convert project to TSX since i hate this way of writing code
DefaultErrorMessage.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Error),
    PropTypes.shape({
      message: PropTypes.string,
      code: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      type: PropTypes.oneOf(['error', 'warning', 'info', 'danger', 'success']),
    }),
  ]).isRequired,
};

export default DefaultErrorMessage;
