import { HttpClient, HttpClientConfig } from '../../../networking/httpClient';
import { TestDTO } from '../dtos/testdto';

const httpClientConfig: HttpClientConfig = {
  baseURL: 'https://api.example.com',
  timeout: 1000,
};

const httpClient = new HttpClient(httpClientConfig);

export async function fetchDataForEpic() {
  try {
    const response = await httpClient.get<TestDTO>('https://randomuser.me/api/');
    console.log(response)
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}