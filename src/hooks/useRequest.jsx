import { useEffect, useState } from "react";

export default function (request) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            request()
                .then(res => setData(res.data))
                .catch((err) => setError(err.message))
                .finally(() => setLoading(false))
        }, 1000)
    }, [])

    return [data, loading, error]
}