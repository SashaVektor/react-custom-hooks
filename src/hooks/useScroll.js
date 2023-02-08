import { useEffect, useRef } from "react";

export default function useScroll(parentRef, childRef, callback) {
    const observer = useRef();

    useEffect(() => {
        const optios = {
            root: parentRef.current,
            rootMargin: "0px",
            threshold: 0
        }
        observer.current = new IntersectionObserver(([target]) => {
            if(target.isIntersecting) {
                console.log("Hello");
                callback()
            }
        }, optios)

        observer.current.observe(childRef.current)

        return function () {
            observer.current.unobserve(childRef.current)
        }
    }, [callback, childRef, parentRef])
}