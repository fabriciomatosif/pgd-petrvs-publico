<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Petrvs</title>
  <base href="{{ $host }}">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link href="assets/css/bootstrap-load-fonts.css" rel="stylesheet" type="text/css"> 
  <link href="assets/css/fontawesome-load-fonts.css" rel="stylesheet" type="text/css"> 
  <script>
    const GLOBAL_ENTIDADE = "{{ $entidade }}"; 
    const GLOBAL_SERVER = "{{ $host }}"; 
    const GLOBAL_SUPORTE = "{{ $suporte }}"; 
    const GLOBAL_LOGO = "{{ $logo }}"; 
    const GLOBAL_SERVER_VERSION = "{{ $version }}"; 
    const GLOBAL_SERVER_HOST = GLOBAL_SERVER.replace(/^https?:\/\//, "").replace(/\/$/, "");
    const GLOBAL_SERVER_HTTPS = GLOBAL_SERVER.startsWith("https");
  </script>
  <script src="https://apis.google.com/js/platform.js"></script>
  <script src="assets/js/bootstrap-angular.js"></script>
<link rel="stylesheet" href="styles.css"></head>
<body>
  <app-root></app-root>
<script src="runtime.js" defer></script><script src="polyfills.js" defer></script><script src="scripts.js" defer></script><script src="vendor.js" defer></script><script src="main.js" defer></script></body>
</html>