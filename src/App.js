import './App.css';
import { Download, Features, Button, SectionWrapper } from './components';
import assets from './assets'
import styles from './styles/Global';

function App() {
  return (
    <>
      <SectionWrapper title="Your own NFT Store Start Selling and Growing" descripition="Buy,store, collect NFTS, 
      exchange and earn crypto. Join 25+ million people using ProfNef marketplace "
        showBtn
        mockupImage={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper title="Smart User Interface MarketPlace" descripition="experience a buttery UI of 
      ProfNef Marketplace Smoth Contstant colors of fleet UI design"
        mockupImage={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper title="Deployment" descripition="ProNef is build using Expo which runs nativly on all users devices. You can easily get your app into peopl's hands"
        mockupImage={assets.feature}
        reverse
      />
      <SectionWrapper title="Creative way to showcase the store" descripition="The App contains two screens. 
      The first screen lists the all NFTs while the second one shows
       the destails of specific NFT"
        mockupImage={assets.mockup}
        banner="banner02"
      />
      <Download />

      <div className='px-4 banner04 py-2 justify-center items-center bg-primary text-center flex-col'>
        <p className={`${styles.whiteText}  ${styles.pText}`}>
          Made with Love by {""} <span className='bold'>Faizan Rasool</span>
        </p>
      </div>
    </>
  );
}

export default App;
