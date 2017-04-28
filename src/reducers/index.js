const initialState = {
  currentlyOpenFile: 0,
  files: [{
    fileName: 'unsaved',
    fileContents: ''
  }]
};

const updateObjectInArray = (array, action) => {
    return array.map( (item, index) => {
        if(index !== action.index) {
            // This isn't the item we care about - keep it as-is
            return item;
        }

        // Otherwise, this is the one we want - return a new value
        return action.item;
        }
    );
}

export default(state = initialState, payload) => {
    let files;
    switch (payload.type) {
        case 'openFileContents':
            files = updateObjectInArray(state.files, {
              index: state.currentlyOpenFile,
              item: payload.contents
            });
            return Object.assign({}, state, { files: files });
        case 'updateContents':
            files = updateObjectInArray(state.files, {
              index: state.currentlyOpenFile,
              item: {
                fileName: state.files[state.currentlyOpenFile].fileName,
                fileContents: payload.contents.fileContents
              }
            });
            return Object.assign({}, state, { files: files });
        default:
            return state;
    }
};
