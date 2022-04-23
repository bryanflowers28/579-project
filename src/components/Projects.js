import './Projects.css'


const Projects = () => {

    return ( 
        <>
        <div class="subheading" id="projects">Projects</div>
        <div class="gallery">
          <div class="project">
            <embed src="/final-interview-report-1.pdf"></embed>
            <p> Interview Report </p>
            
          </div>
          <div class="project">
            <embed src="/remote-unmoderated-usability-testing_-craigslist-2.pdf"></embed>
            <p> Craigslist Usability test</p>
          </div>
          <div class="project">
            <embed src="/retriever.pdf"></embed>
            <p> Retriever Prototype</p>
          </div>
          <div class="project">
            <embed src="/umdesigners-final-report.pdf"></embed>
            <p> Library Reservation System Report</p>
          </div>
        </div>
          </>
    )

}

export default Projects;