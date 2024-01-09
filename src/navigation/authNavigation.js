import { Route, Routes, useNavigate, useNavigation } from "react-router-dom"
import Login from "../screens/auth/login"





const NotFound = () => {
    return <div className="flex h-full w-full  items-center justify-center text-3xl font-bold">Not Found!</div>
}

export function AuthNavigation() {

    return (
        <div className="h-full">
            <Routes >
                <Route path="/" element={<Login />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}