const getCookieByName = name => {
    const cookieString = document.cookie;
    const cookieParts = cookieString.split('; ');
    // if you find a word you will get full sentence in array element orderwise
    const cookie = cookieParts.find(c => c.includes(name));
    if(cookie){
        // cookie = 'country = BD' 
        const cookieValue = cookie.split('=')[1];
        return cookieValue;
    }

}

getCookieByName(country)