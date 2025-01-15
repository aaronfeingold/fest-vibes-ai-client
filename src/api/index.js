import { axiosAPI } from '../axiosAPI';
import { ErrorTypes } from '../constants/errors';
import { ServiceError } from '../utils/CustomError';

const fetchArtistEvents = async () => {
  try {
    const response = await axiosAPI.get(
      process.env.REACT_APP_DEV_ENV === 'development'
        ? '/oz-re-wire'
        : '/ajf-live-re-wire'
    );

    // Handle Lambda error responses (HTTP 400+)
    if (response.data.statusCode >= 400 && response.data.body.error) {
      throw new ServiceError(
        response.data.body.error.message,
        response.data.body.error.type,
        response.data.statusCode
      );
    }

    // Handle missing data
    if (!response.data.body.data) {
      throw new ServiceError(
        'No data returned from Lambda',
        ErrorTypes.DATA_ERROR,
        404
      );
    }

    return response.data.body.data;
  } catch (error) {
    if (error instanceof ServiceError) {
      throw error;
    }

    // Handle any other unexpected errors
    throw new ServiceError(
      error.message || 'An unexpected error occurred',
      ErrorTypes.UNKNOWN_ERROR,
      500
    );
  }
};

// Export as a named constant to satisfy ESLint
const apiService = {
  fetchArtistEvents,
};

export default apiService;
