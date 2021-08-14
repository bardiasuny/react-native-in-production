
import './App.css';
import  Box  from './Components/Layout/Box';
import sponsors from './assets/sponsors.png';
import textLogo from './assets/textLogo.png';
import reactLogo from './assets/reactLogo.png';
import YouTube from 'react-youtube';

function App() {

  const opts = {
    height: '200',
    width: '310',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

 const onReady = (event) => {
    // access to player in all event handlers via event.target
   // event.target.pauseVideo();
  }

  return (
    <div >
      <header className="App-header">
        <Box mt='2vh'  style={styles.test} vCenter justifyContent="space-between"  height='97vh' width='100vw'>
           <Box center>
              <img src={textLogo} style={styles.textLogo} alt="banner" />
              <Box mt={2} fontSize={12}>video tutorials about React Native</Box>
           </Box>
          
           <Box center>
          
               <img src={reactLogo} style={styles.reactLogo} alt="banner" />
             
               <Box fontSize={25}  fontWeight='800' mt='3vh'>COMING SOON</Box>
               {/* <Box mt={20}>
                  <YouTube 
                      videoId="GFAqaoSIAhg" 
                      opts={opts} 
                      onReady={onReady} 
                  />
              </Box> */}
           </Box>
           <Box 
           pt={5}
           style={styles.footerWrapper}
           row center justifyContent="space-around" width="90vw">
                <Box  fontSize={12}>©2021 React Native in Production UK. All rights reserved.</Box>
                <img src={sponsors} style={styles.sponsorsLogo} alt="banner" />
            </Box>
        </Box>
      </header>
    </div>
  );
}

const styles = {
  test:{
      minHeight: 400
  }, 
  title:{
    fontSize: '10px',
  },
  textLogo:{
    width: 230,
  },
  sponsorsLogo:{
    width: 140,
  },
  textFooter: {
    fontSize: '12px',
  },
  reactLogo: {
     height: '20vh'
  },
  footerWrapper:{
     borderTopWidth: '1px',
     borderTopColor: 'grey',
     borderTopStyle: 'solid'
  }
}

export default App;
