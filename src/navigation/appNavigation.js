import { Route, Routes, useNavigate, useNavigation } from "react-router-dom"

import Home from "../screens/app/home"
import Instagram from "../screens/app/instagram"
import Tiktok from "../screens/app/tiktok"





const NotFound = () => {
    return <div className="flex h-full w-full  items-center justify-center text-3xl font-bold">Not Found!</div>
}

export function AppNavigation() {

    return (
        <div className="h-full">
            <Routes >
                <Route path="/" element={<Home />} />
                <Route path="/instagram" element={<Instagram />} />
                <Route path="/tiktok" element={<Tiktok />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}