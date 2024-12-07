import { useState } from "react";

function ImageUploade() {
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (e) => {
    const image = e.target.files[0];
    if (image) {
      const url = URL.createObjectURL(image);
      setPreviewUrl(url);
    }
  };

  return <input type="file" accept="image/*" onChange={handleImageChange} />;
}

export default ImageUploade;
