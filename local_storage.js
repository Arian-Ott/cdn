    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        document.getElementById("svg-light").style.display = "none";
        document.getElementById("svg-dark").style.display = "inline";
    } else {
        document.documentElement.classList.remove('dark')
         document.getElementById("svg-dark").style.display = "none";
        document.getElementById("svg-light").style.display = "inline";
    }

