import { useEffect, useState } from "react";

export default function FetchColleges() {
    const [colleges, setColleges] = useState([])

    const updateNews = async () => {
        const url = `https://66c9e19d59f4350f064dbe0c.mockapi.io/api/colleges/colleges`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setColleges(parsedData);
    }
    useEffect(() => {
        updateNews();
    }, [])

    return colleges;

}