const AppError = require("../utils/AppError");

function verifyUserAuthorization(necessaryRole) {
  return (request, response, next) => {
    const { role } = request.user;

    if (!necessaryRole.includes(role)) {
      throw new AppError("Você não tem permissão para prosseguir!", 401);
    }
    return next();
  };
}

module.exports = verifyUserAuthorization;
