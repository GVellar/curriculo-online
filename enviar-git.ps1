param(
    [string]$Mensagem = "atualiza site"
)

$ErrorActionPreference = "Stop"

git status
git add .

$changes = git status --porcelain
if (-not $changes) {
    Write-Host "Nenhuma alteração para enviar."
    exit 0
}

git commit -m $Mensagem
git push

Write-Host "Alterações enviadas para o GitHub com sucesso."
