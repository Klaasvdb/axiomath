# Toont de voortgangsregel van de lopende taak (~/.claude/voortgang.txt) met een ETA.
# De ETA komt uit de snelheid sinds dit script startte; ze verschijnt zodra er één stap bijkwam.
$pad = Join-Path $env:USERPROFILE ".claude\voortgang.txt"
$begin = Get-Date; $n0 = $null; $vorige = ""
while ($true) {
    Clear-Host
    Write-Host "Axiomath: voortgang van de lopende taak (ververst elke 10 s, sluit met Ctrl+C)`n"
    $regel = if (Test-Path $pad) { (Get-Content $pad -Raw -ErrorAction SilentlyContinue).Trim() } else { "" }
    if (-not $regel) { Write-Host "Geen taak bezig."; $n0 = $null }
    else {
        Write-Host $regel
        if ($regel -match '(\d+)\s*/\s*(\d+)') {
            $n = [int]$Matches[1]; $tot = [int]$Matches[2]
            if ($null -eq $n0 -or $n -lt $n0) { $n0 = $n; $begin = Get-Date }
            $balk = [int](30 * $n / [math]::Max($tot, 1))
            Write-Host ("`n[" + ("#" * $balk) + ("-" * (30 - $balk)) + "] " + [int](100 * $n / $tot) + " %")
            $stappen = $n - $n0
            if ($n -ge $tot) { Write-Host "`nKlaar." }
            elseif ($stappen -gt 0) {
                $sec = ((Get-Date) - $begin).TotalSeconds / $stappen * ($tot - $n)
                $klaar = (Get-Date).AddSeconds($sec)
                Write-Host ("`nNog ongeveer {0} u {1:00} min (klaar rond {2:HH:mm})" -f [math]::Floor($sec / 3600), [math]::Floor(($sec % 3600) / 60), $klaar)
            } else { Write-Host "`nETA volgt zodra er een stap klaar is." }
        }
    }
    Write-Host ("`n" + (Get-Date -Format "HH:mm:ss"))
    Start-Sleep 10
}
