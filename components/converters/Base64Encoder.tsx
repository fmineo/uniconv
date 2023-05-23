'use client';

import Converter from '../Converter';

const Base64Encoder = () => {

  const convertToBase64 = (string: string) => {
    const encodedValue = btoa(string);
    return encodedValue;
  };

  return (
    <Converter
      title="Base64 Encoder"
      conversionFunction={convertToBase64}
      inputType="textarea"
      defaultInputValue='Hello'
      defaultOutputValue='SGVsbG8='
    />
  );
};

export default Base64Encoder;
