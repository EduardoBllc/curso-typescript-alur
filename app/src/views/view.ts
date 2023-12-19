export abstract class View<T>{

    protected elemento: HTMLElement;
    constructor(
        seletor: string,
        private readonly escapar: boolean = false
    ) {
        const elemento = document.querySelector(seletor);
        if(elemento) {
            this.elemento = elemento as HTMLElement;
        }else{
            throw  Error(`Seletor ${seletor} não existe no DOM, verifique`);
        }
    }

    protected abstract template(model: T): string

    public update(model: T): void {
        let template = this.template(model);
        if(this.escapar){
            template = template.replace(/<script>[\s\S]*?<\/script>/, '')
        }
        this.elemento.innerHTML = template;
    }
}
