const SubmittedForm = ({setIsSubmit}) => {
    return (
        <div className="w-[460px] py-10 bg-white p-6 rounded-lg shadow-lg">
            <div className="text-center text-2xl text-black">
            Success!
            </div>
            <button onClick={()=>setIsSubmit(false)}>
                Input another sale
            </button>
        </div>
    )
}

export default SubmittedForm;