export interface Book {
  id: number;
  bookName: string
  author: string;
  page: number;
  category: string;
  tags: string[];
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

interface Tag {
  name: string
  className: string
}
