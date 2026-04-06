import HomePage from "../../pages/home/ui/HomePage.tsx";
import PlayerPage from "../../pages/player/ui/PlayerPage.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { Pages } from "../../shared/config/pages.ts";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={Pages.home} element={<HomePage />} />
                <Route path={Pages.player} element={<PlayerPage />} />
            </Routes>
        </BrowserRouter>
    );
}
