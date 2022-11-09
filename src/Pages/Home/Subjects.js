
import React, { useEffect, useState } from 'react';

const Subjects = () => {
    const [subject, setSubject] = useState([]);
    useEffect(() => {
        fetch('subjects.json')
            .then(res => res.json())
            .then(data => console.log(data))
        
    }, []);
    return (
        <div>
            
        </div>
    );
};

export default Subjects;