

import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Video from 'react-native-video';
import Footer from './Footer';



export default function VideoScreen() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (

    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View>
      <Footer />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    flex: 1,
    alignSelf: 'stretch'
  },
  buttons: {
    margin: 16
  }
});


// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Button, View } from 'react-native';
// import { Video } from 'expo-av';
// import React from 'react';

// export default function VideoScreen() {
//     const video = React.useRef(null);
//     const secondVideo = React.useRef(null);
//     const [status, setStatus] = React.useState({});
//     const [statusSecondVideo, setStatusSecondVideo] = React.useState({});

//     return (
//         <View style={styles.container}>
//             <Video
//                 ref={video}
//                 style={styles.video}
//                 source={{ uri: "https://media.graphassets.com/jyLnBuPTOaiOgZxP0fR3" }}
//                 useNativeControls
//                 resizeMode="contain"
//                 isLooping
//                 onPlaybackStatusUpdate={setStatus}
//             />
//             <View style={styles.buttons}>
//                 <Button title="Play from 5s" onPress={() => video.current.playFromPositionAsync(5000)} />
//                 <Button title={status.isLooping ? "Set to not loop" : "Set to loop"} onPress={() => video.current.setIsLoopingAsync(!status.isLooping)} />
//             </View>
//             <Video
//                 ref={secondVideo}
//                 style={styles.video}
//                 source={require("./demo.mp4")}
//                 useNativeControls
//                 resizeMode="contain"
//                 isLooping
//                 onPlaybackStatusUpdate={setStatusSecondVideo}
//             />
//             <View style={styles.buttons}>
//                 <Button title="Play from 50s" onPress={() => secondVideo.current.playFromPositionAsync(50000)} />
//                 <Button title={statusSecondVideo.isLooping ? "Set to not loop" : "Set to loop"} onPress={() => secondVideo.current.setIsLoopingAsync(!statusSecondVideo.isLooping)} />
//             </View>
//             <StatusBar style="auto" />
//         </View>
//     );
// }