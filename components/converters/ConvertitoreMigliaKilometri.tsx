'use client';

import Converter from '../Converter';

const ConvertitoreMigliaKilometri = () => {

  const convertMilesToKilometers = (miles: string) => {
    const milesValue = parseFloat(miles);
    if (!isNaN(milesValue)) {
      const kilometers = milesValue * 1.60934;
      return kilometers.toFixed(5);
    } else {
      return "";
    }
  };

  return (
    <Converter
      title="Convertitore da Miglia a Chilometri"
      conversionFunction={convertMilesToKilometers}
      inputType="number"
      defaultInputValue='0.5'
      defaultOutputValue='0.80467'
    />
  );
};

export default ConvertitoreMigliaKilometri;
