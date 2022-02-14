// widgets.js

// Actions
const LOAD = "my-app/widgets/LOAD";
const CREATE = "memo/CREATE";
const UPDATE = "my-app/widgets/UPDATE";
const REMOVE = "my-app/widgets/REMOVE";

const initialState = {
  cards: {
    id: "1",
    title: "타이틀입니다. 제발",
    describe: "설명입니다.",
    example: "예시입니다. 제발",
  },
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case "memo/CREATE": {
      return {};
    }

    default:
      return state;
  }
}

// Action Creators
export function loadWidgets() {
  return { type: LOAD };
}

export function createMemo(memo) {
  return { type: CREATE, memo };
}

// side effects, only as applicable
// e.g. thunks, epics, etc
