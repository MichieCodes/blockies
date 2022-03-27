import {IBlock} from './IBlock'

type OmittedProperties = 'content' | 'password' | 'comments'

export interface IBlockListItem extends Omit<
  IBlock, 
  OmittedProperties
> {
  comment_count: number
}
