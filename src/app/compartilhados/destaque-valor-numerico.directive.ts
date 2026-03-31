import { afterRender, Directive, ElementRef, input } from "@angular/core";

@Directive({
    selector: '[appDestaqueValorNumerico]'
})
export class DestaqueValorNumericoDirective {
    appDestaqueValorNumerico = input.required<number>();

    corPositiva = input("var(--destaque-receita)");
    corNegativa = input("var(--destaque-despesa)");

    constructor(elemento: ElementRef<HTMLElement>) {
        afterRender(() => {           // Aguarda o próximo ciclo de renderização para garantir que o conteúdo esteja atualizado
            if (this.appDestaqueValorNumerico() > 0) {
                elemento.nativeElement.style.color = this.corPositiva();
            } else if (this.appDestaqueValorNumerico() < 0) {
                elemento.nativeElement.style.color = this.corNegativa();
            }                  
    });
 }
}



















// o afterRender e afterNextRender são funções globais do Angular que permitem executar 
// callbacks depois que todos os componentes da página foram renderizados no DOM.
// afterRender: é executado sempre que todos os componentes foram renderizados no DOM;
// afterNextRender: espera um ciclo a mais para rodar o callback, garantindo que tudo tenha sido estabilizado antes de executar a ação.