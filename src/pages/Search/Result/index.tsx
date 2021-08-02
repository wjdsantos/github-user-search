import React from 'react';
import Button from '../../../components/Button';

type Props = {
    resultData: any;
}

interface ChildComponentProps {
    resultData: any;
  }
const Result: React.FC<ChildComponentProps> = ({ resultData }: Props) => {

      return (
        <div className="search-result-contanier">
            <div className="flex-row search-result-content">
                <div className="flex-col-img">
                    <img src={resultData?.avatar_url} alt={resultData?.login} className="result-git-image" />
                    <div className="result-git-info-btn-perfil">
                        <Button text="Ver perfil" onClick={() => {
                            window.open(resultData.html_url, "_blank")
                        }} />
                    </div>
                </div>
                <div className="flex-col-info">
                    <div className="result-git-info">
                        <div className="flex-row">
                            <div className="flex-col">Repositórios públicos: {resultData?.public_repos}</div>
                            <div className="flex-col">Seguidores: {resultData?.followers}</div>
                            <div className="flex-col">Seguindo: {resultData?.following}</div>
                        </div>
                        <div className="result-git-info-details">
                            <p className="result-git-info-title">Informações</p> 
                            <div className="result-git-info-company">Empresa: {resultData?.company}</div>
                            <div className="result-git-info-blog">Website/Blog: {resultData?.blog}</div>
                            <div className="result-git-info-location">Localidade: {resultData?.location}</div>
                            <div className="result-git-info-membro">Membro desde: {resultData?.created_at}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Result;