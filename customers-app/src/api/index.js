export const apiGet =(url) => ()=> fetch(url).then(result=>result.json());

export const apiPut = (url,id,body) => () => fetch(`${url}/${id}`,{
    method:'PUT',
    body:JSON.stringify(body),
    headers:new Headers({'Content-type':'application/json'})
}).then(v =>v.json())
.then(r => {
    if(r.error){
        console.log(r.validation);
        return Promise.reject(r.validation)
    }
    return r;
})

export const apiPost = (url,body) => () => fetch(url,{
    method:'POST',
    body:JSON.stringify(body),
    headers:new Headers({'Content-type':'application/json'})
}).then(v =>v.json())
.then(r => {
    if(r.error){
        console.log(r.validation);
        return Promise.reject(r.validation)
    }
    return r;
})