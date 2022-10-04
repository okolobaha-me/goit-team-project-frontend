import {Route, Routes} from 'react-router-dom';
import {lazy, Suspense} from 'react';

// Components
import {Layout} from './components/Layout/Layout';
import LibraryCategories from './components/LibraryCategories';
import Read from './components/LibraryCategories/Read';
import {InProcess} from './components/LibraryCategories/InProcess';
import AddPage from './pages/Library/AddPage/AddPage';

// PAGES
const SignUp = lazy(() => import('./pages/SignUp/SignUp'));
const SignIn = lazy(() => import('./pages/SignIn/SignIn'));
const Library = lazy(() => import('./pages/Library/Library'));
const Info = lazy(() => import('./pages/Info/Info'));
const Statistics = lazy(() => import('./pages/Statistics/Statistics'));
const Training = lazy(() => import('./pages/Training/Training'));
const PlanPage = lazy(() => import('./pages/Library/PlanPage/PlanPage'));

export const App = () => {
    return (
        <>
            <Suspense fallback={<p>Loading....</p>}>
                <Routes>
                    <Route path={'/'} element={<Layout />}>
                        <Route index element={<Info />} />
                        <Route path={'signup'} element={<SignUp />} />
                        <Route path={'signin'} element={<SignIn />} />
                        <Route path={'library'} element={<Library />}>
                            <Route index element={<LibraryCategories />} />
                            <Route
                                path={'read'}
                                element={<Read length={'long'} />}
                            />
                            <Route path={'plan'} element={<PlanPage />} />
                            <Route
                                path={'in-process'}
                                element={<InProcess length={'long'} />}
                            />
                            <Route path={'add-book'} element={<AddPage />} />
                        </Route>
                        <Route path={'statistics'} element={<Statistics />} />
                        <Route path={'training'} element={<Training />} />
                    </Route>
                </Routes>
            </Suspense>
        </>
    );
};
