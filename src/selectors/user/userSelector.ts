import { createSelector } from 'reselect';
import { UserState } from '../../features/user/userSlice';
import { RootState } from '../../rootReducer';

export const selectUserReducer = (state: RootState): UserState => state.user;
export const selectCurrentUser = createSelector(selectUserReducer, user => user.currentUser);
