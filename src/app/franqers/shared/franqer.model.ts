export interface Franqer {
  id: number;
  name: string;
  nickname: string;
  profession: string;
  email: string;
  phone: number;
  biography: string;
  resume: string;
  image: {
    medium_square_crop: string,
    thumbnail: string,
    full_size: string,
  };
  assistant: {
    url: string,
    name: string,
    email: string,
    phone: number,
    image: {
      medium_square_crop: string,
      thumbnail: string,
      full_size: string,
    },
  };
}
