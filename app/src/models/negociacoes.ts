import {Negociacao} from "./negociacao.js";

// Array<Negociacao> == Negociacao[]

export class Negociacoes{
    private _negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao) : void {
        this._negociacoes.push(negociacao);
    }

    public lista() : readonly Negociacao[] {
        return this._negociacoes;
    }
}
