document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

const topic=document.querySelector('#topic');if(topic){const query=new URLSearchParams(location.search);const brand=query.get('brand');if(query.get('type')==='event')topic.value='Event enquiry';if(brand==='Little Bao Boy'||brand==='Kofuku')topic.value=brand;}
