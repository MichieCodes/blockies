import {IBlock} from '~/models';

async function create(block : IBlock) {

}

async function get(id : string) {

}

async function getAll() {

}

async function edit(block : Partial<IBlock> & Pick<IBlock, 'id'>) {

}

async function remove(id : string, password : string) {

}

export default {create, get, getAll, edit, remove}
