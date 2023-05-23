'use client';

import Converter from '../Converter';

const ConvertitoreKilometriMiglia = () => {

  const convertKilometersToMiles = (km: string) => {
    const kilometersValue = parseFloat(km);
    if (!isNaN(kilometersValue)) {
      const miles = kilometersValue / 1.60934;
      return miles.toFixed(5);
    } else {
      return "";
    }
  };

  return (
    <Converter
      title="Convertitore da Chilometri a Miglia"
      conversionFunction={convertKilometersToMiles}
      inputType="number"
      defaultInputValue='1.5'
      defaultOutputValue='0.93206'
    />
  );
};

export default ConvertitoreKilometriMiglia;