import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <div class="card w-96 bg-base-100 shadow- image-full">
            <figure><img src={project.image} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{project.name}</h2>
                <p>{project.description}</p>
                <div class="card-actions justify-end">
                    <a href={project.link} class="btn btn-primary">View</a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;