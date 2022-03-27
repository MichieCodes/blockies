import {IComment} from './IComment'

export interface IBlock {
  id: string,
  title: string,
  content: string[],
  mode: 'normal' | 'diff',
  syntax: string,
  password?: string,
  comments?: IComment[],
  created_at: string,
  updated_at: string
}
