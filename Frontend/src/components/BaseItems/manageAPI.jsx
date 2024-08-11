
import axios from 'axios';
import BaseURL from '../../../constants/Api';
import Initial from '../../../constants/InitialFormData';

axios.defaults.baseURL = BaseURL;

const manageAPI = (URL, info={}, headers={}, method="GET", update, setFormData, setPanel, setData,Criteria="employees") => {
  if(method === "GET") {
    axios.get(URL, info, headers).then((res) => {
      setData(res.data);
      if(update){
        if(Criteria === "employees"){
          setFormData({
            name: res.data.docs[0].name,
            lastname: res.data.docs[0].lastname,
            office: res.data.docs[0].office,
            number: res.data.docs[0].number,
            email: res.data.docs[0].email,
            salary: res.data.docs[0].salary,
            INdate: res.data.docs[0].INdate,
            OUTdate: res.data.docs[0].OUTdate,
            address: {
              street: res.data.docs[0].address.street,
              city: res.data.docs[0].address.city,
              country: res.data.docs[0].address.country,
              postalCode: res.data.docs[0].address.postalCode,
            }
          });
        } else {
          setFormData({
            name: res.data.docs[0].name,
            description: res.data.docs[0].description
          });
         }
        setPanel(2);
      }
    })
    .catch(err => {
      console.log(err);
    })
  } else if(method === "POST") {
    axios.post(URL, info, headers).then((res) => {
      setData(res.data);
      Criteria == "employees" ? setFormData(Initial.employee) : setFormData(Initial.department);
    })
    .catch(err => {
      console.log(err);
    })
  } else if(method === "PATCH") {
    axios.patch(URL, info, headers).then((res) => {
      setData(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  } else if(method === "DELETE") {
    axios.delete(URL, info, headers).then((res) => {
      setData(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }
}

export default manageAPI