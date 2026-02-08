# Category image download script
$categories = @{
    "corbalar"              = "https://vdc01-cdnv2.akinsoft.com.tr/qrmenu-storage/2d4ebbd7-1412-46b0-889d-6817e918f345.jpeg"
    "dana-porsiyonlar"      = "https://vdc01-cdnv2.akinsoft.com.tr/qrmenu-storage/73e66ca6-cea9-4e6c-94cc-21f8b750931c.jpg"
    "kuzu-porsiyonlar"      = "https://vdc01-cdnv2.akinsoft.com.tr/qrmenu-storage/b37de49d-0ba8-43c8-8aab-0e445b9d972f.jpg"
    "tavuk-porsiyonlar"     = "https://vdc01-cdnv2.akinsoft.com.tr/qrmenu-storage/4048df9e-f375-4b14-8af4-f878bcf6080b.webp"
    "hamburger"             = "https://vdc01-cdnv2.akinsoft.com.tr/qrmenu-storage/874745cd-0cdc-41d3-a668-cb5f513d695d.jpg"
    "kebap-cesitleri"       = "https://vdc01-cdnv2.akinsoft.com.tr/qrmenu-storage/f3ecea95-c91c-4033-8fcf-de5cf0cf6541.jpeg"
    "izgara-kofte-porsiyon" = "https://vdc01-cdnv2.akinsoft.com.tr/qrmenu-storage/419592be-4e22-4949-93aa-8d008f4a377a.jpg"
    "sucuk-porsiyonlar"     = "https://vdc01-cdnv2.akinsoft.com.tr/qrmenu-storage/640c9d62-fecb-412c-a8df-4313b0810e98.webp"
    "pilic-cevirme"         = "https://vdc01-cdnv2.akinsoft.com.tr/qrmenu-storage/3410ce10-13c6-4d04-9106-61f62a61285f.jpg"
    "kirmizi-et-kg"         = "https://vdc01-cdnv2.akinsoft.com.tr/qrmenu-storage/4c494c2f-74e2-49fa-b443-26910241d888.webp"
    "izgara-kofte-kg"       = "https://vdc01-cdnv2.akinsoft.com.tr/qrmenu-storage/6889dbe5-61a9-4c86-878b-d68103451f02.jpeg"
    "izgara-sucuk-kg"       = "https://vdc01-cdnv2.akinsoft.com.tr/qrmenu-storage/90585f82-189e-43f5-8a51-bb1863443be3.webp"
    "tavuk-kg"              = "https://vdc01-cdnv2.akinsoft.com.tr/qrmenu-storage/01d7ec28-af43-4f1e-a222-68ab71c96615.png"
    "mantar"                = "https://vdc01-cdnv2.akinsoft.com.tr/qrmenu-storage/b4c1808e-8270-4958-a3e4-fb1fea42041a.jpg"
    "meze-cesitleri"        = "https://vdc01-cdnv2.akinsoft.com.tr/qrmenu-storage/d9c15488-405e-4046-86bb-8281444d8740.webp"
    "salatalar"             = "https://vdc01-cdnv2.akinsoft.com.tr/qrmenu-storage/6f244e3b-f357-4243-b1ac-72eb7de5c6b2.jpg"
    "icecekler"             = "https://vdc01-cdnv2.akinsoft.com.tr/qrmenu-storage/caa38dae-5084-4423-99d4-370b70a4fa19.png"
    "tatli"                 = "https://vdc01-cdnv2.akinsoft.com.tr/qrmenu-storage/45e5bb7c-5a11-4aee-8c66-4ba28f0e953d.png"
    "lavas-ekmek"           = "https://vdc01-cdnv2.akinsoft.com.tr/qrmenu-storage/83dda365-2bd1-42c0-aa8c-fefe2c809826.jpg"
}

# Create categories directory
$outDir = "public/menu/categories"
if (-not (Test-Path $outDir)) {
    New-Item -ItemType Directory -Path $outDir -Force | Out-Null
}

Write-Host "Downloading category images..." -ForegroundColor Cyan

foreach ($cat in $categories.GetEnumerator()) {
    $name = $cat.Key
    $url = $cat.Value
    $ext = [System.IO.Path]::GetExtension($url)
    $outFile = "$outDir/$name$ext"
    
    Write-Host "Downloading: $name" -ForegroundColor Yellow
    try {
        Invoke-WebRequest -Uri $url -OutFile $outFile -UseBasicParsing
        Write-Host "  -> Saved: $outFile" -ForegroundColor Green
    }
    catch {
        Write-Host "  -> FAILED: $_" -ForegroundColor Red
    }
}

Write-Host "`nDownload complete!" -ForegroundColor Green
