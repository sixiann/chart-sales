export default function Button({ text, type, className, handleClick }) {
    return (
      <button
        type={type}
        onClick={handleClick}
        className={`px-5 h-10 rounded-md font-semibold leading-none bg-primary text-shadow focus:outline-none hover:bg-teal-500 transition duration-200 ease-in-out ${className}`}
      >
        {text}
      </button>
    );
  }
  