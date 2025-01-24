// --------------------------------------
// - type review                        -
// --------------------------------------
export type review = {
  id: string | number;
  customer_name: string;
  customer_job: string;
  text: string;
};

// --------------------------------------
// - type menu                          -
// --------------------------------------
export type menu = {
  id: string | number;
  category: string;
  name: string;
  topping: string | string[];
  price: number;
  rank: number;
};

// --------------------------------------
// - type option - SelectField          -
// --------------------------------------
type option = {
  value: string;
  label: string;
};

// --------------------------------------
// - type bookingFields                 -
// --------------------------------------
export type bookingFields = {
  type: string;
  name: string;
  placeholder?: string;
  options?: option[];
};

// --------------------------------------
// - type bookingFields                 -
// --------------------------------------
export type headerItem = {
  path: string; //   Es. "home"
  label: string; //  Es. "Home"
};

// --------------------------------------
// - Interface ReviewesResponse - GET   -
// --------------------------------------
export interface ReviewesResponse {
  data: review[];
}

// -------------------------------------
// - Interface MenuResponse - GET      -
// -------------------------------------
export interface MenuResponse {
  data: menu[];
}

// -------------------------------------
// - Interface SettingsResponse - GET  -
// -------------------------------------
export interface Settings {
  appName?: string;
  bookingFormFields?: bookingFields[];
  headerItems?: headerItem[];
}

// -------------------------------------
// - Interface Users - GET      -
// -------------------------------------
export interface Users {
  users: User[];
}

// -------------------------------------
// - Interface User - GET      -
// -------------------------------------
export interface User {
  id: number;
  firstName: string;
  lastName: string;
  image?: string;
  email: string;
  role: 'user' | 'admin' | 'moderator';
  // ---  Aggiunti  ---
  name: string;
  review?: string;
  profession?: string;
  img?: {
    src: string;
    alt: string;
  };
  // ------------------
  maidenName?: string;
  age?: number;
  gender?: string;
  phone?: string;
  username?: string;
  password?: string;
  birthDate?: string; // - YYYY-MM-DD
  bloodGroup?: string;
  height?: number;
  weight?: number;
  eyeColor?: string;
  ip?: string;
  ein?: string;
  ssn?: string;
  userAgent?: string;
  macAddress?: string;
  university?: string;
  hair?: {
    color: string;
    type: string;
  };
  address?: {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    country: string;
  };
  bank?: {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
  };
  company?: {
    department: string;
    name: string;
    title: string;
    address: {
      address: string;
      city: string;
      state: string;
      stateCode: string;
      postalCode: string;
      coordinates: {
        lat: number;
        lng: number;
      };
      country: string;
    };
  };
  crypto?: {
    coin: string;
    wallet: string;
    network: string;
  };
}
