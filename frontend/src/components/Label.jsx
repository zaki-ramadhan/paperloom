const Label = ({ htmlFor, children }) => {
    return (
        <label htmlFor={htmlFor} className="label">
            <span className="label-text">{children}</span>
        </label>
    )
}

export default Label
