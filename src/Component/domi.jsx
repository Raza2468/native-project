// import React, { useState, useEffect } from 'react';
// import { View, Text, BackHandler, ToastAndroid } from 'react-native';
// import Video from 'react-native-video';

// const Domi = () => {
//     const [showVideo, setShowVideo] = useState(false);
//     useEffect(() => {
//         BackHandler.addEventListener('hardwareBackPress', handleBackPress);
//         return () => {
//             BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
//         };
//     }, []);
//     const handleBackPress = () => {
//         setShowVideo(true);
//         ToastAndroid.show('Video Pop-up', ToastAndroid.SHORT);
//         return true;
//     };
//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             {showVideo ? (
//                 <Video
//                     source={{ uri: 'http://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_20mb.mp4' }}
//                     style={{ width: '100%', height: '100%' }}
//                 />
//             ) : (
//                 <Text>Faiz e Raza</Text>
//             )}
//         </View>
//     );
// };
// export default Domi;

