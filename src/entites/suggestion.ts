export interface Suggestion {
  id: number
  upvotes: number
  title: string
  status: string
  category: string
  description: string
  comments: Comment[]
}
