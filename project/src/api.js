import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://bayut.p.rapidapi.com/properties/list',
  params: {
    locationExternalIDs: '5002,6020',
    purpose: 'for-rent',
    hitsPerPage: '25',
    page: '0',
    lang: 'en',
    sort: 'tuned-ranking',
    rentFrequency: 'monthly',
    categoryExternalID: '4'
  },
  headers: {
    'x-rapidapi-key': '4d16749696msh51e126324a40fedp150564jsn4fbb3897bd49',
    'x-rapidapi-host': 'bayut.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}