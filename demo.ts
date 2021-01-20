import { mockDataList, mockTreeList } from './index';

/** 资产专题 手动添加 modal上的表格数据 mock */
export const mockAddModalDataList = mockDataList(100, index => ({
  name: `name-${index}`,
  cname: `mingcheng-${index}`,
  owner: `owner-${index}`,
  id: `id-${index}`,
}));

/** 资产专题-资产-数据表 mock data list */
export const mockAssetsListTableData = mockDataList(100, index => ({
  name: `name-${index}`,
  desc: `desc-${index}`,
  alias: `mingcheng-${index}`,
  owner: `owner-${index}`,
  id: `id-${index}`,
}));
/** 资产专题-资产-指标 mock data list */
export const mockAssetsListIndexData = mockDataList(100, index => ({
  name: `name-${index}`,
  desc: `desc-${index}`,
  alias: `mingcheng-${index}`,
  owner: `owner-${index}`,
  statisticGrading: `grading-${index}`,
  id: `id-${index}`,
}));

/** 资产专题-tree data list mock */
export const mockTopicAssetsTreeList = mockTreeList(
  (index, level, key, parentKey, path) => ({
    title: key,
    level,
    index,
    key,
    parentKey,
    path,
  }),
  5,
  { 0: 5, 1: 7, 2: 3, 3: 2, 4: 4 },
);
