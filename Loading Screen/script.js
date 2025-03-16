let a = document.querySelector('.demo');
        let b = document.querySelector('.Reload');

        let idx = 0;
        Load();

        function Load() {
            a.innerHTML = idx + '%';
            b.style.width = idx + '%';
            idx++;

            if (idx < 101) {
                setTimeout(Load, 30);
            }
        }
