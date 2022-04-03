import axios, {
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from "axios";
import { PetfinderClientId, PetfinderClientSecret } from "../../config";
import {
  PetfinderPets,
  PetfinderPetsForm,
  PetfinderToken,
  PetfinderTokenForm,
} from "../../types/petfinder";

class Api {
  private post<T>(
    url: string,
    data: unknown,
    headers: AxiosRequestHeaders | undefined = undefined
  ) {
    return axios.post<T>(url, data, {
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    });
  }

  private get<T>(
    url: string,
    params: unknown | undefined,
    headers: AxiosRequestHeaders | undefined
  ) {
    return axios.get<T>(url, {
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      params,
    });
  }

  postPetfinderToken() {
    if (!PetfinderClientId || !PetfinderClientSecret) {
      throw new Error("Petfinder credentials are missing.");
    }
    const data: PetfinderTokenForm = {
      grant_type: "client_credentials",
      client_id: PetfinderClientId,
      client_secret: PetfinderClientSecret,
    };
    return this.post<PetfinderToken>(
      "https://api.petfinder.com/v2/oauth2/token",
      data
    );
  }

  getPetfinderAnimals(accessToken: string, onlyDogs: boolean, page: number) {
    const petsForm: PetfinderPetsForm = {
      limit: 3,
      page,
    };
    if (onlyDogs) {
      petsForm.type = "Dog";
    }
    return this.get<PetfinderPets>(
      "https://api.petfinder.com/v2/animals",
      petsForm,
      { Authorization: "Bearer " + accessToken }
    );
  }
}

const api = new Api();
export default api;
