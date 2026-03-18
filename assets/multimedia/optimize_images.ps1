# Script simple para mostrar tamaños de imágenes
# Las imágenes grandes necesitan optimización manual

Write-Host "=== ANALISIS DE IMAGENES ===" -ForegroundColor Yellow
Write-Host ""

Get-ChildItem -File | Where-Object { $_.Extension -in '.jpg','.jpeg','.png','.webp' } | Sort-Object Length -Descending | Select-Object Name, @{Name="Size(KB)";Expression={[math]::Round($_.Length/1KB, 2)}} | Format-Table -AutoSize

Write-Host ""
Write-Host "=== RECOMENDACIONES ===" -ForegroundColor Cyan
Write-Host "Imagenes que necesitan optimizacion:" -ForegroundColor Yellow
Write-Host "- conalep*.jpeg: Redimensionar a max 800px ancho" -ForegroundColor Red
Write-Host "- *-concepto.webp: Muy grandes (>1MB), comprimir" -ForegroundColor Red
Write-Host "- limpieza-cona.jpg: Redimensionar a max 1000px" -ForegroundColor Red
Write-Host ""
Write-Host "Herramientas recomendadas:" -ForegroundColor Green
Write-Host "- TinyPNG.com (online gratuito)" -ForegroundColor Green
Write-Host "- ImageOptim (software gratuito)" -ForegroundColor Green
Write-Host "- Photoshop o GIMP (edicion avanzada)" -ForegroundColor Green