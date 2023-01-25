import {BrowserRouter, Route, Routes} from "react-router-dom";
import ErrorPage from "../../03_pages/ErrorPage";
import ProfilePage from "../../03_pages/ProfilePage/index.ts";

export const WithRouter = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<ProfilePage />}/>
            <Route path="*" element={<ErrorPage />}/>
        </Routes>
    </BrowserRouter>
}