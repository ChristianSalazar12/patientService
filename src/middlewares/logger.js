const loggerMiddlewares = (req, res, next) => {
  const timesTamp = new Date().toISOString();
  console.log(`[${timesTamp} ${req.method} ${req.url} -IP: ${req.ip}]`);

  const start = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(`[${timesTamp}] Response: ${res.statusCode} -${duration}ms`);
  });
  next();
};
module.exports = loggerMiddlewares;
