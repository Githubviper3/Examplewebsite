const languages = ['https://www.w3schools.com/html/default.asp', 'https://www.w3schools.com/css/default.asp', 'https://www.w3schools.com/js/default.asp', 'https://www.w3schools.com/sql/default.asp', 'https://www.w3schools.com/python/default.asp', 'https://www.w3schools.com/java/default.asp', 'https://www.w3schools.com/php/default.asp', 'https://www.w3schools.com/howto/default.asp', 'https://www.w3schools.com/w3css/default.asp', 'https://www.w3schools.com/c/index.php', 'https://www.w3schools.com/cpp/default.asp', 'https://www.w3schools.com/cs/index.php', 'https://www.w3schools.com/bootstrap/bootstrap_ver.asp', 'https://www.w3schools.com/react/default.asp', 'https://www.w3schools.com/mysql/default.asp', 'https://www.w3schools.com/jquery/default.asp', 'https://www.w3schools.com/excel/index.php', 'https://www.w3schools.com/xml/default.asp', 'https://www.w3schools.com/django/index.php', 'https://www.w3schools.com/python/numpy/default.asp', 'https://www.w3schools.com/python/pandas/default.asp', 'https://www.w3schools.com/nodejs/default.asp', 'https://www.w3schools.com/r/default.asp', 'https://www.w3schools.com/typescript/index.php', 'https://www.w3schools.com/angular/default.asp', 'https://www.w3schools.com/git/default.asp', 'https://www.w3schools.com/postgresql/index.php', 'https://www.w3schools.com/mongodb/index.php', 'https://www.w3schools.com/asp/default.asp', 'https://www.w3schools.com/ai/default.asp', 'https://www.w3schools.com/go/index.php', 'https://www.w3schools.com/kotlin/index.php', 'https://www.w3schools.com/sass/default.asp', 'https://www.w3schools.com/vue/index.php', 'https://www.w3schools.com/dsa/index.php', 'https://www.w3schools.com/gen_ai/index.php', 'https://www.w3schools.com/python/scipy/index.php', 'https://www.w3schools.com/aws/index.php', 'https://www.w3schools.com/cybersecurity/index.php', 'https://www.w3schools.com/datascience/default.asp']

function RandomLanguage(){
    let output = languages[Math.floor(Math.random()*languages.length)];
    return output
};

function RandomLinkOpener(){
    const site = RandomLanguage() 
    window.open(site,"_blank")
};

