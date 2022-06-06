import "./peoplesection.css"

const PeopleSection = () => {
  return (
    <div className="peopleSection" id="people">
        <div className="peopleSectionContainer">
            <div className="peopleTitle">
                <h1>Designed by Grant Gariepy</h1>
            </div>
            <div className="peopleDesc">
                <p>My name is Grant Gariepy and I have designed and built this website. I started the process
                    by mocking up this design in Figma to give myself an idea of what direction I wanted
                    to go with the site.
                </p>
                <p>The website itself is built in ReactJS and styled with CSS.</p>
                <p>You can check out my <a href="https://grantgariepy.com" target="_blank" rel="noreferrer">portfolio</a> and my <a href="https://github.com/grantgariepy" target="_blank" rel="noreferrer">github</a> to see more.</p>
            </div>
            <div className="peopleTitle">
                <h3>Products featured on this website</h3>
            </div>
            <div className="peopleDesc">
                <p>The products listed here are from the amazing company Teenage Engineering. I am not affiliated with them but i love there prodcuts
                    and you can purchase them here: <a href="https://teenage.engineering/" target="_blank" rel="noreferrer">teenage.engineering</a>
                </p>
            </div>
        </div>
    </div>
  )
}

export default PeopleSection