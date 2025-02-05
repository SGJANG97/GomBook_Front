import { ElementLiteralsType, stringLiterals } from 'src/utils/literals';

export const SIZE_PER_PAGE_LIST = stringLiterals(
  '',
  '10',
  '20',
  '50',
  '100',
  '200',
  '500',
  '1000'
);
export const DEFAULT_PAGE_SIZE = '10';

export interface PageModel {
  pageNo?: number;
  pageSize?: ElementLiteralsType<typeof SIZE_PER_PAGE_LIST> | string;
  sort?: Array<[string, string]>;
}

export const defaultInitialPageModel: PageModel = {
  pageNo: 1,
  pageSize: DEFAULT_PAGE_SIZE,
  // sort: [],
};
