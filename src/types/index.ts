export type TWeather = {
  name: string;
  region?: string;
  country: string;
  lastUpdated: string;
  temperature: number;
  feelslike: number;
  windKph: number;
  condition: {
    text: string;
    icon: string;
  };
  forecast?: any | undefined;
};

export type LocationType = {
    latitude: number;
    longitude: number;
  };