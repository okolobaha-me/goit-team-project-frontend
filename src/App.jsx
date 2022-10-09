import {Route, Routes} from 'react-router-dom';
import {lazy, Suspense, useEffect, useRef} from 'react';

// Tostify
import {ToastContainer} from 'react-toastify';

// Components
import {Layout} from './components/Layout/Layout';
import LibraryCategories from './components/LibraryCategories';
import Read from './components/LibraryCategories/Read';
import {InProcess} from './components/LibraryCategories/InProcess';
import AddPage from './pages/Library/AddPage/AddPage';
import {Training} from './pages/Training/Training/Training';
import {Loader} from './components/Loader/Loader';
import {useDispatch, useSelector} from 'react-redux';
import {getIsLoggedIn, getLoadingCurrent, getToken,} from './redux/auth/auth-selectors';
import {token} from './redux/auth/token';
import {refresh} from './redux/auth/auth-operations';
import {PrivateRoute} from './components/Routes/PrivateRoute';
import {PublicRoute} from './components/Routes/PublicRoute';
import {Auth} from './pages/Auth/Auth';

// PAGES
const SignUp = lazy(() => import('./pages/SignUp/SignUp'));
const SignIn = lazy(() => import('./pages/SignIn/SignIn'));
const Library = lazy(() => import('./pages/Library/Library'));
const Info = lazy(() => import('./pages/Info/Info'));
const TrainingPage = lazy(() => import('./pages/Training/TrainingPage'));
const PlanPage = lazy(() => import('./pages/Library/PlanPage/PlanPage'));
const StartNewTraining = lazy(() =>
    import('./pages/Training/StartNewTraining/StartNewTraining')
);

export const App = () => {
    const tokenValue = useSelector(getToken);
    const isFirstLoad = useRef(true);
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(getIsLoggedIn);
    const isLoading = useSelector(getLoadingCurrent);

    useEffect(() => {
        if (!isFirstLoad.current) return;
        isFirstLoad.current = false;

        if (tokenValue) {
            token.set(tokenValue);
            dispatch(refresh(tokenValue));
        }
    }, [tokenValue]);

    if (isLoading) return <Loader />;

    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout />}>
                    <Route
                        index
                        element={
                            <PublicRoute isLoggedIn={isLoggedIn}>
                                <Suspense fallback={<Loader />}>
                                    <Info />
                                </Suspense>
                            </PublicRoute>
                        }
                    />
                    <Route
                        path={'signup'}
                        element={
                            <PublicRoute isLoggedIn={isLoggedIn}>
                                <Suspense fallback={<Loader />}>
                                    <SignUp />
                                </Suspense>
                            </PublicRoute>
                        }
                    />
                    <Route
                        path={'signin'}
                        element={
                            <PublicRoute isLoggedIn={isLoggedIn}>
                                <Suspense fallback={<Loader />}>
                                    <SignIn />
                                </Suspense>
                            </PublicRoute>
                        }
                    />
                    <Route
                        path={'library'}
                        element={
                            <PrivateRoute isLoggedIn={isLoggedIn}>
                                <Suspense fallback={<Loader />}>
                                    <Library />
                                </Suspense>
                            </PrivateRoute>
                        }
                    >
                        <Route
                            index
                            element={
                                <PrivateRoute isLoggedIn={isLoggedIn}>
                                    <LibraryCategories />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path={'read'}
                            element={<Read length={'long'} />}
                        />
                        <Route
                            path={'plan'}
                            element={
                                <PrivateRoute isLoggedIn={isLoggedIn}>
                                    <Suspense fallback={<Loader />}>
                                        <PlanPage />
                                    </Suspense>
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path={'in-process'}
                            element={
                                <PrivateRoute isLoggedIn={isLoggedIn}>
                                    <InProcess length={'long'} />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path={'add-book'}
                            element={
                                <PrivateRoute isLoggedIn={isLoggedIn}>
                                    <Suspense fallback={<Loader />}>
                                        <AddPage />
                                    </Suspense>
                                </PrivateRoute>
                            }
                        />
                    </Route>
                    <Route
                        path={'training'}
                        element={
                            <PrivateRoute isLoggedIn={isLoggedIn}>
                                <Suspense fallback={<Loader />}>
                                    <TrainingPage />
                                </Suspense>
                            </PrivateRoute>
                        }
                    >
                        <Route index element={<Training />} />
                        <Route
                            path={'start-new'}
                            element={
                                <PrivateRoute isLoggedIn={isLoggedIn}>
                                    <Suspense fallback={<Loader />}>
                                        <StartNewTraining />
                                    </Suspense>
                                </PrivateRoute>
                            }
                        />
                    </Route>
                    <Route
                        path={'auth'}
                        element={
                            <PublicRoute isLoggedIn={isLoggedIn}>
                                <Auth />
                            </PublicRoute>
                        }
                    />
                </Route>
            </Routes>
            <ToastContainer />
        </>
    );
};
