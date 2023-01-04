import { Route, Routes } from 'react-router-dom';
import { HeroesRoutes } from '../heroes';
import { LoginPage } from '../auth';
import { PrivateRoute, PublicRoute } from './index';

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="login/*"
          element={
            <PublicRoute>
              {/* <LoginPage /> */}
              <Routes>
                <Route
                  path="/*"
                  element={<LoginPage />}
                />
              </Routes>
            </PublicRoute>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

export default AppRouter;
