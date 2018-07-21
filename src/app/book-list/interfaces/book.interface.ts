export interface Book {
  id: string;
  bookName: string
  author: string;
  page: number;
  category: string;
  tags: Tag[];
  bookImageUrl: string;
  comment: string
  status: string
  progress: string;
  dateCreate: string;
  dateUpdate: string;
  readTime: string;
  source: {
    audio: boolean;
    ebook: boolean;
    paper: boolean;
  }
}

export interface Tag {
  name: string
  className: string
}
