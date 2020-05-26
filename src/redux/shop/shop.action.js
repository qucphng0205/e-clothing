import {
  firestore,
  convertCollectionsToMap,
} from "../../firebase/firebase.utils";

export const FETCH_COLLECTIONS_START = "FETCH_COLLECTIONS_START";
export const FETCH_COLLECTIONS_SUCCESS = "FETCH_COLLECTIONS_SUCCESS";
export const FETCH_COLLECTIONS_FAILURE = "FETCH_COLLECTIONS_FAILURE";

//THU DISPATCH mot ACTION la f khong co (), XEM REACT CO HOAT DONG KHONG VI REDUX-THUNK DUOC ENABLE KHI DISPATCH
//NHAN VAO MOT FUNCTION, VAY FUNCTION KHONG CO () CO DUOC TINH KHONG?

export const fetchCollectionStart = () => ({
  type: FETCH_COLLECTIONS_START,
});

export const fetchCollectionSuccess = (collections) => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: collections,
});

export const fetchCollectionFailure = (error) => ({
  type: FETCH_COLLECTIONS_FAILURE,
  payload: error,
});

export const fetchCollectionStartAsync = (dispatch) => {
  const collectionRef = firestore.collection("collections");
  dispatch(fetchCollectionStart());

  collectionRef
    .get()
    .then((snapshot) => {
      const shop_data = convertCollectionsToMap(snapshot);
      dispatch(fetchCollectionSuccess(shop_data));
    })
    .catch((error) => dispatch(fetchCollectionFailure(error)));
};
