$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(e) {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const nomeTarefa = $('#nome-tarefa').val();
        const descricaoTarefa = $('#descricao-tarefa').val();

        if (nomeTarefa.trim() !== '') {
            const novoItem = $('<li></li>').text(`${nomeTarefa} - ${descricaoTarefa}`);
            $('#lista-tarefas').append(novoItem);
            $('#nome-tarefa').val('');
            $('#descricao-tarefa').val('');
        }
    })

    $('#lista-tarefas').on('click', 'li', function() {
        $(this).toggleClass('tarefa-concluida');
      });
})