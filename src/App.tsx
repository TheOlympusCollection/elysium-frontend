import { NextUIProvider } from '@nextui-org/react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import IndexPage from './pages/Index';
import ThemeContext, { Theme } from './contexts/ThemeContext';
import { useSessionStorage } from '@uidotdev/usehooks';
import { useLayoutEffect } from 'react';
import Navbar from './components/Navbar';
import UserContext, { User } from './contexts/UserContext';
import DashboardPage from './pages/Dashboard';
import VirtualMachinesPage from './pages/VirtualMachines';

const App = () => {
    const [theme, setTheme] = useSessionStorage('theme', Theme.Dark);
    const [user, setUser] = useSessionStorage<User | null>('user', null);

    const navigate = useNavigate();

    useLayoutEffect(() => {
        const root = document.documentElement.classList;

        root.add(theme);

        return () => {
            root.remove(theme);
        };
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <UserContext.Provider value={{ user, setUser }}>
                <NextUIProvider navigate={navigate}>
                    <Navbar />
                    <main>
                        <Routes>
                            <Route path='/home' element={<IndexPage />} />
                            <Route
                                path='/dashboard'
                                element={<DashboardPage />}
                            />
                            <Route
                                path='/virtual_machines'
                                element={<VirtualMachinesPage />}
                            />
                        </Routes>
                    </main>
                </NextUIProvider>
            </UserContext.Provider>
        </ThemeContext.Provider>
    );
};

export default App;
