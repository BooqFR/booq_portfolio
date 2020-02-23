import React from 'react';
import Thumbnail from '../Thumbnail/Thumbnail.js'; // Import the Thumbnail component
import './Projects.css';
 
function Projects(props) {
  return (
    // Render a Thumbnail component
    <div>
      <h1>Projects</h1>
      <Thumbnail
        link="#"
        image="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
        title="Ttitre"
        category="bof"
      />
    </div>
  )
}
 
export default Projects;