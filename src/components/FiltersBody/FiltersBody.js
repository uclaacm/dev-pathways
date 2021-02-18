import React from 'react'
import './FiltersBody.css'

const FiltersBody = () => {
    //TODO: ...what it's supposed to do
    //Right now you can press the buttons and they do nothing :D
    //I believe there is a way so that if you press a checkbox
    //it sort of "auto-submits" so the results can filter out
    //in real-time instead of having to press a submit button

    return (
        <div className="filters-container">
            <h2>Filters</h2>
            
            <form>

            <div className="filter-category">
                <h3>ACM Committee</h3>
                <input type="checkbox"
                    id="category21"
                    name="category21"
                    value="Cat2Opt1"
                />
                <label for="category21"> Teach LA</label><br/>
                <input type="checkbox"
                    id="category22"
                    name="category22"
                    value="Cat2Opt2"
                />
                    <label for="category22"> Hack</label><br />
                <input type="checkbox"
                    id="category23"
                    name="category23"
                    value="Cat2Opt3"
                />
                    <label for="category23"> Dev</label><br />
                <input type="checkbox"
                    id="category24"
                    name="category24"
                    value="Cat2Opt4"
                />
                    <label for="category24"> W</label><br />
                <input type="checkbox"
                    id="category25"
                    name="category25"
                    value="Cat2Opt5"
                />
                    <label for="category25"> ICPC</label><br />
                <input type="checkbox"
                    id="category26"
                    name="category26"
                    value="Cat2Opt6"
                />
                    <label for="category26"> Design</label><br />
                <input type="checkbox"
                    id="category27"
                    name="category27"
                    value="Cat2Opt7"
                />
                    <label for="category27"> AI</label><br />
                <input type="checkbox"
                    id="category28"
                    name="category28"
                    value="Cat2Opt8"
                />
                <label for="category28"> Cyber</label><br/>
            </div>

            <div className="filter-category">
                <h3>Preferred Format</h3>
                <input type="checkbox"
                    id="category31"
                    name="category31"
                    value="Cat3Opt1"
                />
                <label for="category31"> Video/Article</label><br/>
                <input type="checkbox"
                    id="category32"
                    name="category32"
                    value="Cat3Opt2"
                />
                <label for="category32"> Documentation</label><br/>
                <input type="checkbox"
                    id="category33"
                    name="category33"
                    value="Cat3Opt3"
                />
                <label for="category33"> Interactive Game</label>
            </div>

            <div className="filter-category">
                <h3>Experience Level</h3>
                <input type="checkbox"
                    id="category41"
                    name="category41"
                    value="Cat4Opt1"
                />
                <label for="category41"> Beginner</label><br/>
                <input type="checkbox"
                    id="category42"
                    name="category42"
                    value="Cat4Opt2"
                />
                <label for="category42"> Intermediate</label><br/>
                <input type="checkbox"
                    id="category43"
                    name="category43"
                    value="Cat4Opt3"
                />
                <label for="category43"> Advanced</label>
            </div>

            </form>
        </div>
    )
}

export default FiltersBody