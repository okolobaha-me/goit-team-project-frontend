import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// Tostify
import { ToastContainer } from 'react-toastify';

// Components
import { Layout } from './components/Layout/Layout';
import LibraryCategories from './components/LibraryCategories';
import Read from './components/LibraryCategories/Read';
import { InProcess } from './components/LibraryCategories/InProcess';
import AddPage from './pages/Library/AddPage/AddPage';
import { Training } from './pages/Training/Training/Training';
import { Loader } from './components/Loader/Loader';

// PAGES
const SignUp = lazy(() => import('./pages/SignUp/SignUp'));
const SignIn = lazy(() => import('./pages/SignIn/SignIn'));
const Library = lazy(() => import('./pages/Library/Library'));
const Info = lazy(() => import('./pages/Info/Info'));
const Statistics = lazy(() => import('./pages/Statistics/Statistics'));
const TrainingPage = lazy(() => import('./pages/Training/TrainingPage'));
const PlanPage = lazy(() => import('./pages/Library/PlanPage/PlanPage'));
const StartNewTraining = lazy(() =>
    import('./pages/Training/StartNewTraining/StartNewTraining')
);

export const App = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout />}>
                    <Route
                        index
                        element={
                            <Suspense fallback={<Loader />}>
                                <Info />
                            </Suspense>
                        }
                    />
                    <Route
                        path={'signup'}
                        element={
                            <Suspense fallback={<Loader />}>
                                <SignUp />
                            </Suspense>
                        }
                    />
                    <Route
                        path={'signin'}
                        element={
                            <Suspense fallback={<Loader />}>
                                <SignIn />
                            </Suspense>
                        }
                    />
                    <Route
                        path={'library'}
                        element={
                            <Suspense fallback={<Loader />}>
                                <Library />
                            </Suspense>
                        }
                    >
                        <Route index element={<LibraryCategories />} />
                        <Route
                            path={'read'}
                            element={<Read length={'long'} />}
                        />
                        <Route
                            path={'plan'}
                            element={
                                <Suspense fallback={<Loader />}>
                                    <PlanPage />
                                </Suspense>
                            }
                        />
                        <Route
                            path={'in-process'}
                            element={<InProcess length={'long'} />}
                        />
                        <Route
                            path={'add-book'}
                            element={
                                <Suspense fallback={<Loader />}>
                                    <AddPage />
                                </Suspense>
                            }
                        />
                    </Route>
                    <Route
                        path={'training'}
                        element={
                            <Suspense fallback={<Loader />}>
                                <TrainingPage />
                            </Suspense>
                        }
                    >
                        <Route index element={<Training />} />
                        <Route
                            path={'start-new'}
                            element={<StartNewTraining />}
                        />
                    </Route>
                    <Route path={'statistics'} element={<Statistics />} />
                </Route>
            </Routes>
            <ToastContainer />
        </>
    );
};
