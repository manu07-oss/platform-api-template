module.exports = (err, req, res, next) => {
  const status = err.statusCode || 500;

  res.status(status).json({
    timestamp: new Date().toISOString(),
    status,
    errorCode: err.errorCode || 'INTERNAL_SERVER_ERROR',
    message: err.message || 'Something went wrong',
    correlationId: req.correlationId
  });
};
