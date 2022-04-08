const useOutsideClickHandler = (ref, callback) => {

    const handle = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            callback()
        }
    }

    document.addEventListener("click", handle)
    return () => {
        document.removeEventListener("click", handle)
    }

}

module.exports = useOutsideClickHandler