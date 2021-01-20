import { mockDataList, mockTreeList } from './index';

/** table rows mock */
export const mockTableRows = mockDataList(100, index => ({
  name: `name-${index}`,
  desc: `desc-${index}`,
  alias: `mingcheng-${index}`,
  owner: `owner-${index}`,
  id: `id-${index}`,
}));

/** list data mock  */
export const mockAssetsListIndexData = mockDataList(100, index => ({
  name: `name-${index}`,
  id: `id-${index}`,
}));

/** tree data mock */
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
