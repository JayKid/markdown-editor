const initialState = {
  contents: ""
}

export default(state = initialState, payload) => {
    switch (payload.type) {
        case 'openFileContents':
        case 'updateContents':
            return {
              contents: payload.contents
            };
        default:
            return state;
    }
};
