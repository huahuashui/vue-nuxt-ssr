// 返回值model定义

// 前端分类项
export interface LevelNodeCodeItem {
  // 前端分类父节点
  fatherCode: string;
  // 前端分类节点名称
  name: string;
  // 前端分类节点id
  nodeCode: string;
  // 根节点
  rootCode: string;
  // 选中 1：是 0：否
  select: number;
  // 排序值
  sort: number;
  // 跳转url
  url: string;
}

// 当前选中的属性组项
export interface SpecificsInfoItem {
  // 属性组id
  id: string;
  // 属性组名称
  name: string;
  // 是否该属性组有被选中 0 or nul:否 1:是
  select: string;
  // 属性组下的列表
  subSpecificsList: SubSpecificsListItem[];
}

// 属性组下的列表项
export interface SubSpecificsListItem {
  // 属性子项id
  id: string;
  // 属性子项名称
  name: string;
  // 选中 0:否 1:是
  select: number;
  // 排序值
  sort: number;
}

// 分类节点列表model
export interface NodeCodeData {
  // 当前层级1
  level1: LevelNodeCodeItem[];
  // 当前层级2
  level2: LevelNodeCodeItem[];
  // 当前层级3
  level3: LevelNodeCodeItem[];
  // 当前层级4
  level4: LevelNodeCodeItem[];
  // 当前层级5
  level5: LevelNodeCodeItem[];
  // 当前选中的属性组
  specificsInfos: SpecificsInfoItem[];
}


