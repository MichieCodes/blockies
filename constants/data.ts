import {DropdownOption} from '~/components'

const _generateOptions = (...titles : string[]) : DropdownOption[] => 
  titles.map((title) => ({title, value: title.toLowerCase()}))

export const MODE_OPTIONS = _generateOptions('Normal', 'Diff')
export const SYNTAX_OPTIONS = _generateOptions('Plain Text', 'TypeScript', 'Java', 'Go')
export const ACCESS_OPTIONS = _generateOptions('Public', 'Unlisted')
