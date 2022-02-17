// widgets.js
import { db } from "../../firebase";
import { collection, getDocs, addDoc } from "@firebase/firestore";
// Actions
const LOAD = "memo/LOAD";
const CREATE = "memo/CREATE";
const LOADED = "memo/LOADED";

const initialState = {
  is_loading: false,
  list: [],
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case "memo/LOAD": {
      return { list: action.memo_list };
    }
    case "memo/CREATE": {
      return {};
    }
    case "memo/LOADED": {
      return { ...state };
    }

    default:
      return state;
  }
}
// middlewares
export const loadMemoFB = () => {
  return async function (dispatch) {
    const memo_data = await getDocs(collection(db, "mymemo"));
    let memo_list = [];
    memo_data.forEach((doc) => {
      memo_list.push({ id: doc.id, ...doc.data() });
    });
    dispatch(loadMemo(memo_list));
  };
};

export const addMemoFB = (memo) => {
  return async function (dispatch) {
    // dispatch(isLoading(false));
    console.log(memo);
    const docRef = await addDoc(collection(db, "mymemo"), {
      title: memo.text_title,
      describe: memo.text_describe,
      example: memo.text_example,
    });
    dispatch(createMemo(docRef));
  };
};

// Action Creators
export function loadMemo(memo_list) {
  return { type: LOAD, memo_list };
}

export function createMemo(memo) {
  return { type: CREATE, memo };
}

export function isLoading(loading) {
  return { type: LOADED, loading };
}

// side effects, only as applicable
// e.g. thunks, epics, etc
