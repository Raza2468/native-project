import React, { useState, useEffect } from 'react';
import { View, Text, BackHandler, ToastAndroid } from 'react-native';
import Video from 'react-native-video';
// import MediaControls, { PLAYER_STATES, } from 'react-native-video-basic-controls';

const Domi = () => {
    const [showVideo, setShowVideo] = useState(false);
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackPress);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
        };
    }, []);
    const handleBackPress = () => {
        setShowVideo(true);
        ToastAndroid.show('Video Pop-up', ToastAndroid.SHORT);
        return true;
    };
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {/* {showVideo ? (
                <Video
                    source={{ uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                    style={{ width: '100%', height: '100%' }}


                />
            ) : (
              <Video
                    source={{ uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                    style={{ width: '100%', height: '100%' }}

                    
                />
            )} */}
             <Video
                    source={{ uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                    style={{ width: '100%', height: '100%' }}

                    
                />
        </View>
    );
};
export default Domi;