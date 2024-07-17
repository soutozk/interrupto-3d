document.querySelectorAll('.btn a').forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault();
        this.classList.toggle('pressed');

        document.body.classList.toggle('dark-theme');
    
        const container = document.querySelector('.container');
        if (document.body.classList.contains('dark-theme')) {
            container.classList.remove('light-bg');
            container.classList.add('dark-bg');
        } else {
            container.classList.remove('dark-bg');
            container.classList.add('light-bg');
        }

        console.log('current class name: ' + currentClassName);
    });
});
