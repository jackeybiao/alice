import { QueryPost } from "./types"

export const QUERY_POSTS = 'QUERY_POSTS'

export const QUERY_POSTITEM = 'QUERY_POSTITEM'

export const QUERY_LABELS = 'QUERY_LABELS'

export const QUERY_CATEGORY = 'QUERY_CATEGORY'

export const SAVE_COMMENT = 'SAVE_COMMENT'


export function queryPost(params: QueryPost) {
  return { type: QUERY_POSTS, params }
}

export function queryPostItem(number: number) {
  return { type: QUERY_POSTITEM, number }
}

export function queryLabels() {
  return { type: QUERY_POSTITEM }
}

export function queryCategory() {
  return { type: QUERY_CATEGORY }
}

export function saveComment(subjectId:string, body: string) {
  return { type: SAVE_COMMENT, subjectId, body }
}