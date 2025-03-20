import LandingPage from "../components/LandingPage/LandingPage";
import "./globals.css";


export default function MainPage() {
  return (
    <div className='flex w-[100vw] h-full bg-[#fafafa]'>
      <div>
        <LandingPage />
      </div>
    </div>
  );
}
