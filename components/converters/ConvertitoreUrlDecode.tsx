"use client";
import Converter from "../Converter";
import { ToastContainer, toast } from "react-toastify";

const ConvertitoreURLDecode = () => {
    const convertToUrlDecode = (string: string) => {
        try {
            const decodedValue = decodeURIComponent(string);
            return decodedValue;
        } catch (error) {
            toast.error("URI non valido!");
            return "";
        }
    };

    return (
        <>
            <Converter
                title="URL Decoder"
                conversionFunction={convertToUrlDecode}
                inputType="text"
                defaultInputValue="%5Bdecode%5D"
                defaultOutputValue="[decode]"
            />
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
        </>
    );
};

export default ConvertitoreURLDecode;
