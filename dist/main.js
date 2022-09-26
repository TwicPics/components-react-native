var $8zHUo$react = require("react");
var $8zHUo$reactnative = require("react-native");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "installTwicPics", () => $5976e748eb37d7f9$export$2e2bcd8739ae039);
$parcel$export(module.exports, "TwicImg", () => $8439d54d5dafdea1$export$2e2bcd8739ae039);


const $a7f246e3f436a040$var$buildErrorMessage = (message)=>`twicpics-react-native-components ${message}`;
const $a7f246e3f436a040$export$3ad3cf81ff13f153 = (regExp, filter)=>(value)=>{
        let found;
        if (value) `${value}`.replace(regExp, (_, v)=>found = v);
        return filter ? filter(found) : found;
    };
const $a7f246e3f436a040$export$8bf7aba4a9e09055 = (message)=>{
    throw new Error($a7f246e3f436a040$var$buildErrorMessage(message));
};
const $a7f246e3f436a040$export$3f77bec2448b63f8 = (items, border = `\\s`)=>new RegExp(`^(?:${border})*(${Array.isArray(items) ? items.join(`|`) : items})(?:${border})*$`);


const $5976e748eb37d7f9$export$e506a1d27d1eaa20 = {
    debug: false,
    domain: undefined,
    path: "",
    output: undefined,
    step: 20
};
const $5976e748eb37d7f9$var$rInvalidPath = /\?/;
const $5976e748eb37d7f9$var$rValidDomain = /(^https?:\/\/[^/]+)\/?$/;
const $5976e748eb37d7f9$var$rValidStep = /^[1-9][0-9]*/;
var $5976e748eb37d7f9$export$2e2bcd8739ae039 = (options)=>{
    if (!options) (0, $a7f246e3f436a040$export$8bf7aba4a9e09055)(`install options not provided`);
    const { domain: domain , debug: debug , path: path , step: step  } = options;
    if (!domain || !$5976e748eb37d7f9$var$rValidDomain.test(domain)) (0, $a7f246e3f436a040$export$8bf7aba4a9e09055)(`install domain "${domain}" is invalid`);
    if (path) {
        if ($5976e748eb37d7f9$var$rInvalidPath.test(path)) (0, $a7f246e3f436a040$export$8bf7aba4a9e09055)(`install path "${path}" is invalid`);
        $5976e748eb37d7f9$export$e506a1d27d1eaa20.path = path.replace(/^\/?(.+?)\/?$/, `$1/`);
    }
    if (step) {
        if (!$5976e748eb37d7f9$var$rValidStep.test(step.toString())) (0, $a7f246e3f436a040$export$8bf7aba4a9e09055)(`install step "${step}" is invalid`);
        $5976e748eb37d7f9$export$e506a1d27d1eaa20.step = step;
    }
    $5976e748eb37d7f9$export$e506a1d27d1eaa20.debug = debug;
    if (domain) $5976e748eb37d7f9$export$e506a1d27d1eaa20.domain = domain.replace($5976e748eb37d7f9$var$rValidDomain, `$1`);
};




const $762c78061db68d84$export$3481467fad17af2c = [
    `contain`,
    `cover`
];
const $762c78061db68d84$export$fe782135b0ddc3e7 = (0, $a7f246e3f436a040$export$3f77bec2448b63f8)($762c78061db68d84$export$3481467fad17af2c);
const $762c78061db68d84$export$d8e6fba34dba6eee = (0, $a7f246e3f436a040$export$3f77bec2448b63f8)(`(\\d+(?:\\.\\d+)?)(?:\\s*[\\/:]\\s*(\\d+(?:\\.\\d+)?))?|(none)`);


