'use client';

import Converter from '../Converter';

const ConvertitoreTestoASCII = () => {

  const convertToAscii = (testo: string) => {
    let asciiValue = "";
        for (let i = 0; i < testo.length; i++) {
            const asciiCode = testo.charCodeAt(i);
            asciiValue += asciiCode.toString() + " ";
        }
        return asciiValue.trim();
  };

  return (
    <Converter
      title="Convertitore da Testo ad ASCII"
      conversionFunction={convertToAscii}
      inputType="textarea"
      defaultInputValue='Hello'
      defaultOutputValue='72 101 108 108 111'
    />
  );
};

export default ConvertitoreTestoASCII;

