function App () {
    return  (
        <div>
            <header className="header">
            <img src="https://m.media-amazon.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_.jpg" alt="Sally Student" width="200" height="275" className="picture"/>
                <h1 className="name">Sally Student</h1>
                <address className="contactInfo">
                    <ul>
                    <li>Phone: 000-555-0123</li>
                    <li>Email: <a href="mailto:sallystudent@example.com">sallystudent@example.com</a></li>
                    </ul>
                </address>
            </header>
            <main>
            <section className="education">
                <h3>Education</h3>
                <ul>
                    <li>MIT Technical University</li>
                    <li>Bloc Web Developer Track</li>
                </ul>
            </section>
            <section className="experience">
                <h3 >Experience</h3>
                <ul>
                    <li>
                        <h4>Google</h4>
                        <ul>
                            <li>Job Title: SEO Specialist</li>
                            <li>Dates Employed: 01/01/2000 - 05/15/2009</li>
                            <li>Job Description: Lorem ipsum dolor sit amet, sit fugit lobortis an, vix impetus euripidis ei. Sea te error vulputate posidonium. Sea hendrerit vituperatoribus ei. Vix et maluisset torquatos, eum no graeco repudiandae. Fuisset salutatus ex nam.</li>
                        </ul> 
                    </li>
                    <li>
                        <h4>Amazon</h4>
                        <ul>
                            <li>Job Title: Web Services Developer</li>
                            <li>Dates Employed: 05/20/2009 - Current</li>
                            <li> Job Description: Mea in audire quaeque, quo aperiam persius ut. Saepe quando ei has, vix labores complectitur ut. Suas vocent commune ad vim, nam ut erat novum. Pro modo stet splendide ad, omnes inermis eligendi at duo.
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>
        </main>
        </div>)
}

function render (){
    ReactDOM.render(<App />, document.querySelector('#app'))
}

$(render)
