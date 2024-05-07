import React, { useRef, useEffect } from "react";

const UploadWidget = ({setData,edit}) => {
  const cloudinaryRef = useRef(null);
  const widgetRef = useRef(null);

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "de8j43bvd",
        uploadPreset: "cj6z7eht",
      },
      function (error, result) {
        if (error) {
          console.error("Error uploading file:", error);
        } else if (result && result.event === "success") {
          console.log("Image URL:", result.info.url);
          setData((prevFormData) => ({
            ...prevFormData,
            empimage: result.info.url,
   
          }));
        }
      },
    );
  }, []);

  const handleUploadButtonClick = (e) => {
    e.preventDefault(); // Prevent default form submission or link behavior
    widgetRef.current.open();
  };

  return (
    <button onClick={handleUploadButtonClick}disabled={!edit} type="button">Upload</button>
  );
};

export default UploadWidget;

