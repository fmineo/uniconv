"use client";
import Converter from "../Converter";

const ConvertitoreURLEncode = () => {
    const convertToUrlEncode = (string: string) => {
            const urlEncodedValue = encodeURIComponent(string);
            return urlEncodedValue;
    };

    return (
        <>
            <Converter
                title="URL Encoder"
                conversionFunction={convertToUrlEncode}
                inputType="text"
                defaultInputValue="[encode]"
                defaultOutputValue="%5Bencode%5D"
            />
        </>
    );
};

export default ConvertitoreURLEncode;