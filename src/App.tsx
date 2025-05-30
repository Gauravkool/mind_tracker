import HappyIncrementor from "./HappyIncrementor";
import HappyTracker from "./HappyTracker";
import ProductsListPage from "./productsListPage";
import SadIncrementor from "./SadIncrementor";
import SadTracker from "./SadTracker";

function App() {
  return (
    <div className="flex flex-col gap-2 h-screen w-6xl justify-center m-auto">
      <HappyTracker />
      <SadTracker/>
      <HappyIncrementor />
      <SadIncrementor/>
      <ProductsListPage/>
    </div>
  );
}

export default App;
