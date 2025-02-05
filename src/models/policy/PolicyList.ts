import { Policy } from 'src/models/policy/Policy';

export interface PolicyList {
  totalSize?: number;
  list?: Array<Policy>;
}
