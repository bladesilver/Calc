let total = 5000,
    time = 1,
    hourRate,
    tabLeft = document.querySelector('.tab__left'),
    tabRight = document.querySelector('.tab__right'),
    blocksBlock = document.getElementById('blocks__block'),
    pagesBlock = document.getElementById('pages__block'),
    counterPages = document.getElementById('counter-pages')
    counterBlock = document.getElementById('counter-block')
    counterHours = document.getElementById('counter-hours')
    counterRate = document.getElementById('counter-rate'),
    changesCheck = document.getElementById('changes-check'),
    changesCms = document.getElementById('changes-cms'),
    totalValue = document.getElementsByClassName('total__count')[0],
    input = document.getElementsByTagName('input');
    
const   land = 4000,
        corp = 10000,
        cms = 3000,
        blocks = 500,
        pages = 1500,
        changes = 700;

window.addEventListener('DOMContentLoaded', function() {

    tabLeft.addEventListener('click', () => {
        
        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        };

        blocksBlock.style.display = 'flex';
        pagesBlock.style.display = 'none';

        tabLeft.classList.add('active__tab');
        tabRight.classList.remove('active__tab');

        if (changesCheck.checked) {
            changesCheck.checked = false;
        };

        if (changesCms.checked) {
            changesCms.checked = false;
        };

        total = land;
        totalValue.value = total;

    });

    tabRight.addEventListener('click', () => {
        
        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        };

        blocksBlock.style.display = 'none';
        pagesBlock.style.display = 'flex';

        tabLeft.classList.remove('active__tab');
        tabRight.classList.add('active__tab');

        if (changesCheck.checked) {
            changesCheck.checked = false;
        };

        if (changesCms.checked) {
            changesCms.checked = false;
        };

        total = corp;
        totalValue.value = total;

    });

    counterBlock.addEventListener('change',  () => {
        counterHours.value = '';
        counterRate.value = '';
        total = counterBlock.value * blocks;
        totalValue.value = total;
    });
    
    counterPages.addEventListener('change',  () => {
        counterHours.value = '';
        counterRate.value = '';
        total = counterPages.value * pages;
        totalValue.value = total;
    });

    counterHours.addEventListener('change', () => {
        counterPages.value = '';
        counterBlock.value = '';  
        total = 0;
        time = counterHours.value;
        hourRate = time * counterRate.value;
        totalValue.value = hourRate;
        total = hourRate;
    });
    
    counterRate.addEventListener('change', () => {
        counterPages.value = '';
        counterBlock.value = '';  
        total = 0;
        hourRate = time * counterRate.value;
        totalValue.value = hourRate;
        total = hourRate;
    });

    changesCheck.addEventListener('change', () => {
        if (changesCheck.checked) {
            total += changes;
            totalValue.value = total;
        } else {
            total -= changes;
            totalValue.value = total;
        }
    });

    changesCms.addEventListener('change', () => {
        if (changesCms.checked) {
            total += cms;
            totalValue.value = total;
        } else {
            total -= cms;
            totalValue.value = total;
        }
    });

});