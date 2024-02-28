"use client";

import Image from "next/image";
import classes from "./image-picker.module.css";
import React, { useState } from "react";
import { isStringObject } from "util/types";

type Props = {
  label: string;
  name: string;
};

export default function ImagePicker({ label, name }: Props) {
  const [pickedImage, setPickedImage] = useState<string>();
  const imageInputRef = React.useRef<HTMLInputElement>(null);

  function handlePickClick() {
    if (imageInputRef.current) imageInputRef.current.click();
  }

  function handleImageChange(e: any) {
    const file = e.target.files[0];
    if (!file) {
      setPickedImage(undefined);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      if (typeof fileReader.result === "string")
        setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {pickedImage ? (
            <Image
              src={pickedImage}
              alt="The image selected by the user"
              fill
            ></Image>
          ) : (
            <p>No image has been picked yet</p>
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          name={name}
          id={name}
          ref={imageInputRef}
          accept="image/png, image/jpeg"
          required
          onChange={handleImageChange}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
