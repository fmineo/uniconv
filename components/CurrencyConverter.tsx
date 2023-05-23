"use client";

import { useEffect, useState } from "react";
import Select from "react-tailwindcss-select";

interface Currency {
    value: string;
    label: string;
}

const CurrencyConverter = () => {
    const [currencies, setCurrencies] = useState<Currency[]>([]);
    const [baseCurrency, setBaseCurrency] = useState<Currency>({
        value: "EUR",
        label: "Euro - EUR",
    });
    const [targetCurrency, setTargetCurrency] = useState<Currency>({
        value: "USD",
        label: "United States Dollar - USD",
    });
    const [amount, setAmount] = useState(1);
    const [exchangeRate, setExchangeRate] = useState(0);
    const [convertedAmount, setConvertedAmount] = useState(0);

    useEffect(() => {
        const fetchCurrencies = async () => {
            try {
                const response = await fetch(
                    `https://v6.exchangerate-api.com/v6/${process.env.EXCHANGERAGE_API_KEY}/codes`
                );
                const data = await response.json();
                const currencyList = Object.keys(data.supported_codes).map(
                    (key) => ({
                        value: data.supported_codes[key][0],
                        label:
                            data.supported_codes[key][1] +
                            " - " +
                            data.supported_codes[key][0],
                    })
                );
                setCurrencies(currencyList);
            } catch (error) {
                console.error("Error fetching currencies:", error);
            }
        };

        fetchCurrencies();
    }, []);

    useEffect(() => {
        const fetchExchangeRate = async () => {
            if (baseCurrency && targetCurrency) {
                try {
                    const response = await fetch(
                        `https://v6.exchangerate-api.com/v6/${process.env.EXCHANGERAGE_API_KEY}/latest/${baseCurrency.value}`
                    );
                    const data = await response.json();
                    const rate = data.conversion_rates[targetCurrency.value];
                    setExchangeRate(rate);
                } catch (error) {
                    console.error("Error fetching exchange rate:", error);
                }
            }
        };

        fetchExchangeRate();
    }, [baseCurrency, targetCurrency]);

    useEffect(() => {
        const calculateConvertedAmount = () => {
            const converted = amount * exchangeRate;
            setConvertedAmount(converted);
        };

        calculateConvertedAmount();
    }, [amount, exchangeRate]);

    const handleBaseCurrencyChange = (value: Currency) => {
        setBaseCurrency(value);
    };

    const handleTargetCurrencyChange = (value: Currency) => {
        setTargetCurrency(value);
    };

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputAmount = parseFloat(e.target.value);
        setAmount(inputAmount);
        const converted = inputAmount * exchangeRate;
        setConvertedAmount(converted);
    };

    const handleConvertedAmountChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const inputAmount = parseFloat(e.target.value);
        setConvertedAmount(inputAmount);
        const converted = inputAmount / exchangeRate;
        setAmount(converted);
    };

    const selectOptions = currencies
        .filter((currency) => currency.value !== baseCurrency.value)
        .map((currency) => ({
            value: currency.value,
            label: currency.label,
        }));

    const selectStyles = {
        menuButton: ({ isDisabled }) =>
            `flex text-sm text-gray-500 border-none transition-all duration-300 focus:outline-none ${
                isDisabled ? "bg-gray-200" : "bg-white hover:border-gray-400"
            }`,
        menu: "absolute z-10 w-full bg-white shadow-lg border rounded py-1 mt-1.5 text-sm text-gray-700",
        listItem: ({ isSelected }) =>
            `block transition duration-200 px-2 py-2 cursor-pointer select-none truncate rounded ${
                isSelected
                    ? `text-white bg-blue-500`
                    : `text-gray-500 hover:bg-blue-100 hover:text-blue-500`
            }`,
    };

    return (
        <div className="text-center">
            <h1 className="text-3xl font-bold mb-7">Convertitore Valuta</h1>

            <div className="mb-5">
                1 {baseCurrency.value} ={" "}
                <strong>
                    {exchangeRate.toFixed(2)} {targetCurrency.value}
                </strong>
            </div>

            <div className="container">
                <div className="w-full flex items-center border border-gray-300 bg-white rounded p-2 mb-2 text-center">
                    <input
                        type="number"
                        id="amount"
                        value={amount.toFixed(2)}
                        step="0.01"
                        onChange={handleAmountChange}
                        autoComplete="off"
                        className="text-center w-28 outline-none"
                        placeholder="1"
                    />
                    <span className="w-1 border-l h-7 mx-5"></span>
                    <Select
                        classNames={selectStyles}
                        options={currencies}
                        searchInputPlaceholder="Cerca..."
                        placeholder="Seleziona una valuta"
                        isSearchable={true}
                        value={baseCurrency}
                        onChange={handleBaseCurrencyChange}
                        role="button"
                    />
                </div>
                <div className="w-full flex items-center border border-gray-300 bg-white rounded p-2 mb-2 text-center">
                    <input
                        type="number"
                        id="convertedAmount"
                        value={convertedAmount.toFixed(2)}
                        step="0.01"
                        onChange={handleConvertedAmountChange}
                        autoComplete="off"
                        className="text-center w-28 outline-none"
                        placeholder="1"
                    />
                    <span className="w-1 border-l h-7 mx-5"></span>
                    <Select
                        options={selectOptions}
                        searchInputPlaceholder="Cerca..."
                        placeholder="Seleziona una valuta"
                        isSearchable={true}
                        value={targetCurrency}
                        onChange={handleTargetCurrencyChange}
                        classNames={selectStyles}
                        role="button"
                    />
                </div>
            </div>
        </div>
    );
};

export default CurrencyConverter;
