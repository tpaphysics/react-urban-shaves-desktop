import React from "react";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/profile"
          element={<PrivateRoute component={<Profile />} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
