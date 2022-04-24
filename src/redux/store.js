import { configureStore } from '@reduxjs/toolkit'

import keywordReducer from './keywordSlice'
import resultReducer from './resultSlice'

export default configureStore({

    reducer: {

        keyword: keywordReducer,
        result: resultReducer,

    }
});