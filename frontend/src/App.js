import HomepageMerge from "./Homepage/HomepageMerge/HomepageMerge";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WhoWeAreMerge from "./WhoWeArePage/WhoWeAreMerge/WhoWeAreMerge";
import ContactUsPageMerge from "./ContactUsPage/ContactUsPageMerge/ContactUsPageMerge";
import GetaFreeOfferPageMerge from "./GetaFreeOfferPage/GetaFreeOfferPageMerge/GetaFreeOfferPageMerge";
import Blogs from "./Blogs/Blogs";
import BlogPostOpen from "./BlogPostOpen/BlogPostOpen";
import BlogTag from "./BlogTag/BlogTag";
import Blogcategory from "./BlogCategory/Blogcategory";
import AddBlog from "./Dashboard/AddBlog";
import SignIn from "./SignInPage/SignIn";
import PrivacypolicypageMerge from "./Privacypolicypage/PrivacypolicypageMerge/PrivacypolicypageMerge";
import TermsandConditionMerge from "./TermsandCondition/TermsandConditionMerge/TermsandConditionMerge";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomepageMerge />} />
        <Route path="/whoweare" element={<WhoWeAreMerge />} />
        <Route path="/contactus" element={<ContactUsPageMerge />} />
        <Route path="/getacashoffer" element={<GetaFreeOfferPageMerge />} />
        <Route path="/privacypolicy" element={<PrivacypolicypageMerge />} />
        <Route path="/termsandcondition" element={<TermsandConditionMerge />} />

        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<AddBlog />} />

        <Route exact path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id/:title" element={<BlogPostOpen />} />
        <Route path="/category/:id" element={<Blogcategory />} />
        <Route path="/tags/:id" element={<BlogTag />} />
      </Routes>
    </Router>
  );
}

export default App;
