const CONFIG_DISPLAY_NAME = {
  length: 8,
  status: 400,
  message: '"displayName" length must be at least 8 characters long',
};

const CONFIG_EMAIL = {
  regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  status: 400,
  message: '"email" must be a valid email',
};

const CONFIG_PASSWORD = {
  length: 6,
  status: 400,
  message: '"password" length must be at least 6 characters long',
};

const validateUser = (req, res, next) => {
  const { displayName, email, password } = req.body;

  if (displayName.length < CONFIG_DISPLAY_NAME.length) {
    return res.status(CONFIG_DISPLAY_NAME.status)
      .json({ message: CONFIG_DISPLAY_NAME.message });
  }

  if (!CONFIG_EMAIL.regex.test(email)) {
    return res.status(CONFIG_EMAIL.status)
      .json({ message: CONFIG_EMAIL.message });
  }

  if (password.length < CONFIG_PASSWORD.length) {
    return res.status(CONFIG_PASSWORD.status)
      .json({ message: CONFIG_PASSWORD.message });
  }

  next();
};

module.exports = validateUser;
