function OpenAiriModal(){
    const body = document.getElementById('body');
    const modal = document.getElementById('airi_modal');

    body.classList.add('modal_opened');
    modal.classList.add('show');
}

function CloseAiriModal(){
    const body = document.getElementById('body');
    const modal = document.getElementById('airi_modal');

    body.classList.remove('modal_opened')
    modal.classList.remove('show');
}