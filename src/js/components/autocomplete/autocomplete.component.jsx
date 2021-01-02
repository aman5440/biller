import React, {useState, useEffect, useRef, useMemo} from "react";
import AutoCompleteItem from "./autocompleteitem";
import style from './autocomplete.style.css'
import Axios from "axios";
import appconfig from "../../config/default";

const AutoComplete = ({onSelect}) => {

    const searchContainer = useRef(null);
    const searchItems = useRef(null);
    const [search,setSearch] = useState("");
    const [data,setData] = useState([
        {
            title:'India 1'
        },
        {
            title:'Pakistan 2'
        },
        {
            title:'China 3'
        },
        {
            title:'India 4'
        },
        {
            title:'Pakistan 5'
        },
        {
            title:'China 6'
        },
        {
            title:'India 7'
        },
        {
            title:'Pakistan 8'
        },
        {
            title:'China 9'
        },
    ]);
    appconfig
    const [cursor,setCursor] = useState(-1)
    const [suggestion, setSuggestion] = useState(false)
    const onScrollToView = (position) => {
        if(searchItems.current){
            searchItems.current.scrollTo({
                top:position,
                behaviour:"smooth"
            })
        }
    }
    useEffect(() => {
        Axios.get()
        fetch(`${appconfig.url}/product/all`).then((response) => {return response.json()}).then((json)=>{ setData(json); console.log('we are all products',json)})
        
    }, [])

    useEffect(() => {
        console.log('1 Use Effect');
        window.addEventListener("mousedown",handleClickOutside)
        return () => {
            window.removeEventListener("mousedown",handleClickOutside)
        }
    }, [])

    useEffect(() => {
        console.log('2 Use Effect');
        if(cursor<0 || cursor>suggestions.length || !searchItems){
            return ()=> {};
        }
       let listItems = Array.from(searchItems.current.children);
        return listItems[cursor] && onScrollToView(listItems[cursor].offsetTop-40)
    }, [cursor])
    const handleClickOutside = (event) => {
        if(searchContainer.current &&  searchItems.current!=null && !(searchContainer.current.contains(event.target) || searchItems.current.contains(event.target))){
            hideSuggestion();
        }
    }
    const showSuggestion = () => {
        setSuggestion(true)
    }
    const hideSuggestion = () => {
        setSuggestion(false)
    }

    const suggestions = useMemo(() => {
        console.log('Memo called',search);
        if(!search){
            return data;
        }
        else{
            setCursor(-1);
            if(searchItems){
                onScrollToView(0);
            }
            
            return data.filter((item)=>{console.log('item',item); return item.title.toLowerCase().includes(search.toLowerCase())})
        }
    },[data,search]);

    const keyNavigation = (e) => {
        if(e.key=='ArrowDown'){
            suggestion?setCursor(c=>{
                c = c>=parseInt(suggestions.length)-1?c:c+1
                console.log('am down',c,suggestions.length);
                return c;
            }):setSuggestion(true);
        }
        if(e.key=='ArrowUp'){
            setCursor(c=>{
                c = c>0?c-1:0;
                console.log('am up',c,suggestions.length);
                return c;
    
            });
        }
        if(e.key=='Enter'){
            e.preventDefault();
            setSearch(suggestions[cursor]['title']);
            onSelect(suggestions[cursor])
            hideSuggestion();
        }
        
    }

    

    return (
        <div style={{'height':'100%'}}>
            <input type="text" ref={searchContainer} onClick={()=>showSuggestion()} name="search" className="search-bar" autoComplete="off" onChange={e=>{ showSuggestion(); setSearch(e.target.value)}} value={search} onKeyDown={e=>keyNavigation(e)}/>
            {/* Suggestions */}
            {suggestion?
            <div className={`search-result-div`}>
                <div className={`search-result`} ref={searchItems}>
                    {
                        suggestions.map((item,idx)=>{
                            return <AutoCompleteItem
                                        isHighlighted={cursor==idx}
                                        title={item.title} 
                                        onSelect={title=>{
                                            console.log('Selected~~>',title);
                                            hideSuggestion();
                                            setSearch(title)
                                        }
                                    }/>
                        })
                    }
                    {/* <li className={`list-group`}> */}
                        {/* <AutoCompleteItem title="India" />
                        <AutoCompleteItem title="China" />
                        <AutoCompleteItem title="Pakistan" />
                    </li> */}
                </div>
            </div>
            :
            ''}
        </div>
    )
}

export default AutoComplete;