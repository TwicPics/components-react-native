import $hgUW1$react, {Component as $hgUW1$Component} from "react";
import {View as $hgUW1$View, Image as $hgUW1$Image, Text as $hgUW1$Text, StyleSheet as $hgUW1$StyleSheet, PixelRatio as $hgUW1$PixelRatio, Platform as $hgUW1$Platform} from "react-native";



const $7477542b3c1b7fce$var$buildErrorMessage = (message)=>`twicpics-react-native-components ${message}`;
const $7477542b3c1b7fce$export$3ad3cf81ff13f153 = (regExp, filter)=>(value)=>{
        let found;
        if (value) `${value}`.replace(regExp, (_, v)=>found = v);
        return filter ? filter(found) : found;
    };
const $7477542b3c1b7fce$export$8bf7aba4a9e09055 = (message)=>{
    throw new Error($7477542b3c1b7fce$var$buildErrorMessage(message));
};
const $7477542b3c1b7fce$export$3f77bec2448b63f8 = (items, border = `\\s`)=>new RegExp(`^(?:${border})*(${Array.isArray(items) ? items.join(`|`) : items})(?:${border})*$`);


const $6e4978e1ce161605$export$e506a1d27d1eaa20 = {
    debug: false,
    domain: undefined,
    path: "",
    output: undefined,
    step: 20
};
const $6e4978e1ce161605$var$rInvalidPath = /\?/;
const $6e4978e1ce161605$var$rValidDomain = /(^https?:\/\/[^/]+)\/?$/;
const $6e4978e1ce161605$var$rValidStep = /^[1-9][0-9]*/;
var $6e4978e1ce161605$export$2e2bcd8739ae039 = (options)=>{
    if (!options) (0, $7477542b3c1b7fce$export$8bf7aba4a9e09055)(`install options not provided`);
    const { domain: domain , debug: debug , path: path , step: step  } = options;
    if (!domain || !$6e4978e1ce161605$var$rValidDomain.test(domain)) (0, $7477542b3c1b7fce$export$8bf7aba4a9e09055)(`install domain "${domain}" is invalid`);
    if (path) {
        if ($6e4978e1ce161605$var$rInvalidPath.test(path)) (0, $7477542b3c1b7fce$export$8bf7aba4a9e09055)(`install path "${path}" is invalid`);
        $6e4978e1ce161605$export$e506a1d27d1eaa20.path = path.replace(/^\/?(.+?)\/?$/, `$1/`);
    }
    if (step) {
        if (!$6e4978e1ce161605$var$rValidStep.test(step.toString())) (0, $7477542b3c1b7fce$export$8bf7aba4a9e09055)(`install step "${step}" is invalid`);
        $6e4978e1ce161605$export$e506a1d27d1eaa20.step = step;
    }
    $6e4978e1ce161605$export$e506a1d27d1eaa20.debug = debug;
    if (domain) $6e4978e1ce161605$export$e506a1d27d1eaa20.domain = domain.replace($6e4978e1ce161605$var$rValidDomain, `$1`);
};




const $535ceba7ed5b3a28$export$3481467fad17af2c = [
    `contain`,
    `cover`
];
const $535ceba7ed5b3a28$export$fe782135b0ddc3e7 = (0, $7477542b3c1b7fce$export$3f77bec2448b63f8)($535ceba7ed5b3a28$export$3481467fad17af2c);
const $535ceba7ed5b3a28$export$d8e6fba34dba6eee = (0, $7477542b3c1b7fce$export$3f77bec2448b63f8)(`(\\d+(?:\\.\\d+)?)(?:\\s*[\\/:]\\s*(\\d+(?:\\.\\d+)?))?|(none)`);


