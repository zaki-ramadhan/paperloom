const TextArea = ({ type, id, placeholder, className, value, onChange }) => {
    return (
        <textarea type={type}
            id={id}
            placeholder={placeholder}
            className={`textarea textarea-bordered w-full h-32 p-5 ${className}`}
            value={value}
            onChange={onChange} />
    )
}

export default TextArea
