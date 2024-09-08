$(document).ready(function(){
    $('header button').click(() => {
        $('form').slideDown();
    })

    $('#botaoCancelar').click(() => {
        $('form').slideUp();
    })

    $('form').on('submit', (e)=> {
        e.preventDefault();
        const UrlNovaImagem = $('#UrlImagem').val();
        const novoItem = $('<li style="display: none"></li>')
        $(`<img src="${UrlNovaImagem}"/>`).appendTo(novoItem);
        $(`
            <div class="overlayImages"
                <a href="${UrlNovaImagem}" target="_blank" style="color: #fff;">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#UrlImagem').val('')
    })
})