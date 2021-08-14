import sponsors from './assets/sponsors.png';
import textLogo from './assets/textLogo.png';
import reactLogo from './assets/reactLogo.png';



import './App.css';
import  Box  from './Components/Layout/Box';
import YouTube from 'react-youtube';

function App() {

  const opts = {
    height: '200',
    width: '310',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div >
      <header className="App-header">
        <Box mt='3vh' mb='3vh'  style={styles.test} vCenter justifyContent="space-between"  height='92vh' width='100vw'>
           <Box center>
              <img src={textLogo} style={styles.textLogo} alt="banner" />
              <Box mt={2} fontSize={12}>video tutorials about React Native</Box>
           </Box>
          
           <Box center>
          
               <img src={reactLogo} style={styles.reactLogo} alt="banner" />
             
               <Box fontSize={25} fontWeight='800' mt='3vh'>COMING SOON</Box>
               <Box mt={20}>
                  <YouTube 
                      videoId="PyWOFi5eUgU" 
                      opts={opts} 
                      // onReady={onReady} 
                  />
              </Box>
           </Box>
           <Box row center justifyContent="space-around" width="90vw">
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
  }
}

export default App;
