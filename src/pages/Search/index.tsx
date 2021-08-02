import React from 'react';
import Button from '../../components/Button';
import Result from '../Search/Result';
import { makeRequestApi } from '../../utils/request';
import DataLoader from './components/Loaders/DataLoader';
import './styles.css';
import { useState } from 'react';


const Search = () => {
    const [resultData, setResultData] = React.useState<any>();
    const [search, setSearch] = React.useState('');
    const [isLoadingData, setIsLoadingData] = useState(false);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }

    return (
   
    <div>
        <div className="search-contanier">
            <div className="search-content">
                <h1 className="text-title-perfil">Encontre um perfil Github</h1>
                <div className="input-login">
                    <input className="login-git" 
                           type="text" 
                           required
                           onChange={handleChange}
                           />
                </div>
                <div className="search-content-btn">
                    <Button text="Encontrar" onClick={() => {
                        setResultData(null);
                        setIsLoadingData(true);
                        makeRequestApi({url:`/users/${search}`})
                            .then(response => setResultData(response.data))
                            .finally(() => {
                                setIsLoadingData(false);
                            })
                    }} />
                </div>

            </div>
            {isLoadingData ? <DataLoader /> : resultData && (<Result resultData={resultData} />)}
        </div>
    </div>
)}

export default Search;