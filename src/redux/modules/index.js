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
      return { list: action.memo_list, is_loading: true };
    }
    case "memo/CREATE": {
      return { is_loading: true };
    }
    case "memo/LOADED": {
      return { ...state, isLoading: action.loading };
    }

    default:
      return state;
  }
}
// middlewares
export const loadMemoFB = () => {
  return async function (dispatch) {
    const memo_data = await getDocs(collection(db, "mymemo"));
    // console.log(memo_data);
    let memo_list = [];
    memo_data.forEach((doc) => {
      // console.log(doc.data());
      memo_list.push({ id: doc.id, ...doc.data() });
    });
    // console.log(memo_list);
    dispatch(loadMemo(memo_list));
  };
};

export const addMemoFB = (memo) => {
  return async function (dispatch) {
    // console.log(memo);
    dispatch(isLoading(false));
    const docRef = await addDoc(collection(db, "mymemo"), {
      title: memo.text_title,
      describe: memo.text_describe,
      example: memo.text_example,
    });
    // console.log(docRef);
    // dispatch(docRef);
    // const memo_data = { id: docRef.id, ...memo };
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
