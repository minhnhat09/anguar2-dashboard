import { InMemoryDbService } from 'angular-in-memory-web-api';
import { books } from './mock/book.mock';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    // Mục tiêu: đọc sách nhanh và hiệu quả, đảm bảo tracer tiến trình đọc sách theo thời gian (năm này qua năm khác)
    // Mục này có thể mở rộng thêm: làm app audio book bằng reactnative/swift, tải hình lên s3, push noti nhắc nhở lịch đọc sách,
    // badge để thưởng
    const articles = [
      // category: blog(bài viết dài), quickThought(suy nghĩ linh tinh), ý tuởng(có thể mở rộng)
      {
        id: 1,
        title: 'Các loại batch ở sma',
        content: '',
        tags: ['batch'],
        category: 'blog',
        dateCreate: '',
        dateUpdate: ''
      },
      {
        id: 2,
        title: 'Các loại batch ở sma',
        content: '',
        tags: ['batch'],
        category: 'quickThought',
        dateCreate: '',
        dateUpdate: ''
      }
    ];
    /**
     * Mục lên kế hoạch học tập/làm việc
     */
    const studies = [
      {
        id: 1,
        language: 'java',

      }
    ];

    /**
     * Những việc cần làm trong ngày
     * => xuất phát và phục vụ những kế hoạch dài hạn
     */
    const todos = [
      {
        id: 1,
        taskName: 'học course javascript anh mập',
        dateCreate: '',
        subTask: [
          {
            id: 1,
            subTaskName: 'học chuơng 1',
            done: false
          }
        ],
        // có thể tính đuợc progress
        done: false
      }
    ];
    const company = [
      {
        id: 1,
        week: 14,
        content: ''
      }
    ]

    // quote hay, motivé
    const quotes = [
      {
        id: 1,
        content: 'Lorem ipsum dolor sit amet consectetur',
        author: 'gd'
      }
    ]
    /**
     * Mục tiêu dài hạn: thoát khỏi rat race
     * Bucket list năm
     * Kế hoạch tháng
     * Kế hoạch tuần
     * Todolist mỗi ngày
     */
    const plannings = {

    }
    const sideProjects = [
      {
        id: 1,
        projectName: 'lifemanager',
        roadMap: '',
        progress: [
          {
            id: 1,
            content: '',
            dateCreate: '',
            dateUpdate: '',
            tags: []
          }
        ]
      }
    ]
    return { heroes, books, quotes };
  }
}
