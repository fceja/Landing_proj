function handleClick() {
    window.location.href= "tel:123-123-1234";
}

export default function TelNumber () {
    return(
        <button onClick={handleClick}>Call Me</button>
    )
}