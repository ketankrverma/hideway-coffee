# GitHub Deployment Helper Script for Hideaway Coffee House
param(
    [Parameter(Mandatory=$false)]
    [string]$RepoUrl,
    
    [Parameter(Mandatory=$false)]
    [string]$GitHubUsername,
    
    [Parameter(Mandatory=$false)]
    [string]$GitHubToken
)

$gitExe = "C:\Program Files\Git\cmd\git.exe"

Set-Location -Path "D:\Hideway coffee house"

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host " Hideaway Coffee House - GitHub Uploader  " -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan

# Check if git is initialized
if (-not (Test-Path ".git")) {
    Write-Host "Initializing Git..." -ForegroundColor Yellow
    & $gitExe init
    & $gitExe branch -M main
}

# Ensure all files staged and committed
& $gitExe add .
& $gitExe commit -m "feat: complete production-ready Hideaway Coffee House website" 2>$null

if ($GitHubUsername -and $GitHubToken) {
    # If using personal access token
    if (-not $RepoUrl) {
        $RepoName = Read-Host "Enter Repository Name (default: hideaway-coffee-house)"
        if (-not $RepoName) { $RepoName = "hideaway-coffee-house" }
        $RepoUrl = "https://${GitHubToken}@github.com/${GitHubUsername}/${RepoName}.git"
    } else {
        # inject token into URL
        $cleanUrl = $RepoUrl -replace "https://", ""
        $RepoUrl = "https://${GitHubToken}@${cleanUrl}"
    }
}

if (-not $RepoUrl) {
    Write-Host "`nPlease provide your GitHub Repository URL." -ForegroundColor Yellow
    Write-Host "Example: https://github.com/your-username/hideaway-coffee-house.git" -ForegroundColor Gray
    $RepoUrl = Read-Host "Repository URL"
}

if (-not $RepoUrl) {
    Write-Host "Error: No repository URL provided." -ForegroundColor Red
    exit 1
}

Write-Host "`nSetting remote origin to: $RepoUrl" -ForegroundColor Green
& $gitExe remote remove origin 2>$null
& $gitExe remote add origin $RepoUrl
& $gitExe branch -M main

Write-Host "Pushing code to GitHub main branch..." -ForegroundColor Cyan
& $gitExe push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`nSUCCESS! Your project is live on GitHub." -ForegroundColor Green
} else {
    Write-Host "`nPush pending authorization or failed." -ForegroundColor Yellow
}

