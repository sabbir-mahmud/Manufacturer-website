import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <div className="card w-96 mx-auto bg-base-100 shadow- image-full">
            <figure><img src={project.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{project.name}</h2>
                <p>{project.description}</p>
                <div className="card-actions justify-end">
                    <a href={project.link} className="btn btn-primary">View</a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;