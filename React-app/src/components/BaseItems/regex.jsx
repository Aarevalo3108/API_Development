const regex = {
  text: /^[a-zA-Z\s]{1,30}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{1,}$/,
  phone: /^\d{11}$/,
  salary: /^\d{1,5}$/,
  time: /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
  longText: /^[a-zA-Z0-9\s,'-]{1,300}$/
};

export default regex;
