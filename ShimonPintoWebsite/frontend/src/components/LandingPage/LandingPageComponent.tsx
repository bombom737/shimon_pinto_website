import styles from './LandingPage.module.css';
import Image from 'next/image';

function LandingPageComponent() {
  return (
    <div className={styles.landingPage}>
      <div className="flex-col h-full w-full bg-[url('/shimon-landing-page.jpg')] bg-contain bg-no-repeat bg-left">
        <div className='absolute text-white top-1/3 translate-y-[-50%] !pl-[40px] !pr-[40px]'>
          <div>
            <h1 className='text-4xl text-[#2ba6ec]'>Hello, I'm</h1>
            <span className='text-7xl drop-shadow-2xl font-bold font-[Playfair_Display]'>Shimon Pinto</span>
            <h1 className='text-4xl drop-shadow-2xl text-[#d4d4d4]'>Glad to see you here.</h1>
            <div className="float-left w-[200px] h-[70px] flex items-center justify-center !mt-10">
              <a
                className="rounded-md bg-[#2ba6ec] flex items-center justify-center h-full w-full font-bold transition-all duration-500 ease-in-out hover:bg-[#2462b3]"
                href=""
              >
                <span className='text-lg'>About Me</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPageComponent;
