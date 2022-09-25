import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Layout } from './components/Layout/Layout';

// Components

// PAGES
const SignUp = lazy(() => import('./pages/SignUp/SignUp'));
const SignIn = lazy(() => import('./pages/SignIn/SignIn'));
const Library = lazy(() => import('./pages/Library/Library'));
const Info = lazy(() => import('./pages/Info/Info'));
const Statistics = lazy(() => import('./pages/Statistics/Statistics'));
const Training = lazy(() => import('./pages/Training/Training'));

export const App = () => {
    return (
        <>
            <Suspense fallback={<p>Loading....</p>}>
                <Routes>
                    <Route path={'/'} element={<Layout />}>
                        <Route index element={<Info />} />
                        <Route path={'signup'} element={<SignUp />} />
                        <Route path={'signin'} element={<SignIn />} />
                        <Route path={'library'} element={<Library />} />
                        <Route path={'statistics'} element={<Statistics />} />
                        <Route path={'training'} element={<Training />} />
                    </Route>
                </Routes>
            </Suspense>
        </>
    );
};
