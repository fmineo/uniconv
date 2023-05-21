import ConvertitoreKilometriMiglia from "@/components/converters/ConvertitoreKilometriMiglia";

export const metadata = {
  title: 'Convertitore da Chilometri a Miglia',
  description: 'Convertitore da Chilometri a Miglia',
};

export default function KmToMi() {
  return (
    <>
      <ConvertitoreKilometriMiglia />
    </>
  )
}