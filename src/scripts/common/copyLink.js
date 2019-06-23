function copyLink () {

    const copy = document.querySelector('.copy');

    copy.addEventListener('click',

        function (event) {

            const text = document.querySelector('.copy');

            text.select();

            document.execCommand('copy');

        });

}

module.exports = copyLink;