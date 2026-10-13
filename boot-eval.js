window.__ritmParts=window.__ritmParts||[];
(function(){
  var n=6;
  var ready=true;
  for(var i=0;i<n;i++) if(typeof window.__ritmParts[i]!=='string') ready=false;
  if(!ready) return;
  try {
    var code=window.__ritmParts.join('');
    (0,eval)(code);
  } catch(e) {
    console.error(e);
    var r=document.getElementById('root');
    if(r) r.innerHTML='<div style="padding:24px;font-family:system-ui;text-align:center">Ошибка загрузки: '+e.message+'</div>';
  }
})();