const $6dbf027893dfcfb9$var$isPositiveNumber = (value)=>!isNaN(value) && value > 0;
const $6dbf027893dfcfb9$var$trimOrUndefined = (0, $7477542b3c1b7fce$export$3ad3cf81ff13f153)((0, $7477542b3c1b7fce$export$3f77bec2448b63f8)(`.+?`));
const $6dbf027893dfcfb9$var$trimTransformOrUndefined = (0, $7477542b3c1b7fce$export$3f77bec2448b63f8)(`.+?`, `[\\s\\/]`);
const $6dbf027893dfcfb9$export$13b5cdf893b69410 = $6dbf027893dfcfb9$var$trimOrUndefined;
const $6dbf027893dfcfb9$var$rAnchor = /\b(?:(left|right)|(bottom|top))\b/g;
const $6dbf027893dfcfb9$export$49d416a6d8a07bbb = (anchor)=>{
    const trimmed = anchor ? $6dbf027893dfcfb9$var$trimOrUndefined(anchor) : undefined;
    let x;
    let y;
    if (trimmed) {
        let tmp;
        while(tmp = $6dbf027893dfcfb9$var$rAnchor.exec(trimmed))if (tmp[1]) x = tmp[1];
        else y = tmp[2];
    }
    return {
        x: x,
        y: y
    };
};
const $6dbf027893dfcfb9$export$ad2aac647131ef14 = $6dbf027893dfcfb9$var$trimOrUndefined;
const $6dbf027893dfcfb9$export$6b8114b908e5a4a = (0, $7477542b3c1b7fce$export$3ad3cf81ff13f153)((0, $535ceba7ed5b3a28$export$fe782135b0ddc3e7));
const $6dbf027893dfcfb9$export$66a84d111eec63b9 = (0, $7477542b3c1b7fce$export$3ad3cf81ff13f153)($6dbf027893dfcfb9$var$trimTransformOrUndefined, (p)=>p && `${p}/`);
const $6dbf027893dfcfb9$export$f395e0b220ce706d = (value = 1)=>{
    if (value === `none`) return undefined;
    let number;
    if (typeof value === `number`) number = value;
    else if (value) {
        const parsed = (0, $535ceba7ed5b3a28$export$d8e6fba34dba6eee).exec(value);
        if (parsed) {
            const [, , width, height] = parsed;
            number = (height ? Number(height) : 1) / Number(width);
        } else number = 1;
    }
    return number ? $6dbf027893dfcfb9$var$isPositiveNumber(number) ? number : undefined : undefined;
};
const $6dbf027893dfcfb9$var$rImage = /^(image:)?\/*/;
const $6dbf027893dfcfb9$export$619dbfef2e37ff92 = (value)=>{
    const tmp = $6dbf027893dfcfb9$var$trimOrUndefined(value);
    return tmp ? tmp.replace($6dbf027893dfcfb9$var$rImage, `image:${(0, $6e4978e1ce161605$export$e506a1d27d1eaa20).path}`) : `placeholder:red`;
};
const $6dbf027893dfcfb9$export$f2bbc8bb71caffd4 = (value)=>{
    let tmp;
    if (typeof value !== `number`) {
        const trimmed = $6dbf027893dfcfb9$var$trimOrUndefined(value);
        // eslint-disable-next-line no-param-reassign
        tmp = trimmed && Number(trimmed);
    } else tmp = value;
    return $6dbf027893dfcfb9$var$isPositiveNumber(tmp) ? tmp : undefined;
};




const $b089f1ee3230d063$var$output = undefined;
const $b089f1ee3230d063$var$VERSION = `v1`;
const $b089f1ee3230d063$var$actualWidth = (w, _step)=>{
    const step = _step || (0, $6e4978e1ce161605$export$e506a1d27d1eaa20).step;
    return Math.max(step, step * Math.floor(w / step));
};
const $b089f1ee3230d063$var$actualSize = (size, step)=>{
    const pixelRatio = Math.min(Math.max(1, (0, $hgUW1$PixelRatio).get()), 2);
    const _actualWidth = $b089f1ee3230d063$var$actualWidth(size.width, step) * pixelRatio;
    console.log("size and pixelRatio", size, pixelRatio);
    let _actualHeight = size.ratio ? _actualWidth * size.ratio : size.height * pixelRatio;
    console.log("_actual", _actualWidth, _actualHeight);
    return {
        width: Math.round(_actualWidth),
        height: Math.round(_actualHeight),
        ratio: size.ratio
    };
};
const $b089f1ee3230d063$var$rAlt = /\/?([^/?#.]+)(?:\.[^/?#]*)?(?:[?#].*)?$/;
const $b089f1ee3230d063$export$74f65bd9d848bb3f = (alt, src)=>{
    if (!alt) {
        const tmp = $b089f1ee3230d063$var$rAlt.exec(src);
        alt = tmp && tmp[1] || `image`;
    }
    return alt;
};
const $b089f1ee3230d063$var$computePreTransform = ({ x: x , y: y  }, focus, mode, preTransform = ``)=>{
    const actualFocus = mode !== `contain` && (focus || (y ? x ? `${y}-${x}` : y : x));
    return `${preTransform || ``}${actualFocus ? `focus=${actualFocus}/` : ``}`;
};
const $b089f1ee3230d063$export$887c770fbe334306 = (width, height, ratio)=>{
    return {
        height: ratio ? width * ratio : height,
        ratio: ratio,
        width: width
    };
};
const $b089f1ee3230d063$var$rNoCatchAll = /^v[0-9]+(?:\/|$)|^(rel:)/;
const $b089f1ee3230d063$var$rPath = /^(?:image:)?(\/*)(.*)$/;
const $b089f1ee3230d063$var$rQuery = /\?/;
const $b089f1ee3230d063$export$476b74a8bca09e17 = (anchor, focus, mode = `cover`, preTransform = ``, size, src, step)=>{
    const { width: width , height: height  } = $b089f1ee3230d063$var$actualSize(size, step);
    const [, , path] = $b089f1ee3230d063$var$rPath.exec(src) || [];
    const noCatchAll = $b089f1ee3230d063$var$rNoCatchAll.exec(path);
    const noQuery = !$b089f1ee3230d063$var$rQuery.test(path);
    const { debug: debug , domain: domain  } = (0, $6e4978e1ce161605$export$e506a1d27d1eaa20);
    const transform = `${$b089f1ee3230d063$var$computePreTransform(anchor, focus, mode, preTransform)}${mode}=${width}x${height}`;
    const actualOutput = $b089f1ee3230d063$var$output ? `/output=${$b089f1ee3230d063$var$output}` : ``;
    const actualDebug = debug && (0, $hgUW1$Platform).OS === "web" ? `/debug` : ``;
    return noCatchAll ? `${domain}/${$b089f1ee3230d063$var$VERSION}${actualDebug}/${transform}${actualOutput}/${noCatchAll[1] ? `` : `image:`}${path}` : `${domain}/${path}${noQuery ? `?` : `&`}twic=${$b089f1ee3230d063$var$VERSION}${actualDebug}/${transform}${actualOutput}`;
};
const $b089f1ee3230d063$export$f3a1de8aaa8336f3 = (value, ratio)=>{
    if (ratio) {
        let tmp = value || {};
        if (Array.isArray(value)) tmp = value.reduce((p, c)=>{
            return {
                ...p,
                ...c
            };
        }, {});
        tmp = JSON.parse(JSON.stringify(tmp));
        tmp.height = undefined;
        tmp.aspectRatio = 1 / ratio;
        return tmp;
    }
    return value;
};
const $b089f1ee3230d063$export$6e98ed38daa3e7b3 = (size, styles)=>{
    return (0, $hgUW1$StyleSheet).flatten([
        styles.wrapper,
        {
            height: size.height
        }
    ]);
};



const $310fbde71a4f4c33$var$TwicWrapper = (props)=>{
    let width, height;
    ({ width: width , height: height  } = props);
    const alt = (0, $6dbf027893dfcfb9$export$13b5cdf893b69410)(props.alt);
    const anchor = (0, $6dbf027893dfcfb9$export$49d416a6d8a07bbb)(props.anchor);
    const focus = (0, $6dbf027893dfcfb9$export$ad2aac647131ef14)(props.focus);
    const mode = (0, $6dbf027893dfcfb9$export$6b8114b908e5a4a)(props.mode);
    const preTransform = (0, $6dbf027893dfcfb9$export$66a84d111eec63b9)(props.preTransform);
    const ratio = (0, $6dbf027893dfcfb9$export$f395e0b220ce706d)(props.ratio);
    const src = (0, $6dbf027893dfcfb9$export$619dbfef2e37ff92)(props.src);
    const step = (0, $6dbf027893dfcfb9$export$f2bbc8bb71caffd4)(props.step);
    const size = (0, $b089f1ee3230d063$export$887c770fbe334306)(width, height, ratio);
    const computedSrc = size.width && (0, $b089f1ee3230d063$export$476b74a8bca09e17)(anchor, focus, mode, preTransform, size, src, step);
    console.log("computedSrc", computedSrc);
    if (computedSrc) return /*#__PURE__*/ (0, $hgUW1$react).createElement((0, $hgUW1$View), {
        style: (0, $b089f1ee3230d063$export$6e98ed38daa3e7b3)(size, $310fbde71a4f4c33$var$styles)
    }, /*#__PURE__*/ (0, $hgUW1$react).createElement((0, $hgUW1$Image), {
        accessibilityLabel: (0, $b089f1ee3230d063$export$74f65bd9d848bb3f)(alt, src),
        source: {
            uri: computedSrc
        },
        resizeMode: mode,
        style: $310fbde71a4f4c33$var$styles.img
    }), (0, $6e4978e1ce161605$export$e506a1d27d1eaa20).debug && /*#__PURE__*/ (0, $hgUW1$react).createElement((0, $hgUW1$View), {
        style: $310fbde71a4f4c33$var$styles.debug
    }, /*#__PURE__*/ (0, $hgUW1$react).createElement((0, $hgUW1$Text), null, "Debug ", width, " ", height, " - ", computedSrc, " - ", JSON.stringify(props))));
    else return null;
};
class $310fbde71a4f4c33$export$2e2bcd8739ae039 extends (0, $hgUW1$Component) {
    constructor(props){
        super(props);
        this.state = {
            width: 0,
            height: 0
        };
    }
    render() {
        const { props: props  } = this;
        const ratio = (0, $6dbf027893dfcfb9$export$f395e0b220ce706d)(props.ratio);
        const style = (0, $b089f1ee3230d063$export$f3a1de8aaa8336f3)(props.style, ratio);
        return /*#__PURE__*/ (0, $hgUW1$react).createElement((0, $hgUW1$View), {
            style: (0, $hgUW1$StyleSheet).flatten([
                $310fbde71a4f4c33$var$styles.layout,
                style
            ]),
            onLayout: (event)=>{
                let { x: x , y: y , width: width , height: height  } = event.nativeEvent.layout;
                console.log("onLayout", x, y, width, height);
                this.setState({
                    width: width,
                    height: height
                });
            }
        }, /*#__PURE__*/ (0, $hgUW1$react).createElement($310fbde71a4f4c33$var$TwicWrapper, {
            ...props,
            width: this.state.width,
            height: this.state.height
        }));
    }
}
const $310fbde71a4f4c33$var$styles = (0, $hgUW1$StyleSheet).create({
    debug: {
        width: "100%",
        position: "absolute",
        backgroundColor: "#cccccc"
    },
    img: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0
    },
    layout: {
        overflow: `hidden`,
        width: "100%",
        backgroundColor: "#FF0000"
    },
    wrapper: {
        overflow: `hidden`,
        width: "100%"
    }
});





export {$6e4978e1ce161605$export$2e2bcd8739ae039 as installTwicPics, $310fbde71a4f4c33$export$2e2bcd8739ae039 as TwicImg};
//# sourceMappingURL=module.js.map
