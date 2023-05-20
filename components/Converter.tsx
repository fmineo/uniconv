"use client";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-tooltip/dist/react-tooltip.css";
import { BiCopy } from "react-icons/bi";
import { Tooltip } from "react-tooltip";

interface ConverterProps {
    title: string;
    inputType: "number" | "text" | "textarea";
    conversionFunction: (value: string) => string;
    defaultInputValue: string;
    defaultOutputValue: string;
}

const Converter: React.FC<ConverterProps> = ({
    title,
    inputType,
    conversionFunction,
    defaultInputValue,
    defaultOutputValue,
}) => {
    const [inputValue, setInputValue] = useState(defaultInputValue);
    const [outputValue, setOutputValue] = useState(defaultOutputValue);
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputValue(e.target.value);
        setOutputValue(conversionFunction(e.target.value));
        
    };

    const handleCopyClick = () => {
        navigator.clipboard.writeText(outputValue);
        toast.success("Testo copiato negli appunti!");
    };

    const renderInput = () => {
        if (inputType === "number") {
            return (
                <input
                    type="number"
                    //   placeholder={`Enter the ${title.toLowerCase()} value`}
                    className="border border-gray-300 rounded p-2 mb-2 text-center"
                    value={inputValue}
                    step={"0.01"}
                    onChange={handleInputChange}
                />
            );
        } else if (inputType === "textarea") {
            return (
                <textarea
                    //   placeholder={`Enter the ${title.toLowerCase()} value`}
                    className="border border-gray-300 rounded p-2 mb-2 w-full"
                    rows={5}
                    value={inputValue}
                    onChange={handleInputChange}
                />
            );
        } else {
            return (
                <input
                    type="text"
                    //   placeholder={`Enter the ${title.toLowerCase()} value`}
                    className="border border-gray-300 rounded p-2 mb-2 text-center w-full"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            );
        }
    };

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-7">{title}</h1>

            {renderInput()}

            {errorMessage && (
                <div className="mt-5">
                    <p className="text-red-500">{errorMessage}</p>
                </div>
            )}

            {outputValue && (
                <div>
                    <h2 className="text-xl text-center font-bold mb-2">Output:</h2>
                    <p className="w-full border-2 p-5 pr-20 rounded-lg relative">
                        {outputValue}
                        <button
                            className="bg-blue-500 text-white rounded p-2 mt-2 absolute right-4 top-2"
                            onClick={handleCopyClick}
                            data-tooltip-id="copy-tooltip"
                            data-tooltip-content="Copia negli appunti!"
                        >
                            <BiCopy />
                        </button>
                    </p>
                    <ToastContainer
                        position="top-right"
                        autoClose={2500}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="colored"
                    />
                    <Tooltip id="copy-tooltip" />
                </div>
            )}
        </div>
    );
};

export default Converter;
