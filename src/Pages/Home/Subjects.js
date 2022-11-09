
import React, { useEffect, useState } from 'react';
import SubjectCard from './SubjectCard';

const Subjects = () => {
    const [subjects, setSubjects] = useState([])

    useEffect(() => {
        fetch('subjects.json')
            .then(res => res.json())
            .then(data => setSubjects(data))
    }, [])

    return (
        <div className=''>
            <p>total subject: {subjects.length}</p>
            <div className='grid grid-cols-3 mx-auto justify-items-center'>
                {
                    subjects.map(subj => <SubjectCard
                        subject={subj}></SubjectCard>)
                }
            </div>
        </div>
    );
};

export default Subjects;