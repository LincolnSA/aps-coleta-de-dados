interface IProps {
  label: string;
  value: string;
  setValue?: any;
  disable?: boolean;
}

const Textarea = ({ label, value, setValue, disable }: IProps) => {
  return (
    <div className="mb-3">
      <label htmlFor={`textarea-${label}`} className="form-label">
        {label}
      </label>
      <textarea
        className="form-control"
        id={`textarea-${label}`}
        cols={3}
        required
        onChange={(event) => setValue(event.target.value)}
        value={value}
        disabled={disable}
      />
    </div>
  );
};

export { Textarea };
