export const sucessCreator = (statusCode, message, data = '') => {
  const successRes = {
    success: true,
    statusCode: statusCode,
    message: message,
    data: data,
  };
  return successRes;
};
