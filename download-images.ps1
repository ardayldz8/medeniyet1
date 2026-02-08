# Parse temp_menu.html and download images with food names

$html = Get-Content -Path "temp_menu.html" -Raw -Encoding UTF8

# Extract product-image pairs using regex
$pattern = 'data-product-item="([^"]+)"[\s\S]*?img data-src="([^"]+)"'
$matches = [regex]::Matches($html, $pattern)

$outputDir = "public/menu"

# Download counter
$count = 0

foreach ($match in $matches) {
    $productName = $match.Groups[1].Value
    $imageUrl = $match.Groups[2].Value
    
    # Sanitize filename: Turkish chars, spaces, special chars
    $filename = $productName.ToLower()
    $filename = $filename -replace 'ş', 's'
    $filename = $filename -replace 'ç', 'c'
    $filename = $filename -replace 'ğ', 'g'
    $filename = $filename -replace 'ı', 'i'
    $filename = $filename -replace 'ö', 'o'
    $filename = $filename -replace 'ü', 'u'
    $filename = $filename -replace ' ', '-'
    $filename = $filename -replace '[^a-z0-9\-]', ''
    $filename = $filename -replace '--+', '-'
    $filename = $filename.Trim('-')
    
    # Get extension from URL
    $ext = [System.IO.Path]::GetExtension($imageUrl)
    if (-not $ext -or $ext.Length -gt 6) { $ext = ".jpg" }
    
    $outputPath = "$outputDir/$filename$ext"
    
    Write-Host "Downloading: $productName -> $outputPath"
    
    try {
        Invoke-WebRequest -Uri $imageUrl -OutFile $outputPath -TimeoutSec 30
        $count++
    } catch {
        Write-Host "  ERROR: $_"
    }
}

Write-Host "`nTotal downloaded: $count images"
