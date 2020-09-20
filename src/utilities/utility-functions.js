/*
    isOS courtesy of Stack Overflow: 
    https://stackoverflow.com/questions/9038625/detect-if-device-is-ios
*/
const isiOS = () => {
    return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator.platform)
    // iPad on iOS 13 detection
    || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}; //end isiOS

export { isiOS };