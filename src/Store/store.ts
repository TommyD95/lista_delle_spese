import { Action, configureStore, createAsyncThunk, ThunkAction } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { listaApi, useFetchListaQuery } from "../Hooks/chiamateAPI";



export const store=configureStore({
    reducer: {
        [listaApi.reducerPath]:listaApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(listaApi.middleware),
    
});
setupListeners(store.dispatch);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
    >;
export {useFetchListaQuery,useAddAttivitaMutation} from "../Hooks/chiamateAPI"