const $da1cb3cd4de66621$var$isPositiveNumber = (value)=>!isNaN(value) && value > 0;
const $da1cb3cd4de66621$var$trimOrUndefined = (0, $a7f246e3f436a040$export$3ad3cf81ff13f153)((0, $a7f246e3f436a040$export$3f77bec2448b63f8)(`.+?`));
const $da1cb3cd4de66621$var$trimTransformOrUndefined = (0, $a7f246e3f436a040$export$3f77bec2448b63f8)(`.+?`, `[\\s\\/]`);
const $da1cb3cd4de66621$export$13b5cdf893b69410 = $da1cb3cd4de66621$var$trimOrUndefined;
const $da1cb3cd4de66621$var$rAnchor = /\b(?:(left|right)|(bottom|top))\b/g;
const $da1cb3cd4de66621$export$49d416a6d8a07bbb = (anchor)=>{
    const trimmed = anchor ? $da1cb3cd4de66621$var$trimOrUndefined(anchor) : undefined;
    let x;
    let y;
    if (trimmed) {
        let tmp;
        while(tmp = $da1cb3cd4de66621$var$rAnchor.exec(trimmed))if (tmp[1]) x = tmp[1];
        else y = tmp[2];
    }
    return {
        x: x,
        y: y
    };
};
const $da1cb3cd4de66621$export$ad2aac647131ef14 = $da1cb3cd4de66621$var$trimOrUndefined;
const $da1cb3cd4de66621$export$6b8114b908e5a4a = (0, $a7f246e3f436a040$export$3ad3cf81ff13f153)((0, $762c78061db68d84$export$fe782135b0ddc3e7));
const $da1cb3cd4de66621$export$66a84d111eec63b9 = (0, $a7f246e3f436a040$export$3ad3cf81ff13f153)($da1cb3cd4de66621$var$trimTransformOrUndefined, (p)=>p && `${p}/`);
const $da1cb3cd4de66621$export$f395e0b220ce706d = (value = 1)=>{
    if (value === `none`) return undefined;
    let number;
    if (typeof value === `number`) number = value;
    else if (value) {
        const parsed = (0, $762c78061db68d84$export$d8e6fba34dba6eee).exec(value);
        if (parsed) {
            const [, , width, height] = parsed;
            number = (height ? Number(height) : 1) / Number(width);
        } else number = 1;
    }
    return number ? $da1cb3cd4de66621$var$isPositiveNumber(number) ? number : undefined : undefined;
};
const $da1cb3cd4de66621$var$rImage = /^(image:)?\/*/;
const $da1cb3cd4de66621$export$619dbfef2e37ff92 = (value)=>{
    const tmp = $da1cb3cd4de66621$var$trimOrUndefined(value);
    return tmp ? tmp.replace($da1cb3cd4de66621$var$rImage, `image:${(0, $5976e748eb37d7f9$export$e506a1d27d1eaa20).path}`) : `placeholder:red`;
};
const $da1cb3cd4de66621$export$f2bbc8bb71caffd4 = (value)=>{
    let tmp;
    if (typeof value !== `number`) {
        const trimmed = $da1cb3cd4de66621$var$trimOrUndefined(value);
        // eslint-disable-next-line no-param-reassign
        tmp = trimmed && Number(trimmed);
    } else tmp = value;
    return $da1cb3cd4de66621$var$isPositiveNumber(tmp) ? tmp : undefined;
};




const $6729d5458cebc9bd$var$output = undefined;
const $6729d5458cebc9bd$var$VERSION = `v1`;
const $6729d5458cebc9bd$var$actualWidth = (w, _step)=>{
    const step = _step || (0, $5976e748eb37d7f9$export$e506a1d27d1eaa20).step;
    return Math.max(step, step * Math.floor(w / step));
};
const $6729d5458cebc9bd$var$actualSize = (size, step)=>{
    const pixelRatio = Math.min(Math.max(1, (0, $8zHUo$reactnative.PixelRatio).get()), 2);
    const _actualWidth = $6729d5458cebc9bd$var$actualWidth(size.width, step) * pixelRatio;
    console.log("size and pixelRatio", size, pixelRatio);
    let _actualHeight = size.ratio ? _actualWidth * size.ratio : size.height * pixelRatio;
    console.log("_actual", _actualWidth, _actualHeight);
    return {
        width: Math.round(_actualWidth),
        height: Math.round(_actualHeight),
        ratio: size.ratio
    };
};
const $6729d5458cebc9bd$var$rAlt = /\/?([^/?#.]+)(?:\.[^/?#]*)?(?:[?#].*)?$/;
const $6729d5458cebc9bd$export$74f65bd9d848bb3f = (alt, src)=>{
    if (!alt) {
        const tmp = $6729d5458cebc9bd$var$rAlt.exec(src);
        alt = tmp && tmp[1] || `image`;
    }
    return alt;
};
const $6729d5458cebc9bd$var$computePreTransform = ({ x: x , y: y  }, focus, mode, preTransform = ``)=>{
    const actualFocus = mode !== `contain` && (focus || (y ? x ? `${y}-${x}` : y : x));
    return `${preTransform || ``}${actualFocus ? `focus=${actualFocus}/` : ``}`;
};
const $6729d5458cebc9bd$export$887c770fbe334306 = (width, height, ratio)=>{
    return {
        height: ratio ? width * ratio : height,
        ratio: ratio,
        width: width
    };
};
const $6729d5458cebc9bd$var$rNoCatchAll = /^v[0-9]+(?:\/|$)|^(rel:)/;
const $6729d5458cebc9bd$var$rPath = /^(?:image:)?(\/*)(.*)$/;
const $6729d5458cebc9bd$var$rQuery = /\?/;
const $6729d5458cebc9bd$export$476b74a8bca09e17 = (anchor, focus, mode = `cover`, preTransform = ``, size, src, step)=>{
    const { width: width , height: height  } = $6729d5458cebc9bd$var$actualSize(size, step);
    const [, , path] = $6729d5458cebc9bd$var$rPath.exec(src) || [];
    const noCatchAll = $6729d5458cebc9bd$var$rNoCatchAll.exec(path);
    const noQuery = !$6729d5458cebc9bd$var$rQuery.test(path);
    const { debug: debug , domain: domain  } = (0, $5976e748eb37d7f9$export$e506a1d27d1eaa20);
    const transform = `${$6729d5458cebc9bd$var$computePreTransform(anchor, focus, mode, preTransform)}${mode}=${width}x${height}`;
    const actualOutput = $6729d5458cebc9bd$var$output ? `/output=${$6729d5458cebc9bd$var$output}` : ``;
    const actualDebug = debug && (0, $8zHUo$reactnative.Platform).OS === "web" ? `/debug` : ``;
    return noCatchAll ? `${domain}/${$6729d5458cebc9bd$var$VERSION}${actualDebug}/${transform}${actualOutput}/${noCatchAll[1] ? `` : `image:`}${path}` : `${domain}/${path}${noQuery ? `?` : `&`}twic=${$6729d5458cebc9bd$var$VERSION}${actualDebug}/${transform}${actualOutput}`;
};
const $6729d5458cebc9bd$export$f3a1de8aaa8336f3 = (value, ratio)=>{
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
const $6729d5458cebc9bd$export$6e98ed38daa3e7b3 = (size, styles)=>{
    return (0, $8zHUo$reactnative.StyleSheet).flatten([
        styles.wrapper,
        {
            height: size.height
        }
    ]);
};



const $8439d54d5dafdea1$var$TwicWrapper = (props)=>{
    let width, height;
    ({ width: width , height: height  } = props);
    const alt = (0, $da1cb3cd4de66621$export$13b5cdf893b69410)(props.alt);
    const anchor = (0, $da1cb3cd4de66621$export$49d416a6d8a07bbb)(props.anchor);
    const focus = (0, $da1cb3cd4de66621$export$ad2aac647131ef14)(props.focus);
    const mode = (0, $da1cb3cd4de66621$export$6b8114b908e5a4a)(props.mode);
    const preTransform = (0, $da1cb3cd4de66621$export$66a84d111eec63b9)(props.preTransform);
    const ratio = (0, $da1cb3cd4de66621$export$f395e0b220ce706d)(props.ratio);
    const src = (0, $da1cb3cd4de66621$export$619dbfef2e37ff92)(props.src);
    const step = (0, $da1cb3cd4de66621$export$f2bbc8bb71caffd4)(props.step);
    const size = (0, $6729d5458cebc9bd$export$887c770fbe334306)(width, height, ratio);
    const computedSrc = size.width && (0, $6729d5458cebc9bd$export$476b74a8bca09e17)(anchor, focus, mode, preTransform, size, src, step);
    console.log("computedSrc", computedSrc);
    if (computedSrc) return /*#__PURE__*/ (0, ($parcel$interopDefault($8zHUo$react))).createElement((0, $8zHUo$reactnative.View), {
        style: (0, $6729d5458cebc9bd$export$6e98ed38daa3e7b3)(size, $8439d54d5dafdea1$var$styles)
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($8zHUo$react))).createElement((0, $8zHUo$reactnative.Image), {
        accessibilityLabel: (0, $6729d5458cebc9bd$export$74f65bd9d848bb3f)(alt, src),
        source: {
            uri: computedSrc
        },
        resizeMode: mode,
        style: $8439d54d5dafdea1$var$styles.img
    }), (0, $5976e748eb37d7f9$export$e506a1d27d1eaa20).debug && /*#__PURE__*/ (0, ($parcel$interopDefault($8zHUo$react))).createElement((0, $8zHUo$reactnative.View), {
        style: $8439d54d5dafdea1$var$styles.debug
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($8zHUo$react))).createElement((0, $8zHUo$reactnative.Text), null, "Debug ", width, " ", height, " - ", computedSrc, " - ", JSON.stringify(props))));
    else return null;
};
class $8439d54d5dafdea1$export$2e2bcd8739ae039 extends (0, $8zHUo$react.Component) {
    constructor(props){
        super(props);
        this.state = {
            width: 0,
            height: 0
        };
    }
    render() {
        const { props: props  } = this;
        const ratio = (0, $da1cb3cd4de66621$export$f395e0b220ce706d)(props.ratio);
        const style = (0, $6729d5458cebc9bd$export$f3a1de8aaa8336f3)(props.style, ratio);
        return /*#__PURE__*/ (0, ($parcel$interopDefault($8zHUo$react))).createElement((0, $8zHUo$reactnative.View), {
            style: (0, $8zHUo$reactnative.StyleSheet).flatten([
                $8439d54d5dafdea1$var$styles.layout,
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
        }, /*#__PURE__*/ (0, ($parcel$interopDefault($8zHUo$react))).createElement($8439d54d5dafdea1$var$TwicWrapper, {
            ...props,
            width: this.state.width,
            height: this.state.height
        }));
    }
}
const $8439d54d5dafdea1$var$styles = (0, $8zHUo$reactnative.StyleSheet).create({
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





//# sourceMappingURL=main.js.map
