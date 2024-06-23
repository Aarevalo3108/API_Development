import regex from "./regex";

const validateData = (data, Criteria) => {
  if(Criteria === "employees") {
    if(!regex.text.test(data.name) || !regex.text.test(data.lastname) || !regex.text.test(data.office) ||
    !regex.salary.test(data.salary) || !regex.email.test(data.email) || !regex.phone.test(data.number) ||
    !regex.time.test(data.INdate) || !regex.time.test(data.OUTdate) || !regex.text.test(data.address.street) ||
    !regex.text.test(data.address.city) || !regex.text.test(data.address.country) || !regex.text.test(data.address.postalCode)) {
      return false;
    }
    return true;
  }

  if(Criteria === "departments") {
    if(!regex.text.test(data.name) || !regex.longText.test(data.description)) {
      return false;
    }
    return true;
  }
}


export default validateData;
