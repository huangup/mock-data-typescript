import { mockDataList, mockTreeList } from './index';

export const dataList = mockDataList(100, (index) => ({
  name: `name-${index}`,
  cname: `mingcheng-${index}`,
  owner: `owner-${index}`,
  id: `id-${index}`
}));

const LEVEL_LIMIT = 5;
export const treeList = mockTreeList(
  (level, index, key, path, parentKey, parentPath, isLeaf) => ({
    level,
    index,
    key,
    path,
    parentKey,
    parentPath,
    isLeaf,
    name: key
  }),
  LEVEL_LIMIT,
  { 0: 5, 1: 7, 2: 3, 3: 2, 4: 4 }
);
