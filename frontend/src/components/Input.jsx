const Input = ({ type, id, placeholder, className, value, onChange }) => {
    return (
        <input type={type}
            id={id}
            placeholder={placeholder}
            className={`input input-bordered w-full p-5 ${className}`}
            value={value}
            onChange={onChange} />
    )
}

export default Input
