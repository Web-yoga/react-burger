import { 
	TypedUseSelectorHook, 
	useDispatch as useDispatchOrigin, 
	useSelector as useSelectorOrigin 
} from "react-redux";
import { 
	AppDispatch, 
	AppThunk, 
	RootState 
} from "../types";

export const useSelector: TypedUseSelectorHook<RootState> = useSelectorOrigin;

export const useDispatch = () => useDispatchOrigin<AppDispatch | AppThunk>();