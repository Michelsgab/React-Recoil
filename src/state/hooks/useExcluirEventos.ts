import { useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { listaDeEventosState } from "../atom";

const useExcluirEventos = () => {
    
    const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);
    
    return (evento: IEvento) => {
        setListaDeEventos((listaAntiga => [
            ...listaAntiga.filter(e =>  evento.id !== e.id)
        ]));
    }
}

export default useExcluirEventos;