import { useEffect, useRef, useState } from "react";
import "./FileInput.css";

function FileInput({ name, value, initialPreview, onChange }) {
  const [preview, setPreview] = useState(initialPreview);
  const [error, setError] = useState("");
  const inputRef = useRef();

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];

    if (value) {
      setError("이미지는 최대 1개까지 업로드 가능합니다.");
      e.target.value = "";
      return;
    }

    setError("");
    onChange(name, selectedFile);
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;

    inputNode.value = "";
    onChange(name, null);
    setError("");
  };

  useEffect(() => {
    if (!value) return;

    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);

    return () => {
      URL.revokeObjectURL(nextPreview);
    };
  }, [value]);

  return (
    <div className="file-input-container">
      <div className="file-input-preview-wrapper">
        {!value && (
          <div
            className="file-input-placeholder"
            onClick={() => inputRef.current.click()}
          >
            + 이미지 등록
          </div>
        )}
        {value && (
          <div className="file-input-preview">
            <img
              src={preview}
              alt="미리보기 이미지"
              className="file-input-image"
            />
            <button onClick={handleClearClick} className="file-input-clear-btn">
              X
            </button>
          </div>
        )}
        <input
          type="file"
          accept="image/png, image/jpeg"
          onChange={handleChange}
          ref={inputRef}
          className="file-input-hidden"
        />
      </div>
      {error && <p className="file-input-error">{error}</p>}
    </div>
  );
}

export default FileInput;
