import MainLayout from "./components/layouts/MainLayout";
import ProtectedRoute from "./components/layouts/ProtectedRoute";

function App() {
  return (
    <>
      <div>
        <ProtectedRoute>
          <MainLayout></MainLayout>
        </ProtectedRoute>
      </div>
    </>
  );
}

export default App;
