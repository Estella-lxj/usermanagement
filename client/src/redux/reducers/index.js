import { combineReducers } from 'redux';
import users from './users';
import page from './page';
import limit from './limit';
import userInfo from './userInfo';
import keyword from './keyword';
import order from './order';
import postStatus from './postStatus';
import deleteStatus from './deleteStatus';
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
    users,
    page,
    limit,
    keyword,
    order,
    userInfo,
    postStatus,
    deleteStatus,
    form: formReducer,
});

export default reducers;