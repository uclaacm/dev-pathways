import React from 'react'
import './FiltersBody.css'

function FiltersBody() {
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
                <h3>Category 1</h3>
                <input type="checkbox"
                    id="category11"
                    name="category1"
                    value="Cat1Opt1"
                />
                <label for="category11"> Option 1</label><br/>
                <input type="checkbox"
                    id="category12"
                    name="category12"
                    value="Cat1Opt2"
                />
                <label for="category12"> Option 2</label><br/>
                <input type="checkbox"
                    id="category13"
                    name="category13"
                    value="Cat1Opt3"
                />
                <label for="category13"> Option 3</label>
            </div>

            <div className="filter-category">
                <h3>Category 2</h3>
                <input type="checkbox"
                    id="category21"
                    name="category21"
                    value="Cat2Opt1"
                />
                <label for="difficulty1"> Choice 1</label><br/>
                <input type="checkbox"
                    id="category22"
                    name="category22"
                    value="Cat2Opt1"
                />
                <label for="category22"> Choice 2</label><br/>
            </div>

            </form>
        </div>
    )
}

export default FiltersBody