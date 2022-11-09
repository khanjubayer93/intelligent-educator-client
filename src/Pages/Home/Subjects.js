
import React, { useEffect, useState } from 'react';

const Subjects = () => {
    const [subject, setSubject] = useState([])

    useEffect(() => {
        fetch('subjects.json')
            .then(res => res.json())
            .then(data => setSubject(data))
    }, [])

    return (
        <div>
            <p>total subject: {subject.length}</p>
        </div>
    );
};

export default Subjects;