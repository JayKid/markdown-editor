export default(state = "", payload) => {
    switch (payload.type) {
        case 'updateContents':
            return payload.contents;
        default:
            return state;
    }
};
