
import manageAPI from "./manageAPI";


const getData = (pages, options, update,formData, setFormData, setPages, setPanel, setEmployees, id, data) => {
  switch(options.choice) {
    case 0:
      manageAPI(`/${data}?page=${pages}`, {}, {}, 'GET',update, setFormData, setPanel, setEmployees);
      break;
    case 1:
      if(id) {
        manageAPI(`/${data}/${id}`, {}, {}, 'GET',update, setFormData, setPanel, setEmployees,data);
      }
      break;
    case 2:
      manageAPI(`/${data}`, formData, {'Content-Type': 'application/json'}, 'POST',update, setFormData, setPanel, setEmployees);
      break;
    case 3:
      manageAPI(`/${data}/${id}`, {}, {}, 'DELETE',update, setFormData, setPanel, setEmployees);
      break;
    case 4:
      manageAPI(`/${data}/${id}`, formData, {'Content-Type': 'application/json'}, 'PATCH',update, setFormData, setPanel, setEmployees);
      break;
    case 5:
      manageAPI(`/search/${data}?${options.filters}`, {}, {}, 'GET',update, setFormData, setPanel, setEmployees);
      break;
    default:
      setPages(pages);
  }
}


export default getData