// 当前选中的属性组List
export interface AttributeGroupItem {
  // 当前选中的属性组Id
  attributeGroupId: string;
  // 当前选中的属性id
  attributeId: string;
}

// 获取分类列表参数
export interface NodeCodeParams {
  // 当前选中的属性组List
  attributeGroupList: AttributeGroupItem[];
  // 当前选中前端分类节点code
  nodeCode: string;
  // 当前选中前端分类根节点code,非必填
  rootCode: string;
}


