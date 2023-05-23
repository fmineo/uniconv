"use client";

import Converter from "../Converter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Base64Decoder = () => {
    const convertToString = (base64: string) => {
        try {
            const decodedValue = atob(base64);
            return decodedValue;
        } catch (error) {
            toast.error("Stringa Base64 non valida!");
            return "";
        }
    };

    return (
        <>
            <Converter
                title="Base64 Decoder"
                conversionFunction={convertToString}
                inputType="textarea"
                defaultInputValue="UHJvZ3JhbW1pbmcgaXMgYmVhdXRpZnVsIQ=="
                defaultOutputValue="Programming is beautiful!"
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

export default Base64Decoder;
