import { NormalRangeResponse } from "@/types/range";

const API_BASE_URL = 'http://localhost:8080/api'

export async function getRangeData(): Promise<NormalRangeResponse> {
  return fetch(`${API_BASE_URL}/exercise1`, { cache: 'no-store' }).then((res) => {
    if (!res.ok) {
      throw new Error('Error al recuperar los datos en el servidor.');
    }
    return res.json();
  });
  
}