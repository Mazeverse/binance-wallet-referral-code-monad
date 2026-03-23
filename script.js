function copyCode(elementId) {
  const codeText = document.getElementById(elementId).innerText;
  
  navigator.clipboard.writeText(codeText).then(() => {
    // 간단한 알림 피드백
    const btn = event.currentTarget;
    const originalText = btn.innerHTML;
    
    btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
    btn.style.background = '#28a745';
    
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.style.background = '';
    }, 2000);
  }).catch(err => {
    console.error('복사 실패:', err);
  });
}
