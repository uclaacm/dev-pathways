import './SearchSection.css';
import SearchandSuggested from '../SearchandSuggested/SearchandSuggested';
import { useNavigate } from 'react-router-dom';

const SearchSection = props => {
    const navigate = useNavigate();
    const search = text => {
        if (text.trim().length !== 0) {     
            console.log(`searched for ${text}`);          
            navigate(`/results/${encodeURIComponent(text)}`); 
        }
    }
    return (
        <div className="search-container">
            <h1>Dev Pathways</h1>
            <SearchandSuggested 
            searchFunction ={search}
            />
        </div>
    );
}

export default SearchSection;
