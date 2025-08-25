import { Link } from "react-router"

const Button = ({ isLink = false, to = "/", isPrimary = true, type = "button", onClick, className, children, disabled = false }) => {
    const baseClass = isPrimary ? `btn btn-primary hover:outline-2 hover:outline-primary/50 active:outline-primary ${className}` : `btn ${className}`;

    if (isLink) {
        return (
            <Link to={to} className={baseClass}>
                {children}
            </Link>
        )
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={baseClass}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button
