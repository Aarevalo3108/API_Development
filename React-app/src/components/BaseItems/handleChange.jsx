
const handleChange = (field, value, setFormData) => {
  if (field !== 'address.street' && field !== 'address.city' && field !== 'address.country' && field !== 'address.postalCode') {
    setFormData((prevData) => (
      {
      ...prevData,
      [field]: value,
      }
    ));
  }
  else {
    setFormData((prevData) => (
      {
      ...prevData,
      address: {
        ...prevData.address,
        [field.split('.')[1]]: value
      }
      }
    ));
  }
};


export default handleChange