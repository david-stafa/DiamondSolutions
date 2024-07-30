export {};

declare global {
  interface Banner {
    name: string;
    imageUrl: string;
  }
  interface footerLinks {
    title: string;
    links: {
      title: string;
      data?: string;
      link?: string;
      icon?: string;
    }[];
  }
  interface menuItems {
    title: string;
    url: string;
    submenu?: {
      title: string;
      url: string;
    }[];
  }
}
