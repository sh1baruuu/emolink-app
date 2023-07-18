import { useLocation } from "react-router";
import Dashboard from "./Dashboard/Dashboard"

interface UserState {
    uid: string;
}


const User: React.FC = () => {
    const location = useLocation();
    const state = location.state as UserState;

    const uid = state?.uid || '';
    return (
        <Dashboard uid={uid} />
    )
}

export default User