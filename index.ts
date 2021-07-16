/**
 * @author huangup
 * @description mock data
 */

interface Obj {
  [attr: string]: any;
  [attr: number]: any;
}

const mockDataArr = Array.from(
  {
    length: 100000
  },
  (_, index) => ({
    name: `name-${index}`,
    age: index,
    weight: index,
  })
)

/** mock 列表型的数据 */
export const mockDataList = (
  total: number,
  createItem: (index: number) => Obj
) => {
  return [...Array(total).keys()].map((item: number) => createItem(item));
};

/** 获取分页数据 page从1开始 */
export const getMockPageList = (
  dataList: any[] = [],
  pageIndex = 1,
  pageSize = 8
) => {
  const index = pageIndex - 1;
  const start = index * pageSize;
  const end = start + pageSize;
  return dataList.slice(start, end);
};

interface Options {
  /* 第几层(从0开始): 配置几个节点 */
  [level: number]: number;
}
/** mock 树形结构的数据 */
export const mockTreeList = (
  /* 节点的数据对象 */
  createItem: (
    index?: number,
    level?: number,
    key?: string,
    path?: string[],
    parentKey?: string,
    parentPath?: string[],
    isLeaf?: boolean
  ) => Obj,

  /* 嵌套层级限制(从0开始 < 5) */
  limit?: number,

  /* 数据配置项，默认每层5个节点 */
  opts?: Options
) => {
  try {
    const levelLimit = limit || 5;
    const options = { ...(opts || {}) };

    if (!opts) {
      for (let i = 0; i < levelLimit; i++) {
        options[i] = 5;
      }
    }

    const createNodes = (
      level: number,
      parentKey?: string,
      parentPath?: string[]
    ) => {
      if (level >= levelLimit) {
        return;
      }
      const total = options[level];
      const treeNodes = mockDataList(total, (index) => {
        const key = parentKey ? `${parentKey}-${index}` : `${index}`;
        const nextLevel = level + 1;
        const path = [...parentPath, key];
        const isLeaf = level === levelLimit - 1;
        return {
          ...createItem(level, index, key, path, parentKey, parentPath, isLeaf),
          children: createNodes(nextLevel, key, path)
        };
      });
      return treeNodes;
    };
    const treeData = createNodes(0, "", []);
    return treeData;
  } catch (e) {
    console.error("mockTreeList arguments error");
  }
};

/** 根据节点的 path 获取 tree data 上节点的 children */
export const getChildrenInTree = (treeData: Array<any>, path) => {
  if (!path?.length) {
    return treeData;
  }
  const result = path.reduce((arr, key) => {
    return arr.find((node) => node.key === key).children;
  }, treeData);
  return result;
};

/** 根据节点的 path 获取 tree data 上节点 */
export const getNodeInTree = (treeData: Array<any>, path) => {
  if (!path?.length) {
    return { children: treeData };
  }
  const result = path.reduce(
    (obj, key) => {
      return obj.children.find((node) => node.key === key);
    },
    { children: treeData }
  );
  return result;
};

/** 过滤掉所有节点的 children 属性 */
export const filterChildren = (nodes) => {
  return nodes.map((item) => {
    const { children, ...rest } = item;
    return { ...rest };
  });
};
