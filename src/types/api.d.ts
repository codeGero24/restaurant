// --------------------
// - type review
// -----------------------
export type review = {
  id: string | number;
  customer_name: string;
  customer_job: string;
  text: string;
};

// -----------------------------
// - Interface ReviewesResponse
// -----------------------------
export interface ReviewesResponse {
  data: review[];
}


