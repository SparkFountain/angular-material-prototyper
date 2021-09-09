import { createAction, props } from '@ngrx/store';

const prefix = '[HOME]';

export const createNewPrototype = createAction(`${prefix} Create new prototype`);
