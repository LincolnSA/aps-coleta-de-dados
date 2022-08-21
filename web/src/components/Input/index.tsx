import { useState } from "react";

interface IProps {
  label: string;
  type: string;
  value: string;
  setValue: any;
  placeholder?: string;
}

const Input = ({ label, type, value, setValue, placeholder }: IProps) => {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="mb-3 mt-3">
      <label htmlFor={`input-${label}`} className="form-label">
        {label}
      </label>

      {type === "password" ? (
        <div className="d-flex border rounded-2">
          <input
            type={showPass ? "text" : "password"}
            className="form-control border-0"
            id={`input-${label}`}
            required
            onChange={(event) => setValue(event.target.value)}
            value={value}
          />

          <button
            type="button"
            className="btn btn-light ms-2 d-flex align-items-center"
            onClick={() => setShowPass(!showPass)}
          >
            {showPass ? (
              <span className="material-symbols-outlined">visibility</span>
            ) : (
              <span className="material-symbols-outlined">visibility_off</span>
            )}
          </button>
        </div>
      ) : (
        <input
          type={type}
          className="form-control"
          id={`input-${label}`}
          required
          onChange={(event) => setValue(event.target.value)}
          value={value}
          placeholder={placeholder ? placeholder : ""}
        />
      )}
    </div>
  );
};
export { Input };
