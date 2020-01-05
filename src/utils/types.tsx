export interface QueryPost {
  states: string,
  first: Number,
  after?: string,
  before?: string,
  createdBy?:string,
  filterBy?:{
    lables: Array<string>,
  }
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
  node : {
    id: string
    name: string
    color: string
    description: string
  }
}

export interface Milestone {
  node: {
    id: string
    title: string
    description: string
  }
}

export interface Post {
  node: {
    id: string
    number: number
    updatedAt: string
    author: Author
    bodyText: string
    bodyHTML: string
    title: string
    labels: Label
    milestone: Milestone
  }
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