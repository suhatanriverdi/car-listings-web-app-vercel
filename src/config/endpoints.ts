// export const BASE_URL = "http://localhost:3000"; // TODO

// ? sortField=year & sortOrder=desc

// For mobile devices to use backend, since localhost is not working for
export const BASE_URL = import.meta.env.VITE_BASE_URL;

export const ENDPOINTS = {
  cars: `${BASE_URL}/cars`,
  login: `${BASE_URL}/auth/login`,
};
