const initialState = {
    cinema: []
}
const cinema = (state = initialState, action) => {
    switch (action.type) {
        case "UPLOAD_CHARACTERS":
            return {...state, characters: action.payload}

        case "UPLOAD_COMICS":
            return {...state, comics: action.payload}
        default:
            return state;
    }
}

 export default cinema;