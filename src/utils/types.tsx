export interface QueryPost {
  states: string,
  first: Number,
  after?: string,
  before?: string,
  createdBy?:string,
}

export interface PageInfo {
  hasNextPage: boolean
  endCursor: string
  hasPreviousPage: boolean
  startCursor: string
}

export interface MutationComment {
  subjectId: string,
  body: string
}

export interface Author {
  login: string
  url: string
}

export interface Label {
  id: string
  name: string
  color: string
  description: string
  issues?: {
    totalCount?: number
    nodes?: Array<CatePost>
  }
}

export interface Milestone {
    id: string
    title: string
    description: string
    issues?: {
      totalCount?: number
      nodes?: Array<CatePost>
    }
}

export interface Post {
    id: string
    number: number
    createdAt?: string
    author?: Author
    bodyText?: string
    bodyHTML?: string
    title: string
    labels: Array<Label>
    milestone: Milestone
}

export interface CatePost {
    id: string
    number: number
    createdAt?: string
    author?: Author
    bodyText?: string
    bodyHTML?: string
    title: string
    labels: {
      nodes: Array<Label>
    }
    milestone: Milestone
}

export interface Action {
  type: string,
  params: QueryPost,
  mutation: MutationComment
}

export interface State {
  posts: Array<Post>,
  labels: Array<Label>,
  category: Array<Milestone>,
  post: Post,
}