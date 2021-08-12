/**
 * 返回model
 */

export interface ResponseResult<T = any> {
  code: string;
  message: string;
  status?: string;
  data: T;
}

export interface PageResult<T = any> {
  //  当前页码
  currentPage: number;
  // 每页多少数据
  pageSize: number;
  // 数据集合
  rows: T[];
  // 总页数
  totalPages: number;
  // 总条数
  totalSize: number;
}
