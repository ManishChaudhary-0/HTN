import axios from "axios";

export default axios.create({
    baseURL: 'https://clinicaltables.nlm.nih.gov/api/rxterms/v3/search'
})