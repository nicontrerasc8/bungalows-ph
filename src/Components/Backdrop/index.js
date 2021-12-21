const Backdrop = ({children, event, isOn}) => {
    return (
        <div className={isOn ? 'backdrop active' : 'backdrop'} onClick={event}>
            <div onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Backdrop
