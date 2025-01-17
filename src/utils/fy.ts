// 日期格式化
export function parseTime(dateTime: string | number | Date, pattern:string) {
  if (arguments.length === 0 || !dateTime) {
    return null
  }
  let time = dateTime;
  const format = pattern || '{y}-{m}-{d} {h}:{i}:{s}'
  let date: Date;

 if (typeof time === 'object' && time instanceof Date) {
    date = time as Date;
  } else {
    if (typeof time === 'string' && /^[0-9]+$/.test(time)) {
      time = parseInt(time);
    } else if (typeof time === 'string') {
      // 处理 ISO 格式的日期字符串
      time = time.replace(/T|Z/g, ' ').replace(/-/g, '/');
    }
    if (typeof time === 'number' && time.toString().length === 10) {
      time = time * 1000;
    }
    date = new Date(time);
  }

const formatObj: { [key: string]: number | string } = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: ['日', '一', '二', '三', '四', '五', '六'][date.getDay()]
};

 return format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    // 确保 key 是 formatObj 的有效键，并且始终返回字符串
    const value = formatObj[key as keyof typeof formatObj];
    if (typeof value === 'number' && result.length > 0 && value < 10 && typeof value === 'number') {
      return '0' + value;
    }
    return String(value || '');
  });
}

export function fyDateYMD(val: string | number | Date, splitStr = '-') {
  return val ? parseTime(val, `{y}${splitStr}{m}${splitStr}{d}`) : ""
}

export function fyDateYMDHMS(val:string | number | Date) {
  return val ? parseTime(val, "{y}-{m}-{d} {h}:{i}:{s}") : ""
}

export function getCurrentTime() {
  const date = new Date()
  return fyDateYMD(date)
}

export function isLeapYear(year: number): boolean {
  return (year % 4 == 0) && (year % 100 != 0 || year % 400 == 0);
}
