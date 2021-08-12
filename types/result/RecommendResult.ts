// 返回值model定义

// 推荐位列表model
export interface ConfigInfoItem {
  list: ConfigInfoListItem[];
  materialId: string;
  pageId: string;
  token: string;
  type: number;
  useId: string;
}

// 推荐位列表
export interface ConfigInfoListItem {
  copywriting1: string;
  copywriting2: string;
  expand: object;
  id: string;
  imagUrl: string;
  linkUrl: string;
  recommendId: string;
  sort: number;
  status: number;
  title: string;
  tprId: string;
  type: number;
}
