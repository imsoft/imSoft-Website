export interface RandomServiceBannerDictionary {
  services: Service[];
  text: string;
  linkText: string;
}

interface Service {
  name: string;
  href: string;
}
