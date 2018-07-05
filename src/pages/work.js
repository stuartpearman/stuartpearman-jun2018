import React from 'react'

const Process = () => (
  <article className="page">
    <section className="hero">
      <h1 className="hero-heading">Case Studies</h1>
      <p>Out of respect for my clients' privacy, these case studies are anonymous. If you would like to learn more, contact me at <a href="mailto:swpearman@gmail.com">swpearman@gmail.com</a></p>
    </section>
    <section className="content-section">
      <section>
        <h2 id="staticsitegenerationheadlesscontentmanagement">Static site + headless content</h2>

        <p>Lead the development and technical planning in an overhaul / redesign for a mid-sized web development agency website.</p>

        <h3 id="descriptionofwork">Description of work</h3>

        <p>Uses webhooks on internal servers to listen for changes in data from a number of API's and static files. When data is updated, the application uses a build server built on Node to combine and compile the data into a static React application, keeping all information secure and contained within the organization's internal network.</p>

        <h3 id="technologies">Technologies</h3>

        <ul>
        <li>Node, Gatsby JS</li>

        <li>Wordpress REST API</li>

        <li>React JS</li>

        <li>Graphql</li>

        <li>Docker</li>
        </ul>
      </section>
      <section>
        <h2 id="frontenduxsupportforalargevideostreamingprovider">Video Streaming Platform Development</h2>

        <p>Frontend &amp; UX support in a mid-sized agile developement team for a multi-million dollar family friendly video streaming provider.</p>

        <h3 id="descriptionofwork-1">Description of work</h3>

        <p>Started work on the application during its inception in 2014 &amp; '15, laying down much of the initial frontend infrastructure and design implementation. Returned in 2017 as support for the frontend team where I worked on setting up beacons for analytics data, improving performance, refactoring old code, and restructuring the frontend filesystem.</p>

        <h3 id="technologies-1">Technologies</h3>

        <ul>
        <li>Ruby on Rails</li>

        <li>Bamboo CI</li>

        <li>React JS</li>

        <li>Postgres / MySQL</li>
        </ul>
      </section>
      <section>
        <h2 id="analyticsdashboarddevelopmentforalargehospitalnetwork">Analytics Dashboard Development</h2>

        <p>Worked independently on a dashboard to integrate with a large hospital network's data analytics platform.</p>

        <h3 id="descriptionofwork-2">Description of work</h3>

        <p>Created a dashboard to solve navigation issues the client was having with their data analytics software. The application used a TurboTax-like approach, asking users a series of questions to direct them to the correct dataset or visualization. The project was constrained in that it required a static, single file output to integrate with their existing toolset.</p>

        <h3 id="technologies-2">Technologies</h3>

        <ul>
        <li>Node</li>

        <li>Vanilla Javascript</li>

        <li>Gulp JS</li>

        <li>Pug Templating Engine</li>
        </ul>
      </section>
      <section>
        <h2 id="applicationdevelopmentforasmallcrmsoftwarecompany">CRM Application Development</h2>

        <p>Rails dashboard development for relationship management software.</p>

        <h3 id="descriptionofwork-3">Description of work</h3>

        <p>The software was meant to be an all-in-one software for trades workers, tracking customers from lead state to completion and beyond. I took over for a previous developer and completed a full redesign of the application's frontend – optimizing the IA and customer flow, retheming each existing screen, and implementing an all new business analytics screen on the application's homescreen.</p>

        <h3 id="technologies-3">Technologies</h3>

        <ul>
        <li>Ruby on Rails</li>

        <li>Vagrant Virual Machine</li>

        <li>Postgres / MySQL</li>

        <li>Heroku</li>
        </ul>
      </section>
      <section>
        <h2 id="additionalpastwork">Additional past work</h2>

        <p>For more information on the projects discussed above, or to request information about additional past work, send me an email at <a href="mailto:swpearman@gmail.com">swpearman@gmail.com</a>.</p>
      </section>
    </section>
  </article>
)

export default Process
