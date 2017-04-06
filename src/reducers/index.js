const initialState = {
  contents: ""
}

export default(state = initialState, payload) => {
    switch (payload.type) {
        case 'uploadContents':
        case 'updateContents':
            return {
              contents: payload.contents
            };
        default:
            return state;
    }
};
