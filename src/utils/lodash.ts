export function cloneDeep<T>(data: T): T {
  return JSON.parse(JSON.stringify(data));
}

export function uniq<T>(data: T[]): T[] {
  if (!data || !data.length) {
    return [];
  }
  let list: T[] = [];
  data.forEach((f) => {
    if (!list.includes(f)) {
      list.push(f);
    }
  });
  return list;
}

export function uniqBy<T extends object, K extends keyof T>(data: T[], key: K): T[] {
  if (!Array.isArray(data)) {
    return data;
  }

  let list: T[] = [];
  data.forEach((f) => {
    if (!list.map((e) => e[key]).includes(f[key])) {
      list.push(f);
    }
  });
  return list;
}

export function groupBy<T extends object, K extends keyof T>(data: T[], key: K): Record<string, T[]> {
  if (!data.length) {
    return {};
  }
  const uniqKeys = uniq(data.map((c) => c[key] as unknown as string));
  let vo: Record<string, T[]> = {};
  uniqKeys.forEach((f) => {
    vo[f] = data.filter((d) => d[key] === f);
  });

  return vo;
}

export function sumBy<T extends object, K extends keyof T>(data: T[], key: K): number {
  if (!data.length) {
    return 0;
  }

  return data
    .map((c) => (c[key] ? +c[key] : 0))
    .reduce((a, b) => a + b);
}

export function chunk<T>(dataList: T[], size = 2): T[][] {
  let list: T[][] = [];

  for (let i = 0; i < dataList.length; i += size) {
    list.push(dataList.slice(i, i + size));
  }
  return list;
}
