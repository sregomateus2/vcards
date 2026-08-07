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
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Salvar Contato - Gian Franco Barbosa</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; margin: 0; background-color: #f4f4f9; color: #333; text-align: center; padding: 20px; }
    .card { background: white; padding: 30px; border-radius: 16px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); max-width: 320px; width: 100%; }
    h2 { margin: 0 0 5px 0; font-size: 20px; }
    p { margin: 0 0 20px 0; color: #666; font-size: 14px; }
    .btn { display: inline-block; width: 100%; padding: 14px 0; background-color: #007bff; color: white; text-decoration: none; font-size: 16px; font-weight: bold; border-radius: 8px; box-sizing: border-box; }
  </style>
</head>
<body>
  <div class="card">
    <h2>Gian Franco Barbosa</h2>
    <p>NL Transportes Multimodal</p>
    <a href="${dataUri}" download="GianBarbosa.vcf" class="btn">Adicionar aos Contatos</a>
  </div>
</body>
</html>`;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(html);
}
