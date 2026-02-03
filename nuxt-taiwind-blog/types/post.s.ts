

export type Post = {
  id: number;
  date: string;
  tile: {
    rendered: string;

  };
  slug: string;
  excerpt:{
    rendered: string;
  };
  Link: string;
  author: number;
  _embedded?: any;
  content:{
    rendered: string;
  };
}