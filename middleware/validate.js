module.exports.helper = (res, err, content, _next) => {
  if (err) {
    if (err.name === "SequelizeValidationError") {
      //invalid email
      const errObj = {};
      err.errors.map((er) => {
        errObj[er.path] = er.message;
      });
      return res.status(400).json({
        status: 'success',
        msg: errObj,
      });

    } else if (err.name === "SequelizeUniqueConstraintError") {
      //duplicate email
      const errObj = {};
      err.errors.map((er) => {
        errObj[er.path] = er.message;
      });
      return res.status(400).json({
        status: 'success',
        msg: errObj,
      });

    } else if (err.validatorName === "notEmpty" || err.name === "SequelizeValidationError") {
      //empty email field
      const errObj = {};
      err.errors.map((er) => {
        errObj[er.path] = er.message;
      });
      return res.status(400).json({
        status: 'success',
        msg: errObj,
      });

    } else if (err.name === "SequelizeValidationError") {
      //is_null email
      const errObj = {};
      err.errors.map((er) => {
        errObj[er.path] = er.message;
      });
      return res.status(400).json({
        status: 'success',
        msg: errObj,
      });

    } else if (err.name === "SequelizeValidationError") {
      //password is too short
      const errObj = {};
      err.errors.map((er) => {
        errObj[er.path] = er.message;
      });
      return res.status(400).json({
        status: 'success',
        msg: errObj
      });
    }

    return res.status(400).send(err);

  } else
    res.send({
      success: true,
    });
};
