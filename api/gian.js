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

  res.setHeader('Content-Type', 'text/vcard; charset=utf-8');
  res.setHeader('Content-Disposition', 'inline; filename="GianBarbosa.vcf"');
  res.status(200).send(vcard);
}
