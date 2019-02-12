import { Action } from './actions';
import { Status } from './types';

interface Entry<Id extends number> {
  id: Id;
  complexity: number;
  completeDate: Date;
  status: Status;
}

export type State = { 
  [Id in number]: Entry<Id>;
};
  

const initialState: State = {};

export const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'WORKLOAD_CREATED':            
      return { 
        ...state,
        [action.payload.id]: {
          id: action.payload.id,
          complexity: action.payload.complexity,
          completeDate: action.payload.completeDate,
          status: action.payload.status,
        },
      };
      
      case 'WORKLOAD_UPDATE_STATUS': 
        return {
          ...state,
          [action.payload.id]: {
            ...state[action.payload.id],
            status: action.payload.status,
          },
        }

      default:
        return state;
  }
}
