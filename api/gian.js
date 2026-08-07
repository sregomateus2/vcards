export default function handler(req, res) {
  const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Gian Franco Barbosa
TITLE:Presidente
ORG:NL Transportes Multimodal
TEL;TYPE=CELL:+5591981569301
EMAIL:gianfb@nlmultimodal.com.br
ADR:;;Rod. Arthur Bernardes, 5885
URL:nlmultimodal.com.br
END:VCARD`;

  const base64Vcard = Buffer.from(vcard).toString('base64');
  const dataUri = `data:text/vcard;base64,${base64Vcard}`;

  const html = `<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="refresh" content="0;url=${dataUri}">
  </head>
  <body>
    <script>
      window.location.href = "${dataUri}";
    </script>
  </body>
</html>`;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(html);
}
