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
  progress: number;
  dateCreate: string;
  dateUpdate: string
}
