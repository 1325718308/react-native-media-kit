/**
 * Created by ydz on 2017/3/15.
 */
import React, {PropTypes} from 'react';

import ReactNative, {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    NativeModules,
    requireNativeComponent,
    Dimensions,
    ScrollView,
    Image,
    Platform,
    ActivityIndicator,
} from 'react-native';

class PlayButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sliding: false,
            current: this.props.current
        };
    }

    render() {
        return <View style={this.props.style}>
            <TouchableOpacity
                onPress={this.props.onPauseOrPlay}
                style={{width: 40, height: 40, alignItems: 'center', justifyContent: 'center'}}>
                <Image
                    style={{width: 20, height: 20, resizeMode: 'contain'}}
                    source={this.props.playing ? require('./img/media-player-pause.png') : require('./img/media-player-play.png')}/>
            </TouchableOpacity>
        </View>
    }
}
export default PlayButton