import http from '@/utils/http'
import { prefix } from '../config'

import type { CateItem } from './type'

/** @desc 获取分类树 */
export function getCateTreeData() {
  return http.get<CateItem[]>(`${prefix}/cate/tree`)
}
