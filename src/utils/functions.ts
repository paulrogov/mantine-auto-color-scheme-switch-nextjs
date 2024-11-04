// https://dev.to/gugaguichard/replace-clsx-classnames-or-classcat-with-your-own-little-helper-3bf
export function cx(...args: unknown[]) {
  return args
    .flat()
    .filter(x => typeof x === 'string')
    .join(' ')
    .trim();
  }

  // https://stackoverflow.com/questions/69150593/next-js-localhost-is-prepended-when-making-external-api-call
  export const fetcher = (url: string, init?: RequestInit) =>
  fetch(url, init).then((res) => res.json());

  export const trimAndRemoveSpaces = (str: string) => str.replace(/\s/g, '').trim();

  // availableDateNotations: EnumType = [["european_standard", "DD/MM/YYYY"], ["american_standard", "MM/DD/YYYY"]],
  export type EnumType = [string, string][];

  // <Selec data={..} /> [{ value: 'european_standard', label: 'DD/MM/YYYY' }, { value: 'american_standard', label: 'MM/DD/YYYY' }]
  export type SelectDataOptionType = {
  value: string,
  label: string,
  };

  export function enumToSelectData(_enum: EnumType): SelectDataOptionType[] {
  const result = _enum.map(([v, l]) => ({
    value: v,
    label: l,
  }));
  return result;
  }

  export function findElemInEnum(data: SelectDataOptionType[], valueToFind: string): number {
  // -1 -> not found
  let result = -1;
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].value === valueToFind) {
    result = i;
    break;
    }
  }
  return result;
  }

  export function getCookie(name: string) {
  if (typeof (document) !== 'undefined') {
    let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ))
    return matches ? decodeURIComponent(matches[ 1 ]) : undefined
  }
  }

export const formatDate = (date: Date | string | undefined) => { // YYYY-MM-DD
  if (typeof(date) === "string") {
    date = new Date(date);
  }
  if (date) {
    return date.toDateString().split('T')[0];
  }
};

export function formatDateToLocalTime(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleString(); // Converts to user's locale date & time
}

export function removeDuplicates<T>(arr: T[], key: keyof T): T[] {
  return arr.reduce((unique: T[], item) => {
    if (!unique.find((obj) => obj[key] === item[key])) {
      unique.push(item);
    }
    return unique;
  }, []);
}
