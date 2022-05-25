import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const { data: projects, isLoading } = useQuery('projects', () => fetch('http://localhost:5000/api/portfolio').then(res => res.json()));

    if (isLoading) {
        return <Loading />
    };
    return (
        <div className='my-5'>
            <h3 className='my-3 text-2xl text-primary text-center pb-5'>Project I Have Done</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {projects?.map(project => <ProjectCard project={project} />)}
            </div>
        </div>
    );
};

export default Projects;