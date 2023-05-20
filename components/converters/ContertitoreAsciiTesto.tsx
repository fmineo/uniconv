"use client";

import Converter from "../Converter";

const ConvertitoreASCIITesto = () => {
    const convertToText = (ascii: string) => {
        const codiciAscii = ascii.split(" ");
        let testoValue = "";
        for (let i = 0; i < codiciAscii.length; i++) {
            const asciiCode = parseInt(codiciAscii[i]);
            if (!isNaN(asciiCode)) {
                const char = String.fromCharCode(asciiCode);
                testoValue += char;
            }
        }
        return testoValue;
    };

    return (
        <Converter
            title="Convertitore da ASCII a Testo"
            conversionFunction={convertToText}
            inputType="textarea"
            defaultInputValue="72 101 108 108 111"
            defaultOutputValue="Hello"
        />
    );
};

export default ConvertitoreASCIITesto;
