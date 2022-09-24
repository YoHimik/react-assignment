import React, {useCallback, useRef, useState} from "react";

export const usePopover = <T>(): [
    React.MutableRefObject<T | undefined>,
    boolean,
    (e: React.MouseEvent<T>) => void,
    () => void,
] => {
    const ref = useRef<T>()

    const [isPopoverVisible, setIsPopoverVisible] = useState(false)

    const closePopover = useCallback(() => {
        setIsPopoverVisible(false)
        ref.current = undefined
    }, [])

    const openPopover = useCallback((e: React.MouseEvent<T>) => {
        ref.current = e.currentTarget
        setIsPopoverVisible(true)
    }, [])

    return [ref, isPopoverVisible, openPopover, closePopover]
}
