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
// - type bookingFields                 -
// --------------------------------------
export type bookingFields = {
  type: string;
  name: string;
  placeholder: string;
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
