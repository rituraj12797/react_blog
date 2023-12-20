
import { createBrowserRouter,Route,createRoutesFromElements, RouterProvider } from 'react-router-dom';
import AppLayOut from "./layouts/AppLayout";
import PageLayOut from './layouts/PageLayout';
import BlogPage from './components/BlogPage';
import BlogLayout from './layouts/BlogLayout';
const router = createBrowserRouter( 
  createRoutesFromElements(
    <Route path="/" element={<AppLayOut></AppLayOut>}>
      <Route index element={<PageLayOut></PageLayOut>}/>
      <Route path="/blog" element={<BlogLayout></BlogLayout>} >
        <Route path=":id" element={<BlogPage></BlogPage>} />
      </Route>
      <Route path="*" element={<div>Error</div>}/>
    </Route>
  )
);
function App() {
  
 
   
  return ( <div >
    <RouterProvider router={router}></RouterProvider>
    
  </div> );
}

export default App;