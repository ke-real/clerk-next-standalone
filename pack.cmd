xcopy .\public\ .\.next\standalone\public\ /s /e /h
xcopy .\.next\static\ .\.next\standalone\.next\static\ /s /e /h
copy hosting.live.json .\.next\standalone\ecosystem.config.js
