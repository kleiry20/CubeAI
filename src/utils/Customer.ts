export interface Customer {
  id: number | string;
  name: string;
  title: string;
  address: string;
  picsArr?: [{ url: string }];
}
