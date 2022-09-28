import React, { Component } from 'react';
import { Animated, Image, Platform, StyleSheet, Text, View } from 'react-native';
import {
    parseAlt,
    parseAnchor,
    parseFocus,
    parseMode,
    parsePlaceholder,
    parsePreTransform,
    parseRatio,
    parseSrc,
    parseStep
} from '../_/parse';
import {
    computeAlt,
    computeSize,
    computeSrc,
    computeStyle,
} from '../_/compute';
import { config } from '../_/install';
import { Attributes, WrapperState } from '../_/types';

export interface WrapperAttributes extends Attributes {
    width: number;
    height: number;
}
const TwicWrapper = React.memo((props: WrapperAttributes) => {
    let width, height;
    ({ width, height } = props);
    const alt = parseAlt(props.alt);
    const anchor = parseAnchor(props.anchor);
    const focus = parseFocus(props.focus);
    const mode = parseMode(props.mode);
    const placeholder = parsePlaceholder(props.placeholder);
    const preTransform = parsePreTransform(props.preTransform);
    const ratio = parseRatio(props.ratio);
    const src = parseSrc(props.src);
    const size = computeSize(width, height, ratio);
    const step = parseStep(props.step);
    const computedSrc =
        size.width && computeSrc(anchor, focus, mode, undefined, preTransform, size, src, step);
    let computedPlaceholderSrc =
        placeholder === `preview` &&
        computeSrc(anchor, focus, mode, placeholder, preTransform, size, src, step);
    const placeHolderTransition = new Animated.Value(placeholder ? 1 : 0);
    const onImage = () => {
        Animated.timing(placeHolderTransition, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true
        }).start();
    };
    const blur = () => (Platform.OS === `web` ? 0 : 5);
    if (computedSrc) {
        if (config.debug) {
            console.debug('Computed src ', computedSrc, computedPlaceholderSrc);
        }
        return (
            <View style={styles.wrapper}>
                <Image
                    accessibilityLabel={computeAlt(alt, src)}
                    source={{ uri: computedSrc }}
                    resizeMode={mode}
                    style={styles.img}
                    onLoad={onImage}
                />
                {computedPlaceholderSrc && (
                    <Animated.Image
                        accessibilityLabel={computeAlt(alt, src)}
                        blurRadius={blur()}
                        source={{ uri: computedPlaceholderSrc }}
                        resizeMode={mode}
                        style={[styles.placeholdeImg, { opacity: placeHolderTransition }]}
                    />
                )}
                {config.debug && (
                    <View style={styles.debug}>
                        <Text>
                            Debug {width} {height} - {computedSrc} - {JSON.stringify(props)}
                        </Text>
                    </View>
                )}
            </View>
        );
    } else {
        return null;
    }
});

export default class TwicImg extends Component<Attributes, WrapperState> {
    constructor(props: Attributes) {
        super(props);
        this.state = {
            width: 0,
            height: 0
        };
    }

    render() {
        const { props } = this;
        const ratio = parseRatio(props.ratio);
        const style = computeStyle(props.style, ratio);
        return (
            <View
                style={StyleSheet.flatten([styles.layout, style])}
                onLayout={(event) => {
                    let { x, y, width, height } = event.nativeEvent.layout;
                    if (config.debug) {
                        console.debug('onLayout', x, y, width, height);
                    }
                    this.setState({
                        width: width,
                        height: height
                    });
                }}
            >
                <TwicWrapper {...props} width={this.state.width} height={this.state.height} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    debug: {
        width: '100%',
        position: 'absolute',
        backgroundColor: '#cccccc'
    },
    placeholdeImg: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    img: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    layout: {
        overflow: `hidden`,
        width: '100%'
    },
    wrapper: {
        overflow: `hidden`,
        width: '100%',
        height: '100%'
    }
});
